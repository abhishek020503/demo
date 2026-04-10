import DoctorSectionScaffold from "./DoctorSectionScaffold";
import { DoctorStatusBadge } from "./doctor-dashboard/DoctorDashboardCards";

type DeviceMetric = {
  label: string;
  value: string;
  status: string;
  note?: string;
};

export default function DoctorDeviceDataPage({
  title,
  subtitle,
  summary,
  metrics,
}: {
  title: string;
  subtitle: string;
  summary: string;
  metrics: DeviceMetric[];
}) {
  return (
    <DoctorSectionScaffold title={title} subtitle={subtitle}>
      <div className="grid gap-4 xl:grid-cols-[0.78fr_1.22fr]">
        <section className="surface-inset rounded-[1.5rem] px-4 py-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-700">
            Module Summary
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-700">{summary}</p>
        </section>

        <section className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
          {metrics.map((item) => (
            <div
              key={item.label}
              className="rounded-[1.15rem] border border-slate-200/85 bg-[linear-gradient(180deg,#ffffff_0%,#fbfdff_100%)] px-3 py-3 shadow-[0_12px_24px_rgba(100,116,139,0.07)]"
            >
              <div className="flex items-center justify-between gap-2">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-700">
                  {item.label}
                </p>
                <DoctorStatusBadge status={normalizeStatus(item.status)} />
              </div>
              <p className="mt-2 text-sm font-semibold text-slate-900">{item.value}</p>
              {item.note ? <p className="mt-1 text-xs leading-5 text-slate-500">{item.note}</p> : null}
            </div>
          ))}
        </section>
      </div>
    </DoctorSectionScaffold>
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
