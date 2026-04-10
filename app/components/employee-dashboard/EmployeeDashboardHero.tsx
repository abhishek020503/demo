import {
  EMPLOYEE_BASIC_DETAILS,
  EMPLOYEE_HISTORY,
  EMPLOYEE_OVERVIEW_STRIPS,
  EMPLOYEE_SUMMARY_METRICS,
} from "./data";
import {
  EmployeeHeroMetricCard,
  EmployeeMiniCard,
  EmployeeStatusStrip,
} from "./EmployeeDashboardCards";

export default function EmployeeDashboardHero() {
  return (
    <section className="rounded-[2rem] bg-[radial-gradient(circle_at_top_left,#f7fbff_0%,#ebf3ff_45%,#dbe8f5_100%)] p-4 text-slate-900 shadow-[0_24px_70px_rgba(148,163,184,0.18)] md:p-5">
      <div className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500/80">
                Employee Wellness Console
              </p>
              <h1 className="mt-1 text-3xl font-bold tracking-tight md:text-4xl">
                Riya Mehta
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                Employee-facing health workspace for wellbeing monitoring, work routine indicators,
                and preventive biometric review.
              </p>
            </div>

            <div className="rounded-[1.25rem] border border-white/70 bg-white/75 px-3 py-2.5 backdrop-blur">
              <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Status</p>
              <p className="mt-1 text-lg font-semibold text-slate-900">Wellness Monitoring</p>
              <p className="mt-1 text-xs text-slate-500">Last updated March 12, 2026</p>
            </div>
          </div>

          <div className="grid gap-2.5 sm:grid-cols-2 xl:grid-cols-4">
            {EMPLOYEE_SUMMARY_METRICS.map((item) => (
              <EmployeeHeroMetricCard key={item.label} {...item} />
            ))}
          </div>

          <div className="grid gap-3 lg:grid-cols-[1.1fr_0.9fr]">
            <section className="rounded-[1.6rem] border border-white/70 bg-white/60 p-3.5 backdrop-blur">
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500/80">
                  Employee Card
                </p>
                <p className="mt-1 text-xl font-semibold text-slate-900">Profile Snapshot</p>
              </div>
              <div className="mt-3 grid gap-2.5 sm:grid-cols-2 xl:grid-cols-4">
                {EMPLOYEE_BASIC_DETAILS.map((item) => (
                  <EmployeeMiniCard key={item.label} label={item.label} value={item.value} />
                ))}
              </div>
            </section>

            <section className="rounded-[1.6rem] border border-white/70 bg-white/60 p-3.5 backdrop-blur">
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500/80">
                  Wellness Notes
                </p>
                <p className="mt-1 text-xl font-semibold text-slate-900">Focus Areas</p>
              </div>
              <div className="mt-3 space-y-2.5">
                {EMPLOYEE_HISTORY.map((entry) => (
                  <div key={entry.label} className="rounded-[1rem] border border-white/70 bg-white px-3 py-2.5">
                    <p className="text-xs font-semibold text-slate-900">{entry.label}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-600">{entry.value}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        <div className="grid gap-2.5 grid-cols-1 sm:grid-cols-2 xl:grid-cols-2">
          {EMPLOYEE_OVERVIEW_STRIPS.map((item) => (
            <EmployeeStatusStrip key={item.label} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
