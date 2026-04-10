"use client";

import type { LucideIcon } from "lucide-react";
import { Activity, Brain, Heart, Info, ScanSearch, Target, Wind } from "lucide-react";

type Marker = {
  label: string;
  value: string;
  icon: LucideIcon;
  dotPosition: string;
  cardPosition: string;
  linePosition: string;
  active?: boolean;
};

const MARKERS: Marker[] = [
  {
    label: "Brain",
    value: "High focus",
    icon: Brain,
    dotPosition: "left-[44%] top-[6%]",
    cardPosition: "left-[9%] top-[4%]",
    linePosition: "left-[28%] top-[11%] w-[16%]",
  },
  {
    label: "Heart",
    value: "72 BPM",
    icon: Heart,
    dotPosition: "left-[52%] top-[27%]",
    cardPosition: "right-[7%] top-[22%]",
    linePosition: "right-[20%] top-[32%] w-[22%]",
    active: true,
  },
  {
    label: "Lungs",
    value: "98% O2",
    icon: Wind,
    dotPosition: "left-[43%] top-[24%]",
    cardPosition: "left-[5%] top-[23%]",
    linePosition: "left-[20%] top-[29%] w-[23%]",
  },
  {
    label: "Core",
    value: "Stable",
    icon: Activity,
    dotPosition: "left-[48%] top-[44%]",
    cardPosition: "right-[8%] top-[43%]",
    linePosition: "right-[22%] top-[49%] w-[18%]",
  },
  {
    label: "Joint",
    value: "Healthy",
    icon: Target,
    dotPosition: "left-[41%] top-[75%]",
    cardPosition: "left-[7%] top-[72%]",
    linePosition: "left-[19%] top-[80%] w-[22%]",
  },
];

const METRICS = [
  { label: "Height", value: "190 cm" },
  { label: "Weight", value: "90 kg" },
  { label: "Chest", value: "102 cm" },
  { label: "Body Fat", value: "18%" },
];

export default function DoctorBodyMeasurements() {
  return (
    <div className="mx-auto max-w-[96rem] rounded-[2rem] bg-[#dfe5f3] p-3.5 text-slate-900 shadow-[0_24px_60px_rgba(100,116,139,0.18)] md:p-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-slate-500/80">
            Biometric Interface
          </p>
          <h3 className="mt-1 text-2xl font-black tracking-tight text-slate-900 md:text-3xl">
            Anatomical Mapping
          </h3>
          <p className="mt-1.5 max-w-xl text-sm text-slate-600">
            Compact biometric mapping without a photo reference.
          </p>
        </div>

        <div className="flex gap-2">
          <span className="rounded-full bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-slate-600 shadow-sm">
            Front view
          </span>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-700 shadow-sm transition hover:bg-slate-50"
            aria-label="Inspect anatomy image"
          >
            <ScanSearch size={18} />
          </button>
        </div>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,1.95fr)_13rem]">
        <div className="relative overflow-hidden rounded-[2.2rem] border border-white/50 bg-[radial-gradient(circle_at_top,#f7faff_0%,#e0e8f7_42%,#d0daef_100%)] px-3 pb-4 pt-3 shadow-inner md:px-4">
          <div className="pointer-events-none absolute left-1/2 top-2 h-24 w-56 -translate-x-1/2 rounded-full bg-white/70 blur-3xl" />
          <div className="pointer-events-none absolute inset-x-8 bottom-10 h-px rounded-full bg-slate-500/20" />

          <div className="relative mx-auto h-[44rem] w-full max-w-[54rem]">
            <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),transparent_70%)]" />

            <div className="absolute inset-[10%_28%_8%_28%] z-0 rounded-[999px] bg-[linear-gradient(180deg,rgba(255,255,255,0.95)_0%,rgba(226,232,240,0.88)_100%)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.75)]" />
            <div className="absolute left-1/2 top-[12%] z-0 h-24 w-24 -translate-x-1/2 rounded-full bg-[linear-gradient(180deg,#ffffff_0%,#e2e8f0_100%)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.85)]" />
            <div className="absolute left-1/2 top-[24%] z-0 h-[48%] w-[2px] -translate-x-1/2 bg-slate-300/80" />
            <div className="absolute left-[32%] right-[32%] top-[28%] z-0 h-[2px] bg-slate-300/80" />
            <div className="absolute left-[35%] right-[35%] top-[45%] z-0 h-[2px] bg-slate-300/60" />
            <div className="absolute left-[34%] top-[29%] z-0 h-[26%] w-[2px] rotate-[22deg] bg-slate-300/70 origin-top" />
            <div className="absolute right-[34%] top-[29%] z-0 h-[26%] w-[2px] -rotate-[22deg] bg-slate-300/70 origin-top" />
            <div className="absolute left-[42%] top-[56%] z-0 h-[26%] w-[2px] rotate-[14deg] bg-slate-300/70 origin-top" />
            <div className="absolute right-[42%] top-[56%] z-0 h-[26%] w-[2px] -rotate-[14deg] bg-slate-300/70 origin-top" />
            <div className="absolute inset-x-[30%] bottom-[10%] z-0 rounded-full border border-dashed border-slate-300/70 px-4 py-2 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
              abstract biometric map
            </div>

            {MARKERS.map(({ label, value, icon: Icon, dotPosition, cardPosition, linePosition, active }) => (
              <div key={label}>
                <div className={`pointer-events-none absolute h-px bg-white/90 ${linePosition}`} />
                <div
                  className={`absolute z-20 flex h-11 w-11 items-center justify-center rounded-full border ${
                    active
                      ? "border-blue-400/70 bg-blue-600 text-white shadow-[0_16px_34px_rgba(37,99,235,0.38)]"
                      : "border-white/70 bg-white/92 text-slate-700 shadow-xl shadow-slate-300/35"
                  } ${dotPosition}`}
                >
                  <Icon size={18} strokeWidth={2.5} />
                </div>
                <div
                  className={`absolute z-10 rounded-2xl border border-white/80 bg-white/92 px-4 py-3 shadow-xl backdrop-blur-md ${cardPosition}`}
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                    {label}
                  </p>
                  <p className={`mt-1 text-sm font-bold ${active ? "text-blue-700" : "text-slate-900"}`}>
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="rounded-[1.4rem] border border-white/60 bg-white/65 p-3.5 shadow-xl backdrop-blur-xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Measurements</p>
            <div className="mt-3 grid gap-2.5">
              {METRICS.map((item) => (
                <div key={item.label} className="rounded-[1rem] border border-white/70 bg-white/75 px-3 py-2.5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                    {item.label}
                  </p>
                  <p className="mt-1 text-lg font-bold text-slate-900">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.4rem] border border-white/60 bg-white/50 p-3.5 shadow-lg backdrop-blur-md">
            <p className="px-2 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Labels</p>
            <div className="mt-3 space-y-2.5">
              <DoctorSidebarRow icon={Brain} label="Brain" value="Cognitive focus" />
              <DoctorSidebarRow icon={Heart} label="Heart" value="Pulse marker" />
              <DoctorSidebarRow icon={Info} label="Overlay" value="Abstract body mapping" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DoctorSidebarRow({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white/70 px-3 py-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-slate-700">
        <Icon size={18} />
      </div>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">{label}</p>
        <p className="text-sm font-bold text-slate-900">{value}</p>
      </div>
    </div>
  );
}
