"use client"

import { type ReactNode } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  Sidebar,
  SidebarContent,
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
} from "@/components/ui/sidebar"

const NAV_ITEMS = [
  { label: "На лендинг", href: "/" },
  { label: "Заявки", href: "/admin/leads" },
  { label: "Редактирование", href: "/admin/edit" },
] as const

export function AdminShell({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  const pathname = usePathname() ?? "/"

  return (
    <SidebarProvider defaultOpen>
      <div className="flex min-h-screen w-screen max-w-full bg-slate-50 text-slate-900">
        <Sidebar className="bg-white border-none md:border-r md:border-slate-200">
          <SidebarContent className="px-6 py-10">
            <SidebarMenu className="space-y-1">
              {NAV_ITEMS.map((item) => {
                const isActive =
                  item.href === "/admin/leads"
                    ? pathname.startsWith("/admin/leads")
                    : pathname === item.href

                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      tooltip={item.label}
                    >
                      <Link className="w-full cursor-pointer" href={item.href}>
                        {item.label}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
        <SidebarInset className="flex-1 bg-slate-50 p-8 max-w-full">{children}</SidebarInset>
      </div>
    </SidebarProvider>
  )
}
