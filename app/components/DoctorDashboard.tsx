"use client";

import { useState, type ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  ArrowUpRight,
  Brain,
  ChevronDown,
  HeartPulse,
  LayoutDashboard,
  ScanLine,
  Smartphone,
  Stethoscope,
  TrendingUp,
  Waves,
} from "lucide-react";
import DashboardShell from "./DashboardShell";
import DoctorNavbar from "./doctor-dashboard/DoctorNavbar";
import {
  DOCTOR_BIOHACK_DATA,
  DOCTOR_NADI_ANALYSIS,
  DOCTOR_NADI_DEVICE_DATA,
  DOCTOR_PRAKRITI_OVERVIEW,
  DOCTOR_QUESTIONNAIRE_RESPONSES,
  DOCTOR_SMARTWATCH_DATA,
  DOCTOR_TONGUE_ANALYSIS,
} from "./doctor-dashboard/data";
import { DoctorStatusBadge } from "./doctor-dashboard/DoctorDashboardCards";

type SectionId =
  | "biohack"
  | "watch"
  | "nadi"
  | "tongue"
  | "prakrati"
  | "questionnaires";

const SECTION_CONFIG: Array<{
  id: SectionId;
  title: string;
  subtitle: string;
  count: string;
  icon: LucideIcon;
}> = [
  {
    id: "biohack",
    title: "Biohack Machine Data",
    subtitle: "Machine-derived body and metabolic markers.",
    count: `${DOCTOR_BIOHACK_DATA.length} metrics`,
    icon: ScanLine,
  },
  {
    id: "watch",
    title: "Smart Watch Data",
    subtitle: "Wearable outputs in compact form.",
    count: `${DOCTOR_SMARTWATCH_DATA.length} metrics`,
    icon: Smartphone,
  },
  {
    id: "nadi",
    title: "Nadi Device",
    subtitle: "Dosha movement and pulse-device interpretation.",
    count: `${DOCTOR_NADI_DEVICE_DATA.length} signals`,
    icon: Waves,
  },
  {
    id: "tongue",
    title: "Tongue Analysis",
    subtitle: "Tongue findings and digestive interpretation.",
    count: `${DOCTOR_TONGUE_ANALYSIS.detailedFindings.length} findings`,
    icon: Activity,
  },
  {
    id: "prakrati",
    title: "Prakrati Overview",
    subtitle: "Open any prakrati item to read the longer description.",
    count: `${DOCTOR_PRAKRITI_OVERVIEW.length} areas`,
    icon: Brain,
  },
  {
    id: "questionnaires",
    title: "Questionnaires",
    subtitle: "Approx. 25 dummy question-answer pairs.",
    count: `${DOCTOR_QUESTIONNAIRE_RESPONSES.length} items`,
    icon: HeartPulse,
  },
];

