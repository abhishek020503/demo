import DashboardShell from "./DashboardShell";
import EmployeeNavbar from "./employee-dashboard/EmployeeNavbar";
import EmployeeRiskScoringPanel from "./employee-dashboard/EmployeeRiskScoringPanel";

export default function EmployeeRiskScoringPage() {
  return (
    <DashboardShell headerActions={<EmployeeNavbar />}>
      <section className="rounded-[1.6rem] border border-slate-200/80 bg-[linear-gradient(180deg,#fdfdfc_0%,#f7f4ee_100%)] p-3 shadow-sm md:p-4">
        <EmployeeRiskScoringPanel />
      </section>
    </DashboardShell>
  );
}
