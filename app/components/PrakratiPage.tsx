"use client";

import {
  Activity,
  Droplets,
  Flame,
  Leaf,
  Thermometer,
  Waves,
} from "lucide-react";

const METABOLIC_HEALTH = [
  {
    code: "7.1.1",
    title: "Agni",
    icon: Flame,
    status: "Vishama Agni",
    summary:
      "Digestive capacity is variable in this dummy profile, with good appetite on some days but heaviness and delayed digestion after irregular meals.",
    findings: ["Post-meal bloating 2 to 3 times weekly", "Appetite irregular on workdays", "Better digestion with warm meals"],
  },
  {
    code: "7.1.2",
    title: "Ama",
    icon: Leaf,
    status: "Moderate Load",
    summary:
      "Dummy toxic-metabolic burden is moderate, driven by coated tongue, sluggish bowel pattern, and borderline inflammatory trend.",
    findings: ["Tongue coating present in mornings", "CRP mildly elevated", "Afternoon lethargy after heavy lunch"],
  },
  {
    code: "7.1.3",
    title: "Koshta",
    icon: Activity,
    status: "Madhyama To Krura",
    summary:
      "Bowel tendency suggests a mixed koshta pattern with occasional dryness, delayed evacuation, and better regularity after hydration.",
    findings: ["Stool passage delayed during stress", "Constipation tendency on low-fiber days", "Responds to warm water and routine"],
  },
] as const;

const EXCRETORY_HEALTH = [
  {
    code: "7.2.1",
    title: "Mutra",
    icon: Droplets,
    status: "Stable",
    summary:
      "Urinary output is adequate in this dummy page, with mild concentration on days of lower fluid intake and no irritative symptom.",
    findings: ["Urine frequency 5 to 6 times/day", "Color darker by afternoon when hydration drops", "No burning or urgency reported"],
  },
  {
    code: "7.2.2",
    title: "Sweda",
    icon: Thermometer,
    status: "Excessive Under Stress",
    summary:
      "Sweat pattern appears moderately increased with heat exposure and anxiety, indicating pitta-reactive thermoregulation in the dummy profile.",
    findings: ["Palmar sweating during stress", "Body heat rises in late afternoon", "Sweat odor mildly increased after spicy food"],
  },
  {
    code: "7.2.3",
    title: "Purisha",
    icon: Waves,
    status: "Irregular",
    summary:
      "Stool quality and frequency remain somewhat inconsistent, reflecting incomplete bowel rhythm and variable digestive processing.",
    findings: ["One missed bowel movement every few days", "Stool consistency fluctuates", "Relief improves with early dinner timing"],
  },
] as const;

function getStatusTone(status: string) {
  if (status === "Stable") {
    return "bg-emerald-50 text-emerald-700 ring-emerald-200";
  }

  if (status === "Moderate Load" || status === "Irregular" || status === "Excessive Under Stress") {
    return "bg-amber-50 text-amber-700 ring-amber-200";
  }

  return "bg-sky-50 text-sky-700 ring-sky-200";
}

export default function PrakratiPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-[1.8rem] border border-slate-200 bg-[linear-gradient(135deg,#fefce8_0%,#f0fdf4_50%,#eff6ff_100%)] p-5 shadow-sm md:p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Section 7
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
              Prakrati
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
              Dummy representation of metabolic and excretory health, structured as concise clinical cards similar to the doctor dashboard modules.
            </p>
          </div>
          <div className="grid min-w-[220px] gap-3 sm:grid-cols-2">
            <MetricCard label="Metabolic Nodes" value="3" tone="teal" />
            <MetricCard label="Mala Nodes" value="3" tone="amber" />
          </div>
        </div>
      </section>

      <section className="rounded-[1.6rem] border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
              7.1
            </p>
            <h3 className="mt-1 text-2xl font-semibold text-slate-900">Metabolic Health</h3>
          </div>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
            Agni, Ama, Koshta
          </span>
        </div>
        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          {METABOLIC_HEALTH.map((item) => (
            <NodeCard key={item.code} {...item} />
          ))}
        </div>
      </section>

      <section className="rounded-[1.6rem] border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
              7.2
            </p>
            <h3 className="mt-1 text-2xl font-semibold text-slate-900">
              Excretory Health [Mala]
            </h3>
          </div>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
            Mutra, Sweda, Purisha
          </span>
        </div>
        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          {EXCRETORY_HEALTH.map((item) => (
            <NodeCard key={item.code} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
}

function NodeCard({
  code,
  title,
  icon: Icon,
  status,
  summary,
  findings,
}: {
  code: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  status: string;
  summary: string;
  findings: readonly string[];
}) {
  return (
    <article className="rounded-[1.4rem] border border-slate-200 bg-slate-50 p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white">
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
              {code}
            </p>
            <h4 className="text-lg font-semibold text-slate-900">{title}</h4>
          </div>
        </div>
        <span className={`rounded-full px-3 py-1 text-[11px] font-semibold ring-1 ${getStatusTone(status)}`}>
          {status}
        </span>
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-700">{summary}</p>

      <div className="mt-4 space-y-2">
        {findings.map((finding) => (
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
