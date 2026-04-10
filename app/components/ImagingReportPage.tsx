"use client";

import {
  Activity,
  Bone,
  Brain,
  HeartPulse,
  ScanSearch,
  ShieldPlus,
  Waves,
} from "lucide-react";

const IMAGING_ITEMS = [
  {
    code: "4.1",
    title: "ECG",
    icon: HeartPulse,
    status: "Borderline",
    date: "10 Mar 2026",
    impression:
      "Sinus rhythm with occasional premature atrial complexes. No acute ST-T ischemic change seen in this dummy tracing.",
    findings: [
      "Heart rate 78 bpm with regular baseline rhythm.",
      "PR and QRS intervals remain within expected limits.",
      "Mild nonspecific T-wave flattening in inferior leads.",
    ],
    recommendation: "Repeat ECG with clinical correlation if palpitations persist.",
  },
  {
    code: "4.2",
    title: "USG",
    icon: Waves,
    status: "Mild Finding",
    date: "08 Mar 2026",
    impression:
      "Whole abdomen ultrasound shows mild grade I fatty liver with no focal hepatic lesion. Gallbladder, kidneys, and spleen appear unremarkable.",
    findings: [
      "Liver mildly enlarged with increased echogenicity.",
      "No hydronephrosis or renal calculus identified.",
      "No ascites or intra-abdominal collection seen.",
    ],
    recommendation: "Advise metabolic risk reduction and repeat sonography in 6 to 12 months.",
  },
  {
    code: "4.3",
    title: "X-Ray",
    icon: Activity,
    status: "Stable",
    date: "03 Mar 2026",
    impression:
      "Chest radiograph demonstrates clear lung fields and normal cardiomediastinal silhouette. No focal consolidation or pleural effusion.",
    findings: [
      "No acute osseous abnormality visible on this view.",
      "Trachea remains central.",
      "Costophrenic angles are preserved.",
    ],
    recommendation: "No acute radiographic concern on dummy film.",
  },
  {
    code: "4.4",
    title: "MRI",
    icon: Brain,
    status: "Needs Follow-Up",
    date: "28 Feb 2026",
    impression:
      "MRI lumbosacral spine reveals early L4-L5 disc desiccation with small posterior bulge causing mild thecal sac indentation. No significant nerve root compression.",
    findings: [
      "Alignment preserved without acute marrow edema.",
      "Conus medullaris appears normal.",
      "Mild facet arthropathy in lower lumbar levels.",
    ],
    recommendation: "Physiotherapy and posture correction advised with follow-up if radicular pain develops.",
  },
  {
    code: "4.5",
    title: "CT",
    icon: ScanSearch,
    status: "Incidental",
    date: "24 Feb 2026",
    impression:
      "NCCT head shows no acute intracranial hemorrhage, mass effect, or midline shift. Tiny benign calcific focus noted in left frontal region.",
    findings: [
      "Ventricular system is normal in caliber.",
      "Gray-white differentiation is maintained.",
      "No skull fracture identified on dummy study.",
    ],
    recommendation: "No acute CT abnormality. Observe clinically.",
  },
  {
    code: "4.6",
    title: "DEXA",
    icon: Bone,
    status: "Low Bone Density",
    date: "19 Feb 2026",
    impression:
      "Bone densitometry suggests osteopenia with lowest T-score of -1.8 at the femoral neck. Fracture risk is mildly elevated.",
    findings: [
      "Lumbar spine bone mineral density is borderline low.",
      "Hip measurements remain above osteoporosis threshold.",
      "Trabecular pattern reduction is mild on dummy report.",
    ],
    recommendation: "Calcium, vitamin D, weight-bearing exercise, and interval reassessment recommended.",
  },
  {
    code: "4.7",
    title: "PET",
    icon: ShieldPlus,
    status: "No Active Uptake",
    date: "14 Feb 2026",
    impression:
      "FDG PET-CT shows no metabolically active malignant lesion in the surveyed body. Mild physiologic uptake noted in bowel and urinary tract.",
    findings: [
      "No hypermetabolic lymphadenopathy identified.",
      "No suspicious osseous FDG avid lesion seen.",
      "Physiological myocardial and renal tracer distribution is present.",
    ],
    recommendation: "Continue routine surveillance as clinically indicated.",
  },
] as const;

function getStatusClass(status: string) {
  if (status === "Needs Follow-Up" || status === "Low Bone Density") {
    return "bg-amber-50 text-amber-700 ring-amber-200";
  }
  if (status === "Borderline" || status === "Mild Finding" || status === "Incidental") {
    return "bg-sky-50 text-sky-700 ring-sky-200";
  }
  return "bg-emerald-50 text-emerald-700 ring-emerald-200";
}

export default function ImagingReportPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-[1.8rem] border border-slate-200 bg-[linear-gradient(135deg,#f8fafc_0%,#ecfeff_45%,#f0fdfa_100%)] p-5 shadow-sm md:p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Section 4
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
              Imaging Report Impression
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
              Dummy diagnostic imaging summary for ECG, USG, X-ray, MRI, CT, DEXA, and PET.
            </p>
          </div>
          <div className="grid min-w-[220px] gap-3 sm:grid-cols-2">
            <MetricCard label="Studies Listed" value="7" tone="teal" />
            <MetricCard label="Follow-Up Flags" value="2" tone="amber" />
          </div>
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-2">
        {IMAGING_ITEMS.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.code}
              className="rounded-[1.6rem] border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                      {item.code}
                    </p>
                    <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-1 text-sm text-slate-500">Study Date: {item.date}</p>
                  </div>
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-[11px] font-semibold ring-1 ${getStatusClass(item.status)}`}
                >
                  {item.status}
                </span>
              </div>

              <div className="mt-4 rounded-2xl bg-slate-50 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Impression
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-700">{item.impression}</p>
              </div>

              <div className="mt-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Key Findings
                </p>
                <div className="mt-3 space-y-2">
                  {item.findings.map((finding) => (
                    <div
                      key={finding}
                      className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm leading-6 text-slate-700"
                    >
                      {finding}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-700">
                  Suggested Next Step
                </p>
                <p className="mt-1 text-sm leading-6 text-emerald-900">{item.recommendation}</p>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}

function MetricCard({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "teal" | "amber";
}) {
  const toneClass =
    tone === "amber"
      ? "border-amber-200 bg-amber-50 text-amber-800"
      : "border-teal-200 bg-teal-50 text-teal-800";

  return (
    <div className={`rounded-2xl border px-4 py-3 ${toneClass}`}>
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em]">{label}</p>
      <p className="mt-1 text-2xl font-semibold">{value}</p>
    </div>
  );
}
