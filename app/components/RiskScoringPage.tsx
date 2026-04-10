"use client";

import {
  Activity,
  Droplets,
  HeartPulse,
  ShieldAlert,
  TrendingUp,
  TriangleAlert,
} from "lucide-react";

const RISK_ITEMS = [
  {
    code: "6.1",
    title: "Fatty Liver Risk",
    icon: Droplets,
    score: 68,
    status: "Moderate",
    summary:
      "Dummy profile suggests moderate fatty liver risk driven by borderline triglycerides, central adiposity, and mild ultrasound fatty change.",
    drivers: ["USG shows grade I fatty liver", "Waist circumference mildly elevated", "Processed food intake frequent"],
    action: "Reduce refined carbohydrate intake, increase movement, and repeat liver profile in follow-up.",
  },
  {
    code: "6.2",
    title: "Cardiovascular Risk",
    icon: HeartPulse,
    score: 57,
    status: "Mild To Moderate",
    summary:
      "Cardiovascular risk is mildly elevated in this dummy dataset due to lipid imbalance, stress burden, and inconsistent exercise.",
    drivers: ["Total cholesterol 218 mg/dL", "Family history of hypertension", "Resting stress load moderately elevated"],
    action: "Prioritize aerobic conditioning, sleep consistency, and lipid review within 3 months.",
  },
  {
    code: "6.3",
    title: "Anaemia Risk",
    icon: Activity,
    score: 61,
    status: "Moderate",
    summary:
      "Anaemia risk is moderate based on low-normal hemoglobin, fatigue pattern, and nutritional insufficiency markers in the dummy data.",
    drivers: ["Hemoglobin 12.8 g/dL", "Low energy during late afternoon", "Dietary iron intake inconsistent"],
    action: "Review CBC, ferritin, B12, and improve iron-rich food intake.",
  },
  {
    code: "6.4",
    title: "Gout Risk",
    icon: TriangleAlert,
    score: 42,
    status: "Mild",
    summary:
      "Current dummy gout risk remains mild, though hydration inconsistency and diet pattern could increase uric acid burden over time.",
    drivers: ["Occasional dehydration on workdays", "High-protein meals on weekends", "No active joint flare history"],
    action: "Improve hydration and moderate purine-heavy meal frequency.",
  },
  {
    code: "6.5",
    title: "FHypertension Risk",
    icon: TrendingUp,
    score: 54,
    status: "Mild To Moderate",
    summary:
      "Hypertension tendency is mildly increased in the dummy profile due to family history, work stress, and variable sleep timing.",
    drivers: ["BP trend near upper normal range", "Family history positive", "Stress peaks during work cycle"],
    action: "Track home blood pressure twice weekly and reinforce sodium and stress control.",
  },
  {
    code: "6.6",
    title: "Diabetes Risk",
    icon: ShieldAlert,
    score: 66,
    status: "Moderate",
    summary:
      "Diabetes risk is moderate in this dummy scenario because of borderline fasting glucose, HbA1c trend, and sedentary time.",
    drivers: ["Fasting glucose 104 mg/dL", "HbA1c around prediabetic range", "Reduced weekday activity"],
    action: "Target weight control, post-meal walking, and repeat sugar markers after lifestyle intervention.",
  },
] as const;

function getTone(score: number) {
  if (score >= 60) {
    return {
      badge: "bg-amber-50 text-amber-700 ring-amber-200",
      bar: "bg-amber-500",
    };
  }

  if (score >= 45) {
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

export default function RiskScoringPage() {
  const moderateOrHigher = RISK_ITEMS.filter((item) => item.score >= 60).length;

  return (
    <div className="space-y-6">
      <section className="rounded-[1.8rem] border border-slate-200 bg-[linear-gradient(135deg,#fff7ed_0%,#f8fafc_45%,#eff6ff_100%)] p-5 shadow-sm md:p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Section 6
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
              Risk Scoring
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
              Dummy risk stratification for liver, cardiovascular, hematologic, metabolic, and pressure-related trends.
            </p>
          </div>
          <div className="grid min-w-[220px] gap-3 sm:grid-cols-2">
            <MetricCard label="Risk Modules" value="6" tone="sky" />
            <MetricCard label="Moderate+" value={String(moderateOrHigher)} tone="amber" />
          </div>
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-2">
        {RISK_ITEMS.map((item) => {
          const Icon = item.icon;
          const tone = getTone(item.score);

          return (
            <article
              key={item.code}
              className="rounded-[1.6rem] border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                      {item.code}
                    </p>
                    <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                  </div>
                </div>
                <span className={`rounded-full px-3 py-1 text-[11px] font-semibold ring-1 ${tone.badge}`}>
                  {item.status}
                </span>
              </div>

              <div className="mt-4 rounded-2xl bg-slate-50 p-4">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Risk Score
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

              <div className="mt-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Dummy Risk Drivers
                </p>
                <div className="mt-3 space-y-2">
                  {item.drivers.map((driver) => (
                    <div
                      key={driver}
                      className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm leading-6 text-slate-700"
                    >
                      {driver}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-700">
                  Suggested Action
                </p>
                <p className="mt-1 text-sm leading-6 text-emerald-900">{item.action}</p>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}

function MetricCard({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "sky" | "amber";
}) {
  const toneClass =
    tone === "amber"
      ? "border-amber-200 bg-amber-50 text-amber-800"
      : "border-sky-200 bg-sky-50 text-sky-800";

  return (
    <div className={`rounded-2xl border px-4 py-3 ${toneClass}`}>
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em]">{label}</p>
      <p className="mt-1 text-2xl font-semibold">{value}</p>
    </div>
  );
}
