"use client";

import { useState } from "react";
import type { Vital } from "../data/vitals";
import { VITALS } from "../data/vitals";

const TONGUE_ANALYSIS = {
  score: "4.1/5",
  dominantDosha: "Kapha",
  kapha: "Elevated expression",
  digestiveFire: "Manda Agni",
  detailedFindings: [
    { label: "Tongue Color", value: "Pale pink with slightly dusky center" },
    { label: "Tongue Coating", value: "Thick white coating over posterior third" },
    { label: "Midline Fissure", value: "Visible shallow fissure through central channel" },
    { label: "Surface Cracks", value: "Fine superficial cracks in mid-body region" },
    { label: "Tongue Margins", value: "Mild scalloping with soft edematous edges" },
  ],
  about:
    "Dummy tongue profile suggesting kapha predominance, digestive sluggishness, and mild ama accumulation pattern.",
  possibleCauses: [
    "Late heavy dinners and slow overnight digestion.",
    "Frequent cold beverages, curd, and fried foods.",
    "Low physical activity with prolonged sitting.",
    "Irregular hydration and inconsistent meal timing.",
  ],
  possibleRisk: [
    "Post-meal heaviness and recurrent bloating tendency.",
    "Progressive mucus accumulation and dull appetite rhythm.",
    "Reduced digestive efficiency with sluggish metabolism pattern.",
  ],
  dietDos: [
    "Prefer warm, light meals with ginger, cumin, and black pepper.",
    "Use moong soup, lightly spiced khichdi, and steamed vegetables.",
    "Start the day with warm water and digestive herbs.",
  ],
  dietDonts: [
    "Avoid iced drinks, curd at night, cheese, and deep-fried foods.",
    "Reduce refined sweets and heavy wheat-based dinners.",
    "Do not combine fruit with milk or dense meals.",
  ],
  lifestyleDos: [
    "Walk 15-20 minutes after lunch and dinner.",
    "Keep fixed meal timings and eat dinner earlier.",
    "Use tongue scraping and morning oil pulling routinely.",
  ],
  lifestyleDonts: [
    "Avoid daytime sleep after meals.",
    "Do not skip breakfast and overeat at lunch.",
    "Avoid long sedentary screen sessions after dinner.",
  ],
  specialInfusions: [
    "Coriander-fennel-cumin warm infusion twice daily.",
    "Tulsi-dry ginger infusion in the morning.",
    "Ajwain-jeera post-meal sip on bloating-prone days.",
  ],
};

const NADI_ANALYSIS = {
  summary:
    "Dummy vikriti analysis showing fluctuating kapha-pitta dominance with intermittent vata spikes.",
  vata: "Variable, reactive",
  pitta: "Moderately elevated",
  kapha: "Dominant",
  pulseQuality: "Heavy, slightly slippery, warm in mid-cycle",
  clinicalNote:
    "Pattern suggests kapha-pitta aggravation with episodic vata variability linked with irregular routine and digestive load.",
};

export default function AllopathyPanel({
  vitals = VITALS,
}: {
  vitals?: Vital[];
}) {
  const [selectedSlug, setSelectedSlug] = useState(vitals[0]?.slug ?? "");
  const selectedVital =
    vitals.find((vital) => vital.slug === selectedSlug) ?? vitals[0];
  const trend = getTrendConfig(selectedVital.slug);
  const notes = getClinicalNotes(selectedVital.slug);

  return (
    <div className="overflow-x-hidden">
      <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
        Vital Parameters
      </h3>
      <div className="mt-4 w-full overflow-x-auto overscroll-x-contain pb-2">
        <div className="flex min-w-max gap-3 pr-1">
          {vitals.map((vital, index) => (
            <VitalParameterCard
              key={vital.slug}
              vital={vital}
              index={index}
              isSelected={selectedVital.slug === vital.slug}
              onSelect={setSelectedSlug}
            />
          ))}
        </div>
      </div>

      {selectedVital && selectedVital.slug === "nadi" ? (
        <NadiAnalysisDetail vital={selectedVital} />
      ) : selectedVital && selectedVital.slug === "tongue-analysis" ? (
        <TongueAnalysisDetail vital={selectedVital} />
      ) : (
      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              Allopathy Vital Detail
            </p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              {selectedVital.title}
            </h2>
          </div>
          <span className="rounded-full border border-slate-300 bg-slate-100 px-3 py-1 text-xs font-bold tracking-wide text-slate-700">
            {selectedVital.shortLabel}
          </span>
        </div>

        <section className="mt-5 rounded-xl border border-slate-200 bg-gradient-to-r from-slate-50 to-white p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            Current Reading
          </p>
          <div className="mt-2 flex items-end gap-2">
            <span className="text-4xl font-bold leading-none text-slate-900">
              {selectedVital.value}
            </span>
            <span className="pb-1 text-base font-medium text-slate-500">
              {selectedVital.unit || "-"}
            </span>
          </div>
        </section>

        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <InfoBox label="Status" value={selectedVital.status} />
          <InfoBox label="Normal Range" value={selectedVital.normalRange} />
          <InfoBox label="Short Code" value={selectedVital.shortLabel} />
        </div>

        <section className="mt-5 rounded-xl border border-slate-200 bg-white p-4">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              7 Day Trend (Dummy)
            </h2>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
              Last 7 Days
            </span>
          </div>
          <svg
            viewBox="0 0 480 170"
            className="mt-3 h-36 w-full rounded-xl border border-slate-100 bg-slate-50 p-2"
            aria-label={`${selectedVital.title} trend graph`}
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

        <section className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4">
          <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            Description
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            {selectedVital.description}
          </p>
        </section>

        <section className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              Clinical Notes
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-700">{notes.clinical}</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              Suggested Follow-Up
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-700">{notes.followUp}</p>
          </div>
        </section>
      </section>
      )}
    </div>
  );
}

