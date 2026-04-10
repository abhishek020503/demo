"use client";

import { useMemo, useState } from "react";
import DashboardShell from "./DashboardShell";
import DoctorNavbar from "./doctor-dashboard/DoctorNavbar";
import DoctorVitalsPanel from "./doctor-dashboard/DoctorVitalsPanel";
import { getDoctorDisplayedVitals } from "./doctor-dashboard/data";

export default function DoctorVitalParametersPage() {
  const displayedVitals = useMemo(() => getDoctorDisplayedVitals(), []);
  const [selectedVitalTitle, setSelectedVitalTitle] = useState(displayedVitals[0]?.title ?? "");
  const selectedVital =
    displayedVitals.find((vital) => vital.title === selectedVitalTitle) ?? displayedVitals[0];

  return (
    <DashboardShell headerActions={<DoctorNavbar />}>
      <section className="rounded-[1.6rem] border border-slate-200/80 bg-[linear-gradient(180deg,#fdfdfc_0%,#f7f4ee_100%)] p-3 shadow-sm md:p-4">
        <DoctorVitalsPanel
          displayedVitals={displayedVitals}
          selectedVital={selectedVital}
          onSelectVital={setSelectedVitalTitle}
        />
      </section>
    </DashboardShell>
  );
}
