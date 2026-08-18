"use client";

import * as React from "react";

import { AdminShell } from "@/components/pages/AdminShell";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type QuizBotSettings = {
  enabled: boolean;
  welcomeMessage: string;
  startButtonLabel: string;
  completionMessage: string;
  managerContactUrl: string | null;
  channelUrl: string | null;
};

type BotInfo = {
  botUsername: string | null;
  tokenConfigured: boolean;
  webhookSecretConfigured: boolean;
};

type SettingsResponse =
  | { ok: true; data: QuizBotSettings; bot: BotInfo }
  | { ok: false; error?: string };

type WebhookInfo = {
  url?: string;
  pending_update_count?: number;
  last_error_date?: number;
  last_error_message?: string;
};

type WebhookStatusResponse =
  | { ok: true; expectedUrl: string; webhookInfo: WebhookInfo }
  | { ok: false; error?: string };

type WebhookSetResponse =
  | { ok: true; webhookUrl: string }
  | { ok: false; error?: string };

const emptySettings: QuizBotSettings = {
  enabled: true,
  welcomeMessage: "",
  startButtonLabel: "",
  completionMessage: "",
  managerContactUrl: null,
  channelUrl: null,
};

export default function AdminQuizBotPage() {
  const [formState, setFormState] = React.useState<QuizBotSettings>(emptySettings);
  const [botInfo, setBotInfo] = React.useState<BotInfo | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isSaving, setIsSaving] = React.useState(false);
  const [status, setStatus] =
    React.useState<{ kind: "success" | "error"; message: string } | null>(null);
  const [loadError, setLoadError] = React.useState<string | null>(null);

  const [webhookStatus, setWebhookStatus] =
    React.useState<{ kind: "success" | "error"; message: string } | null>(null);
  const [isCheckingWebhook, setIsCheckingWebhook] = React.useState(false);
  const [isSettingWebhook, setIsSettingWebhook] = React.useState(false);
  const [webhookInfo, setWebhookInfo] = React.useState<WebhookInfo | null>(null);

  const loadSettings = React.useCallback(async () => {
    try {
      setIsLoading(true);
      setLoadError(null);
      const response = await fetch("/api/admin/quiz-bot");
      const payload = (await response.json()) as SettingsResponse;

      if (!response.ok || !payload.ok) {
        throw new Error(
          (!payload.ok && payload.error) || "Не удалось загрузить настройки квиз-бота",
        );
      }

      setFormState(payload.data);
      setBotInfo(payload.bot);
    } catch (error) {
      setLoadError(
        error instanceof Error ? error.message : "Не удалось загрузить настройки квиз-бота",
      );
    } finally {
      setIsLoading(false);
    }
  }, []);

  React.useEffect(() => {
    loadSettings();
  }, [loadSettings]);

  const handleChange = <K extends keyof QuizBotSettings>(field: K, value: QuizBotSettings[K]) => {
    setStatus(null);
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSaving(true);
    setStatus(null);

    try {
      const response = await fetch("/api/admin/quiz-bot", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      const result = (await response.json()) as SettingsResponse;

      if (!response.ok || !result.ok) {
        throw new Error((!result.ok && result.error) || "Не удалось сохранить настройки");
      }

      setFormState(result.data);
      setBotInfo(result.bot);
      setStatus({ kind: "success", message: "Настройки сохранены" });
    } catch (error) {
      setStatus({
        kind: "error",
        message: error instanceof Error ? error.message : "Не удалось сохранить настройки",
      });
    } finally {
      setIsSaving(false);
    }
  };

  const checkWebhook = async () => {
    setIsCheckingWebhook(true);
    setWebhookStatus(null);
    try {
      const response = await fetch("/api/admin/quiz-bot/set-webhook");
      const result = (await response.json()) as WebhookStatusResponse;

      if (!response.ok || !result.ok) {
        throw new Error((!result.ok && result.error) || "Не удалось проверить вебхук");
      }

      setWebhookInfo(result.webhookInfo);
      const isActive = result.webhookInfo.url === result.expectedUrl;
      setWebhookStatus({
        kind: isActive ? "success" : "error",
        message: isActive
          ? "Вебхук настроен и указывает на этот сайт"
          : `Вебхук не совпадает с ожидаемым URL (${result.expectedUrl})`,
      });
    } catch (error) {
      setWebhookStatus({
        kind: "error",
        message: error instanceof Error ? error.message : "Не удалось проверить вебхук",
      });
    } finally {
      setIsCheckingWebhook(false);
    }
  };

  const setWebhook = async () => {
    setIsSettingWebhook(true);
    setWebhookStatus(null);
    try {
      const response = await fetch("/api/admin/quiz-bot/set-webhook", { method: "POST" });
      const result = (await response.json()) as WebhookSetResponse;

      if (!response.ok || !result.ok) {
        throw new Error((!result.ok && result.error) || "Не удалось установить вебхук");
      }

      setWebhookStatus({ kind: "success", message: `Вебхук установлен: ${result.webhookUrl}` });
      await checkWebhook();
    } catch (error) {
      setWebhookStatus({
        kind: "error",
        message: error instanceof Error ? error.message : "Не удалось установить вебхук",
      });
    } finally {
      setIsSettingWebhook(false);
    }
  };

  return (
    <AdminShell>
      <div className="flex w-full flex-col gap-6">
        <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-10 text-left text-sm text-slate-700 shadow-sm">
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold text-slate-900">Telegram квиз-бот</h1>
          </div>

          <div className="grid gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600 md:grid-cols-3">
            <div>
              <p className="font-semibold text-slate-500">Username бота</p>
              <p className="text-slate-900">
                {botInfo?.botUsername ? `@${botInfo.botUsername}` : "—"}
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-500">Токен в .env</p>
              <p className={botInfo?.tokenConfigured ? "text-emerald-600" : "text-rose-500"}>
                {botInfo?.tokenConfigured ? "Настроен" : "Не найден"}
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-500">Секрет вебхука в .env</p>
              <p className={botInfo?.webhookSecretConfigured ? "text-emerald-600" : "text-rose-500"}>
                {botInfo?.webhookSecretConfigured ? "Настроен" : "Не найден"}
              </p>
            </div>
          </div>

          {loadError && (
            <div className="rounded-xl border border-rose-100 bg-rose-50 px-4 py-3 text-sm text-rose-700">
              {loadError}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex items-center gap-3">
              <Checkbox
                id="quiz-bot-enabled"
                checked={formState.enabled}
                disabled={isLoading}
                onCheckedChange={(value) => handleChange("enabled", value === true)}
              />
              <label htmlFor="quiz-bot-enabled" className="font-semibold text-slate-700">
                Модуль включён
              </label>
            </div>

            <label className="block text-xs font-semibold text-slate-700">
              Стартовое сообщение
              <Textarea
                value={formState.welcomeMessage}
                disabled={isLoading}
                onChange={(event) => handleChange("welcomeMessage", event.target.value)}
                rows={3}
                className="text-sm text-slate-900"
              />
              <p className="mt-1 text-[11px] text-slate-500">
                Отправляется при первом сообщении (или /start), вместе с кнопкой ниже. Первый
                вопрос (город) бот задаёт только после нажатия этой кнопки.
              </p>
            </label>

            <label className="block text-xs font-semibold text-slate-700">
              Текст кнопки старта опроса
              <Input
                value={formState.startButtonLabel}
                disabled={isLoading}
                onChange={(event) => handleChange("startButtonLabel", event.target.value)}
              />
            </label>

            <label className="block text-xs font-semibold text-slate-700">
              Сообщение после завершения опроса
              <Textarea
                value={formState.completionMessage}
                disabled={isLoading}
                onChange={(event) => handleChange("completionMessage", event.target.value)}
                rows={3}
                className="text-sm text-slate-900"
              />
            </label>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="block text-xs font-semibold text-slate-700">
                Ссылка «Связаться с менеджером»
                <Input
                  value={formState.managerContactUrl ?? ""}
                  disabled={isLoading}
                  placeholder="https://t.me/username"
                  onChange={(event) =>
                    handleChange("managerContactUrl", event.target.value || null)
                  }
                />
              </label>
              <label className="block text-xs font-semibold text-slate-700">
                Ссылка «Перейти в канал Pattaya Grad»
                <Input
                  value={formState.channelUrl ?? ""}
                  disabled={isLoading}
                  placeholder="https://t.me/channel"
                  onChange={(event) => handleChange("channelUrl", event.target.value || null)}
                />
              </label>
            </div>
            <p className="text-[11px] text-slate-500">
              Кнопки под финальным сообщением показываются только для заполненных ссылок.
            </p>

            <div className="space-y-3 border-t border-slate-200 pt-4">
              <button
                type="submit"
                disabled={isLoading || isSaving}
                className={cn(
                  buttonVariants(),
                  "w-full justify-center",
                  isSaving && "opacity-80 cursor-wait",
                )}
              >
                {isSaving ? "Сохраняем..." : "Сохранить изменения"}
              </button>
              {status && (
                <p
                  className={cn(
                    "text-sm",
                    status.kind === "success" ? "text-emerald-600" : "text-rose-500",
                  )}
                >
                  {status.message}
                </p>
              )}
            </div>
          </form>
        </div>

        <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-10 text-left text-sm text-slate-700 shadow-sm">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-slate-900">Вебхук Telegram</h2>
            <p className="text-slate-700">
              Чтобы бот начал получать сообщения, Telegram должен знать адрес вебхука этого
              сайта. Нажмите «Установить вебхук» один раз после деплоя (или после смены домена).
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={checkWebhook}
              disabled={isCheckingWebhook || isSettingWebhook}
              className={cn(
                buttonVariants({ variant: "outline" }),
                isCheckingWebhook && "opacity-80 cursor-wait",
              )}
            >
              {isCheckingWebhook ? "Проверяем..." : "Проверить статус"}
            </button>
            <button
              type="button"
              onClick={setWebhook}
              disabled={isCheckingWebhook || isSettingWebhook}
              className={cn(buttonVariants(), isSettingWebhook && "opacity-80 cursor-wait")}
            >
              {isSettingWebhook ? "Устанавливаем..." : "Установить вебхук"}
            </button>
          </div>

          {webhookStatus && (
            <p
              className={cn(
                "text-sm",
                webhookStatus.kind === "success" ? "text-emerald-600" : "text-rose-500",
              )}
            >
              {webhookStatus.message}
            </p>
          )}

          {webhookInfo && (
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600">
              <p>
                <span className="font-semibold text-slate-500">URL: </span>
                {webhookInfo.url || "—"}
              </p>
              <p>
                <span className="font-semibold text-slate-500">Необработанных обновлений: </span>
                {webhookInfo.pending_update_count ?? 0}
              </p>
              {webhookInfo.last_error_message && (
                <p className="text-rose-500">
                  <span className="font-semibold">Последняя ошибка: </span>
                  {webhookInfo.last_error_message}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </AdminShell>
  );
}
