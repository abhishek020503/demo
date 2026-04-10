"use client";

import { useMemo, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  BedDouble,
  Droplets,
  MoonStar,
  ShieldAlert,
  Stethoscope,
  TestTube2,
} from "lucide-react";
import DashboardShell from "./DashboardShell";
import BodyMeasurements from "./BodyMeasurements";
import PatientNavbar from "./PatientNavbar";
import { VITALS } from "../data/vitals";

type VitalItem = {
  slug: string;
  shortLabel: string;
  title: string;
  value: string;
  unit: string;
  status: string;
  normalRange: string;
  description: string;
};

type DashboardSection = "overview" | "vitals" | "blood";

const BASIC_DETAILS = [
  { label: "Name", value: "Arjun Kapoor" },
  { label: "Age / Gender", value: "34 / Male" },
  { label: "Time of Birth", value: "07:42 AM" },
  { label: "Place of Birth", value: "Jaipur, India" },
  { label: "Occupation", value: "School Teacher" },
  { label: "Socioeconomic Status", value: "Middle Income" },
  { label: "Primary Address", value: "A-44, Civil Lines, Jaipur" },
  { label: "Current Address", value: "Sector 62, Noida, Uttar Pradesh" },
  { label: "Email", value: "arjun.kapoor@mail.com" },
  { label: "Phone", value: "+91 98765 43210" },
];

const HISTORY = [
  { label: "Family History", value: "Type 2 diabetes and hypertension" },
  { label: "Medical History", value: "Borderline dyslipidemia; episodic gastritis" },
  { label: "Addiction", value: "Occasional alcohol; no smoking" },
];

const BLOOD_PARAMETERS = [
  { label: "Hemoglobin", value: "12.8 g/dL", status: "Low" },
  { label: "WBC", value: "7200 /uL", status: "Normal" },
  { label: "Fasting Glucose", value: "104 mg/dL", status: "Borderline" },
  { label: "Total Cholesterol", value: "218 mg/dL", status: "High" },
  { label: "Vitamin D3", value: "18 ng/mL", status: "Low" },
  { label: "TSH", value: "2.4 mIU/L", status: "Normal" },
];

const ALERTS = [
  "Vitamin D remains below target range and needs supplementation review.",
  "Sleep regularity is reduced across weekdays and likely affecting recovery.",
  "Borderline glucose and cholesterol suggest preventive metabolic follow-up.",
];

const SUMMARY_METRICS = [
  { label: "Blood Pressure", value: "122/78", unit: "mmHg", tone: "sky" as const },
  { label: "Heart Rate", value: "78", unit: "bpm", tone: "rose" as const },
  { label: "SpO2", value: "98", unit: "%", tone: "emerald" as const },
  { label: "Temperature", value: "98.4", unit: "F", tone: "amber" as const },
];

const OVERVIEW_STRIPS = [
  {
    label: "Sleep Quality",
    value: "6 / 10",
    detail: "Moderate rest with irregular timing",
    icon: MoonStar,
  },
  {
    label: "Hydration",
    value: "72%",
    detail: "Acceptable but below optimal target",
    icon: Droplets,
  },
  {
    label: "Recovery",
    value: "Stable",
    detail: "No acute physiological stress markers",
    icon: BedDouble,
  },
  {
    label: "Clinical Risk",
    value: "Watch",
    detail: "Low immediate risk, preventive action advised",
    icon: ShieldAlert,
  },
] satisfies {
  label: string;
  value: string;
  detail: string;
  icon: LucideIcon;
}[];

