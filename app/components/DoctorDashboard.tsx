"use client";

import Link from "next/link";
import { useState } from "react";
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
import {
  Activity,
  ArrowUpRight,
  Brain,
  ChevronDown,
  HeartPulse,
  ScanLine,
  Smartphone,
  Waves,
} from "lucide-react";

type SectionId =
  | "biohack"
  | "watch"
  | "nadi"
  | "tongue"
  | "prakrati"
  | "questionnaires";

export default function DoctorDashboard() {
  const [openSection, setOpenSection] = useState<SectionId | null>(null);

  return (
    <DashboardShell headerActions={<DoctorNavbar />}>
      <section className="glass-panel rounded-[2rem] p-2 md:p-3">
        <div className="overflow-hidden rounded-[1.6rem] border border-slate-200/80 bg-white/92">
          <div className="grid gap-4 border-b border-slate-200/80 px-4 py-4 md:px-5 md:py-5 xl:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-slate-500">Overview</p>
              <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 md:text-[2rem]">
                Integrative opening dashboard
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                Compact clinical intake view with machine data, wearable signals, Nadi interpretation, tongue findings,
                prakrati detail, and questionnaire context.
              </p>
            </div>

            <div className="grid gap-2 sm:grid-cols-3 xl:grid-cols-1">
              <HeaderStat
                label="Modules On Screen"
                value="6"
                detail="Everything opens from one dashboard without changing source data."
              />
              <HeaderStat
                label="Tracked Signals"
                value={`${DOCTOR_BIOHACK_DATA.length + DOCTOR_SMARTWATCH_DATA.length + DOCTOR_NADI_DEVICE_DATA.length}`}
                detail="Bio Hack, Smart Watch, and Nadi metrics stay connected."
              />
              <HeaderStat
                label="Questionnaire Items"
                value={`${DOCTOR_QUESTIONNAIRE_RESPONSES.length}`}
                detail="Dummy answers stay available for the detailed review."
              />
            </div>
          </div>

          <div className="space-y-2 p-3 md:p-4">
            <OverviewSection
              sectionId="biohack"
              openSection={openSection}
              onToggle={setOpenSection}
              icon={ScanLine}
              title="Biohack Machine Data"
              subtitle="Machine-derived body and metabolic markers."
              count={`${DOCTOR_BIOHACK_DATA.length} metrics`}
            >
              <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-5">
                {DOCTOR_BIOHACK_DATA.map((item) => (
                  <MetricCard key={item.label} label={item.label} value={item.value} status={item.status} />
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
            >
              <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-3">
                {DOCTOR_SMARTWATCH_DATA.map((item) => (
                  <MetricCard key={item.label} label={item.label} value={item.value} status={item.status} />
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
            >
              <div className="grid gap-2 xl:grid-cols-[0.9fr_1.1fr]">
                <div className="surface-inset rounded-[1.35rem] px-4 py-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-700">Pulse Summary</p>
                  <p className="mt-2 text-base font-semibold text-slate-950">{DOCTOR_NADI_ANALYSIS.pulseQuality}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{DOCTOR_NADI_ANALYSIS.summary}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{DOCTOR_NADI_ANALYSIS.clinicalNote}</p>
                </div>
                <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-3">
                  {DOCTOR_NADI_DEVICE_DATA.map((item) => (
                    <InfoCard key={item.label} label={item.label} value={item.value} note={item.note} />
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
            >
              <div className="grid gap-2 xl:grid-cols-[0.88fr_1.12fr]">
                <div className="grid gap-2 md:grid-cols-3 xl:grid-cols-1">
                  <MetricCard label="Score" value={DOCTOR_TONGUE_ANALYSIS.score} status="Observed" />
                  <MetricCard label="Dominant Dosha" value={DOCTOR_TONGUE_ANALYSIS.dominantDosha} status="Observed" />
                  <MetricCard label="Agni" value={DOCTOR_TONGUE_ANALYSIS.agni} status="Watch" />
                  <MetricCard label="Ama" value={DOCTOR_TONGUE_ANALYSIS.ama} status="Observed" />
                </div>
                <div className="surface-inset rounded-[1.35rem] px-4 py-4">
                  <p className="text-sm leading-6 text-slate-700">{DOCTOR_TONGUE_ANALYSIS.about}</p>
                  <div className="mt-3 grid gap-2 md:grid-cols-2 xl:grid-cols-3">
                    {DOCTOR_TONGUE_ANALYSIS.detailedFindings.map((item) => (
                      <InfoCard key={item.label} label={item.label} value={item.value} />
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
                        <p className="mt-1 text-xs font-semibold text-slate-900">Detailed description</p>
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
                <Link
                  href="/doctor-prakriti-dosha"
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-700 transition hover:bg-slate-50"
                >
                  Open full prakrati page
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
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
            >
              <div className="grid gap-2">
                {DOCTOR_QUESTIONNAIRE_RESPONSES.map((item, index) => (
                  <div
                    key={item.question}
                    className="rounded-[1.15rem] border border-slate-200/80 bg-[linear-gradient(180deg,#ffffff_0%,#fbfdff_100%)] px-3 py-3 shadow-[0_12px_24px_rgba(100,116,139,0.05)]"
                  >
                    <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-700">Q{index + 1}</p>
                    <p className="mt-1.5 text-sm font-semibold text-slate-950">{item.question}</p>
                    <p className="mt-1.5 text-sm leading-6 text-slate-600">{item.answer}</p>
                  </div>
                ))}
              </div>
            </OverviewSection>
          </div>
        </div>
      </section>
    </DashboardShell>
  );
}

function HeaderStat({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <div className="surface-inset rounded-[1.3rem] px-4 py-3">
      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-slate-950">{value}</p>
      <p className="mt-1 text-xs leading-5 text-slate-600">{detail}</p>
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
  children,
}: {
  sectionId: SectionId;
  openSection: SectionId | null;
  onToggle: (sectionId: SectionId | null) => void;
  icon: typeof ScanLine;
  title: string;
  subtitle: string;
  count: string;
  children: React.ReactNode;
}) {
  const isOpen = openSection === sectionId;

  return (
    <section className="overflow-hidden rounded-[1.35rem] border border-slate-200/80 bg-white/90 shadow-[0_12px_24px_rgba(100,116,139,0.05)]">
      <button
        type="button"
        onClick={() => onToggle(isOpen ? null : sectionId)}
        className="flex w-full items-start gap-3 px-4 py-3 text-left transition hover:bg-slate-50/80"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-[1.1rem] bg-[linear-gradient(135deg,#eef5ff_0%,#ffffff_100%)] text-slate-700">
          <Icon className="h-4.5 w-4.5" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-sm font-semibold text-slate-950">{title}</h2>
            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-600">
              {count}
            </span>
          </div>
          <p className="mt-0.5 text-[12px] leading-5 text-slate-500">{subtitle}</p>
        </div>
        <ChevronDown className={`mt-1 h-4 w-4 shrink-0 text-slate-400 transition ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen ? <div className="border-t border-slate-200/80 px-4 py-4">{children}</div> : null}
    </section>
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
      <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-700">{label}</p>
      <p className="mt-1.5 text-sm font-semibold leading-6 text-slate-950">{value}</p>
      {note ? <p className="mt-1.5 text-xs leading-5 text-slate-500">{note}</p> : null}
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
        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-700">{label}</p>
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

  if (status === "Average" || status === "Moderate" || status === "Watch" || status === "Observed") {
    return "Borderline";
  }

  return status;
}
