"use client";

import {
  Bone,
  Brain,
  Droplets,
  Flower2,
  Heart,
  ShieldCheck,
  Sparkles,
  Waves,
} from "lucide-react";

const DHATU_ITEMS = [
  {
    code: "8.1.1",
    title: "Rasa",
    icon: Droplets,
    score: 72,
    status: "Adequate",
    summary: "Plasma and nourishment flow appear acceptable with mild dehydration tendency during busy workdays.",
  },
  {
    code: "8.1.2",
    title: "Raktha",
    icon: Heart,
    score: 58,
    status: "Borderline Low",
    summary: "Dummy raktha reserve is slightly reduced, correlating with low-normal hemoglobin and afternoon fatigue.",
  },
  {
    code: "8.1.3",
    title: "Mamsa",
    icon: ShieldCheck,
    score: 78,
    status: "Stable",
    summary: "Muscle tissue support is satisfactory, though recovery slows after prolonged sitting and inconsistent exercise.",
  },
  {
    code: "8.1.4",
    title: "Meda",
    icon: Waves,
    score: 64,
    status: "Mild Excess",
    summary: "Meda balance suggests modest accumulation, with central adiposity and lipid drift in the dummy profile.",
  },
  {
    code: "8.1.5",
    title: "Asthi",
    icon: Bone,
    score: 61,
    status: "Needs Support",
    summary: "Bone tissue reserve is mildly compromised, aligning with low vitamin D and osteopenic trend markers.",
  },
  {
    code: "8.1.6",
    title: "Majja",
    icon: Brain,
    score: 56,
    status: "Functional Strain",
    summary: "Majja status reflects stress-related depletion with sleep irregularity and tension pattern in this dummy case.",
  },
  {
    code: "8.1.7",
    title: "Sukra",
    icon: Flower2,
    score: 60,
    status: "Moderate Reserve",
    summary: "Reproductive vitality is fair but reduced by stress load, sedentary routine, and delayed recovery habits.",
  },
] as const;

const IMMUNITY_ITEMS = [
  {
    code: "8.2.1",
    title: "Ojas",
    icon: Sparkles,
    score: 62,
    status: "Moderate",
    summary: "Overall resilience is fair, with room to improve through sleep repair, anti-inflammatory diet, and structured recovery.",
  },
  {
    code: "8.2.2",
    title: "Satwa",
    icon: ShieldCheck,
    score: 68,
    status: "Stable",
    summary: "Mental steadiness is acceptable in this dummy profile, though sustained work pressure reduces clarity late in the day.",
  },
  {
    code: "8.2.3",
    title: "Satmya",
    icon: Waves,
    score: 57,
    status: "Variable",
    summary: "Adaptation tolerance is moderate, with good response to routine foods but poorer resilience to irregular sleep and heavy meals.",
  },
] as const;

function scoreTone(score: number) {
  if (score < 60) {
    return {
      badge: "bg-amber-50 text-amber-700 ring-amber-200",
      bar: "bg-amber-500",
    };
  }

  if (score < 70) {
    return {
      badge: "bg-sky-50 text-sky-700 ring-sky-200",
      bar: "bg-sky-500",
    };
  }

  return {
    badge: "bg-emerald-50 text-emerald-700 ring-emerald-200",
      bar: "bg-emerald-500",
    };
}

export default function TissueHealthPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-[1.8rem] border border-slate-200 bg-[linear-gradient(135deg,#f8fafc_0%,#f0fdf4_55%,#fffbeb_100%)] p-5 shadow-sm md:p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Section 8
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
              Tissue Health [Dhatu]
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
              Dedicated patient page for Dhatu health and bodily immunity tolerance, separated for easier access from the patient navbar.
            </p>
          </div>
          <div className="grid min-w-[220px] gap-3 sm:grid-cols-2">
            <MetricCard label="Dhatu Nodes" value="7" tone="teal" />
            <MetricCard label="Tolerance Nodes" value="3" tone="amber" />
          </div>
        </div>
      </section>

      <SectionBlock
        code="8.1"
        title="Tissue Health [Dhatu]"
        subtitle="Rasa, Raktha, Mamsa, Meda, Asthi, Majja, and Sukra"
        items={DHATU_ITEMS}
      />

      <SectionBlock
        code="8.2"
        title="Bodily Immunity Tolerance"
        subtitle="Ojas, Satwa, and Satmya"
        items={IMMUNITY_ITEMS}
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
    title: string;
    icon: React.ComponentType<{ className?: string }>;
    score: number;
    status: string;
    summary: string;
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

      <div className="mt-4 grid gap-4 xl:grid-cols-2">
        {items.map((item) => {
          const Icon = item.icon;
          const tone = scoreTone(item.score);

          return (
            <article
              key={item.code}
              className="rounded-[1.4rem] border border-slate-200 bg-slate-50 p-4"
            >
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
                <span className={`rounded-full px-3 py-1 text-[11px] font-semibold ring-1 ${tone.badge}`}>
                  {item.status}
                </span>
              </div>

              <div className="mt-4 rounded-2xl bg-white p-4">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Tissue Score
                    </p>
                    <p className="mt-1 text-3xl font-semibold text-slate-900">{item.score}/100</p>
                  </div>
                  <div className="w-32">
                    <div className="h-2.5 overflow-hidden rounded-full bg-slate-200">
                      <div className={`h-full rounded-full ${tone.bar}`} style={{ width: `${item.score}%` }} />
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-700">{item.summary}</p>
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
