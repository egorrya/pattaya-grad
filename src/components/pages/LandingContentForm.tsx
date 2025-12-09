"use client";

import * as React from "react";

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { buttonVariants } from "@/components/ui/button";
import type { LandingFormState } from "@/lib/landingForm";

type UrlPathField = {
  label?: string;
  helper?: string;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
};

type LandingNameField = {
  label?: string;
  helper?: string;
  value: string;
  onChange: (value: string) => void;
};

type DefaultLandingNameField = {
  label?: string;
  helper?: string;
  value: string;
  onChange: (value: string) => void;
};

type LandingContentFormProps = {
  formState: LandingFormState;
  isLoading: boolean;
  isSaving: boolean;
  status: { kind: "success" | "error"; message: string } | null;
  loadError?: string | null;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onChange: <K extends keyof LandingFormState>(field: K, value: LandingFormState[K]) => void;
  urlPathField?: UrlPathField;
  landingNameField?: LandingNameField;
  defaultLandingNameField?: DefaultLandingNameField;
  mode?: "create" | "edit";
  title?: string;
  description?: string;
  submitLabel?: string;
  savingLabel?: string;
};

export function LandingContentForm({
  formState,
  isLoading,
  isSaving,
  status,
  loadError,
  onSubmit,
  onChange,
  landingNameField,
  defaultLandingNameField,
  urlPathField,
  title,
  description,
  submitLabel = "Сохранить изменения",
  savingLabel = "Сохраняем...",
  mode = "create",
}: LandingContentFormProps) {
  const handleChange = <K extends keyof LandingFormState>(
    field: K,
    value: LandingFormState[K],
  ) => {
    onChange(field, value);
  };

  return (
    <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-10 text-left text-sm text-slate-700 shadow-sm">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
          {mode === "edit" ? "Редактирование лендинга" : "Создание лендинга"}
        </p>
        <h1 className="text-2xl font-semibold text-slate-900">{title ?? "Контент"}</h1>
        {description && <p className="text-slate-700">{description}</p>}
      </div>
      {loadError && (
        <div className="rounded-xl border border-rose-100 bg-rose-50 px-4 py-3 text-sm text-rose-700">
          {loadError}
        </div>
      )}
      <form onSubmit={onSubmit} className="space-y-6">
        {defaultLandingNameField && (
          <label className="text-xs font-semibold text-slate-700">
            {defaultLandingNameField.label ?? "Название главной страницы"}
            <Input
              name="defaultLandingName"
              value={defaultLandingNameField.value}
              disabled={isLoading}
              onChange={(event) => defaultLandingNameField.onChange(event.target.value)}
            />
            {defaultLandingNameField.helper && (
              <p className="text-[11px] text-slate-500">{defaultLandingNameField.helper}</p>
            )}
          </label>
        )}
        {landingNameField && (
          <label className="text-xs font-semibold text-slate-700">
            {landingNameField.label ?? "Название лендинга"}
            <Input
              name="landingName"
              value={landingNameField.value}
              disabled={isLoading}
              onChange={(event) => landingNameField.onChange(event.target.value)}
            />
            {landingNameField.helper && (
              <p className="text-[11px] text-slate-500">{landingNameField.helper}</p>
            )}
          </label>
        )}
        {urlPathField && (
          <label className="text-xs font-semibold text-slate-700">
            {urlPathField.label ?? "URL лендинга"}
            <Input
              name="urlPath"
              value={urlPathField.value}
              disabled={isLoading || urlPathField.disabled}
              onChange={(event) => urlPathField.onChange(event.target.value)}
            />
            {urlPathField.helper && (
              <p className="text-[11px] text-slate-500">{urlPathField.helper}</p>
            )}
          </label>
        )}
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
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            Telegram-уведомления
          </p>
          <label className="text-xs font-semibold text-slate-700">
            Bot Token
            <Input
              name="telegramBotToken"
              value={formState.telegramBotToken}
              disabled={isLoading}
              onChange={(event) => handleChange("telegramBotToken", event.target.value)}
            />
          </label>
          <label className="text-xs font-semibold text-slate-700">
            Chat IDs (через запятую или с новой строки)
            <Textarea
              name="telegramChatIds"
              value={formState.telegramChatIds}
              disabled={isLoading}
              onChange={(event) => handleChange("telegramChatIds", event.target.value)}
              rows={3}
              className="text-sm text-slate-900"
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
              onCheckedChange={(value) => handleChange("whatsappEnabled", value === true)}
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
              onCheckedChange={(value) => handleChange("telegramEnabled", value === true)}
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
              isSaving ? "opacity-80 cursor-wait" : ""
            }`}
          >
            {isSaving ? savingLabel : submitLabel}
          </button>
          {status && (
            <p
              className={`text-sm ${
                status.kind === "success" ? "text-emerald-600" : "text-rose-500"
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