function NadiAnalysisDetail({
  vital,
}: {
  vital: (typeof VITALS)[number];
}) {
  return (
    <section className="mt-6 overflow-hidden rounded-2xl border border-emerald-200 bg-[linear-gradient(180deg,#f6fffb_0%,#ffffff_100%)] shadow-sm">
      <div className="border-b border-emerald-200/70 px-5 py-5 md:px-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700">
              Vikriti Analysis
            </p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              {vital.title}
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700">{NADI_ANALYSIS.summary}</p>
          </div>
          <div className="rounded-2xl bg-slate-900 px-4 py-3 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-300">Pulse Quality</p>
            <p className="mt-2 text-lg font-semibold leading-6">{NADI_ANALYSIS.pulseQuality}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 px-5 py-5 md:px-6 xl:grid-cols-[1.1fr_0.9fr]">
        <section className="rounded-xl border border-emerald-100 bg-white p-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              Vikriti Graph
            </h3>
            <div className="flex flex-wrap gap-2 text-xs font-semibold">
              <span className="rounded-full bg-sky-100 px-3 py-1 text-sky-700">Vata</span>
              <span className="rounded-full bg-orange-100 px-3 py-1 text-orange-700">Pitta</span>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-emerald-700">Kapha</span>
            </div>
          </div>

          <svg viewBox="0 0 640 360" className="mt-4 h-72 w-full rounded-xl bg-[#fffef8] p-3" aria-label="Vikriti analysis graph">
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

        <div className="space-y-3">
          <InfoBox label="Vata" value={NADI_ANALYSIS.vata} />
          <InfoBox label="Pitta" value={NADI_ANALYSIS.pitta} />
          <InfoBox label="Kapha" value={NADI_ANALYSIS.kapha} />
          <NarrativeBox title="Clinical Note" body={NADI_ANALYSIS.clinicalNote} />
          <NarrativeBox title="Observation" body={vital.description} />
        </div>
      </div>
    </section>
  );
}

