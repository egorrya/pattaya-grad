"use client";

import * as React from "react";

import { buttonVariants } from "@/components/ui/button";
import { ArrowUpRightSquareIcon, PenLineIcon, TrashIcon } from "lucide-react";
import { LandingContentForm } from "@/components/pages/LandingContentForm";
import type { LandingContentPayload } from "@/lib/landing";
import {
  buildLandingFormPayload,
  defaultLandingFormState,
  normalizeToLandingFormState,
  type LandingFormState,
} from "@/lib/landingForm";

type LandingPageRecord = LandingContentPayload & {
  id: string;
  urlPath: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

type LandingPageFormState = LandingFormState & {
  urlPath: string;
};

type LandingListResponse =
  | { ok: true; data: LandingPageRecord[] }
  | { ok: false; error?: string };

type LandingDetailResponse =
  | { ok: true; data: LandingPageRecord }
  | { ok: false; error?: string };

const emptyFormState: LandingPageFormState = {
  ...defaultLandingFormState,
  urlPath: "",
};

const landingRecordToFormState = (record: LandingPageRecord): LandingPageFormState => ({
  ...normalizeToLandingFormState(record),
  defaultLandingName:
    record.defaultLandingName ?? defaultLandingFormState.defaultLandingName,
  urlPath: record.urlPath,
});

const formatDate = (value: string) =>
  new Date(value).toLocaleString("ru-RU", {
    dateStyle: "short",
    timeStyle: "short",
  });

export default function AdminLandingManager() {
  const [landings, setLandings] = React.useState<LandingPageRecord[]>([]);
  const [listLoading, setListLoading] = React.useState(true);
  const [listError, setListError] = React.useState<string | null>(null);
  const [formState, setFormState] = React.useState<LandingPageFormState>(() => emptyFormState);
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const [isSaving, setIsSaving] = React.useState(false);
  const [status, setStatus] = React.useState<{ kind: "success" | "error"; message: string } | null>(null);
  const [deletingId, setDeletingId] = React.useState<string | null>(null);
  const [landingName, setLandingName] = React.useState("");
  const [isEditingLanding, setIsEditingLanding] = React.useState(false);
  const [autoSelectEnabled, setAutoSelectEnabled] = React.useState(true);

  const loadLandings = React.useCallback(async () => {
    try {
      setListLoading(true);
      setListError(null);
      const response = await fetch("/api/admin/landings");
      const payload = (await response.json()) as LandingListResponse;

      if (!response.ok) {
        throw new Error("Не удалось загрузить лендинги");
      }

      if (!payload.ok) {
        throw new Error(payload.error ?? "Не удалось загрузить лендинги");
      }

      setLandings(payload.data);
    } catch (error) {
      setListError(error instanceof Error ? error.message : "Не удалось загрузить лендинги");
    } finally {
      setListLoading(false);
    }
  }, []);

  React.useEffect(() => {
    loadLandings();
  }, [loadLandings]);

  const handleSelectLanding = (landing: LandingPageRecord) => {
    setSelectedId(landing.id);
    setFormState(landingRecordToFormState(landing));
    setStatus(null);
    setLandingName(landing.name);
    setIsEditingLanding(true);
    setAutoSelectEnabled(false);
  };

  const handleResetForm = () => {
    setSelectedId(null);
    setFormState(emptyFormState);
    setStatus(null);
    setLandingName("");
    setIsEditingLanding(false);
    setAutoSelectEnabled(false);
    setStatus({ kind: "success", message: "Создание нового лендинга" });
  };

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
      const body = {
        ...buildLandingFormPayload(formState),
        urlPath: formState.urlPath.trim(),
        name: landingName.trim(),
      };
      const endpoint = selectedId ? `/api/admin/landings/${selectedId}` : "/api/admin/landings";
      const method = selectedId ? "PATCH" : "POST";
      const response = await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const payload = (await response.json()) as LandingDetailResponse;

      if (!response.ok) {
        throw new Error("Не удалось сохранить лендинг");
      }

      if (!payload.ok) {
        throw new Error(payload.error ?? "Не удалось сохранить лендинг");
      }

      setFormState(landingRecordToFormState(payload.data));
      setSelectedId(payload.data.id);
      setStatus({
        kind: "success",
        message: selectedId ? "Лендинг обновлен" : "Лендинг создан",
      });
      setLandingName(payload.data.name);
      await loadLandings();
    } catch (error) {
      setStatus({
        kind: "error",
        message: error instanceof Error ? error.message : "Не удалось сохранить лендинг",
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async (landing: LandingPageRecord) => {
    if (!window.confirm("Удалить лендинг? Это действие нельзя будет отменить.")) {
      return;
    }
    setDeletingId(landing.id);
    setStatus(null);
    try {
      const response = await fetch(`/api/admin/landings/${landing.id}`, {
        method: "DELETE",
      });
      const payload = await response.json();

      if (!response.ok || !payload.ok) {
        throw new Error(payload?.error ?? "Не удалось удалить лендинг");
      }

      setStatus({ kind: "success", message: "Лендинг удален" });
      if (selectedId === landing.id) {
        handleResetForm();
      }
      await loadLandings();
    } catch (error) {
      setStatus({
        kind: "error",
        message: error instanceof Error ? error.message : "Не удалось удалить лендинг",
      });
    } finally {
      setDeletingId(null);
    }
  };

  const urlFieldHelper =
    formState.urlPath.length > 0
      ? `Будет доступен по /${formState.urlPath}`
      : "Сегмент URL: латинские буквы, цифры и дефисы.";

  React.useEffect(() => {
    if (!selectedId && landings.length > 0 && autoSelectEnabled) {
      handleSelectLanding(landings[0]);
    }
  }, [landings, selectedId, autoSelectEnabled]);

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.5em] text-slate-400">Дополнительные лендинги</p>
            <h1 className="text-2xl font-semibold text-slate-900">Управление страницами</h1>
            <p className="text-sm text-slate-600">
              Создавайте, редактируйте или удаляйте лендинги. Каждый добавляется под /{`{url}`}.
            </p>
          </div>
          <button
            type="button"
            onClick={handleResetForm}
            className={`${buttonVariants({ variant: "outline" })} mt-2 text-xs uppercase tracking-[0.3em]`}
          >
            Новый лендинг
          </button>
        </div>
        <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
          <section className="space-y-3 rounded-2xl border border-slate-100 bg-slate-50 p-4">
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Лендинги</p>
              <span className="text-xs font-semibold text-slate-700">{landings.length} шт.</span>
            </div>
            {listLoading && <p className="text-sm text-slate-500">Загрузка...</p>}
            {listError && <p className="text-sm text-rose-500">{listError}</p>}
            {!listLoading && landings.length === 0 && (
              <p className="text-sm text-slate-500">Пока нет лендингов</p>
            )}
            <div className="space-y-3">
              {landings.map((landing) => (
                <div
                  key={landing.id}
                  className={`rounded-2xl border p-4 text-sm ${
                    selectedId === landing.id
                      ? "border-slate-900 bg-white shadow"
                      : "border-slate-200 bg-white/80"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                        /{landing.urlPath}
                      </p>
                      <p className="font-semibold text-slate-900">{landing.headerPhrase}</p>
                      <p className="text-[11px] text-slate-500">
                        Создан {formatDate(landing.createdAt)}
                      </p>
                    </div>
                    <div className="flex flex-col items-center gap-2 text-right">
                      <a
                        className="rounded-full border border-slate-200 p-2 text-slate-500 transition hover:border-slate-900 hover:text-slate-900 cursor-pointer"
                        href={`/${landing.urlPath}`}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Открыть лендинг в новой вкладке"
                      >
                        <ArrowUpRightSquareIcon className="size-4" />
                      </a>
                      <button
                        type="button"
                        className="cursor-pointer rounded-full border border-slate-200 p-2 text-slate-500 transition hover:border-slate-900 hover:text-slate-900"
                        onClick={() => handleSelectLanding(landing)}
                        aria-label="Редактировать лендинг"
                      >
                        <PenLineIcon className="size-4" />
                      </button>
                      <button
                        type="button"
                        disabled={deletingId === landing.id}
                        onClick={() => handleDelete(landing)}
                        className="cursor-pointer rounded-full border border-slate-200 p-2 text-rose-500 transition hover:border-rose-500 hover:text-rose-500 disabled:opacity-50"
                        aria-label="Удалить лендинг"
                      >
                        <TrashIcon className="size-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section>
            <LandingContentForm
              formState={formState}
              isLoading={false}
              isSaving={isSaving}
              status={status}
              onSubmit={handleSubmit}
              onChange={handleChange}
              mode={isEditingLanding ? "edit" : "create"}
              landingNameField={{
                helper: "Будет отображаться в таблице лидов и ссылках.",
                value: landingName,
                onChange: (value) => setLandingName(value),
              }}
              urlPathField={{
                label: "URL лендинга",
                helper: urlFieldHelper,
                value: formState.urlPath,
                onChange: (value) => setFormState((prev) => ({ ...prev, urlPath: value })),
              }}
              submitLabel="Сохранить лендинг"
              savingLabel="Сохраняем..."
              description="Настройки отдельного лендинга"
            />
          </section>
        </div>
      </div>
    </div>
  );
}
