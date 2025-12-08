"use client";

import * as React from "react";

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { buttonVariants } from "@/components/ui/button";
import {
  defaultLandingContent,
  LandingContentPayload,
} from "@/lib/landing";

type LandingFormState = Omit<LandingContentPayload, "heroImage"> & {
  heroImage: string;
  customScript: string;
  logoPath: string;
  notificationFrom: string;
};

const normalizeToFormState = (payload: LandingContentPayload): LandingFormState => ({
  ...payload,
  heroImage: payload.heroImage ?? "",
  customScript: payload.customScript ?? "",
  logoPath: payload.logoPath ?? "",
  notificationFrom: payload.notificationFrom ?? "",
});

const buildRequestPayload = (state: LandingFormState): LandingContentPayload => {
  const optimizedHeroImage = state.heroImage.trim();
  const optimizedScript = state.customScript.trim();
  const optimizedLogoPath = state.logoPath.trim();
  const optimizedNotificationFrom = state.notificationFrom.trim();
  return {
    ...state,
    heroImage: optimizedHeroImage === "" ? null : optimizedHeroImage,
    customScript: optimizedScript === "" ? null : optimizedScript,
    logoPath: optimizedLogoPath,
    notificationFrom: optimizedNotificationFrom,
  };
};

type LandingApiResponse =
  | { ok: true; data: LandingContentPayload }
  | { ok: false; error?: string };

