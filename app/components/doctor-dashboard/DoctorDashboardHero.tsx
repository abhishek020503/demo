import DoctorBodyMeasurements from "./DoctorBodyMeasurements";
import {
  DOCTOR_ALERTS,
  DOCTOR_BASIC_DETAILS,
  DOCTOR_HISTORY,
  DOCTOR_OVERVIEW_STRIPS,
  DOCTOR_SUMMARY_METRICS,
} from "./data";
import {
  DoctorHeroMetricCard,
  DoctorMiniCard,
  DoctorPrakritiChip,
  DoctorStatusStrip,
} from "./DoctorDashboardCards";

export default function DoctorDashboardHero() {
  return (
    <section className="rounded-[2rem] bg-[radial-gradient(circle_at_top_left,#f8fbff_0%,#e7eef9_45%,#d9e4f4_100%)] p-4 text-slate-900 shadow-[0_24px_70px_rgba(148,163,184,0.18)] md:p-5">
      <div className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500/80">
                Patient Intelligence Console
              </p>
              <h1 className="mt-1 text-3xl font-bold tracking-tight md:text-4xl">Arjun Kapoor</h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                Longitudinal snapshot of biometric status, body structure, sleep behavior, and
                blood indicators designed as a single clinical dashboard.
              </p>
            </div>

            <div className="rounded-[1.25rem] border border-white/70 bg-white/75 px-3 py-2.5 backdrop-blur">
              <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Status</p>
              <p className="mt-1 text-lg font-semibold text-slate-900">Preventive Monitoring</p>
              <p className="mt-1 text-xs text-slate-500">Last updated March 8, 2026</p>
            </div>
          </div>

          <div className="grid gap-2.5 sm:grid-cols-2 xl:grid-cols-4">
            {DOCTOR_SUMMARY_METRICS.map((item) => (
              <DoctorHeroMetricCard key={item.label} {...item} />
            ))}
          </div>

          <div className="grid gap-3 lg:grid-cols-[1.15fr_0.85fr]">
            <section className="rounded-[1.6rem] border border-white/70 bg-white/60 p-3.5 backdrop-blur">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500/80">Patient Card</p>
                  <p className="mt-1 text-xl font-semibold text-slate-900">Clinical Identity</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f1d3a6] text-lg font-bold text-slate-900">
                  AK
                </div>
              </div>
              <div className="mt-3 grid gap-2.5 sm:grid-cols-2 xl:grid-cols-3">
                {DOCTOR_BASIC_DETAILS.map((item) => (
                  <DoctorMiniCard key={item.label} label={item.label} value={item.value} />
                ))}
              </div>
              <div className="mt-3 rounded-[1rem] border border-white/70 bg-white/80 px-3 py-2.5">
                <p className="text-[10px] uppercase tracking-[0.14em] text-slate-500">1.4-prakriti</p>
                <div className="mt-2 grid gap-2 sm:grid-cols-3">
                  <DoctorPrakritiChip label="Vata" value="28%" tone="sky" />
                  <DoctorPrakritiChip label="Pitta" value="46%" tone="amber" />
                  <DoctorPrakritiChip label="Kapha" value="26%" tone="emerald" />
                </div>
                <p className="mt-2 text-xs leading-5 text-slate-600">
                  Dominant prakriti appears <span className="font-semibold text-slate-900">Pitta-Vata</span>{" "}
                  with mild kapha support in baseline constitution.
                </p>
              </div>
            </section>

            <section className="rounded-[1.6rem] border border-white/70 bg-white/60 p-3.5 backdrop-blur">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500/80">Clinical Summary</p>
                  <p className="mt-1 text-xl font-semibold text-slate-900">History And Condition</p>
                </div>
                <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                  Overview
                </div>
              </div>
              <div className="mt-3 space-y-2.5">
                <div className="rounded-[1.2rem] border border-white/70 bg-slate-50 px-3 py-2.5">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Medical History</p>
                  <div className="mt-2 space-y-2">
                    {DOCTOR_HISTORY.map((entry) => (
                      <div key={entry.label} className="rounded-xl bg-white px-3 py-2">
                        <p className="text-xs font-semibold text-slate-900">{entry.label}</p>
                        <p className="mt-1 text-xs leading-5 text-slate-600">{entry.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.2rem] border border-white/70 bg-slate-50 px-3 py-2.5">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Body Condition</p>
                      <p className="mt-1 text-sm font-semibold text-slate-900">Composite Score</p>
                    </div>
                    <div className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600">
                      Stable
                    </div>
                  </div>
                  <div className="mt-3 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                    <div className="relative grid h-20 w-20 shrink-0 place-items-center rounded-full bg-[conic-gradient(#60a5fa_0_346deg,rgba(255,255,255,0.18)_346deg_360deg)]">
                      <div className="grid h-14 w-14 place-items-center rounded-full bg-white text-center">
                        <p className="text-lg font-bold text-slate-900">96%</p>
                      </div>
                    </div>
                    <p className="text-xs leading-5 text-slate-600">
                      Body composition and vital stability remain strong with preventive focus needed
                      around metabolic markers and sleep quality.
                    </p>
                  </div>
                </div>

                <div className="rounded-[1.2rem] border border-white/70 bg-slate-50 px-3 py-2.5">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Alerts</p>
                  <div className="mt-2 space-y-2">
                    {DOCTOR_ALERTS.map((alert, index) => (
                      <p key={alert} className="text-xs leading-5 text-slate-600">
                        {index + 1}. {alert}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="grid gap-3 lg:grid-cols-[0.75fr_0.25fr] xl:grid-cols-1">
          <div className="rounded-[1.6rem] border border-white/10 bg-white/6 p-1.5 backdrop-blur">
            <DoctorBodyMeasurements />
          </div>

          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 xl:grid-cols-4">
            {DOCTOR_OVERVIEW_STRIPS.map((item) => (
              <DoctorStatusStrip key={item.label} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
