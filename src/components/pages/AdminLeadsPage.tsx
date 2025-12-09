"use client"

import * as React from "react"

import { AdminShell } from "@/components/pages/AdminShell"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils"

type Channel = "whatsapp" | "telegram"
type ChannelFilter = Channel | "all"

const DEFAULT_LANDING_NAME = "Главная страница";

type Lead = {
  id: string
  channel: Channel
  contact: string
  createdAt: string
  ipAddress: string | null
  country: string | null
  landingName: string | null
}

type LeadsResponse =
  | {
      ok: true
      data: Lead[]
      meta: {
        limit: number
        page: number
        total: number
        totalPages: number
      }
    }
  | {
      ok: false
      error: string
    }

const CHANNELS: ChannelFilter[] = ["all", "whatsapp", "telegram"]
const CHANNEL_LABELS: Record<ChannelFilter, string> = {
  whatsapp: "WhatsApp",
  telegram: "Telegram",
  all: "Все",
}
const LIMIT = 50

export default function AdminLeadsPage() {
  const [channel, setChannel] = React.useState<ChannelFilter>("all")
  const [page, setPage] = React.useState(1)
  const [response, setResponse] = React.useState<LeadsResponse | null>(null)
  const [isLoading, setIsLoading] = React.useState(true)
  const [error, setError] = React.useState<string | null>(null)

  React.useEffect(() => {
    let isActive = true
    const controller = new AbortController()

    setIsLoading(true)
    setError(null)

    const params = new URLSearchParams({
      limit: String(LIMIT),
      page: String(page),
    })
    if (channel !== "all") {
      params.set("channel", channel)
    }

    fetch(`/api/lead?${params.toString()}`, {
      signal: controller.signal,
    })
      .then(async (res) => {
        if (!res.ok) {
          throw new Error("Не удалось загрузить заявки")
        }
        return (await res.json()) as LeadsResponse
      })
      .then((payload) => {
        if (!isActive) {
          return
        }
        if (!payload.ok) {
          setError(payload.error || "Не удалось загрузить заявки")
        } else {
          setResponse(payload)
        }
      })
      .catch((fetchError) => {
        if (!isActive) {
          return
        }
        if (fetchError instanceof Error && fetchError.name === "AbortError") {
          return
        }
        setError(fetchError?.message ?? "Не удалось загрузить заявки")
      })
      .finally(() => {
        if (isActive) {
          setIsLoading(false)
        }
      })

    return () => {
      isActive = false
      controller.abort()
    }
  }, [channel, page])

  const leads = response?.ok ? response.data : []
  const meta = response?.ok ? response.meta : null
  const totalPages = Math.max(1, meta?.totalPages ?? 1)

  const visiblePages = React.useMemo(() => {
    const windowSize = 5
    const halfWindow = Math.floor(windowSize / 2)
    let startPage = Math.max(1, page - halfWindow)
    const endPage = Math.min(totalPages, startPage + windowSize - 1)
    startPage = Math.max(1, endPage - windowSize + 1)

    const pages: number[] = []
    for (let current = startPage; current <= endPage; current += 1) {
      pages.push(current)
    }
    return pages
  }, [page, totalPages])

  const goToPage = (target: number) => {
    setPage(Math.min(Math.max(target, 1), totalPages))
  }

  const channelLabel = CHANNEL_LABELS[channel]

  const metaSummary =
    meta && meta.total
      ? `Всего заявок: ${meta.total} · ${channel === "all" ? "Все каналы" : channelLabel
        } · Показывается страница ${meta.page} из ${totalPages}`
      : "Заявок пока нет"

  const buildContactLink = (lead: Lead) => {
    if (lead.channel === "whatsapp") {
      const digitsOnly = lead.contact.replace(/\D/g, "");
      if (!digitsOnly) {
        return null
      }
      return `https://wa.me/${digitsOnly}`
    }

    if (lead.channel === "telegram") {
      const handle = lead.contact.trim().replace(/^@+/, "")
      if (!handle) {
        return null
      }
      return `https://t.me/${handle}`
    }

    return null
  }

  return (
    <AdminShell>
      <div className="flex w-full flex-col gap-6">
        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
            Лиды
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {CHANNELS.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => {
                  setChannel(option)
                  setPage(1)
                }}
                className={cn(
                  "rounded-full px-4 py-2 text-xs font-semibold transition-all duration-150 cursor-pointer",
                  channel === option
                    ? "bg-slate-900 text-white shadow-lg shadow-slate-900/30"
                    : "bg-white text-slate-700 hover:bg-slate-100"
                )}
              >
                {CHANNEL_LABELS[option]}
              </button>
            ))}
            <span className="text-xs text-slate-500">{metaSummary}</span>
          </div>
        </div>

        <div className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Лендинг</TableHead>
                <TableHead>Тип связи</TableHead>
                <TableHead>Дата</TableHead>
                <TableHead>IP</TableHead>
                <TableHead>Страна</TableHead>
                <TableHead>Контакт</TableHead>
                <TableHead>Ссылка</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell
                    colSpan={7}
                    className="py-6 text-center text-sm text-slate-500"
                  >
                    Загрузка заявок...
                  </TableCell>
                </TableRow>
              ) : error ? (
                <TableRow>
                  <TableCell
                    colSpan={7}
                    className="py-6 text-center text-sm text-rose-500"
                  >
                    {error}
                  </TableCell>
                </TableRow>
              ) : leads.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={7}
                    className="py-6 text-center text-sm text-slate-500"
                  >
                    Заявок пока нет
                  </TableCell>
                </TableRow>
              ) : (
                leads.map((lead) => {
                  const link = buildContactLink(lead)

                  return (
                    <TableRow key={lead.id}>
                      <TableCell className="font-semibold">
                        {lead.landingName ?? DEFAULT_LANDING_NAME}
                      </TableCell>
                      <TableCell className="font-semibold">
                        {CHANNEL_LABELS[lead.channel]}
                      </TableCell>
                      <TableCell>
                        {new Date(lead.createdAt).toLocaleString("ru-RU", {
                          dateStyle: "short",
                          timeStyle: "short",
                        })}
                      </TableCell>
                      <TableCell>{lead.ipAddress ?? "—"}</TableCell>
                      <TableCell>{lead.country ?? "—"}</TableCell>
                      <TableCell>{lead.contact}</TableCell>
                      <TableCell>
                        {link ? (
                          <a
                            href={link}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm font-semibold text-slate-900 underline-offset-4 transition hover:text-slate-700 hover:underline cursor-pointer"
                          >
                            Открыть
                          </a>
                        ) : (
                          <span className="text-sm text-slate-500">—</span>
                        )}
                      </TableCell>
                    </TableRow>
                  )
                })
              )}
            </TableBody>
          </Table>
        </div>

        {totalPages > 1 && (
          <Pagination className="mt-2">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  aria-disabled={page <= 1}
                  onClick={(event) => {
                    event.preventDefault()
                    goToPage(page - 1)
                  }}
                />
              </PaginationItem>
              {visiblePages.map((pageNumber) => (
                <PaginationItem key={pageNumber}>
                  <PaginationLink
                    href="#"
                    isActive={pageNumber === page}
                    onClick={(event) => {
                      event.preventDefault()
                      goToPage(pageNumber)
                    }}
                  >
                    {pageNumber}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  aria-disabled={page >= totalPages}
                  onClick={(event) => {
                    event.preventDefault()
                    goToPage(page + 1)
                  }}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </AdminShell>
  )
}
