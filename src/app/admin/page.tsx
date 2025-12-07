export default function AdminPage() {
  return (
    <div className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl space-y-6 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-10 text-center shadow-[0_40px_80px_rgba(0,0,0,0.45)]">
        <p className="text-sm uppercase tracking-[0.4em] text-indigo-300/80">Admin</p>
        <h1 className="text-3xl font-semibold">Admin workbench</h1>
        <p className="text-sm text-slate-300">
          Placeholder admin area. Integrate dashboards and mutators here once the data model is defined.
        </p>
      </div>
    </div>
  );
}
