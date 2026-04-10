import DashboardShell from "./DashboardShell";
import EmployeeDashboardHero from "./employee-dashboard/EmployeeDashboardHero";
import EmployeeNavbar from "./employee-dashboard/EmployeeNavbar";
import EmployeeOverviewPanel from "./employee-dashboard/EmployeeOverviewPanel";

export default function EmployeeDashboard() {
  return (
    <DashboardShell headerActions={<EmployeeNavbar />}>
      <section className="rounded-[1.6rem] border border-slate-200/80 bg-[linear-gradient(180deg,#fdfdfc_0%,#f7f4ee_100%)] p-3 shadow-sm md:p-4">
        <EmployeeDashboardHero />
        <EmployeeOverviewPanel />
      </section>
    </DashboardShell>
  );
}