export default function AdminLandingEditor() {
  const [formState, setFormState] =
    React.useState<LandingFormState>(() => normalizeToFormState(defaultLandingContent));
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

        setFormState(normalizeToFormState(payload.data));
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") {
          return;
        }
        setLoadError(
          error instanceof Error ? error.message : "Не удалось загрузить настройки лендинга",
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
      const payload = buildRequestPayload(formState);
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

      setFormState(normalizeToFormState(result.data));
      setStatus({ kind: "success", message: "Настройки сохранены" });
    } catch (error) {
      setStatus({
        kind: "error",
        message:
          error instanceof Error ? error.message : "Не удалось сохранить настройки лендинга",
      });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="mx-auto max-w-3xl space-y-6 rounded-3xl border border-slate-200 bg-white p-10 text-left text-sm text-slate-700 shadow-sm">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
          Редактирование лендинга
        </p>
        <h1 className="text-2xl font-semibold text-slate-900">Контент</h1>
        <p className="text-slate-700">
          Настройки синхронизируются с API лендинга. Изменения отображаются сразу после
          сохранения.
        </p>
      </div>
      {loadError && (
        <div className="rounded-xl border border-rose-100 bg-rose-50 px-4 py-3 text-sm text-rose-700">
          {loadError}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <label className="text-xs font-semibold text-slate-700">
            Короткая фраза в шапке
            <Input
              name="headerPhrase"
              value={formState.headerPhrase}
              disabled={isLoading}
              onChange={(event) => handleChange("headerPhrase", event.target.value)}
            />
          </label>
          <label className="text-xs font-semibold text-slate-700">
            Контакт на футере
            <Input
              name="contact"
              value={formState.contact}
              disabled={isLoading}
              onChange={(event) => handleChange("contact", event.target.value)}
            />
          </label>
        </div>

        <div className="space-y-4">
          <label className="text-xs font-semibold text-slate-700">
            Email для уведомлений
            <Input
              name="notificationEmail"
              value={formState.notificationEmail}
              disabled={isLoading}
              onChange={(event) => handleChange("notificationEmail", event.target.value)}
            />
          </label>
        </div>
        <div className="space-y-4">
          <label className="text-xs font-semibold text-slate-700">
            Email отправителя
            <Input
              name="notificationFrom"
              value={formState.notificationFrom}
              disabled={isLoading}
              onChange={(event) => handleChange("notificationFrom", event.target.value)}
            />
          </label>
        </div>

        <div className="space-y-4">
          <label className="block text-xs font-semibold text-slate-700">
            Заголовок героя
            <Input
              name="heroHeading"
              value={formState.heroHeading}
              disabled={isLoading}
              onChange={(event) => handleChange("heroHeading", event.target.value)}
            />
          </label>
          <label className="block text-xs font-semibold text-slate-700">
            Описание героя
            <Textarea
              name="heroDescription"
              value={formState.heroDescription}
              disabled={isLoading}
              onChange={(event) => handleChange("heroDescription", event.target.value)}
              rows={3}
              className="text-sm text-slate-900"
            />
          </label>
          <label className="block text-xs font-semibold text-slate-700">
            Текст поддержки
            <Input
              name="heroSupport"
              value={formState.heroSupport}
              disabled={isLoading}
              onChange={(event) => handleChange("heroSupport", event.target.value)}
            />
          </label>
          <label className="block text-xs font-semibold text-slate-700">
            Путь к изображению героя
            <Input
              name="heroImage"
              value={formState.heroImage}
              disabled={isLoading}
              onChange={(event) => handleChange("heroImage", event.target.value)}
            />
          </label>
          <label className="block text-xs font-semibold text-slate-700">
            Путь к логотипу
            <Input
              name="logoPath"
              value={formState.logoPath}
              disabled={isLoading}
              onChange={(event) => handleChange("logoPath", event.target.value)}
            />
          </label>
        </div>

        <div className="space-y-4">
          <label className="block text-xs font-semibold text-slate-700">
            Надпись на кнопке
            <Input
              name="buttonLabel"
              value={formState.buttonLabel}
              disabled={isLoading}
              onChange={(event) => handleChange("buttonLabel", event.target.value)}
            />
          </label>
          <label className="block text-xs font-semibold text-slate-700">
            Ссылка на видео
            <Input
              name="videoUrl"
              value={formState.videoUrl}
              disabled={isLoading}
              onChange={(event) => handleChange("videoUrl", event.target.value)}
            />
          </label>
          <label className="block text-xs font-semibold text-slate-700">
            Кастомный скрипт
            <Textarea
              name="customScript"
              value={formState.customScript}
              disabled={isLoading}
              onChange={(event) => handleChange("customScript", event.target.value)}
              rows={4}
              className="text-xs text-slate-900"
            />
            <p className="mt-2 text-[11px] text-slate-500">
              Скрипт встроится внутрь лендинга. Убедитесь, что код безопасен и работает без
              зависимостей.
            </p>
          </label>
        </div>

        <div className="space-y-4">
          <label className="block text-xs font-semibold text-slate-700">
            Заголовок следующего экрана
            <Input
              name="nextScreenTitle"
              value={formState.nextScreenTitle}
              disabled={isLoading}
              onChange={(event) => handleChange("nextScreenTitle", event.target.value)}
            />
          </label>
          <label className="block text-xs font-semibold text-slate-700">
            Подпись следующего экрана
            <Textarea
              name="nextScreenDescription"
              value={formState.nextScreenDescription}
              disabled={isLoading}
              onChange={(event) => handleChange("nextScreenDescription", event.target.value)}
              rows={3}
              className="text-sm text-slate-900"
            />
          </label>
          <label className="block text-xs font-semibold text-slate-700">
            Вопрос
            <Input
              name="nextScreenQuestion"
              value={formState.nextScreenQuestion}
              disabled={isLoading}
              onChange={(event) => handleChange("nextScreenQuestion", event.target.value)}
            />
          </label>
        </div>

        <div className="flex flex-wrap gap-6 border-t border-slate-200 pt-4 text-sm text-slate-700">
          <div className="flex items-center gap-3">
            <Checkbox
              id="switch-whatsapp"
              checked={formState.whatsappEnabled}
              disabled={isLoading}
              onCheckedChange={(value) =>
                handleChange("whatsappEnabled", value === true)
              }
            />
            <label htmlFor="switch-whatsapp" className="font-semibold text-slate-700">
              WhatsApp
            </label>
          </div>
          <div className="flex items-center gap-3">
            <Checkbox
              id="switch-telegram"
              checked={formState.telegramEnabled}
              disabled={isLoading}
              onCheckedChange={(value) =>
                handleChange("telegramEnabled", value === true)
              }
            />
            <label htmlFor="switch-telegram" className="font-semibold text-slate-700">
              Telegram
            </label>
          </div>
        </div>

        <div className="space-y-3 border-t border-slate-200 pt-4">
          <button
            type="submit"
            disabled={isLoading || isSaving}
            className={`${buttonVariants()} w-full justify-center ${
              isSaving ? 'opacity-80 cursor-wait' : ''
            }`}
          >
            {isSaving ? "Сохраняем..." : "Сохранить изменения"}
          </button>
          {status && (
            <p
              className={`text-sm ${
                status.kind === "success"
                  ? "text-emerald-600"
                  : "text-rose-500"
              }`}
            >
              {status.message}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