export default function PatientDashboard() {
  const [activeTab] = useState<DashboardSection>("overview");
  const displayedVitals = useMemo<VitalItem[]>(() => {
    const mappedVitals: VitalItem[] = [
      ...VITALS.map((vital) => ({
        slug: vital.slug,
        shortLabel: vital.shortLabel,
        title: vital.title,
        value: vital.value,
        unit: vital.unit,
        status: vital.status,
        normalRange: vital.normalRange,
        description: vital.description,
      })),
      {
        slug: "pulse-rate",
        shortLabel: "PR",
        title: "Pulse Rate",
        value: "78",
        unit: "bpm",
        status: "Normal",
        normalRange: "60-100 bpm (resting adult)",
        description: "Pulse rate is currently stable and within expected resting range.",
      },
      {
        slug: "sleep-quality",
        shortLabel: "SQ",
        title: "Sleep Quality",
        value: "6/10",
        unit: "",
        status: "Moderate",
        normalRange: "7/10 or above",
        description: "Sleep quality is moderate with intermittent night disturbance.",
      },
      {
        slug: "sleep-duration",
        shortLabel: "SD",
        title: "Sleep Duration",
        value: "6.8",
        unit: "hrs",
        status: "Moderate",
        normalRange: "7-9 hrs",
        description: "Sleep duration is adequate on some nights but inconsistent across the week.",
      },
      {
        slug: "sleep-pattern",
        shortLabel: "SP",
        title: "Sleep Pattern",
        value: "Irregular weekday cycle",
        unit: "",
        status: "Needs Improvement",
        normalRange: "Consistent daily sleep-wake cycle",
        description: "Sleep timing is irregular on weekdays and needs routine stabilization.",
      },
    ];

    const requiredOrder = [
      "Blood Pressure",
      "Respiratory Rate",
      "Pulse Rate",
      "Oxygen Saturation",
      "Body Temperature",
      "Heart Rate Variability",
      "VO2 Max",
      "Sleep Quality",
      "Sleep Duration",
      "Sleep Pattern",
    ];

    return requiredOrder
      .map((key) => mappedVitals.find((item) => item.title === key))
      .filter((item): item is VitalItem => Boolean(item));
  }, []);

  const [selectedVitalTitle, setSelectedVitalTitle] = useState(displayedVitals[0]?.title ?? "");
  const selectedVital =
    displayedVitals.find((vital) => vital.title === selectedVitalTitle) ?? displayedVitals[0];

  return (
    <DashboardShell headerActions={<PatientNavbar />}>
      <section className="rounded-[1.6rem] border border-slate-200/80 bg-[linear-gradient(180deg,#fdfdfc_0%,#f7f4ee_100%)] p-2.5 shadow-sm md:p-3">
        <section className="rounded-[2rem] bg-[radial-gradient(circle_at_top_left,#f8fbff_0%,#e7eef9_45%,#d9e4f4_100%)] p-3 text-slate-900 shadow-[0_24px_70px_rgba(148,163,184,0.18)] md:p-4">
          <div className="grid gap-3 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-3">
              <div className="flex flex-wrap items-start justify-between gap-2.5">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500/80">
                    Patient Intelligence Console
                  </p>
                  <h1 className="mt-1 text-3xl font-bold tracking-tight md:text-4xl">
                    Arjun Kapoor
                  </h1>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                    Longitudinal snapshot of biometric status, body structure, sleep behavior, and
                    blood indicators designed as a single clinical dashboard.
                  </p>
                </div>

                <div className="rounded-[1.25rem] border border-white/70 bg-white/75 px-2.5 py-2 backdrop-blur">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Status</p>
                  <p className="mt-1 text-lg font-semibold text-slate-900">Preventive Monitoring</p>
                  <p className="mt-1 text-xs text-slate-500">Last updated March 8, 2026</p>
                </div>
              </div>

              <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
                {SUMMARY_METRICS.map((item) => (
                  <HeroMetricCard key={item.label} {...item} />
                ))}
              </div>

              <section className="rounded-[1.4rem] border border-white/70 bg-white/75 p-3 lg:hidden">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Body Status Today
                </p>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  <MobileInsightCard
                    title="Overall Body Condition"
                    value="Stable 96%"
                    detail="Core vitals are steady with preventive follow-up needed."
                  />
                  <MobileInsightCard
                    title="What Needs Attention"
                    value="3 Active Flags"
                    detail="Vitamin D low, sleep irregular, metabolic drift watch."
                  />
                </div>
              </section>

              <div className="grid gap-2.5 lg:grid-cols-[1.15fr_0.85fr]">
                <section className="hidden rounded-[1.6rem] border border-white/70 bg-white/60 p-3 backdrop-blur lg:block">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500/80">
                        Patient Card
                      </p>
                      <p className="mt-1 text-xl font-semibold text-slate-900">Clinical Identity</p>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f1d3a6] text-lg font-bold text-slate-900">
                      AK
                    </div>
                  </div>
                  <div className="mt-2.5 grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
                    {BASIC_DETAILS.map((item) => (
                      <MiniDarkCard key={item.label} label={item.label} value={item.value} />
                    ))}
                  </div>
                  <div className="mt-2.5 rounded-[1rem] border border-white/70 bg-white/80 px-2.5 py-2">
                    <p className="text-[10px] uppercase tracking-[0.14em] text-slate-500">
                      1.4-prakriti
                    </p>
                    <div className="mt-2 grid gap-2 sm:grid-cols-3">
                      <PrakritiChip label="Vata" value="28%" tone="sky" />
                      <PrakritiChip label="Pitta" value="46%" tone="amber" />
                      <PrakritiChip label="Kapha" value="26%" tone="emerald" />
                    </div>
                    <p className="mt-2 text-xs leading-5 text-slate-600">
                      Dominant prakriti appears <span className="font-semibold text-slate-900">Pitta-Vata</span>
                      {" "}with mild kapha support in baseline constitution.
                    </p>
                  </div>
                </section>

                <section className="rounded-[1.6rem] border border-white/70 bg-white/60 p-3 backdrop-blur">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500/80">
                        Clinical Summary
                      </p>
                      <p className="mt-1 text-xl font-semibold text-slate-900">History And Condition</p>
                    </div>
                    <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                      Overview
                    </div>
                  </div>
                  <div className="mt-2.5 space-y-2">
                    <div className="rounded-[1.2rem] border border-white/70 bg-slate-50 px-2.5 py-2">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
                        Medical History
                      </p>
                      <div className="mt-2 space-y-2">
                        {HISTORY.map((entry) => (
                          <div key={entry.label} className="rounded-xl bg-white px-3 py-2">
                            <p className="text-xs font-semibold text-slate-900">{entry.label}</p>
                            <p className="mt-1 text-xs leading-5 text-slate-600">{entry.value}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-[1.2rem] border border-white/70 bg-slate-50 px-2.5 py-2">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
                            Body Condition
                          </p>
                          <p className="mt-1 text-sm font-semibold text-slate-900">Composite Score</p>
                        </div>
                        <div className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600">
                          Stable
                        </div>
                      </div>
                      <div className="mt-3 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                        <div className="relative grid h-20 w-20 shrink-0 place-items-center rounded-full bg-[conic-gradient(#60a5fa_0_346deg,rgba(255,255,255,0.18)_346deg_360deg)]">
                          <div className="grid h-14 w-14 place-items-center rounded-full bg-white text-center">
                            <p className="text-lg font-bold text-slate-900">96%</p>
                          </div>
                        </div>
                        <p className="text-xs leading-5 text-slate-600">
                          Body composition and vital stability remain strong with preventive focus
                          needed around metabolic markers and sleep quality.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-[1.2rem] border border-white/70 bg-slate-50 px-2.5 py-2">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
                        Alerts
                      </p>
                      <div className="mt-2 space-y-2">
                        {ALERTS.map((alert, index) => (
                          <p key={alert} className="text-xs leading-5 text-slate-600">
                            {index + 1}. {alert}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                <section className="rounded-[1.6rem] border border-white/70 bg-white/60 p-3 backdrop-blur lg:hidden">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500/80">Profile</p>
                  <p className="mt-1 text-lg font-semibold text-slate-900">Arjun Kapoor</p>
                  <p className="mt-1 text-xs text-slate-500">Personal details are kept in profile.</p>
                  <details className="mt-3 rounded-xl border border-white/80 bg-white/85 p-3">
                    <summary className="cursor-pointer text-sm font-semibold text-slate-800">
                      View Profile Details
                    </summary>
                    <div className="mt-3 grid gap-2">
                      {BASIC_DETAILS.map((item) => (
                        <MiniDarkCard key={`mobile-${item.label}`} label={item.label} value={item.value} />
                      ))}
                    </div>
                  </details>
                </section>
              </div>
            </div>

            <div className="grid gap-2.5 lg:grid-cols-[0.75fr_0.25fr] xl:grid-cols-1">
              <div className="rounded-[1.6rem] border border-white/10 bg-white/6 p-1 backdrop-blur">
                <BodyMeasurements />
              </div>

              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-4">
                {OVERVIEW_STRIPS.map((item) => (
                  <StatusStrip key={item.label} {...item} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {activeTab === "overview" && (
          <div className="mt-4">
            <section className="rounded-[1.6rem] border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
                  <Stethoscope size={20} />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Overview
                  </p>
                  <h2 className="text-xl font-semibold text-slate-900">Consolidated Summary</h2>
                </div>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Patient identity, medical history, body condition, and priority alerts have been
                consolidated into the Patient Intelligence Console above to remove duplication and
                keep the overview focused. Use the navbar above to move between patient pages on
                mobile and desktop.
              </p>
            </section>
          </div>
        )}

        {activeTab === "vitals" && (
          <div className="mt-4 space-y-4">
            <section className="rounded-[1.6rem] border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Vital Matrix
                  </p>
                  <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">
                    Monitored Parameters
                  </h2>
                </div>
                <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                  {displayedVitals.length} signals
                </div>
              </div>

              <div className="mt-4 grid gap-2.5 md:grid-cols-2 xl:grid-cols-4">
                {displayedVitals.map((vital, index) => (
                  <VitalCard
                    key={vital.title}
                    vital={vital}
                    index={index}
                    isSelected={selectedVital?.title === vital.title}
                    onSelect={() => setSelectedVitalTitle(vital.title)}
                  />
                ))}
              </div>
            </section>

            {selectedVital && <VitalDetailCard vital={selectedVital} />}
          </div>
        )}

        {activeTab === "blood" && (
          <div className="mt-4 grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
            <section className="rounded-[1.6rem] border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                  <TestTube2 size={20} />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Blood Work
                  </p>
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                    Laboratory Overview
                  </h2>
                </div>
              </div>

              <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {BLOOD_PARAMETERS.map((parameter) => (
                  <div
                    key={parameter.label}
                    className="rounded-[1.2rem] border border-slate-200 bg-slate-50 p-3.5"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                        {parameter.label}
                      </p>
                      <StatusBadge status={parameter.status} />
                    </div>
                    <p className="mt-3 text-2xl font-bold text-slate-900">{parameter.value}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[1.6rem] border border-slate-200 bg-[linear-gradient(180deg,#eef7f2_0%,#ffffff_100%)] p-4 shadow-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                Interpretation
              </p>
              <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">
                Blood Summary
              </h2>
              <div className="mt-4 space-y-3">
                <NarrativeCard
                  title="Metabolic Pattern"
                  body="Glucose and cholesterol are mildly elevated. The pattern suggests early-stage metabolic drift rather than acute pathology."
                />
                <NarrativeCard
                  title="Deficiency Watch"
                  body="Vitamin D remains meaningfully low and likely contributes to recovery, mood, and musculoskeletal resilience concerns."
                />
                <NarrativeCard
                  title="Action Direction"
                  body="Focus on sunlight exposure, dietary adherence, exercise consistency, and repeat fasting markers after a preventive interval."
                />
              </div>
            </section>
          </div>
        )}
      </section>
    </DashboardShell>
  );
}

function HeroMetricCard({
  label,
  value,
  unit,
  tone,
}: {
  label: string;
  value: string;
  unit: string;
  tone: "sky" | "rose" | "emerald" | "amber";
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

function MiniDarkCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1rem] border border-white/70 bg-white/80 px-3 py-2.5">
      <p className="text-[10px] uppercase tracking-[0.14em] text-slate-500">{label}</p>
      <p className="mt-1 text-sm font-semibold text-slate-900">{value}</p>
    </div>
  );
}

function MobileInsightCard({
  title,
  value,
  detail,
}: {
  title: string;
  value: string;
  detail: string;
}) {
  return (
    <div className="rounded-xl border border-white/80 bg-white/85 p-3">
      <p className="text-[10px] uppercase tracking-[0.14em] text-slate-500">{title}</p>
      <p className="mt-1 text-lg font-bold text-slate-900">{value}</p>
      <p className="mt-1 text-xs leading-5 text-slate-600">{detail}</p>
    </div>
  );
}

function PrakritiChip({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "sky" | "amber" | "emerald";
}) {
  const tones = {
    sky: "bg-sky-100 text-sky-700",
    amber: "bg-amber-100 text-amber-700",
    emerald: "bg-emerald-100 text-emerald-700",
  };

  return (
    <div className={`rounded-xl px-3 py-2 ${tones[tone]}`}>
      <p className="text-[10px] font-semibold uppercase tracking-[0.14em]">{label}</p>
      <p className="mt-1 text-sm font-bold">{value}</p>
    </div>
  );
}

function StatusStrip({
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

function VitalCard({
  vital,
  index,
  isSelected,
  onSelect,
}: {
  vital: VitalItem;
  index: number;
  isSelected: boolean;
  onSelect: () => void;
}) {
  const visual = getVitalVisual(index);
  const iconLabel = vital.shortLabel.replace(/[^a-zA-Z0-9]/g, "").slice(0, 2).toUpperCase() || "VP";

  return (
    <button
      type="button"
      onClick={onSelect}
      className={`overflow-hidden rounded-[1.2rem] border p-3.5 text-left transition ${
        isSelected
          ? "border-slate-900 bg-slate-900 text-white shadow-[0_18px_45px_rgba(15,23,42,0.18)]"
          : `bg-white shadow-sm hover:-translate-y-0.5 ${visual.cardClass}`
      }`}
    >
      <div className="flex items-start gap-3">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl text-[10px] font-bold tracking-wide ${
            isSelected ? "bg-white/12 text-white" : visual.iconClass
          }`}
        >
          {iconLabel}
        </div>
        <p className={`text-sm font-semibold leading-6 ${isSelected ? "text-white" : "text-slate-900"}`}>
          {vital.title}
        </p>
      </div>

      <div className="mt-4 flex items-baseline gap-1">
        <span className={`text-2xl font-bold leading-none ${isSelected ? "text-white" : "text-slate-900"}`}>
          {vital.value}
        </span>
        <span className={`text-sm ${isSelected ? "text-slate-300" : "text-slate-500"}`}>{vital.unit || "-"}</span>
      </div>

      <span
        className={`mt-3 inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold ${
          isSelected ? "bg-white/12 text-slate-100" : visual.badgeClass
        }`}
      >
        {vital.status}
      </span>

      <svg viewBox="0 0 240 72" className="mt-3 h-10 w-full" aria-label={`${vital.title} trend`}>
        <path d={visual.areaPath} fill={isSelected ? "rgba(255,255,255,0.12)" : visual.areaFill} />
        <path
          d={visual.linePath}
          fill="none"
          stroke={isSelected ? "#ffffff" : visual.stroke}
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}

function VitalDetailCard({ vital }: { vital: VitalItem }) {
  const trend = getTrendConfig(vital.slug);
  const notes = getClinicalNotes(vital.slug);

  return (
    <section className="rounded-[1.6rem] border border-slate-200 bg-white p-4 shadow-sm md:p-5">
      <div className="grid gap-4 xl:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-4">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                Selected Vital
              </p>
              <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">
                {vital.title}
              </h2>
            </div>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold tracking-wide text-slate-700">
              {vital.shortLabel}
            </span>
          </div>

          <section className="rounded-[1.3rem] bg-[linear-gradient(135deg,#0f172a_0%,#1e293b_100%)] p-4 text-white">
            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-300">Current Reading</p>
            <div className="mt-3 flex items-end gap-2">
              <span className="text-4xl font-bold leading-none">{vital.value}</span>
              <span className="pb-1 text-base font-medium text-slate-300">{vital.unit || "-"}</span>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-300">{vital.description}</p>
          </section>

          <div className="grid gap-2.5 sm:grid-cols-3">
            <InfoBox label="Status" value={vital.status} />
            <InfoBox label="Normal Range" value={vital.normalRange} />
            <InfoBox label="Short Code" value={vital.shortLabel} />
          </div>
        </div>

        <div className="space-y-4">
          <section className="rounded-[1.3rem] border border-slate-200 bg-slate-50 p-3.5">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                7 Day Trend
              </h2>
              <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-600">
                Dummy Data
              </span>
            </div>
            <svg
              viewBox="0 0 480 170"
              className="mt-3 h-36 w-full rounded-[1rem] bg-white p-3"
              aria-label={`${vital.title} trend graph`}
            >
              <path d={trend.areaPath} fill={trend.areaFill} />
              <path
                d={trend.linePath}
                fill="none"
                stroke={trend.stroke}
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </section>

          <section className="grid gap-2.5 md:grid-cols-2">
            <NarrativeCard title="Clinical Notes" body={notes.clinical} />
            <NarrativeCard title="Suggested Follow-Up" body={notes.followUp} />
          </section>
        </div>
      </div>
    </section>
  );
}

function NarrativeCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-[1.2rem] border border-slate-200 bg-white p-3.5 shadow-sm">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">{title}</p>
      <p className="mt-2.5 text-sm leading-6 text-slate-700">{body}</p>
    </div>
  );
}

function InfoBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.1rem] border border-slate-200 bg-white p-3.5 shadow-sm shadow-slate-200/50">
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
        {label}
      </p>
      <p className="mt-2 text-sm font-semibold leading-6 text-slate-900">{value}</p>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const style =
    status === "High"
      ? "bg-rose-100 text-rose-700"
      : status === "Low"
        ? "bg-amber-100 text-amber-700"
        : status === "Borderline"
          ? "bg-sky-100 text-sky-700"
          : "bg-emerald-100 text-emerald-700";

  return <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${style}`}>{status}</span>;
}

function getVitalVisual(index: number) {
  const styles = [
    {
      cardClass: "border-slate-200",
      iconClass: "bg-amber-100 text-amber-700",
      badgeClass: "bg-amber-100 text-amber-700",
      stroke: "#d97706",
      areaFill: "rgba(217,119,6,0.12)",
      linePath: "M0 57 C24 38, 44 24, 72 40 C100 56, 126 10, 154 26 C182 40, 210 48, 240 32",
      areaPath:
        "M0 57 C24 38, 44 24, 72 40 C100 56, 126 10, 154 26 C182 40, 210 48, 240 32 L240 72 L0 72 Z",
    },
    {
      cardClass: "border-slate-200",
      iconClass: "bg-rose-100 text-rose-700",
      badgeClass: "bg-rose-100 text-rose-700",
      stroke: "#e11d48",
      areaFill: "rgba(225,29,72,0.12)",
      linePath:
        "M0 40 C20 30, 40 28, 62 44 C86 64, 110 22, 134 20 C156 18, 178 30, 202 24 C220 20, 232 16, 240 12",
      areaPath:
        "M0 40 C20 30, 40 28, 62 44 C86 64, 110 22, 134 20 C156 18, 178 30, 202 24 C220 20, 232 16, 240 12 L240 72 L0 72 Z",
    },
    {
      cardClass: "border-slate-200",
      iconClass: "bg-cyan-100 text-cyan-700",
      badgeClass: "bg-cyan-100 text-cyan-700",
      stroke: "#0891b2",
      areaFill: "rgba(8,145,178,0.13)",
      linePath:
        "M0 34 C18 52, 44 56, 66 28 C88 0, 112 20, 140 18 C168 16, 188 10, 210 16 C224 20, 234 32, 240 40",
      areaPath:
        "M0 34 C18 52, 44 56, 66 28 C88 0, 112 20, 140 18 C168 16, 188 10, 210 16 C224 20, 234 32, 240 40 L240 72 L0 72 Z",
    },
    {
      cardClass: "border-slate-200",
      iconClass: "bg-emerald-100 text-emerald-700",
      badgeClass: "bg-emerald-100 text-emerald-700",
      stroke: "#059669",
      areaFill: "rgba(5,150,105,0.12)",
      linePath:
        "M0 52 C25 58, 49 20, 73 30 C96 39, 122 58, 146 44 C171 29, 194 16, 240 26",
      areaPath:
        "M0 52 C25 58, 49 20, 73 30 C96 39, 122 58, 146 44 C171 29, 194 16, 240 26 L240 72 L0 72 Z",
    },
  ];

  return styles[index % styles.length];
}

function getTrendConfig(slug: string) {
  const configs: Record<string, { linePath: string; areaPath: string; stroke: string; areaFill: string }> = {
    hr: {
      linePath:
        "M10 120 C60 90, 110 100, 160 80 C210 60, 260 70, 310 50 C360 30, 410 45, 470 35",
      areaPath:
        "M10 120 C60 90, 110 100, 160 80 C210 60, 260 70, 310 50 C360 30, 410 45, 470 35 L470 165 L10 165 Z",
      stroke: "#e11d48",
      areaFill: "rgba(225,29,72,0.12)",
    },
    bp: {
      linePath:
        "M10 110 C60 115, 110 85, 160 95 C210 105, 260 75, 310 80 C360 85, 410 60, 470 70",
      areaPath:
        "M10 110 C60 115, 110 85, 160 95 C210 105, 260 75, 310 80 C360 85, 410 60, 470 70 L470 165 L10 165 Z",
      stroke: "#0284c7",
      areaFill: "rgba(2,132,199,0.12)",
    },
    rr: {
      linePath:
        "M10 120 C60 108, 110 112, 160 104 C210 96, 260 100, 310 90 C360 84, 410 88, 470 78",
      areaPath:
        "M10 120 C60 108, 110 112, 160 104 C210 96, 260 100, 310 90 C360 84, 410 88, 470 78 L470 165 L10 165 Z",
      stroke: "#0f766e",
      areaFill: "rgba(15,118,110,0.12)",
    },
    spo2: {
      linePath:
        "M10 72 C60 70, 110 68, 160 66 C210 64, 260 66, 310 63 C360 61, 410 62, 470 60",
      areaPath:
        "M10 72 C60 70, 110 68, 160 66 C210 64, 260 66, 310 63 C360 61, 410 62, 470 60 L470 165 L10 165 Z",
      stroke: "#0891b2",
      areaFill: "rgba(8,145,178,0.12)",
    },
    temperature: {
      linePath:
        "M10 92 C60 94, 110 88, 160 90 C210 92, 260 86, 310 88 C360 90, 410 85, 470 87",
      areaPath:
        "M10 92 C60 94, 110 88, 160 90 C210 92, 260 86, 310 88 C360 90, 410 85, 470 87 L470 165 L10 165 Z",
      stroke: "#ea580c",
      areaFill: "rgba(234,88,12,0.12)",
    },
    hrv: {
      linePath:
        "M10 130 C60 90, 110 120, 160 85 C210 115, 260 75, 310 105 C360 80, 410 98, 470 72",
      areaPath:
        "M10 130 C60 90, 110 120, 160 85 C210 115, 260 75, 310 105 C360 80, 410 98, 470 72 L470 165 L10 165 Z",
      stroke: "#7c3aed",
      areaFill: "rgba(124,58,237,0.12)",
    },
    "vo2-max": {
      linePath:
        "M10 140 C60 132, 110 126, 160 118 C210 110, 260 105, 310 96 C360 88, 410 82, 470 74",
      areaPath:
        "M10 140 C60 132, 110 126, 160 118 C210 110, 260 105, 310 96 C360 88, 410 82, 470 74 L470 165 L10 165 Z",
      stroke: "#16a34a",
      areaFill: "rgba(22,163,74,0.12)",
    },
    sleep: {
      linePath:
        "M10 132 C60 115, 110 140, 160 120 C210 102, 260 128, 310 108 C360 95, 410 104, 470 90",
      areaPath:
        "M10 132 C60 115, 110 140, 160 120 C210 102, 260 128, 310 108 C360 95, 410 104, 470 90 L470 165 L10 165 Z",
      stroke: "#4338ca",
      areaFill: "rgba(67,56,202,0.12)",
    },
    "pulse-rate": {
      linePath:
        "M10 118 C60 92, 110 106, 160 84 C210 70, 260 80, 310 64 C360 56, 410 60, 470 48",
      areaPath:
        "M10 118 C60 92, 110 106, 160 84 C210 70, 260 80, 310 64 C360 56, 410 60, 470 48 L470 165 L10 165 Z",
      stroke: "#be123c",
      areaFill: "rgba(190,18,60,0.12)",
    },
    "nadi-device": {
      linePath:
        "M10 104 C60 96, 110 88, 160 94 C210 98, 260 90, 310 96 C360 100, 410 92, 470 90",
      areaPath:
        "M10 104 C60 96, 110 88, 160 94 C210 98, 260 90, 310 96 C360 100, 410 92, 470 90 L470 165 L10 165 Z",
      stroke: "#7c2d12",
      areaFill: "rgba(124,45,18,0.12)",
    },
    "tongue-analysis": {
      linePath:
        "M10 106 C60 94, 110 98, 160 92 C210 86, 260 90, 310 84 C360 78, 410 82, 470 76",
      areaPath:
        "M10 106 C60 94, 110 98, 160 92 C210 86, 260 90, 310 84 C360 78, 410 82, 470 76 L470 165 L10 165 Z",
      stroke: "#9f1239",
      areaFill: "rgba(159,18,57,0.12)",
    },
    "sleep-quality": {
      linePath:
        "M10 130 C60 122, 110 136, 160 118 C210 100, 260 126, 310 106 C360 94, 410 102, 470 88",
      areaPath:
        "M10 130 C60 122, 110 136, 160 118 C210 100, 260 126, 310 106 C360 94, 410 102, 470 88 L470 165 L10 165 Z",
      stroke: "#5b21b6",
      areaFill: "rgba(91,33,182,0.12)",
    },
    "sleep-duration": {
      linePath:
        "M10 136 C60 124, 110 120, 160 128 C210 134, 260 116, 310 110 C360 104, 410 98, 470 94",
      areaPath:
        "M10 136 C60 124, 110 120, 160 128 C210 134, 260 116, 310 110 C360 104, 410 98, 470 94 L470 165 L10 165 Z",
      stroke: "#4f46e5",
      areaFill: "rgba(79,70,229,0.12)",
    },
    "sleep-pattern": {
      linePath:
        "M10 138 C60 120, 110 144, 160 124 C210 108, 260 132, 310 112 C360 100, 410 108, 470 94",
      areaPath:
        "M10 138 C60 120, 110 144, 160 124 C210 108, 260 132, 310 112 C360 100, 410 108, 470 94 L470 165 L10 165 Z",
      stroke: "#4338ca",
      areaFill: "rgba(67,56,202,0.12)",
    },
  };

  return configs[slug] ?? configs.hr;
}

function getClinicalNotes(slug: string) {
  const notes: Record<string, { clinical: string; followUp: string }> = {
    hr: {
      clinical:
        "This heart rate pattern is within expected resting range and does not show abrupt spikes in the current dummy trend.",
      followUp:
        "Continue periodic resting measurements at the same time of day; review if persistent readings exceed baseline by 15-20 bpm.",
    },
    bp: {
      clinical:
        "Blood pressure trend appears stable with mild day-to-day variability, which is common with posture, stress, and hydration changes.",
      followUp:
        "Track morning and evening readings for one week; if average systolic stays above target, discuss medication or lifestyle adjustment.",
    },
    rr: {
      clinical:
        "Respiratory rate is in normal adult range and the trend does not indicate respiratory distress in this sample.",
      followUp:
        "Reassess with symptoms such as breathlessness, fever, or fatigue; correlate with SpO2 and temperature when symptomatic.",
    },
    spo2: {
      clinical:
        "Oxygen saturation remains high and consistent across the sample period, supporting adequate oxygenation.",
      followUp:
        "Recheck during exertion or respiratory symptoms; seek review if repeated values fall below usual baseline.",
    },
    temperature: {
      clinical:
        "Temperature is near expected baseline and the trend shows only minor physiological fluctuation.",
      followUp:
        "Monitor twice daily during suspected infection and interpret with symptoms and inflammatory markers if needed.",
    },
    hrv: {
      clinical:
        "HRV variation suggests changing recovery load; this metric is most useful in relation to personal baseline over time.",
      followUp:
        "Pair HRV with sleep quality, training load, and stress tracking for at least 2-4 weeks before making decisions.",
    },
    "vo2-max": {
      clinical:
        "VO2 max trend is gradually improving in this sample, indicating potential cardiorespiratory conditioning response.",
      followUp:
        "Retest with the same protocol monthly; combine with resting heart rate and exercise tolerance for a complete fitness profile.",
    },
    "pulse-rate": {
      clinical: "Pulse rate trend is stable with no sudden variability in this sample.",
      followUp: "Continue routine morning pulse checks and compare against activity and stress levels.",
    },
    "nadi-device": {
      clinical:
        "Nadi pattern suggests transient Vata-Pitta dominance and needs context with symptoms and routines.",
      followUp:
        "Reassess weekly with hydration, meal timing, and sleep regularity adjustments.",
    },
    "tongue-analysis": {
      clinical:
        "Tongue findings show mild coating and central crack, commonly linked with digestive imbalance patterns.",
      followUp:
        "Track changes after dietary correction and reassess with morning fasting observation.",
    },
    "sleep-quality": {
      clinical:
        "Sleep quality score indicates moderate rest with occasional nocturnal interruption.",
      followUp:
        "Introduce a fixed bedtime and reduced late screen exposure for two weeks, then reassess the score.",
    },
    "sleep-duration": {
      clinical:
        "Sleep duration is close to minimal target but remains inconsistent, which can blunt recovery quality.",
      followUp:
        "Aim for a consistent 7-8 hour sleep window with stable wake time before changing other recovery interventions.",
    },
    "sleep-pattern": {
      clinical:
        "Sleep pattern remains irregular, which can affect recovery and metabolic regulation.",
      followUp:
        "Standardize bedtime and wake time daily; monitor consistency across weekdays and weekends.",
    },
  };

  return notes[slug] ?? notes.hr;
}
