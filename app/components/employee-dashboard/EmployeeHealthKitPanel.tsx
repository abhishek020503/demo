import { EMPLOYEE_HEALTH_KIT } from "./data";

export default function EmployeeHealthKitPanel() {
  return (
    <div className="space-y-4">
      <section className="rounded-[1.7rem] border border-slate-200 bg-[linear-gradient(135deg,#fffdf5_0%,#eefbf5_48%,#eef6ff_100%)] p-5 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
              Health Kit
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
              Employee Wellness Toolkit
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
              Dummy employee health kit designed as easy-to-scan workplace wellness modules rather
              than a clinical dashboard.
            </p>
          </div>
          <div className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
            10 guided modules
          </div>
        </div>
      </section>

      <section className="rounded-[1.6rem] border border-slate-200 bg-white p-4 shadow-sm">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {EMPLOYEE_HEALTH_KIT.map((item) => (
            <article
              key={item.code}
              className="rounded-[1.3rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] p-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                    {item.code}
                  </p>
                  <h3 className="mt-1 text-xl font-semibold text-slate-900">{item.title}</h3>
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold text-slate-700">
                  {item.focus}
                </span>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
