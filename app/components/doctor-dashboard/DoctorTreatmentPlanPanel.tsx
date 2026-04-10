import { DOCTOR_TREATMENT_PLAN } from "./data";

export default function DoctorTreatmentPlanPanel() {
  return (
    <div id="treatment-plan" className="mt-4 scroll-mt-24">
      <section className="rounded-[1.6rem] border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Treatment Plan
            </p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">
              Prescribed Care Modules
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
              Structured doctor-facing plan covering diet, routine, herbal support, detox focus,
              and yoga recommendations.
            </p>
          </div>
          <div className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
            5 modules
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {DOCTOR_TREATMENT_PLAN.map((section) => (
            <section
              key={section.label}
              className="rounded-[1.2rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] p-4"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                {section.label}
              </p>
              <div className="mt-3 space-y-2.5">
                {section.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-2.5 text-sm leading-6 text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </div>
  );
}