export default function DoctorDashboard() {
  const [openSection, setOpenSection] = useState<SectionId | null>("biohack");

  const trackedSignals =
    DOCTOR_BIOHACK_DATA.length +
    DOCTOR_SMARTWATCH_DATA.length +
    DOCTOR_NADI_DEVICE_DATA.length;

  return (
    <DashboardShell headerActions={<DoctorNavbar />}>
      <section className="glass-panel rounded-[2rem] p-2 md:p-3">
        <div className="overflow-hidden rounded-[1.7rem] border border-slate-200/80 bg-[linear-gradient(180deg,#fbfdff_0%,#f4f7fb_100%)]">
          <div className="grid gap-4 p-3 md:p-4 xl:grid-cols-[280px_1fr]">
            <aside className="rounded-[1.7rem] bg-[linear-gradient(180deg,#0f172a_0%,#142845_52%,#18385b_100%)] p-4 text-white shadow-[0_24px_70px_rgba(15,23,42,0.26)]">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-[1rem] bg-white/10 backdrop-blur">
                  <Stethoscope className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky-100/65">
                    Overview
                  </p>
                  <p className="mt-1 text-base font-semibold text-white">
                    Integrative opening dashboard
                  </p>
                </div>
              </div>

              <div className="mt-4 grid gap-3">
                <SidebarSummaryCard
                  icon={LayoutDashboard}
                  label="Modules On Screen"
                  value="6"
                />
                <SidebarSummaryCard
                  icon={TrendingUp}
                  label="Tracked Signals"
                  value={`${trackedSignals}`}
                />
                <SidebarSummaryCard
                  icon={HeartPulse}
                  label="Questionnaire Items"
                  value={`${DOCTOR_QUESTIONNAIRE_RESPONSES.length}`}
                />
              </div>

              <div className="mt-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-sky-100/60">
                  Modules
                </p>
                <div className="mt-3 grid gap-2">
                  {SECTION_CONFIG.map((section) => {
                    const Icon = section.icon;
                    const isActive = openSection === section.id;

                    return (
                      <button
                        key={section.id}
                        type="button"
                        onClick={() =>
                          setOpenSection(isActive ? null : section.id)
                        }
                        className={`flex items-start gap-3 rounded-[1.15rem] px-3 py-3 text-left transition ${
                          isActive
                            ? "bg-white text-slate-950 shadow-[0_14px_34px_rgba(15,23,42,0.18)]"
                            : "bg-white/6 text-sky-50 hover:bg-white/10"
                        }`}
                      >
                        <div
                          className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-[0.95rem] ${
                            isActive
                              ? "bg-slate-100 text-slate-700"
                              : "bg-white/10 text-white"
                          }`}
                        >
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold">{section.title}</p>
                          <p
                            className={`mt-1 text-[11px] leading-5 ${
                              isActive ? "text-slate-500" : "text-sky-100/70"
                            }`}
                          >
                            {section.count}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </aside>

            <div className="space-y-3">
                <OverviewSection
                  sectionId="biohack"
                  openSection={openSection}
                  onToggle={setOpenSection}
                  icon={ScanLine}
                  title="Biohack Machine Data"
                  subtitle="Machine-derived body and metabolic markers."
                  count={`${DOCTOR_BIOHACK_DATA.length} metrics`}
                  preview={
                    <div className="grid gap-2 md:grid-cols-3 xl:grid-cols-5">
                      {DOCTOR_BIOHACK_DATA.slice(0, 5).map((item) => (
                        <PreviewMetric
                          key={item.label}
                          label={item.label}
                          value={item.value}
                          status={item.status}
                        />
                      ))}
                    </div>
                  }
                >
                  <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-5">
                    {DOCTOR_BIOHACK_DATA.map((item) => (
                      <MetricCard
                        key={item.label}
                        label={item.label}
                        value={item.value}
                        status={item.status}
                      />
                    ))}
                  </div>
                </OverviewSection>

                <OverviewSection
                  sectionId="watch"
                  openSection={openSection}
                  onToggle={setOpenSection}
                  icon={Smartphone}
                  title="Smart Watch Data"
                  subtitle="Wearable outputs in compact form."
                  count={`${DOCTOR_SMARTWATCH_DATA.length} metrics`}
                  preview={
                    <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-4">
                      {DOCTOR_SMARTWATCH_DATA.slice(0, 4).map((item) => (
                        <PreviewMetric
                          key={item.label}
                          label={item.label}
                          value={item.value}
                          status={item.status}
                        />
                      ))}
                    </div>
                  }
                >
                  <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-3">
                    {DOCTOR_SMARTWATCH_DATA.map((item) => (
                      <MetricCard
                        key={item.label}
                        label={item.label}
                        value={item.value}
                        status={item.status}
                      />
                    ))}
                  </div>
                </OverviewSection>

                <OverviewSection
                  sectionId="nadi"
                  openSection={openSection}
                  onToggle={setOpenSection}
                  icon={Waves}
                  title="Nadi Device"
                  subtitle="Dosha movement and pulse-device interpretation."
                  count={`${DOCTOR_NADI_DEVICE_DATA.length} signals`}
                  preview={
                    <div className="grid gap-3 xl:grid-cols-[0.9fr_1.1fr]">
                      <PreviewNarrative
                        title="Pulse Summary"
                        body={DOCTOR_NADI_ANALYSIS.summary}
                      />
                      <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-3">
                        {DOCTOR_NADI_DEVICE_DATA.slice(0, 3).map((item) => (
                          <InfoCard
                            key={item.label}
                            label={item.label}
                            value={item.value}
                            note={item.note}
                          />
                        ))}
                      </div>
                    </div>
                  }
                >
                  <div className="grid gap-2 xl:grid-cols-[0.9fr_1.1fr]">
                    <div className="surface-inset rounded-[1.35rem] px-4 py-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
                        Pulse Summary
                      </p>
                      <p className="mt-2 text-base font-semibold text-slate-950">
                        {DOCTOR_NADI_ANALYSIS.pulseQuality}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {DOCTOR_NADI_ANALYSIS.summary}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {DOCTOR_NADI_ANALYSIS.clinicalNote}
                      </p>
                    </div>
                    <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-3">
                      {DOCTOR_NADI_DEVICE_DATA.map((item) => (
                        <InfoCard
                          key={item.label}
                          label={item.label}
                          value={item.value}
                          note={item.note}
                        />
                      ))}
                    </div>
                  </div>
                </OverviewSection>

                <OverviewSection
                  sectionId="tongue"
                  openSection={openSection}
                  onToggle={setOpenSection}
                  icon={Activity}
                  title="Tongue Analysis"
                  subtitle="Tongue findings and digestive interpretation."
                  count={`${DOCTOR_TONGUE_ANALYSIS.detailedFindings.length} findings`}
                  preview={
                    <div className="grid gap-3 xl:grid-cols-[0.86fr_1.14fr]">
                      <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-4">
                        <PreviewMetric
                          label="Score"
                          value={DOCTOR_TONGUE_ANALYSIS.score}
                          status="Observed"
                        />
                        <PreviewMetric
                          label="Dominant Dosha"
                          value={DOCTOR_TONGUE_ANALYSIS.dominantDosha}
                          status="Observed"
                        />
                        <PreviewMetric
                          label="Agni"
                          value={DOCTOR_TONGUE_ANALYSIS.agni}
                          status="Watch"
                        />
                        <PreviewMetric
                          label="Ama"
                          value={DOCTOR_TONGUE_ANALYSIS.ama}
                          status="Observed"
                        />
                      </div>
                      <PreviewNarrative
                        title="Digestive Interpretation"
                        body={DOCTOR_TONGUE_ANALYSIS.about}
                      />
                    </div>
                  }
                >
                  <div className="grid gap-2 xl:grid-cols-[0.88fr_1.12fr]">
                    <div className="grid gap-2 md:grid-cols-3 xl:grid-cols-1">
                      <MetricCard
                        label="Score"
                        value={DOCTOR_TONGUE_ANALYSIS.score}
                        status="Observed"
                      />
                      <MetricCard
                        label="Dominant Dosha"
                        value={DOCTOR_TONGUE_ANALYSIS.dominantDosha}
                        status="Observed"
                      />
                      <MetricCard
                        label="Agni"
                        value={DOCTOR_TONGUE_ANALYSIS.agni}
                        status="Watch"
                      />
                      <MetricCard
                        label="Ama"
                        value={DOCTOR_TONGUE_ANALYSIS.ama}
                        status="Observed"
                      />
                    </div>
                    <div className="surface-inset rounded-[1.35rem] px-4 py-4">
                      <p className="text-sm leading-6 text-slate-700">
                        {DOCTOR_TONGUE_ANALYSIS.about}
                      </p>
                      <div className="mt-3 grid gap-2 md:grid-cols-2 xl:grid-cols-3">
                        {DOCTOR_TONGUE_ANALYSIS.detailedFindings.map((item) => (
                          <InfoCard
                            key={item.label}
                            label={item.label}
                            value={item.value}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </OverviewSection>

                <OverviewSection
                  sectionId="prakrati"
                  openSection={openSection}
                  onToggle={setOpenSection}
                  icon={Brain}
                  title="Prakrati Overview"
                  subtitle="Open any prakrati item to read the longer description."
                  count={`${DOCTOR_PRAKRITI_OVERVIEW.length} areas`}
                  preview={
                    <div className="grid gap-2 md:grid-cols-3">
                      {DOCTOR_PRAKRITI_OVERVIEW.map((item) => (
                        <PreviewPrakrati
                          key={item.label}
                          label={item.label}
                          value={item.value}
                        />
                      ))}
                    </div>
                  }
                >
                  <div className="grid gap-2 md:grid-cols-3">
                    {DOCTOR_PRAKRITI_OVERVIEW.map((item) => (
                      <details
                        key={item.label}
                        className="group rounded-[1.2rem] border border-slate-200/80 bg-[linear-gradient(180deg,#ffffff_0%,#fbfdff_100%)] px-3 py-3 shadow-[0_12px_24px_rgba(100,116,139,0.06)]"
                      >
                        <summary className="flex cursor-pointer list-none items-start justify-between gap-2">
                          <div>
                            <div className="flex items-center gap-1.5">
                              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-700">
                                {item.label}
                              </p>
                              <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-700">
                                {item.value}
                              </span>
                            </div>
                            <p className="mt-1 text-xs font-semibold text-slate-900">
                              Detailed description
                            </p>
                          </div>
                          <ChevronDown className="mt-1 h-4 w-4 shrink-0 text-slate-400 transition group-open:rotate-180" />
                        </summary>
                        <p className="mt-3 border-t border-slate-200/80 pt-3 text-xs leading-5 text-slate-600">
                          {item.description}
                        </p>
                      </details>
                    ))}
                  </div>
                  <div className="mt-3 flex justify-end">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-700">
                      Full prakrati summary included here
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </OverviewSection>

                <OverviewSection
                  sectionId="questionnaires"
                  openSection={openSection}
                  onToggle={setOpenSection}
                  icon={HeartPulse}
                  title="Questionnaires"
                  subtitle="Approx. 25 dummy question-answer pairs."
                  count={`${DOCTOR_QUESTIONNAIRE_RESPONSES.length} items`}
                  preview={
                    <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-3">
                      {DOCTOR_QUESTIONNAIRE_RESPONSES.slice(0, 3).map(
                        (item, index) => (
                          <QuestionPreview
                            key={item.question}
                            question={item.question}
                            answer={item.answer}
                            index={index + 1}
                          />
                        )
                      )}
                    </div>
                  }
                >
                  <div className="grid gap-2">
                    {DOCTOR_QUESTIONNAIRE_RESPONSES.map((item, index) => (
                      <QuestionPreview
                        key={item.question}
                        question={item.question}
                        answer={item.answer}
                        index={index + 1}
                      />
                    ))}
                  </div>
                </OverviewSection>
            </div>
          </div>
        </div>
      </section>
    </DashboardShell>
  );
}

function SidebarSummaryCard({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[1.25rem] border border-white/10 bg-white/8 px-4 py-3 backdrop-blur">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-[0.95rem] bg-white/10">
          <Icon className="h-4 w-4 text-white" />
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-sky-100/65">
            {label}
          </p>
          <p className="mt-1 text-lg font-semibold text-white">{value}</p>
        </div>
      </div>
    </div>
  );
}

function OverviewSection({
  sectionId,
  openSection,
  onToggle,
  icon: Icon,
  title,
  subtitle,
  count,
  preview,
  children,
}: {
  sectionId: SectionId;
  openSection: SectionId | null;
  onToggle: (sectionId: SectionId | null) => void;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  count: string;
  preview: ReactNode;
  children: ReactNode;
}) {
  const isOpen = openSection === sectionId;

  return (
    <section className="overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white/92 shadow-[0_16px_38px_rgba(100,116,139,0.06)]">
      <div className="px-4 py-4 md:px-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex min-w-0 gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[1.05rem] bg-[linear-gradient(135deg,#edf5ff_0%,#ffffff_100%)] text-slate-700">
              <Icon className="h-4.5 w-4.5" />
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-base font-semibold text-slate-950">
                  {title}
                </h2>
                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-600">
                  {count}
                </span>
              </div>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                {subtitle}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onToggle(isOpen ? null : sectionId)}
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition hover:bg-slate-50"
            aria-label={isOpen ? `Collapse ${title}` : `Expand ${title}`}
          >
            <ChevronDown
              className={`h-4 w-4 transition ${isOpen ? "rotate-180" : ""}`}
            />
          </button>
        </div>

        <div className="mt-4">{preview}</div>
      </div>

      {isOpen ? (
        <div className="border-t border-slate-200/80 px-4 py-4 md:px-5">
          {children}
        </div>
      ) : null}
    </section>
  );
}

function PreviewMetric({
  label,
  value,
  status,
}: {
  label: string;
  value: string;
  status: string;
}) {
  return (
    <div className="rounded-[1rem] border border-slate-200/80 bg-slate-50/80 px-3 py-3">
      <div className="flex flex-col items-start gap-2">
        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
          {label}
        </p>
        <div className="shrink-0">
          <DoctorStatusBadge status={normalizeStatus(status)} />
        </div>
      </div>
      <p className="mt-2 text-sm font-semibold text-slate-950">{value}</p>
    </div>
  );
}

function PreviewNarrative({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <div className="surface-inset rounded-[1.25rem] px-4 py-4">
      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600">
        {title}
      </p>
      <p className="mt-2 text-sm leading-6 text-slate-700">{body}</p>
    </div>
  );
}

function PreviewPrakrati({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[1rem] border border-slate-200/80 bg-slate-50/85 px-3 py-3">
      <div className="flex items-center justify-between gap-3">
        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-700">
          {label}
        </p>
        <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-semibold text-slate-700">
          {value}
        </span>
      </div>
    </div>
  );
}

function QuestionPreview({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  return (
    <div className="rounded-[1.15rem] border border-slate-200/80 bg-[linear-gradient(180deg,#ffffff_0%,#fbfdff_100%)] px-3 py-3 shadow-[0_12px_24px_rgba(100,116,139,0.05)]">
      <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-700">
        Q{index}
      </p>
      <p className="mt-1.5 text-sm font-semibold text-slate-950">{question}</p>
      <p className="mt-1.5 text-sm leading-6 text-slate-600">{answer}</p>
    </div>
  );
}

function InfoCard({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note?: string;
}) {
  return (
    <div className="rounded-[1.15rem] border border-slate-200/80 bg-[linear-gradient(180deg,#ffffff_0%,#fbfdff_100%)] px-3 py-3 shadow-[0_12px_24px_rgba(100,116,139,0.05)]">
      <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-700">
        {label}
      </p>
      <p className="mt-1.5 text-sm font-semibold leading-6 text-slate-950">
        {value}
      </p>
      {note ? (
        <p className="mt-1.5 text-xs leading-5 text-slate-500">{note}</p>
      ) : null}
    </div>
  );
}

function MetricCard({
  label,
  value,
  status,
}: {
  label: string;
  value: string;
  status: string;
}) {
  return (
    <div className="rounded-[1.15rem] border border-slate-200/80 bg-[linear-gradient(180deg,#ffffff_0%,#fbfdff_100%)] px-3 py-3 shadow-[0_12px_24px_rgba(100,116,139,0.05)]">
      <div className="flex items-center justify-between gap-2">
        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-700">
          {label}
        </p>
        <DoctorStatusBadge status={normalizeStatus(status)} />
      </div>
      <p className="mt-2 text-base font-semibold text-slate-950">{value}</p>
    </div>
  );
}

function normalizeStatus(status: string) {
  if (status === "Stable" || status === "Good") {
    return "Normal";
  }

  if (
    status === "Average" ||
    status === "Moderate" ||
    status === "Watch" ||
    status === "Observed"
  ) {
    return "Borderline";
  }

  return status;
}