function TongueAnalysisDetail({
  vital,
}: {
  vital: (typeof VITALS)[number];
}) {
  return (
    <section className="mt-6 overflow-hidden rounded-2xl border border-amber-200 bg-[linear-gradient(180deg,#fffaf3_0%,#fffdf9_100%)] shadow-sm">
      <div className="border-b border-amber-200/70 px-5 py-5 md:px-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-700">
              Vital Detail
            </p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              {vital.title}
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700">{TONGUE_ANALYSIS.about}</p>
          </div>
          <div className="rounded-2xl bg-slate-900 px-4 py-3 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-300">Score Out Of 5</p>
            <p className="mt-2 text-3xl font-bold leading-none">{TONGUE_ANALYSIS.score}</p>
          </div>
        </div>
      </div>

      <div className="space-y-5 px-5 py-5 md:px-6">
        <section className="grid grid-cols-1 gap-3 md:grid-cols-3">
          <InfoBox label="Dominant Dosha" value={TONGUE_ANALYSIS.dominantDosha} />
          <InfoBox label="Kapha" value={TONGUE_ANALYSIS.kapha} />
          <InfoBox label="Digestive Fire" value={TONGUE_ANALYSIS.digestiveFire} />
        </section>

        <section className="rounded-xl border border-amber-100 bg-white p-4">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              Detailed Findings
            </h3>
            <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
              Dummy Data
            </span>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-5">
            {TONGUE_ANALYSIS.detailedFindings.map((item) => (
              <InfoBox key={item.label} label={item.label} value={item.value} />
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <NarrativeBox title="Possible Causes" body={TONGUE_ANALYSIS.possibleCauses.join(" ")} />
          <NarrativeBox title="Possible Risk" body={TONGUE_ANALYSIS.possibleRisk.join(" ")} />
        </section>

        <section className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
          <ListBox title="Diet Do's" items={TONGUE_ANALYSIS.dietDos} />
          <ListBox title="Diet Don'ts" items={TONGUE_ANALYSIS.dietDonts} />
          <ListBox title="Special Infusions" items={TONGUE_ANALYSIS.specialInfusions} />
        </section>

        <section className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <ListBox title="Lifestyle Do's" items={TONGUE_ANALYSIS.lifestyleDos} />
          <ListBox title="Lifestyle Don'ts" items={TONGUE_ANALYSIS.lifestyleDonts} />
        </section>
      </div>
    </section>
  );
}

function VitalParameterCard({
  vital,
  index,
  isSelected,
  onSelect,
}: {
  vital: (typeof VITALS)[number];
  index: number;
  isSelected: boolean;
  onSelect: (slug: string) => void;
}) {
  const visual = getVitalVisual(index);
  const iconLabel =
    vital.shortLabel.replace(/[^a-zA-Z0-9]/g, "").slice(0, 2).toUpperCase() || "VP";

  return (
    <button
      type="button"
      onClick={() => onSelect(vital.slug)}
      className={`group w-48 shrink-0 overflow-hidden rounded-xl border p-3 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${visual.cardClass} ${
        isSelected ? "ring-2 ring-slate-300" : ""
      }`}
    >
      <div className="flex items-start gap-2">
        <div
          className={`flex h-9 w-9 items-center justify-center rounded-lg text-[10px] font-bold tracking-wide ${visual.iconClass}`}
        >
          {iconLabel}
        </div>
        <p className="text-sm font-semibold leading-5 text-slate-900">{vital.title}</p>
      </div>

      <div className="mt-3 flex items-baseline gap-1">
        <span className="text-2xl font-semibold leading-none text-slate-900">
          {vital.value}
        </span>
        <span className="text-sm text-slate-500">{vital.unit || "-"}</span>
      </div>

      <span
        className={`mt-2 inline-flex rounded-md px-2 py-0.5 text-[11px] font-medium ${visual.badgeClass}`}
      >
        {vital.status}
      </span>

      <svg
        viewBox="0 0 240 72"
        className="mt-2 h-10 w-full"
        aria-label={`${vital.title} trend`}
      >
        <path d={visual.areaPath} fill={visual.areaFill} />
        <path
          d={visual.linePath}
          fill="none"
          stroke={visual.stroke}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}

function getVitalVisual(index: number) {
  const styles = [
    {
      cardClass: "border-slate-200 bg-white",
      iconClass: "bg-amber-100 text-amber-700",
      badgeClass: "bg-amber-100 text-amber-700",
      stroke: "#d97706",
      areaFill: "rgba(217,119,6,0.12)",
      linePath: "M0 57 C24 38, 44 24, 72 40 C100 56, 126 10, 154 26 C182 40, 210 48, 240 32",
      areaPath:
        "M0 57 C24 38, 44 24, 72 40 C100 56, 126 10, 154 26 C182 40, 210 48, 240 32 L240 72 L0 72 Z",
    },
    {
      cardClass: "border-slate-200 bg-white",
      iconClass: "bg-rose-100 text-rose-700",
      badgeClass: "bg-rose-100 text-rose-700",
      stroke: "#e11d48",
      areaFill: "rgba(225,29,72,0.12)",
      linePath: "M0 40 C20 30, 40 28, 62 44 C86 64, 110 22, 134 20 C156 18, 178 30, 202 24 C220 20, 232 16, 240 12",
      areaPath:
        "M0 40 C20 30, 40 28, 62 44 C86 64, 110 22, 134 20 C156 18, 178 30, 202 24 C220 20, 232 16, 240 12 L240 72 L0 72 Z",
    },
    {
      cardClass: "border-slate-200 bg-white",
      iconClass: "bg-cyan-100 text-cyan-700",
      badgeClass: "bg-cyan-100 text-cyan-700",
      stroke: "#0891b2",
      areaFill: "rgba(8,145,178,0.13)",
      linePath: "M0 34 C18 52, 44 56, 66 28 C88 0, 112 20, 140 18 C168 16, 188 10, 210 16 C224 20, 234 32, 240 40",
      areaPath:
        "M0 34 C18 52, 44 56, 66 28 C88 0, 112 20, 140 18 C168 16, 188 10, 210 16 C224 20, 234 32, 240 40 L240 72 L0 72 Z",
    },
  ];

  return styles[index % styles.length];
}

function InfoBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm shadow-slate-200/60">
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
        {label}
      </p>
      <p className="mt-1 text-sm font-semibold text-slate-900">{value}</p>
    </div>
  );
}

function NarrativeBox({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-slate-700">{body}</p>
    </div>
  );
}

function ListBox({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
        {title}
      </h3>
      <div className="mt-3 space-y-2">
        {items.map((item) => (
          <div key={item} className="rounded-lg bg-slate-50 px-3 py-2 text-sm leading-7 text-slate-700">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function getTrendConfig(slug: string) {
  const configs: Record<
    string,
    { linePath: string; areaPath: string; stroke: string; areaFill: string }
  > = {
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
    nadi: {
      linePath:
        "M10 112 C60 102, 110 94, 160 106 C210 118, 260 96, 310 88 C360 94, 410 84, 470 92",
      areaPath:
        "M10 112 C60 102, 110 94, 160 106 C210 118, 260 96, 310 88 C360 94, 410 84, 470 92 L470 165 L10 165 Z",
      stroke: "#0f766e",
      areaFill: "rgba(15,118,110,0.12)",
    },
    "tongue-analysis": {
      linePath:
        "M10 106 C60 94, 110 98, 160 92 C210 86, 260 90, 310 84 C360 78, 410 82, 470 76",
      areaPath:
        "M10 106 C60 94, 110 98, 160 92 C210 86, 260 90, 310 84 C360 78, 410 82, 470 76 L470 165 L10 165 Z",
      stroke: "#9f1239",
      areaFill: "rgba(159,18,57,0.12)",
    },
    sleep: {
      linePath:
        "M10 132 C60 115, 110 140, 160 120 C210 102, 260 128, 310 108 C360 95, 410 104, 470 90",
      areaPath:
        "M10 132 C60 115, 110 140, 160 120 C210 102, 260 128, 310 108 C360 95, 410 104, 470 90 L470 165 L10 165 Z",
      stroke: "#4338ca",
      areaFill: "rgba(67,56,202,0.12)",
    },
    "ecg-rhythm": {
      linePath:
        "M10 100 L70 100 L85 80 L92 118 L102 62 L115 126 L130 100 L200 100 L215 82 L225 120 L240 72 L252 124 L268 100 L340 100 L355 82 L365 120 L380 72 L392 124 L410 100 L470 100",
      areaPath:
        "M10 100 L70 100 L85 80 L92 118 L102 62 L115 126 L130 100 L200 100 L215 82 L225 120 L240 72 L252 124 L268 100 L340 100 L355 82 L365 120 L380 72 L392 124 L410 100 L470 100 L470 165 L10 165 Z",
      stroke: "#dc2626",
      areaFill: "rgba(220,38,38,0.08)",
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
        "Track morning and evening readings for one week; if average systolic stays above target, discuss medication/lifestyle adjustment.",
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
        "Retest with same protocol monthly; combine with resting HR and exercise tolerance for a complete fitness profile.",
    },
    nadi: {
      clinical:
        "Vikriti graph indicates kapha-pitta loading with periodic vata swings in this dummy pulse assessment.",
      followUp:
        "Repeat nadi review after digestive correction, meal timing regularization, and improved sleep routine.",
    },
    "tongue-analysis": {
      clinical:
        "Tongue findings suggest kapha-dominant coating with mild fissuring and digestive sluggishness in this dummy profile.",
      followUp:
        "Review after dietary correction, warm infusions, and morning fasting observation over the next 2-3 weeks.",
    },
    sleep: {
      clinical:
        "Sleep duration trend is variable and below ideal target on multiple days in this sample.",
      followUp:
        "Aim for consistent sleep window, reduce late caffeine/screens, and reassess weekly trend alongside daytime energy.",
    },
    "ecg-rhythm": {
      clinical:
        "Rhythm sample demonstrates regular sinus-pattern intervals in this dummy display without obvious irregularity.",
      followUp:
        "If palpitations, syncope, or chest symptoms occur, correlate with formal ECG/ambulatory monitoring and clinician review.",
    },
  };

  return notes[slug] ?? notes.hr;
}
