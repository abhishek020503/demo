import DoctorSectionScaffold from "../components/DoctorSectionScaffold";
import TissueHealthPage from "../components/TissueHealthPage";

export default function DoctorTissueHealthPage() {
  return (
    <DoctorSectionScaffold
      title="Tissue Health"
      subtitle="8.1 Tissue Health [Dhatu] and 8.2 Bodily Immunity Tolerance with separated patient access."
    >
      <TissueHealthPage />
    </DoctorSectionScaffold>
  );
}
