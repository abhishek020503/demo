"use client";

import {
  Activity,
  Bone,
  Brain,
  Dumbbell,
  HeartPulse,
  Microscope,
  ShieldCheck,
  Sparkles,
  StretchHorizontal,
  Stethoscope,
  Syringe,
  Waves,
} from "lucide-react";

const SYSTEMS = [
  {
    code: "5.1",
    title: "CVS (Pranavsha & Raktavoha)",
    icon: HeartPulse,
    status: "Moderate Watch",
    summary:
      "Pulse pattern is stable with mildly elevated resting rate during stress periods. Circulatory tone is adequate with mild rakta aggravation in dummy review.",
    srotas: "Pranavaha and Raktavaha srotas show mild functional strain without acute instability.",
    findings: ["BP 124/82 mmHg", "Resting pulse 78 bpm", "Occasional exertional palpitations"],
  },
  {
    code: "5.2",
    title: "Respiratory (Pranvaha)",
    icon: Waves,
    status: "Stable",
    summary:
      "Breathing pattern remains regular with acceptable oxygen saturation. Mild seasonal sensitivity is noted in this dummy respiratory profile.",
    srotas: "Pranavaha srotas are largely patent with minor kapha-related congestion tendency.",
    findings: ["SpO2 98%", "Respiratory rate 16/min", "Morning throat clearing occasionally present"],
  },
  {
    code: "5.3",
    title: "Gastro Intestinal (Annavaha & Purishva)",
    icon: Activity,
    status: "Needs Correction",
    summary:
      "Appetite is variable with bloating after heavy meals and intermittent constipation. The dummy pattern suggests mild agni irregularity and ama formation.",
    srotas: "Annavaha and Purishvaha channels show sluggish movement with incomplete digestion.",
    findings: ["Post-meal heaviness 2 to 3 times/week", "Bowel movement delayed on workdays", "Acidity after spicy food"],
  },
  {
    code: "5.4",
    title: "Neurological (Majjavaha)",
    icon: Brain,
    status: "Functional Stress",
    summary:
      "Sleep-linked fatigue and occasional tension headache are the main dummy neurological observations. No focal deficit is represented in this sample page.",
    srotas: "Majjavaha srotas reflect mild depletion from irregular rest and cognitive overuse.",
    findings: ["Headache frequency 1 to 2/week", "Sleep recovery score 6/10", "No motor weakness reported"],
  },
  {
    code: "5.5",
    title: "Endocrine",
    icon: Microscope,
    status: "Borderline",
    summary:
      "Metabolic and hormonal regulation show early imbalance in the dummy dataset, mainly around glucose handling and vitamin D status.",
    srotas: "Medovaha support appears mildly challenged with endocrine adaptation still preserved.",
    findings: ["HbA1c 6.0%", "TSH 2.4 mIU/L", "Vitamin D 18 ng/mL"],
  },
  {
    code: "5.6",
    title: "Muscular",
    icon: Dumbbell,
    status: "Mild Fatigue",
    summary:
      "Muscle endurance is fair but recovery after exertion is delayed. Mild stiffness is noted after prolonged sitting in this dummy case.",
    srotas: "Mamsavaha nourishment is adequate but under-supported by recovery routines.",
    findings: ["Posture-related neck tightness", "Grip strength acceptable", "Exercise tolerance moderate"],
  },
  {
    code: "5.7",
    title: "Skeletal",
    icon: Bone,
    status: "Osteopenic Trend",
    summary:
      "Bone support appears mildly reduced with low vitamin D and borderline DEXA reserve in the dummy report profile.",
    srotas: "Asthivaha channels suggest early depletion requiring nutrition and loading support.",
    findings: ["DEXA T-score -1.8", "Low sunlight exposure", "No fracture history"],
  },
  {
    code: "5.8",
    title: "Physicatary",
    icon: Sparkles,
    status: "Variable",
    summary:
      "Dummy psychophysical resilience is inconsistent, with work stress affecting focus, mood steadiness, and recovery behavior.",
    srotas: "Mind-body regulation is mildly disturbed with fluctuating sattva and elevated rajas under workload.",
    findings: ["Stress tolerance moderate", "Attention dip in late evenings", "Mood stable but easily fatigued"],
  },
  {
    code: "5.9",
    title: "Integumentary",
    icon: StretchHorizontal,
    status: "Mild Dryness",
    summary:
      "Skin and appendage review suggests mild dryness and occasional scalp flaking in the current dummy state.",
    srotas: "Rasa and swedavaha balance indicate reduced hydration support at the tissue surface.",
    findings: ["Dry skin over forearms", "Mild dandruff", "No active rash"],
  },
  {
    code: "5.10",
    title: "Urogenital",
    icon: Syringe,
    status: "Stable",
    summary:
      "Urinary pattern is regular with good output and no dummy red-flag symptom noted.",
    srotas: "Mutravaha pathways appear unobstructed with acceptable hydration response.",
    findings: ["Urination 5 to 6 times/day", "No burning micturition", "Creatinine within normal range"],
  },
  {
    code: "5.11",
    title: "Reproductive",
    icon: Stethoscope,
    status: "Low Reserve Watch",
    summary:
      "Dummy reproductive vitality suggests mild reserve reduction associated with stress, sleep irregularity, and sedentary routine.",
    srotas: "Shukravaha support is present but not optimal for long-term resilience.",
    findings: ["Energy dip after poor sleep", "No acute complaint recorded", "Lifestyle-driven follow-up advised"],
  },
  {
    code: "5.12",
    title: "Immune",
    icon: ShieldCheck,
    status: "Moderate Defense",
    summary:
      "Immune readiness is acceptable overall, though the dummy profile shows mild inflammatory tendency and seasonal vulnerability.",
    srotas: "Ojas reserve is fair with room for strengthening through sleep and anti-inflammatory habits.",
    findings: ["CRP mildly elevated", "Recovery from cold slightly delayed", "No recurrent infection history"],
  },
] as const;

