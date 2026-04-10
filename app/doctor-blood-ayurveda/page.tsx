import BloodParametersReport from "../components/BloodParametersReport";
import DoctorSectionScaffold from "../components/DoctorSectionScaffold";

export default function DoctorBloodParametersPage() {
  return (
    <DoctorSectionScaffold
      title="Blood Parameters"
      subtitle="3.1 Blood Report and 3.2 Old Blood Reports."
    >
      <BloodParametersReport />
    </DoctorSectionScaffold>
  );
}
