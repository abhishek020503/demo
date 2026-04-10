"use client";

import { useMemo, useState } from "react";
import DashboardShell from "./DashboardShell";
import EmployeeNavbar from "./employee-dashboard/EmployeeNavbar";
import { getEmployeeDisplayedVitals } from "./employee-dashboard/data";
import EmployeeVitalsPanel from "./employee-dashboard/EmployeeVitalsPanel";

export default function EmployeeVitalParametersPage() {
  const displayedVitals = useMemo(() => getEmployeeDisplayedVitals(), []);
  const [selectedVitalTitle, setSelectedVitalTitle] = useState(displayedVitals[0]?.title ?? "");
  const selectedVital =
    displayedVitals.find((vital) => vital.title === selectedVitalTitle) ?? displayedVitals[0];

  return (
    <DashboardShell headerActions={<EmployeeNavbar />}>
      <section className="rounded-[1.6rem] border border-slate-200/80 bg-[linear-gradient(180deg,#fdfdfc_0%,#f7f4ee_100%)] p-3 shadow-sm md:p-4">
        <EmployeeVitalsPanel
          displayedVitals={displayedVitals}
          selectedVital={selectedVital}
          onSelectVital={setSelectedVitalTitle}
        />
      </section>
    </DashboardShell>
  );
}