function getStatusTone(status: string) {
  if (status === "Needs Correction" || status === "Osteopenic Trend" || status === "Low Reserve Watch") {
    return "bg-amber-50 text-amber-700 ring-amber-200";
  }
  if (status === "Moderate Watch" || status === "Functional Stress" || status === "Borderline" || status === "Variable" || status === "Moderate Defense" || status === "Mild Fatigue" || status === "Mild Dryness") {
    return "bg-sky-50 text-sky-700 ring-sky-200";
  }
  return "bg-emerald-50 text-emerald-700 ring-emerald-200";
}

export default function SystemsSrotasPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-[1.8rem] border border-slate-200 bg-[linear-gradient(135deg,#fffdf6_0%,#effaf7_50%,#eef6ff_100%)] p-5 shadow-sm md:p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Section 5
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
              Systems & Srotas
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
              Dummy systemic review across major organ systems and corresponding srotas mapping.
            </p>
          </div>
          <div className="grid min-w-[220px] gap-3 sm:grid-cols-2">
            <MetricCard label="Systems Covered" value="12" tone="teal" />
            <MetricCard label="Watch Areas" value="6" tone="amber" />
          </div>
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-2">
        {SYSTEMS.map((item) => {
          const Icon = item.icon;

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
                <span className={`rounded-full px-3 py-1 text-[11px] font-semibold ring-1 ${getStatusTone(item.status)}`}>
                  {item.status}
                </span>
              </div>

              <div className="mt-4 rounded-2xl bg-slate-50 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Clinical Summary
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-700">{item.summary}</p>
              </div>

              <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-700">
                  Srotas Impression
                </p>
                <p className="mt-1 text-sm leading-6 text-emerald-900">{item.srotas}</p>
              </div>

              <div className="mt-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Dummy Findings
                </p>
                <div className="mt-3 space-y-2">
                  {item.findings.map((finding) => (
                    <div
                      key={finding}
                      className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm leading-6 text-slate-700"
                    >
                      {finding}
                    </div>
                  ))}
                </div>
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
