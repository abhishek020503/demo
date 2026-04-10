import { DoctorVitalCard, DoctorVitalDetailCard } from "./DoctorDashboardCards";
import type { DoctorVitalItem } from "./types";

export default function DoctorVitalsPanel({
  displayedVitals,
  selectedVital,
  onSelectVital,
}: {
  displayedVitals: DoctorVitalItem[];
  selectedVital?: DoctorVitalItem;
  onSelectVital: (title: string) => void;
}) {
  return (
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
            <DoctorVitalCard
              key={vital.title}
              vital={vital}
              index={index}
              isSelected={selectedVital?.title === vital.title}
              onSelect={() => onSelectVital(vital.title)}
            />
          ))}
        </div>
      </section>

      {selectedVital && <DoctorVitalDetailCard vital={selectedVital} />}
    </div>
  );
}
