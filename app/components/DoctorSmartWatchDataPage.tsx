import DoctorDeviceDataPage from "./DoctorDeviceDataPage";
import { DOCTOR_SMARTWATCH_DATA } from "./doctor-dashboard/data";

export default function DoctorSmartWatchDataPage() {
  return (
    <DoctorDeviceDataPage
      title="Smart Watch Data"
      subtitle="Wearable-derived vitals, recovery, movement, and sleep metrics."
      summary="This section surfaces smartwatch output that the doctor may want to review independently from the broader vitals page, especially for recovery, sleep, and day-to-day behavior trends."
      metrics={DOCTOR_SMARTWATCH_DATA.map((item) => ({
        ...item,
        note: "Dummy wearable reading used for the doctor dashboard experience.",
      }))}
    />
  );
}
