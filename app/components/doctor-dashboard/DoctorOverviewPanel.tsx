import { Stethoscope } from "lucide-react";

export default function DoctorOverviewPanel() {
  return (
    <div className="mt-4">
      <section className="rounded-[1.6rem] border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
            <Stethoscope size={20} />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Overview</p>
            <h2 className="text-xl font-semibold text-slate-900">Consolidated Summary</h2>
          </div>
        </div>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          Patient identity, medical history, body condition, and priority alerts have been
          consolidated into the Patient Intelligence Console above to remove duplication and keep
          the overview focused. Use the navbar above to move between patient pages on mobile and
          desktop.
        </p>
      </section>
    </div>
  );
}
