import DoctorDeviceDataPage from "./DoctorDeviceDataPage";
import { DOCTOR_BIOHACK_DATA } from "./doctor-dashboard/data";

export default function DoctorBiohackDataPage() {
  return (
    <DoctorDeviceDataPage
      title="Bio Hack Data"
      subtitle="Body-composition and machine-derived markers from the biohack device."
      summary="This section gives the doctor a machine-first snapshot of body composition, hydration, basal metabolism, and metabolic loading markers without needing to read the full overview page."
      metrics={DOCTOR_BIOHACK_DATA.map((item) => ({
        ...item,
        note: "Dummy device reading used for the doctor dashboard experience.",
      }))}
    />
  );
}
