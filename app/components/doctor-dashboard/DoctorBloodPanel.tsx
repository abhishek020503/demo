import { TestTube2 } from "lucide-react";
import { DOCTOR_BLOOD_PARAMETERS } from "./data";
import { DoctorNarrativeCard, DoctorStatusBadge } from "./DoctorDashboardCards";

export default function DoctorBloodPanel() {
  return (
    <div className="mt-4 grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
      <section className="rounded-[1.6rem] border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
            <TestTube2 size={20} />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Blood Work
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Laboratory Overview</h2>
          </div>
        </div>

        <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
          {DOCTOR_BLOOD_PARAMETERS.map((parameter) => (
            <div key={parameter.label} className="rounded-[1.2rem] border border-slate-200 bg-slate-50 p-3.5">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                  {parameter.label}
                </p>
                <DoctorStatusBadge status={parameter.status} />
              </div>
              <p className="mt-3 text-2xl font-bold text-slate-900">{parameter.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[1.6rem] border border-slate-200 bg-[linear-gradient(180deg,#eef7f2_0%,#ffffff_100%)] p-4 shadow-sm">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Interpretation</p>
        <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">Blood Summary</h2>
        <div className="mt-4 space-y-3">
          <DoctorNarrativeCard
            title="Metabolic Pattern"
            body="Glucose and cholesterol are mildly elevated. The pattern suggests early-stage metabolic drift rather than acute pathology."
          />
          <DoctorNarrativeCard
            title="Deficiency Watch"
            body="Vitamin D remains meaningfully low and likely contributes to recovery, mood, and musculoskeletal resilience concerns."
          />
          <DoctorNarrativeCard
            title="Action Direction"
            body="Focus on sunlight exposure, dietary adherence, exercise consistency, and repeat fasting markers after a preventive interval."
          />
        </div>
      </section>
    </div>
  );
}
