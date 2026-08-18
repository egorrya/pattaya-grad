import { AdminShell } from "@/components/pages/AdminShell";

export default function AdminPage() {
  return (
    <AdminShell>
      <div className="mx-auto max-w-4xl space-y-6 rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
        <h1 className="text-3xl font-semibold text-slate-900">Admin workbench</h1>
        <p className="text-sm text-slate-600">
          Placeholder admin area. Integrate dashboards and mutators here once the data model is defined.
        </p>
      </div>
    </AdminShell>
  )
}
