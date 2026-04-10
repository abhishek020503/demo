"use client";

import {
  Activity,
  Droplets,
  Flame,
  Leaf,
  Thermometer,
  Waves,
} from "lucide-react";
import {
  EMPLOYEE_EXCRETORY_HEALTH,
  EMPLOYEE_METABOLIC_HEALTH,
} from "./data";

const METABOLIC_ICONS = {
  Agni: Flame,
  Ama: Leaf,
  Koshta: Activity,
  Mutra: Droplets,
  Sweda: Thermometer,
  Purisha: Waves,
} as const;

function getStatusTone(status: string) {
  if (status === "Stable" || status === "Mostly Regular") {
    return "bg-emerald-50 text-emerald-700 ring-emerald-200";
  }

  if (status === "Mild Load" || status === "Stress Reactive" || status === "Watch") {
    return "bg-amber-50 text-amber-700 ring-amber-200";
  }

  return "bg-sky-50 text-sky-700 ring-sky-200";
}

export default function EmployeeMetabolicHealthPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-[1.8rem] border border-slate-200 bg-[linear-gradient(135deg,#fefce8_0%,#eefbf4_48%,#eef6ff_100%)] p-5 shadow-sm md:p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Employee Metabolic Health
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
              Metabolic And Excretory Pattern
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
              Employee-owned view of metabolic rhythm and excretory balance, separated from the
              patient dashboard so you can change it independently.
            </p>
          </div>
          <div className="grid min-w-[220px] gap-3 sm:grid-cols-2">
            <MetricCard label="Metabolic Nodes" value="3" tone="teal" />
            <MetricCard label="Mala Nodes" value="3" tone="amber" />
          </div>
        </div>
      </section>

      <SectionBlock
        code="7.1"
        title="Metabolic Health"
        subtitle="Agni, Ama, Koshta"
        items={EMPLOYEE_METABOLIC_HEALTH}
      />

      <SectionBlock
        code="7.2"
        title="Excretory Health [Mala]"
        subtitle="Mutra, Sweda, Purisha"
        items={EMPLOYEE_EXCRETORY_HEALTH}
      />
    </div>
  );
}

function SectionBlock({
  code,
  title,
  subtitle,
  items,
}: {
  code: string;
  title: string;
  subtitle: string;
  items: readonly {
    code: string;
    title: keyof typeof METABOLIC_ICONS;
    status: string;
    summary: string;
    findings: readonly string[];
  }[];
}) {
  return (
    <section className="rounded-[1.6rem] border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
            {code}
          </p>
          <h3 className="mt-1 text-2xl font-semibold text-slate-900">{title}</h3>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
          {subtitle}
        </span>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        {items.map((item) => {
          const Icon = METABOLIC_ICONS[item.title];

          return (
            <article key={item.code} className="rounded-[1.4rem] border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                      {item.code}
                    </p>
                    <h4 className="text-lg font-semibold text-slate-900">{item.title}</h4>
                  </div>
                </div>
                <span className={`rounded-full px-3 py-1 text-[11px] font-semibold ring-1 ${getStatusTone(item.status)}`}>
                  {item.status}
                </span>
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-700">{item.summary}</p>

              <div className="mt-4 space-y-2">
                {item.findings.map((finding) => (
                  <div
                    key={finding}
                    className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm leading-6 text-slate-700"
                  >
                    {finding}
                  </div>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function MetricCard({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "teal" | "amber";
}) {
  const toneClass =
    tone === "amber"
      ? "border-amber-200 bg-amber-50 text-amber-800"
      : "border-teal-200 bg-teal-50 text-teal-800";

  return (
    <div className={`rounded-2xl border px-4 py-3 ${toneClass}`}>
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em]">{label}</p>
      <p className="mt-1 text-2xl font-semibold">{value}</p>
    </div>
  );
}
