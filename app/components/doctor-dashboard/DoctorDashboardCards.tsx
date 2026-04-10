import type { LucideIcon } from "lucide-react";
import {
  DOCTOR_NADI_ANALYSIS,
  DOCTOR_TONGUE_ANALYSIS,
  getDoctorClinicalNotes,
  getDoctorTrendConfig,
  getDoctorVitalVisual,
} from "./data";
import type { DoctorVitalItem } from "./types";

export function DoctorHeroMetricCard({
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
      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-700">{label}</p>
      <div className="mt-3 flex items-end gap-2">
        <span className="text-2xl font-bold text-slate-900">{value}</span>
        <span className="pb-1 text-sm font-medium text-slate-500">{unit}</span>
      </div>
    </div>
  );
}

export function DoctorMiniCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1rem] border border-white/70 bg-white/80 px-3 py-2.5">
      <p className="text-[10px] uppercase tracking-[0.14em] text-slate-500">{label}</p>
      <p className="mt-1 text-sm font-semibold text-slate-900">{value}</p>
    </div>
  );
}

export function DoctorPrakritiChip({
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

export function DoctorStatusStrip({
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

export function DoctorVitalCard({
  vital,
  index,
  isSelected,
  onSelect,
}: {
  vital: DoctorVitalItem;
  index: number;
  isSelected: boolean;
  onSelect: () => void;
}) {
  const visual = getDoctorVitalVisual(index);
  const iconLabel = vital.shortLabel.replace(/[^a-zA-Z0-9]/g, "").slice(0, 2).toUpperCase() || "VP";

  return (
    <button
      type="button"
      onClick={onSelect}
      className={`overflow-hidden rounded-[1.2rem] border p-3.5 text-left transition ${
        isSelected
          ? "border-sky-200 bg-[linear-gradient(135deg,#edf5ff_0%,#ffffff_100%)] text-slate-900 shadow-[0_18px_40px_rgba(100,116,139,0.12)]"
          : `bg-white shadow-sm hover:-translate-y-0.5 ${visual.cardClass}`
      }`}
    >
      <div className="flex items-start gap-3">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl text-[10px] font-bold tracking-wide ${
            isSelected ? "bg-sky-100 text-sky-800" : visual.iconClass
          }`}
        >
          {iconLabel}
        </div>
        <p className={`text-sm font-semibold leading-6 ${isSelected ? "text-slate-900" : "text-slate-900"}`}>
          {vital.title}
        </p>
      </div>

      <div className="mt-4 flex items-baseline gap-1">
        <span className={`text-2xl font-bold leading-none ${isSelected ? "text-slate-950" : "text-slate-900"}`}>
          {vital.value}
        </span>
        <span className={`text-sm ${isSelected ? "text-slate-500" : "text-slate-500"}`}>{vital.unit || "-"}</span>
      </div>

      <span
        className={`mt-3 inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold ${
          isSelected ? "bg-sky-100 text-sky-800" : visual.badgeClass
        }`}
      >
        {vital.status}
      </span>

      <svg viewBox="0 0 240 72" className="mt-3 h-10 w-full" aria-label={`${vital.title} trend`}>
        <path d={visual.areaPath} fill={isSelected ? "rgba(43,95,179,0.10)" : visual.areaFill} />
        <path
          d={visual.linePath}
          fill="none"
          stroke={isSelected ? "#2b5fb3" : visual.stroke}
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}

export function DoctorVitalDetailCard({ vital }: { vital: DoctorVitalItem }) {
  if (vital.slug === "nadi") {
    return <DoctorNadiAnalysisCard vital={vital} />;
  }

  if (vital.slug === "tongue-analysis") {
    return <DoctorTongueAnalysisCard vital={vital} />;
  }

  const trend = getDoctorTrendConfig(vital.slug);
  const notes = getDoctorClinicalNotes(vital.slug);

  return (
    <section className="glass-panel rounded-[1.6rem] p-4 md:p-5">
      <div className="grid gap-4 xl:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-4">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-700">
                Selected Vital
              </p>
              <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">{vital.title}</h2>
            </div>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold tracking-wide text-slate-700">
              {vital.shortLabel}
            </span>
          </div>

          <section className="surface-inset rounded-[1.3rem] p-4">
            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">Current Reading</p>
            <div className="mt-3 flex items-end gap-2">
              <span className="text-4xl font-bold leading-none text-slate-950">{vital.value}</span>
              <span className="pb-1 text-base font-medium text-slate-500">{vital.unit || "-"}</span>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600">{vital.description}</p>
          </section>

          <div className="grid gap-2.5 sm:grid-cols-3">
            <DoctorInfoBox label="Status" value={vital.status} />
            <DoctorInfoBox label="Normal Range" value={vital.normalRange} />
            <DoctorInfoBox label="Short Code" value={vital.shortLabel} />
          </div>
        </div>

        <div className="space-y-4">
          <section className="rounded-[1.3rem] border border-slate-200 bg-slate-50 p-3.5">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-700">
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
              <path d={trend.linePath} fill="none" stroke={trend.stroke} strokeWidth="3" strokeLinecap="round" />
            </svg>
          </section>

          <section className="grid gap-2.5 md:grid-cols-2">
            <DoctorNarrativeCard title="Clinical Notes" body={notes.clinical} />
            <DoctorNarrativeCard title="Suggested Follow-Up" body={notes.followUp} />
          </section>
        </div>
      </div>
    </section>
  );
}

function DoctorNadiAnalysisCard({ vital }: { vital: DoctorVitalItem }) {
  return (
    <section className="overflow-hidden rounded-[1.6rem] border border-emerald-200 bg-[linear-gradient(180deg,#f6fffb_0%,#ffffff_100%)] shadow-[0_16px_36px_rgba(100,116,139,0.08)]">
      <div className="border-b border-emerald-200/70 px-4 py-4 md:px-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Vikriti Analysis
            </p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">{vital.title}</h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">{DOCTOR_NADI_ANALYSIS.summary}</p>
          </div>
          <div className="surface-inset rounded-[1.2rem] px-4 py-3 shadow-sm">
            <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500">Pulse Quality</p>
            <p className="mt-2 text-lg font-semibold leading-6 text-slate-950">{DOCTOR_NADI_ANALYSIS.pulseQuality}</p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 px-4 py-4 md:px-5 md:py-5 xl:grid-cols-[1.1fr_0.9fr]">
        <section className="rounded-[1.3rem] border border-emerald-100 bg-white p-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Vikriti Graph</h3>
            <div className="flex flex-wrap gap-2 text-xs font-semibold">
              <span className="rounded-full bg-sky-100 px-3 py-1 text-sky-700">Vata</span>
              <span className="rounded-full bg-orange-100 px-3 py-1 text-orange-700">Pitta</span>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-emerald-700">Kapha</span>
            </div>
          </div>

          <svg viewBox="0 0 640 360" className="mt-4 h-72 w-full rounded-[1rem] bg-[#fffef8] p-3" aria-label="Vikriti analysis graph">
            <rect x="18" y="18" width="604" height="324" rx="14" fill="none" stroke="#e7e5e4" strokeWidth="2" />
            <path
              d="M45 286 L72 270 L100 278 L128 288 L156 276 L184 278 L212 316 L240 270 L268 212 L296 232 L324 274 L352 276 L380 290 L408 270 L436 252 L464 118 L492 88 L520 288 L548 246 L576 168 L604 242"
              fill="none"
              stroke="#1d74d7"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M45 132 L72 170 L100 76 L128 52 L156 126 L184 178 L212 112 L240 186 L268 184 L296 144 L324 144 L352 164 L380 106 L408 128 L436 198 L464 154 L492 118 L520 190 L548 202 L576 110 L604 116"
              fill="none"
              stroke="#d97706"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M45 248 L72 244 L100 244 L128 252 L156 182 L184 148 L212 230 L240 84 L268 24 L296 108 L324 166 L352 246 L380 136 L408 78 L436 202 L464 80 L492 58 L520 26 L548 254 L576 182 L604 74"
              fill="none"
              stroke="#0b7a22"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </section>

        <div className="space-y-4">
          <section className="grid gap-3 md:grid-cols-3 xl:grid-cols-1">
            <DoctorMetricPanel label="Vata" value={DOCTOR_NADI_ANALYSIS.vata} />
            <DoctorMetricPanel label="Pitta" value={DOCTOR_NADI_ANALYSIS.pitta} />
            <DoctorMetricPanel label="Kapha" value={DOCTOR_NADI_ANALYSIS.kapha} />
          </section>

          <DoctorNarrativeCard title="Clinical Note" body={DOCTOR_NADI_ANALYSIS.clinicalNote} />
          <DoctorNarrativeCard title="Observation" body={vital.description} />
        </div>
      </div>
    </section>
  );
}

function DoctorTongueAnalysisCard({ vital }: { vital: DoctorVitalItem }) {
  return (
    <section className="overflow-hidden rounded-[1.6rem] border border-amber-200 bg-[linear-gradient(180deg,#fffaf3_0%,#fffdf9_100%)] shadow-[0_16px_36px_rgba(100,116,139,0.08)]">
      <div className="border-b border-amber-200/70 px-4 py-4 md:px-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-700">
              Tongue Analysis
            </p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">{vital.title}</h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">{DOCTOR_TONGUE_ANALYSIS.about}</p>
          </div>
          <div className="surface-inset rounded-[1.2rem] px-4 py-3 shadow-sm">
            <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500">Score Out Of 5</p>
            <p className="mt-2 text-3xl font-bold leading-none text-slate-950">{DOCTOR_TONGUE_ANALYSIS.score}</p>
          </div>
        </div>
      </div>

      <div className="space-y-4 px-4 py-4 md:px-5 md:py-5">
        <section className="grid gap-3 md:grid-cols-3">
          <DoctorMetricPanel label="Dominant Dosha" value={DOCTOR_TONGUE_ANALYSIS.dominantDosha} />
          <DoctorMetricPanel label="Agni" value={DOCTOR_TONGUE_ANALYSIS.agni} />
          <DoctorMetricPanel label="Ama" value={DOCTOR_TONGUE_ANALYSIS.ama} />
        </section>

        <section className="rounded-[1.3rem] border border-amber-100 bg-white p-4">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Detailed Findings</h3>
            <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
              Dummy Data
            </span>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {DOCTOR_TONGUE_ANALYSIS.detailedFindings.map((item) => (
              <DoctorFindingBox key={item.label} label={item.label} value={item.value} />
            ))}
          </div>
        </section>

        <section className="grid gap-4 xl:grid-cols-[1.05fr_0.95fr]">
          <DoctorNarrativeCard title="Possible Causes" body={DOCTOR_TONGUE_ANALYSIS.possibleCauses.join(" ")} />
          <DoctorNarrativeCard title="Possible Risk" body={DOCTOR_TONGUE_ANALYSIS.possibleRisks.join(" ")} />
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <DoctorListCard title="Diet Do's" items={DOCTOR_TONGUE_ANALYSIS.dietDos} tone="emerald" />
          <DoctorListCard title="Diet Don'ts" items={DOCTOR_TONGUE_ANALYSIS.dietDonts} tone="rose" />
          <DoctorListCard title="Special Infusions" items={DOCTOR_TONGUE_ANALYSIS.specialInfusions} tone="amber" />
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <DoctorListCard title="Lifestyle Do's" items={DOCTOR_TONGUE_ANALYSIS.lifestyleDos} tone="sky" />
          <DoctorListCard title="Lifestyle Don'ts" items={DOCTOR_TONGUE_ANALYSIS.lifestyleDonts} tone="slate" />
        </section>
      </div>
    </section>
  );
}

export function DoctorNarrativeCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-[1.2rem] border border-slate-200 bg-white p-3.5 shadow-sm">
      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-700">{title}</p>
      <p className="mt-2.5 text-sm leading-6 text-slate-700">{body}</p>
    </div>
  );
}

export function DoctorInfoBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.1rem] border border-slate-200 bg-white p-3.5 shadow-sm shadow-slate-200/50">
      <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-700">{label}</p>
      <p className="mt-2 text-sm font-semibold leading-6 text-slate-900">{value}</p>
    </div>
  );
}

export function DoctorStatusBadge({ status }: { status: string }) {
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

function DoctorMetricPanel({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.2rem] border border-amber-200 bg-[linear-gradient(135deg,#fff7ed_0%,#ffffff_100%)] p-4">
      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-700">{label}</p>
      <p className="mt-2 text-lg font-semibold text-slate-900">{value}</p>
    </div>
  );
}

function DoctorFindingBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.1rem] border border-slate-200 bg-slate-50 p-3.5">
      <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-700">{label}</p>
      <p className="mt-2 text-sm font-semibold leading-6 text-slate-900">{value}</p>
    </div>
  );
}

function DoctorListCard({
  title,
  items,
  tone,
}: {
  title: string;
  items: string[];
  tone: "emerald" | "rose" | "amber" | "sky" | "slate";
}) {
  const toneClasses = {
    emerald: "border-emerald-200 bg-emerald-50/60",
    rose: "border-rose-200 bg-rose-50/60",
    amber: "border-amber-200 bg-amber-50/60",
    sky: "border-sky-200 bg-sky-50/60",
    slate: "border-slate-200 bg-slate-50",
  };

  return (
    <div className={`rounded-[1.2rem] border p-4 ${toneClasses[tone]}`}>
      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-700">{title}</p>
      <div className="mt-3 space-y-2.5">
        {items.map((item) => (
          <div key={item} className="rounded-xl bg-white/90 px-3 py-2.5 text-sm leading-6 text-slate-700">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
