import { EmployeeNarrativeCard } from "./EmployeeDashboardCards";

export default function EmployeeOverviewPanel() {
  return (
    <div className="mt-4">
      <section className="rounded-[1.6rem] border border-slate-200 bg-white p-4 shadow-sm">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
            Overview
          </p>
          <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">
            Employee Summary
          </h2>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <EmployeeNarrativeCard
            title="Workload Pattern"
            body="Recent sprint weeks show longer desk time and higher late-evening screen exposure."
          />
          <EmployeeNarrativeCard
            title="Wellness Risk"
            body="Primary risks remain posture strain, hydration dip, and mild sleep inconsistency."
          />
          <EmployeeNarrativeCard
            title="Suggested Action"
            body="Keep movement breaks, ergonomic review, and a fixed weekday sleep window under active tracking."
          />
        </div>
      </section>
    </div>
  );
}
