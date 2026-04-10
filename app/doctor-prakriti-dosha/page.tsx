import AyurvedaDashboard from "../components/AyurvedaDashboard";
import DoctorSectionScaffold from "../components/DoctorSectionScaffold";

export default function DoctorPrakritiDoshaPage() {
  return (
    <DoctorSectionScaffold
      eyebrow=""
      title="Prakrati"
      subtitle="Full Ayurveda dashboard with overview, Dhatu & Mala, Agni Ama koshta, Kriyakala, Srotas, and recommendation tabs."
    >
      <AyurvedaDashboard initialTab="overview" />
    </DoctorSectionScaffold>
  );
}
