type EmployeeVitalItem = {
  slug: string;
  shortLabel: string;
  title: string;
  value: string;
  unit: string;
  status: string;
  normalRange: string;
  description: string;
};

export default function EmployeeVitalsPanel({
  displayedVitals,
  selectedVital,
  onSelectVital,
}: {
  displayedVitals: EmployeeVitalItem[];
  selectedVital?: EmployeeVitalItem;
  onSelectVital: (title: string) => void;
}) {
  return (
    <div className="space-y-4">
      <section className="rounded-[1.6rem] border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Employee Vitals
            </p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">
              Wellness Parameters
            </h2>
          </div>
          <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
            {displayedVitals.length} signals
          </div>
        </div>

        <div className="mt-4 grid gap-2.5 md:grid-cols-2 xl:grid-cols-4">
          {displayedVitals.map((vital) => (
            <button
              key={vital.title}
              type="button"
              onClick={() => onSelectVital(vital.title)}
              className={`rounded-[1.2rem] border p-3.5 text-left transition ${
                selectedVital?.title === vital.title
                  ? "border-slate-900 bg-slate-900 text-white shadow-[0_18px_45px_rgba(15,23,42,0.18)]"
                  : "border-slate-200 bg-white shadow-sm hover:-translate-y-0.5"
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl text-[10px] font-bold tracking-wide ${
                    selectedVital?.title === vital.title
                      ? "bg-white/12 text-white"
                      : "bg-slate-100 text-slate-700"
                  }`}
                >
                  {vital.shortLabel.replace(/[^a-zA-Z0-9]/g, "").slice(0, 2).toUpperCase()}
                </div>
                <p className="text-sm font-semibold leading-6">{vital.title}</p>
              </div>

              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-2xl font-bold leading-none">{vital.value}</span>
                <span className={selectedVital?.title === vital.title ? "text-slate-300" : "text-slate-500"}>
                  {vital.unit || "-"}
                </span>
              </div>

              <span
                className={`mt-3 inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                  selectedVital?.title === vital.title
                    ? "bg-white/12 text-slate-100"
                    : "bg-slate-100 text-slate-700"
                }`}
              >
                {vital.status}
              </span>
            </button>
          ))}
        </div>
      </section>

      {selectedVital ? (
        <section className="rounded-[1.6rem] border border-slate-200 bg-white p-4 shadow-sm md:p-5">
          <div className="grid gap-4 xl:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Selected Vital
                </p>
                <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">
                  {selectedVital.title}
                </h2>
              </div>

              <section className="rounded-[1.3rem] bg-[linear-gradient(135deg,#0f172a_0%,#1e293b_100%)] p-4 text-white">
                <p className="text-[11px] uppercase tracking-[0.18em] text-slate-300">Current Reading</p>
                <div className="mt-3 flex items-end gap-2">
                  <span className="text-4xl font-bold leading-none">{selectedVital.value}</span>
                  <span className="pb-1 text-base font-medium text-slate-300">
                    {selectedVital.unit || "-"}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-300">{selectedVital.description}</p>
              </section>
            </div>

            <div className="grid gap-2.5 sm:grid-cols-3 xl:grid-cols-1">
              <InfoBox label="Status" value={selectedVital.status} />
              <InfoBox label="Normal Range" value={selectedVital.normalRange} />
              <InfoBox label="Short Code" value={selectedVital.shortLabel} />
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}

function InfoBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.1rem] border border-slate-200 bg-white p-3.5 shadow-sm shadow-slate-200/50">
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">{label}</p>
      <p className="mt-2 text-sm font-semibold leading-6 text-slate-900">{value}</p>
    </div>
  );
}
