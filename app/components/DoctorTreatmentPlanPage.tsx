import DashboardShell from "./DashboardShell";
import DoctorFollowUpPanel from "./doctor-dashboard/DoctorFollowUpPanel";
import DoctorNavbar from "./doctor-dashboard/DoctorNavbar";
import DoctorTreatmentPlanPanel from "./doctor-dashboard/DoctorTreatmentPlanPanel";

export default function DoctorTreatmentPlanPage() {
  return (
    <DashboardShell headerActions={<DoctorNavbar />}>
      <section className="rounded-[1.6rem] border border-slate-200/80 bg-[linear-gradient(180deg,#fdfdfc_0%,#f7f4ee_100%)] p-3 shadow-sm md:p-4">
        <DoctorTreatmentPlanPanel />
        <DoctorFollowUpPanel />
      </section>
    </DashboardShell>
  );
}
