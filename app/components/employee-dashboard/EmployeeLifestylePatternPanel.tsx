import {
  EMPLOYEE_HABITS,
  EMPLOYEE_LIFESTYLE_PATTERN,
} from "./data";

export default function EmployeeLifestylePatternPanel() {
  return (
    <div className="space-y-4">
      <section className="rounded-[1.6rem] border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Lifestyle Pattern
            </p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">
              Daily Routine Indicators
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
              Dummy employee wellness pattern covering sleep, screen load, movement, stress,
              sitting time, hydration, and meal regularity.
            </p>
          </div>
          <div className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
            Employee-only module
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {EMPLOYEE_LIFESTYLE_PATTERN.map((item) => (
            <section
              key={item.label}
              className="rounded-[1.2rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] p-4"
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
              Habits
            </p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">
              Lifestyle Subcategory
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
              Dummy habit data for smoking, alcohol, tea or coffee, and tobacco use.
            </p>
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {EMPLOYEE_HABITS.map((item) => (
            <section
              key={item.label}
              className="rounded-[1.2rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] p-4"
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
    </div>
  );
}
