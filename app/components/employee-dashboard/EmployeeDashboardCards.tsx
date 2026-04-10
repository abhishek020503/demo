import type { LucideIcon } from "lucide-react";

type Tone = "sky" | "rose" | "emerald" | "amber";

export function EmployeeHeroMetricCard({
  label,
  value,
  unit,
  tone,
}: {
  label: string;
  value: string;
  unit: string;
  tone: Tone;
}) {
  const toneClasses = {
    sky: "from-sky-100 to-white",
    rose: "from-rose-100 to-white",
    emerald: "from-emerald-100 to-white",
    amber: "from-amber-100 to-white",
  };

  return (
    <div className={`rounded-[1.25rem] border border-white/70 bg-gradient-to-br ${toneClasses[tone]} p-3.5`}>
      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">{label}</p>
      <div className="mt-3 flex items-end gap-2">
        <span className="text-2xl font-bold text-slate-900">{value}</span>
        <span className="pb-1 text-sm font-medium text-slate-500">{unit}</span>
      </div>
    </div>
  );
}

export function EmployeeMiniCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1rem] border border-white/70 bg-white/80 px-3 py-2.5">
      <p className="text-[10px] uppercase tracking-[0.14em] text-slate-500">{label}</p>
      <p className="mt-1 text-sm font-semibold text-slate-900">{value}</p>
    </div>
  );
}

export function EmployeeStatusStrip({
  label,
  value,
  detail,
  icon: Icon,
}: {
  label: string;
  value: string;
  detail: string;
  icon: LucideIcon;
}) {
  return (
    <div className="rounded-[1.2rem] border border-slate-200 bg-white p-3.5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
          <Icon size={18} />
        </div>
        <span className="text-lg font-bold text-slate-900">{value}</span>
      </div>
      <p className="mt-3 text-sm font-semibold text-slate-900">{label}</p>
      <p className="mt-1 text-xs leading-5 text-slate-500">{detail}</p>
    </div>
  );
}

export function EmployeeNarrativeCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-[1.2rem] border border-slate-200 bg-white p-3.5 shadow-sm">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">{title}</p>
      <p className="mt-2.5 text-sm leading-6 text-slate-700">{body}</p>
    </div>
  );
}
