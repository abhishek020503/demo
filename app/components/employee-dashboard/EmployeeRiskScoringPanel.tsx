import {
  EMPLOYEE_RISK_SCORES,
  EMPLOYEE_RISK_SUMMARY,
} from "./data";

function getRiskClasses(level: string) {
  if (level === "Moderate") {
    return "border-amber-200 bg-amber-50/70 text-amber-800";
  }

  if (level === "High") {
    return "border-rose-200 bg-rose-50/70 text-rose-800";
  }

  return "border-emerald-200 bg-emerald-50/70 text-emerald-800";
}

export default function EmployeeRiskScoringPanel() {
  return (
    <div className="space-y-4">
      <section className="rounded-[1.7rem] border border-slate-200 bg-[linear-gradient(135deg,#f8fbff_0%,#eef6ff_52%,#ffffff_100%)] p-5 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
              Risk Scoring
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
              Employee Health Risk Snapshot
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
              Dummy employee-friendly risk view showing where to pay attention next, without
              forcing a clinical interpretation style.
            </p>
          </div>
          <div className="rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700">
            Wellness-first view
          </div>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {EMPLOYEE_RISK_SUMMARY.map((item) => (
            <section
              key={item.label}
              className="rounded-[1.2rem] border border-slate-200 bg-white/90 p-4 shadow-sm"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                {item.label}
              </p>
              <p className="mt-3 text-2xl font-semibold text-slate-900">{item.value}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</p>
            </section>
          ))}
        </div>
      </section>

      <section className="rounded-[1.6rem] border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Score Cards
            </p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">
              Six Core Risk Areas
            </h2>
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {EMPLOYEE_RISK_SCORES.map((item) => (
            <section
              key={item.label}
              className="rounded-[1.25rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] p-4"
            >
              <div className="flex items-start justify-between gap-3">
                <p className="text-base font-semibold text-slate-900">{item.label}</p>
                <span
                  className={`rounded-full border px-3 py-1 text-[11px] font-semibold ${getRiskClasses(item.level)}`}
                >
                  {item.level}
                </span>
              </div>

              <div className="mt-4 flex items-end gap-2">
                <span className="text-4xl font-bold text-slate-900">{item.score}</span>
                <span className="pb-1 text-sm text-slate-500">estimated risk</span>
              </div>

              <div className="mt-4 h-2 rounded-full bg-slate-100">
                <div
                  className={`h-2 rounded-full ${
                    item.level === "Moderate"
                      ? "bg-amber-400"
                      : item.level === "High"
                        ? "bg-rose-400"
                        : "bg-emerald-400"
                  }`}
                  style={{ width: item.score }}
                />
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-600">{item.detail}</p>

              <div className="mt-4 rounded-[1rem] border border-slate-200 bg-white px-3 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                  What To Do
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-700">{item.action}</p>
              </div>
            </section>
          ))}
        </div>
      </section>
    </div>
  );
}
