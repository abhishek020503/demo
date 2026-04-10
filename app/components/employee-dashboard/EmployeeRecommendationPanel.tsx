import {
  EMPLOYEE_HEALTH_PROGRESS,
  EMPLOYEE_RECOMMENDATIONS,
} from "./data";

export default function EmployeeRecommendationPanel() {
  return (
    <div className="space-y-4">
      <section className="rounded-[1.7rem] border border-slate-200 bg-[linear-gradient(135deg,#fff8f1_0%,#f4fbf6_48%,#eef6ff_100%)] p-5 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
              Recommendation
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
              Employee Guidance And Progress
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
              Dummy recommendation view built for employees, combining simple guidance with
              progress markers they can understand quickly.
            </p>
          </div>
          <div className="rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-700">
            Employee-only recommendations
          </div>
        </div>
      </section>

      <section className="rounded-[1.6rem] border border-slate-200 bg-white p-4 shadow-sm">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
            7.1 Recommendations
          </p>
          <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">
            Diet, Lifestyle, And Herbs
          </h2>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {EMPLOYEE_RECOMMENDATIONS.map((item) => (
            <article
              key={item.code}
              className="rounded-[1.3rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] p-4"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                {item.code}
              </p>
              <h3 className="mt-1 text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-4 text-sm leading-6 text-slate-600">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-[1.6rem] border border-slate-200 bg-white p-4 shadow-sm">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
            7.2 Health Progress
          </p>
          <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">
            Workplace And Wellness Progress
          </h2>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {EMPLOYEE_HEALTH_PROGRESS.map((item) => (
            <article
              key={item.code}
              className="rounded-[1.3rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] p-4"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                {item.code}
              </p>
              <h3 className="mt-1 text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-2xl font-semibold text-slate-900">{item.value}</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
