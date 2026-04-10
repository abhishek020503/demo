import DoctorSectionScaffold from "../components/DoctorSectionScaffold";
import ImagingReportPage from "../components/ImagingReportPage";

export default function DoctorImagingReportPage() {
  return (
    <DoctorSectionScaffold
      title="Imaging Report Impression"
      subtitle="4.1 ECG, 4.2 USG, 4.3 X-ray, 4.4 MRI, 4.5 CT, 4.6 DEXA, and 4.7 PET dummy findings."
    >
      <ImagingReportPage />
    </DoctorSectionScaffold>
  );
}
