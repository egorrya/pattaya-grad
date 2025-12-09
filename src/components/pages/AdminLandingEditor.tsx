"use client";

import * as React from "react";

import type { LandingContentPayload } from "@/lib/landing";
import {
  buildLandingFormPayload,
  defaultLandingFormState,
  normalizeToLandingFormState,
  type LandingFormState,
} from "@/lib/landingForm";
import { LandingContentForm } from "@/components/pages/LandingContentForm";

type LandingApiResponse =
  | { ok: true; data: LandingContentPayload }
  | { ok: false; error?: string };

export default function AdminLandingEditor() {
  const [formState, setFormState] =
    React.useState<LandingFormState>(() => defaultLandingFormState);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isSaving, setIsSaving] = React.useState(false);
  const [status, setStatus] =
    React.useState<{ kind: "success" | "error"; message: string } | null>(null);
  const [loadError, setLoadError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const controller = new AbortController();

    const fetchContent = async () => {
      try {
        setIsLoading(true);
        setLoadError(null);
        const response = await fetch("/api/admin/landing", {
          signal: controller.signal,
        });
        const payload = (await response.json()) as LandingApiResponse;

        if (!response.ok) {
          throw new Error("Не удалось загрузить настройки лендинга");
        }

        if (!payload.ok) {
          throw new Error(payload.error ?? "Не удалось загрузить настройки лендинга");
        }

        setFormState(normalizeToLandingFormState(payload.data));
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") {
          return;
        }
        setLoadError(
          error instanceof Error
            ? error.message
            : "Не удалось загрузить настройки лендинга",
        );
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    fetchContent();

    return () => {
      controller.abort();
    };
  }, []);

  const handleChange = <K extends keyof LandingFormState>(
    field: K,
    value: LandingFormState[K],
  ) => {
    setStatus(null);
    setFormState((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSaving(true);
    setStatus(null);

    try {
      const payload = buildLandingFormPayload(formState);
      const response = await fetch("/api/admin/landing", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as LandingApiResponse;

      if (!response.ok) {
        throw new Error("Не удалось сохранить настройки");
      }

      if (!result.ok) {
        throw new Error(result.error ?? "Не удалось сохранить настройки");
      }

      setFormState(normalizeToLandingFormState(result.data));
      setStatus({ kind: "success", message: "Настройки сохранены" });
    } catch (error) {
      setStatus({
        kind: "error",
        message:
          error instanceof Error
            ? error.message
            : "Не удалось сохранить настройки лендинга",
      });
    } finally {
      setIsSaving(false);
    }
  };

  return (
      <LandingContentForm
        formState={formState}
        isLoading={isLoading}
        isSaving={isSaving}
        status={status}
        loadError={loadError}
        onSubmit={handleSubmit}
        onChange={handleChange}
        defaultLandingNameField={{
          label: "Название главной страницы",
          helper: "Это имя будет использоваться в таблице заявок, когда лендинг не выбран.",
          value: formState.defaultLandingName,
          onChange: (value) => handleChange("defaultLandingName", value),
        }}
        description="Настройки синхронизируются с API лендинга. Изменения отображаются сразу после сохранения."
        mode="edit"
      />
  );
}
