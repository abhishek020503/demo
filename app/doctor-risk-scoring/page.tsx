import DoctorSectionScaffold from "../components/DoctorSectionScaffold";
import RiskScoringPage from "../components/RiskScoringPage";

export default function DoctorRiskScoringPage() {
  return (
    <DoctorSectionScaffold
      title="Risk Scoring"
      subtitle="6.1 Fatty Liver Risk, 6.2 Cardiovascular Risk, 6.3 Anaemia Risk, 6.4 Gout Risk, 6.5 FHypertension Risk, and 6.6 Diabetes Risk."
    >
      <RiskScoringPage />
    </DoctorSectionScaffold>
  );
}
