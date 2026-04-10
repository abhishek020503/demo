import { DOCTOR_FOLLOW_UP } from "./data";

export default function DoctorFollowUpPanel() {
  return (
    <div id="follow-up" className="mt-4 scroll-mt-24">
      <section className="rounded-[1.6rem] border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Follow Up
            </p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">
              Response And Review Tracking
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
              Follow-up summary for next visit planning, response review, adherence, and score
              movement.
            </p>
          </div>
          <div className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
            Active monitoring
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {DOCTOR_FOLLOW_UP.map((item) => (
            <section
              key={item.label}
              className="rounded-[1.25rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] p-4"
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
