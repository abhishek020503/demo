import { BedDouble, Droplets, MoonStar, ShieldAlert } from "lucide-react";
import { VITALS } from "@/app/data/vitals";
import type { DoctorOverviewStrip, DoctorSummaryMetric, DoctorVitalItem } from "./types";

export const DOCTOR_BASIC_DETAILS = [
  { label: "Name", value: "Arjun Kapoor" },
  { label: "Age / Gender", value: "34 / Male" },
  { label: "Time of Birth", value: "07:42 AM" },
  { label: "Place of Birth", value: "Jaipur, India" },
  { label: "Occupation", value: "School Teacher" },
  { label: "Socioeconomic Status", value: "Middle Income" },
  { label: "Primary Address", value: "A-44, Civil Lines, Jaipur" },
  { label: "Current Address", value: "Sector 62, Noida, Uttar Pradesh" },
  { label: "Email", value: "arjun.kapoor@mail.com" },
  { label: "Phone", value: "+91 98765 43210" },
];

export const DOCTOR_PROFILE_DETAILS = [
  { label: "Full Name", value: "Arjun Kapoor" },
  { label: "Date of Birth", value: "May 14, 1991" },
  { label: "Birth Place and Time", value: "Jaipur, India • 07:42 AM" },
  { label: "Gender", value: "Male" },
  { label: "Marital Status", value: "Married" },
  { label: "Current Location", value: "Noida, Uttar Pradesh, India" },
  { label: "Height", value: "190 cm" },
  { label: "Waist Size", value: "92 cm" },
  { label: "Emergency Contact", value: "Meera Kapoor • +91 98111 22334" },
];

export const DOCTOR_BIOHACK_DATA = [
  { label: "Weight", value: "90 kg", status: "Stable" },
  { label: "BMI", value: "24.9", status: "Normal" },
  { label: "Body Fat", value: "18%", status: "Watch" },
  { label: "Subcutaneous Fat", value: "16%", status: "Normal" },
  { label: "Viseral Fat", value: "11", status: "Watch" },
  { label: "Body Water", value: "56%", status: "Normal" },
  { label: "Skeletal Muscle", value: "43%", status: "Good" },
  { label: "Muscle Mass", value: "38.7 kg", status: "Good" },
  { label: "Protien", value: "18.4%", status: "Normal" },
  { label: "Metabolic Age", value: "37 yrs", status: "Watch" },
  { label: "BMR", value: "1760 kcal", status: "Normal" },
  { label: "Fat Free Body Weight", value: "73.8 kg", status: "Good" },
];

export const DOCTOR_SMARTWATCH_DATA = [
  { label: "Heart-rate Variability (HRV)", value: "42 ms", status: "Average" },
  { label: "Oxygen Saturation (SpO2)", value: "98%", status: "Normal" },
  { label: "Heart Rate (HR)", value: "78 bpm", status: "Normal" },
  { label: "Blood Pressure (BP)", value: "122/78 mmHg", status: "Normal" },
  { label: "Respiratory Rate (RR)", value: "16 / min", status: "Normal" },
  { label: "Skin Temperature", value: "98.4 F", status: "Normal" },
  { label: "Step Count & Physical Activity", value: "7,420 steps | Moderate activity", status: "Moderate" },
  { label: "Sleep Tracking (Duration, Stages, Quality)", value: "6.8 hrs | Light-deep mixed | Fair", status: "Watch" },
  { label: "VO2 Max (Estimated Maximal Oxygen Uptake)", value: "31 ml/kg/min", status: "Moderate" },
  { label: "Menstrual Cycle & Fertility Tracking", value: "Not applicable", status: "Normal" },
  { label: "Stress and Mood Tracking", value: "Moderate stress | Stable mood", status: "Watch" },
  { label: "Hydration Status Monitoring", value: "72% hydration score", status: "Moderate" },
  { label: "Uric Acid Monitoring (Sweat-Based)", value: "5.8 mg/dL equivalent", status: "Normal" },
];

export const DOCTOR_NADI_DEVICE_DATA = [
  { label: "Vata", value: "Reactive", note: "fluctuation rises with sleep drift and irregular meals" },
  { label: "Pitta", value: "Moderately elevated", note: "metabolic heat and acidity pattern remains active" },
  { label: "Kapha", value: "Dominant", note: "heaviness, coating, and sluggish digestion are visible" },
  { label: "Pulse Rhythm", value: "Variable but heavy", note: "pulse rhythm changes with meals, sleep, and workload variation" },
  { label: "Pulse Depth", value: "Moderately deep", note: "deeper quality supports kapha-heavy presentation in this reading" },
];

export const DOCTOR_PRAKRITI_OVERVIEW = [
  {
    label: "Vata",
    value: "28%",
    description:
      "Vata is present but secondary. It shows up as variable sleep timing, occasional dryness, and stress-linked fluctuation rather than being the dominant constitutional driver.",
  },
  {
    label: "Pitta",
    value: "46%",
    description:
      "Pitta is the lead constitutional tendency. The patient shows stronger metabolic drive, sharp functional response, and a clear tendency toward acidity, heat, and inflammation when routines slip.",
  },
  {
    label: "Kapha",
    value: "26%",
    description:
      "Kapha provides structural stability but is currently contributing to heaviness, sluggish digestion, coating, and slower metabolic clearance when diet quality falls.",
  },
];

export const DOCTOR_QUESTIONNAIRE_RESPONSES = [
  { question: "What is the dominant prakriti pattern?", answer: "Pitta-Vata dominant with moderate Kapha support." },
  { question: "What is the current vikriti pattern?", answer: "Kapha-Pitta aggravation with intermittent Vata spikes." },
  { question: "How is the family medical history?", answer: "Type 2 diabetes and hypertension are present in close family members." },
  { question: "What is the current complaint summary?", answer: "Bloating, late sleep, low morning freshness, and mild metabolic drift." },
  { question: "How active is the patient physically?", answer: "Moderately active on weekdays with inconsistent exercise discipline." },
  { question: "How high is the stress score?", answer: "Moderate stress with work-linked mental fatigue in the evening." },
  { question: "How is sleep quality overall?", answer: "Average quality with irregular timing and delayed recovery." },
  { question: "Is anxiety clinically high?", answer: "Low to moderate; spikes happen during workload pressure." },
  { question: "How is social wellbeing?", answer: "Social function is stable with mild avoidance during stress periods." },
  { question: "How is daytime sleepiness?", answer: "Mild daytime sleepiness appears after poor sleep nights." },
  { question: "What is the general patient health impression?", answer: "Preventive monitoring phase, not acute disease phase." },
  { question: "Is fatty liver risk present?", answer: "Mild watch status due to metabolic and lipid trends." },
  { question: "How strong is metabolic risk?", answer: "Borderline to moderate because of fasting glucose and visceral fat pattern." },
  { question: "Any substance abuse concerns?", answer: "No major concern; occasional alcohol only." },
  { question: "How is job stress?", answer: "Sustained moderate load with irregular decompression after work." },
  { question: "How healthy is the current lifestyle?", answer: "Reasonably functional but inconsistent in sleep, meals, and movement." },
  { question: "Is insomnia likely?", answer: "Mild insomnia pattern linked to delayed routine and screen exposure." },
  { question: "How is the dietary pattern?", answer: "Mixed quality diet with late dinners and fried-food exposure." },
  { question: "Any trauma or PTSD concern?", answer: "No strong trauma indicators in current dummy questionnaire output." },
  { question: "Any obsessive or repetitive thought pattern?", answer: "Low clinical concern; mainly stress rumination." },
  { question: "Is asthma control an issue?", answer: "No major respiratory complaint in the current profile." },
  { question: "Any COPD-type limitation?", answer: "No significant limitation indicated in the dummy response set." },
  { question: "How is dyspnea or breathlessness?", answer: "No active breathlessness at rest or in routine activity." },
  { question: "Any internet addiction or screen overload concern?", answer: "Screen dependence is moderate and affects evening recovery." },
  { question: "Any smoking dependency?", answer: "No smoking dependency is reported." },
];

export const DOCTOR_HISTORY = [
  { label: "Family History", value: "Type 2 diabetes and hypertension" },
  { label: "Medical History", value: "Borderline dyslipidemia; episodic gastritis" },
  { label: "Addiction", value: "Occasional alcohol; no smoking" },
];

export const DOCTOR_BLOOD_PARAMETERS = [
  { label: "Hemoglobin", value: "12.8 g/dL", status: "Low" },
  { label: "WBC", value: "7200 /uL", status: "Normal" },
  { label: "Fasting Glucose", value: "104 mg/dL", status: "Borderline" },
  { label: "Total Cholesterol", value: "218 mg/dL", status: "High" },
  { label: "Vitamin D3", value: "18 ng/mL", status: "Low" },
  { label: "TSH", value: "2.4 mIU/L", status: "Normal" },
];

export const DOCTOR_ALERTS = [
  "Vitamin D remains below target range and needs supplementation review.",
  "Sleep regularity is reduced across weekdays and likely affecting recovery.",
  "Borderline glucose and cholesterol suggest preventive metabolic follow-up.",
];

export const DOCTOR_TREATMENT_PLAN = [
  {
    label: "Diet",
    items: [
      "Warm, light meals with earlier dinner timing.",
      "Reduce fried foods, refined sugar, and late-night dairy.",
      "Use ginger-cumin-fennel support before the heaviest meal.",
    ],
  },
  {
    label: "Lifestyle",
    items: [
      "Maintain fixed wake and sleep windows through the week.",
      "Walk 20 minutes after lunch or dinner.",
      "Limit post-dinner screen time and heavy mental work.",
    ],
  },
  {
    label: "Herbs",
    items: [
      "Digestive support with trikatu-based guidance as clinically appropriate.",
      "Tulsi and dry ginger infusion in the morning.",
      "Review vitamin D support alongside integrative care.",
    ],
  },
  {
    label: "Detox",
    items: [
      "Start with gentle ama-reduction measures rather than aggressive cleansing.",
      "Prioritize hydration, tongue scraping, and routine correction.",
      "Consider supervised detox escalation only after reassessment.",
    ],
  },
  {
    label: "Yoga",
    items: [
      "Surya namaskar in a moderate daily routine.",
      "Twisting and chest-opening postures for digestion and energy.",
      "5-7 minutes of alternate nostril breathing before bed.",
    ],
  },
];

export const DOCTOR_FOLLOW_UP = [
  {
    label: "Next Visit",
    value: "March 26, 2026",
    detail: "Two-week review for symptoms, sleep routine, and metabolic response.",
  },
  {
    label: "Treatment Response",
    value: "Partial Improvement",
    detail: "Bloating reduced; sleep timing remains inconsistent on weekdays.",
  },
  {
    label: "Compliance",
    value: "78%",
    detail: "Diet and hydration followed well; evening routine needs better adherence.",
  },
  {
    label: "Health Score Change",
    value: "+4",
    detail: "Composite score improved from 68 to 72 since the last review.",
  },
];

export const DOCTOR_SUMMARY_METRICS: DoctorSummaryMetric[] = [
  { label: "Blood Pressure", value: "122/78", unit: "mmHg", tone: "sky" },
  { label: "Heart Rate", value: "78", unit: "bpm", tone: "rose" },
  { label: "SpO2", value: "98", unit: "%", tone: "emerald" },
  { label: "Temperature", value: "98.4", unit: "F", tone: "amber" },
];

export const DOCTOR_OVERVIEW_STRIPS: DoctorOverviewStrip[] = [
  {
    label: "Sleep Quality",
    value: "6 / 10",
    detail: "Moderate rest with irregular timing",
    icon: MoonStar,
  },
  {
    label: "Hydration",
    value: "72%",
    detail: "Acceptable but below optimal target",
    icon: Droplets,
  },
  {
    label: "Recovery",
    value: "Stable",
    detail: "No acute physiological stress markers",
    icon: BedDouble,
  },
  {
    label: "Clinical Risk",
    value: "Watch",
    detail: "Low immediate risk, preventive action advised",
    icon: ShieldAlert,
  },
];

export const DOCTOR_TONGUE_ANALYSIS = {
  score: "4.1/5",
  dominantDosha: "Kapha",
  kapha: "Elevated expression",
  agni: "Manda Agni",
  ama: "Present",
  detailedFindings: [
    { label: "Tongue Color", value: "Pale pink with slightly dusky center" },
    { label: "Tongue Coating", value: "Thick white coating over posterior third" },
    { label: "Midline Fissure", value: "Visible shallow fissure through central channel" },
    { label: "Surface Cracks", value: "Fine superficial cracks in mid-body region" },
    { label: "Tongue Margins", value: "Mild scalloping with soft edematous edges" },
  ],
  about:
    "Dummy tongue analysis summary indicating kapha-heavy stagnation with mild digestive weakness and fluid retention tendency.",
  possibleCauses: [
    "Late heavy dinners with reduced digestive recovery overnight.",
    "High intake of curd, fried snacks, and cold beverages.",
    "Low physical activity combined with prolonged seated work.",
    "Irregular water intake causing alternating dryness and coating.",
  ],
  possibleRisks: [
    "Progressive sluggish digestion and post-meal heaviness.",
    "Increased mucus tendency with recurrent bloating episodes.",
    "Reduced appetite rhythm and delayed gastric emptying sensation.",
    "Mild metabolic slowdown if daily routine remains unchanged.",
  ],
  dietDos: [
    "Prefer warm, light meals with ginger, cumin, and black pepper.",
    "Use cooked vegetables, moong soup, and lightly spiced khichdi.",
    "Start mornings with warm water and a small digestive herbal mix.",
  ],
  dietDonts: [
    "Avoid iced drinks, excess cheese, curd at night, and deep-fried foods.",
    "Reduce refined sugar desserts and heavy wheat-based dinners.",
    "Do not combine fruit with milk or dense meals in this phase.",
  ],
  lifestyleDos: [
    "Walk for 15-20 minutes after lunch and dinner.",
    "Maintain fixed meal timings and an earlier dinner window.",
    "Use gentle tongue scraping and morning oil pulling routinely.",
  ],
  lifestyleDonts: [
    "Avoid daytime sleeping after meals.",
    "Do not skip breakfast and then compensate with oversized lunches.",
    "Avoid sedentary screen time immediately after dinner.",
  ],
  specialInfusions: [
    "Coriander-fennel-cumin warm infusion twice daily.",
    "Tulsi-dry ginger infusion in the morning.",
    "Ajwain-jeera post-meal sip for bloating-prone days.",
  ],
};

export const DOCTOR_NADI_ANALYSIS = {
  summary: "Vikriti pattern shows fluctuating kapha-pitta dominance with intermittent vata spikes in this dummy reading.",
  vata: "Variable, reactive",
  pitta: "Moderately elevated",
  kapha: "Dominant",
  pulseQuality: "Heavy, slightly slippery, warm in mid-cycle",
  clinicalNote:
    "Pattern suggests kapha-pitta aggravation with episodic vata variability, often seen with irregular meals, sleep drift, and digestive load.",
};

export function getDoctorDisplayedVitals(): DoctorVitalItem[] {
  const mappedVitals: DoctorVitalItem[] = [
    ...VITALS.map((vital) => ({
      slug: vital.slug,
      shortLabel: vital.shortLabel,
      title: vital.title,
      value: vital.value,
      unit: vital.unit,
      status: vital.status,
      normalRange: vital.normalRange,
      description: vital.description,
    })),
    {
      slug: "pulse-rate",
      shortLabel: "PR",
      title: "Pulse Rate",
      value: "78",
      unit: "bpm",
      status: "Normal",
      normalRange: "60-100 bpm (resting adult)",
      description: "Pulse rate is currently stable and within expected resting range.",
    },
    {
      slug: "nadi",
      shortLabel: "NA",
      title: "Nadi",
      value: "Vikriti analysis",
      unit: "",
      status: "Observed",
      normalRange: "Pulse pattern assessment",
      description: "Dummy nadi observation with a dedicated vikriti graph for vata, pitta, and kapha.",
    },
    {
      slug: "nadi-device",
      shortLabel: "ND",
      title: "Nadi Device",
      value: "Vata-Pitta dominant",
      unit: "",
      status: "Observed",
      normalRange: "Pattern observation",
      description: "Nadi device suggests relative Vata-Pitta dominance in current reading.",
    },
    {
      slug: "tongue-analysis",
      shortLabel: "TA",
      title: "Tongue Analysis",
      value: "Mild coating, central crack",
      unit: "",
      status: "Observed",
      normalRange: "Visual assessment baseline",
      description: "Tongue shows mild ama coating and central crack pattern on observation.",
    },
    {
      slug: "sleep-quality",
      shortLabel: "SQ",
      title: "Sleep Quality",
      value: "6/10",
      unit: "",
      status: "Moderate",
      normalRange: "7/10 or above",
      description: "Sleep quality is moderate with intermittent night disturbance.",
    },
    {
      slug: "sleep-duration",
      shortLabel: "SD",
      title: "Sleep Duration",
      value: "6.8",
      unit: "hrs",
      status: "Moderate",
      normalRange: "7-9 hrs",
      description: "Sleep duration is adequate on some nights but inconsistent across the week.",
    },
    {
      slug: "sleep-pattern",
      shortLabel: "SP",
      title: "Sleep Pattern",
      value: "Irregular weekday cycle",
      unit: "",
      status: "Needs Improvement",
      normalRange: "Consistent daily sleep-wake cycle",
      description: "Sleep timing is irregular on weekdays and needs routine stabilization.",
    },
  ];

  const requiredOrder = [
    "Blood Pressure",
    "Respiratory Rate",
    "Pulse Rate",
    "Oxygen Saturation",
    "Body Temperature",
    "Heart Rate Variability",
    "VO2 Max",
    "Nadi",
    "Nadi Device",
    "Tongue Analysis",
    "Sleep Quality",
    "Sleep Duration",
    "Sleep Pattern",
  ];

  return requiredOrder
    .map((key) => mappedVitals.find((item) => item.title === key))
    .filter((item): item is DoctorVitalItem => Boolean(item));
}

export function getDoctorVitalVisual(index: number) {
  const styles = [
    {
      cardClass: "border-slate-200",
      iconClass: "bg-amber-100 text-amber-700",
      badgeClass: "bg-amber-100 text-amber-700",
      stroke: "#d97706",
      areaFill: "rgba(217,119,6,0.12)",
      linePath: "M0 57 C24 38, 44 24, 72 40 C100 56, 126 10, 154 26 C182 40, 210 48, 240 32",
      areaPath:
        "M0 57 C24 38, 44 24, 72 40 C100 56, 126 10, 154 26 C182 40, 210 48, 240 32 L240 72 L0 72 Z",
    },
    {
      cardClass: "border-slate-200",
      iconClass: "bg-rose-100 text-rose-700",
      badgeClass: "bg-rose-100 text-rose-700",
      stroke: "#e11d48",
      areaFill: "rgba(225,29,72,0.12)",
      linePath:
        "M0 40 C20 30, 40 28, 62 44 C86 64, 110 22, 134 20 C156 18, 178 30, 202 24 C220 20, 232 16, 240 12",
      areaPath:
        "M0 40 C20 30, 40 28, 62 44 C86 64, 110 22, 134 20 C156 18, 178 30, 202 24 C220 20, 232 16, 240 12 L240 72 L0 72 Z",
    },
    {
      cardClass: "border-slate-200",
      iconClass: "bg-cyan-100 text-cyan-700",
      badgeClass: "bg-cyan-100 text-cyan-700",
      stroke: "#0891b2",
      areaFill: "rgba(8,145,178,0.13)",
      linePath:
        "M0 34 C18 52, 44 56, 66 28 C88 0, 112 20, 140 18 C168 16, 188 10, 210 16 C224 20, 234 32, 240 40",
      areaPath:
        "M0 34 C18 52, 44 56, 66 28 C88 0, 112 20, 140 18 C168 16, 188 10, 210 16 C224 20, 234 32, 240 40 L240 72 L0 72 Z",
    },
    {
      cardClass: "border-slate-200",
      iconClass: "bg-emerald-100 text-emerald-700",
      badgeClass: "bg-emerald-100 text-emerald-700",
      stroke: "#059669",
      areaFill: "rgba(5,150,105,0.12)",
      linePath:
        "M0 52 C25 58, 49 20, 73 30 C96 39, 122 58, 146 44 C171 29, 194 16, 240 26",
      areaPath:
        "M0 52 C25 58, 49 20, 73 30 C96 39, 122 58, 146 44 C171 29, 194 16, 240 26 L240 72 L0 72 Z",
    },
  ];

  return styles[index % styles.length];
}

export function getDoctorTrendConfig(slug: string) {
  const configs: Record<string, { linePath: string; areaPath: string; stroke: string; areaFill: string }> = {
    hr: {
      linePath:
        "M10 120 C60 90, 110 100, 160 80 C210 60, 260 70, 310 50 C360 30, 410 45, 470 35",
      areaPath:
        "M10 120 C60 90, 110 100, 160 80 C210 60, 260 70, 310 50 C360 30, 410 45, 470 35 L470 165 L10 165 Z",
      stroke: "#e11d48",
      areaFill: "rgba(225,29,72,0.12)",
    },
    bp: {
      linePath:
        "M10 110 C60 115, 110 85, 160 95 C210 105, 260 75, 310 80 C360 85, 410 60, 470 70",
      areaPath:
        "M10 110 C60 115, 110 85, 160 95 C210 105, 260 75, 310 80 C360 85, 410 60, 470 70 L470 165 L10 165 Z",
      stroke: "#0284c7",
      areaFill: "rgba(2,132,199,0.12)",
    },
    rr: {
      linePath:
        "M10 120 C60 108, 110 112, 160 104 C210 96, 260 100, 310 90 C360 84, 410 88, 470 78",
      areaPath:
        "M10 120 C60 108, 110 112, 160 104 C210 96, 260 100, 310 90 C360 84, 410 88, 470 78 L470 165 L10 165 Z",
      stroke: "#0f766e",
      areaFill: "rgba(15,118,110,0.12)",
    },
    spo2: {
      linePath:
        "M10 72 C60 70, 110 68, 160 66 C210 64, 260 66, 310 63 C360 61, 410 62, 470 60",
      areaPath:
        "M10 72 C60 70, 110 68, 160 66 C210 64, 260 66, 310 63 C360 61, 410 62, 470 60 L470 165 L10 165 Z",
      stroke: "#0891b2",
      areaFill: "rgba(8,145,178,0.12)",
    },
    temperature: {
      linePath:
        "M10 92 C60 94, 110 88, 160 90 C210 92, 260 86, 310 88 C360 90, 410 85, 470 87",
      areaPath:
        "M10 92 C60 94, 110 88, 160 90 C210 92, 260 86, 310 88 C360 90, 410 85, 470 87 L470 165 L10 165 Z",
      stroke: "#ea580c",
      areaFill: "rgba(234,88,12,0.12)",
    },
    hrv: {
      linePath:
        "M10 130 C60 90, 110 120, 160 85 C210 115, 260 75, 310 105 C360 80, 410 98, 470 72",
      areaPath:
        "M10 130 C60 90, 110 120, 160 85 C210 115, 260 75, 310 105 C360 80, 410 98, 470 72 L470 165 L10 165 Z",
      stroke: "#7c3aed",
      areaFill: "rgba(124,58,237,0.12)",
    },
    "vo2-max": {
      linePath:
        "M10 140 C60 132, 110 126, 160 118 C210 110, 260 105, 310 96 C360 88, 410 82, 470 74",
      areaPath:
        "M10 140 C60 132, 110 126, 160 118 C210 110, 260 105, 310 96 C360 88, 410 82, 470 74 L470 165 L10 165 Z",
      stroke: "#16a34a",
      areaFill: "rgba(22,163,74,0.12)",
    },
    sleep: {
      linePath:
        "M10 132 C60 115, 110 140, 160 120 C210 102, 260 128, 310 108 C360 95, 410 104, 470 90",
      areaPath:
        "M10 132 C60 115, 110 140, 160 120 C210 102, 260 128, 310 108 C360 95, 410 104, 470 90 L470 165 L10 165 Z",
      stroke: "#4338ca",
      areaFill: "rgba(67,56,202,0.12)",
    },
    "pulse-rate": {
      linePath:
        "M10 118 C60 92, 110 106, 160 84 C210 70, 260 80, 310 64 C360 56, 410 60, 470 48",
      areaPath:
        "M10 118 C60 92, 110 106, 160 84 C210 70, 260 80, 310 64 C360 56, 410 60, 470 48 L470 165 L10 165 Z",
      stroke: "#be123c",
      areaFill: "rgba(190,18,60,0.12)",
    },
    "nadi-device": {
      linePath:
        "M10 104 C60 96, 110 88, 160 94 C210 98, 260 90, 310 96 C360 100, 410 92, 470 90",
      areaPath:
        "M10 104 C60 96, 110 88, 160 94 C210 98, 260 90, 310 96 C360 100, 410 92, 470 90 L470 165 L10 165 Z",
      stroke: "#7c2d12",
      areaFill: "rgba(124,45,18,0.12)",
    },
    nadi: {
      linePath:
        "M10 112 C60 102, 110 94, 160 106 C210 118, 260 96, 310 88 C360 94, 410 84, 470 92",
      areaPath:
        "M10 112 C60 102, 110 94, 160 106 C210 118, 260 96, 310 88 C360 94, 410 84, 470 92 L470 165 L10 165 Z",
      stroke: "#0f766e",
      areaFill: "rgba(15,118,110,0.12)",
    },
    "tongue-analysis": {
      linePath:
        "M10 106 C60 94, 110 98, 160 92 C210 86, 260 90, 310 84 C360 78, 410 82, 470 76",
      areaPath:
        "M10 106 C60 94, 110 98, 160 92 C210 86, 260 90, 310 84 C360 78, 410 82, 470 76 L470 165 L10 165 Z",
      stroke: "#9f1239",
      areaFill: "rgba(159,18,57,0.12)",
    },
    "sleep-quality": {
      linePath:
        "M10 130 C60 122, 110 136, 160 118 C210 100, 260 126, 310 106 C360 94, 410 102, 470 88",
      areaPath:
        "M10 130 C60 122, 110 136, 160 118 C210 100, 260 126, 310 106 C360 94, 410 102, 470 88 L470 165 L10 165 Z",
      stroke: "#5b21b6",
      areaFill: "rgba(91,33,182,0.12)",
    },
    "sleep-duration": {
      linePath:
        "M10 136 C60 124, 110 120, 160 128 C210 134, 260 116, 310 110 C360 104, 410 98, 470 94",
      areaPath:
        "M10 136 C60 124, 110 120, 160 128 C210 134, 260 116, 310 110 C360 104, 410 98, 470 94 L470 165 L10 165 Z",
      stroke: "#4f46e5",
      areaFill: "rgba(79,70,229,0.12)",
    },
    "sleep-pattern": {
      linePath:
        "M10 138 C60 120, 110 144, 160 124 C210 108, 260 132, 310 112 C360 100, 410 108, 470 94",
      areaPath:
        "M10 138 C60 120, 110 144, 160 124 C210 108, 260 132, 310 112 C360 100, 410 108, 470 94 L470 165 L10 165 Z",
      stroke: "#4338ca",
      areaFill: "rgba(67,56,202,0.12)",
    },
  };

  return configs[slug] ?? configs.hr;
}

export function getDoctorClinicalNotes(slug: string) {
  const notes: Record<string, { clinical: string; followUp: string }> = {
    hr: {
      clinical:
        "This heart rate pattern is within expected resting range and does not show abrupt spikes in the current dummy trend.",
      followUp:
        "Continue periodic resting measurements at the same time of day; review if persistent readings exceed baseline by 15-20 bpm.",
    },
    bp: {
      clinical:
        "Blood pressure trend appears stable with mild day-to-day variability, which is common with posture, stress, and hydration changes.",
      followUp:
        "Track morning and evening readings for one week; if average systolic stays above target, discuss medication or lifestyle adjustment.",
    },
    rr: {
      clinical:
        "Respiratory rate is in normal adult range and the trend does not indicate respiratory distress in this sample.",
      followUp:
        "Reassess with symptoms such as breathlessness, fever, or fatigue; correlate with SpO2 and temperature when symptomatic.",
    },
    spo2: {
      clinical:
        "Oxygen saturation remains high and consistent across the sample period, supporting adequate oxygenation.",
      followUp:
        "Recheck during exertion or respiratory symptoms; seek review if repeated values fall below usual baseline.",
    },
    temperature: {
      clinical:
        "Temperature is near expected baseline and the trend shows only minor physiological fluctuation.",
      followUp:
        "Monitor twice daily during suspected infection and interpret with symptoms and inflammatory markers if needed.",
    },
    hrv: {
      clinical:
        "HRV variation suggests changing recovery load; this metric is most useful in relation to personal baseline over time.",
      followUp:
        "Pair HRV with sleep quality, training load, and stress tracking for at least 2-4 weeks before making decisions.",
    },
    "vo2-max": {
      clinical:
        "VO2 max trend is gradually improving in this sample, indicating potential cardiorespiratory conditioning response.",
      followUp:
        "Retest with the same protocol monthly; combine with resting heart rate and exercise tolerance for a complete fitness profile.",
    },
    "pulse-rate": {
      clinical: "Pulse rate trend is stable with no sudden variability in this sample.",
      followUp: "Continue routine morning pulse checks and compare against activity and stress levels.",
    },
    "nadi-device": {
      clinical:
        "Nadi pattern suggests transient Vata-Pitta dominance and needs context with symptoms and routines.",
      followUp:
        "Reassess weekly with hydration, meal timing, and sleep regularity adjustments.",
    },
    nadi: {
      clinical:
        "Vikriti graph indicates kapha-pitta loading with periodic vata swings in this dummy pulse analysis.",
      followUp:
        "Repeat nadi review after digestive correction, routine regularization, and sleep stabilization.",
    },
    "tongue-analysis": {
      clinical:
        "Tongue findings show mild coating and central crack, commonly linked with digestive imbalance patterns.",
      followUp:
        "Track changes after dietary correction and reassess with morning fasting observation.",
    },
    "sleep-quality": {
      clinical:
        "Sleep quality score indicates moderate rest with occasional nocturnal interruption.",
      followUp:
        "Introduce a fixed bedtime and reduced late screen exposure for two weeks, then reassess the score.",
    },
    "sleep-duration": {
      clinical:
        "Sleep duration is close to minimal target but remains inconsistent, which can blunt recovery quality.",
      followUp:
        "Aim for a consistent 7-8 hour sleep window with stable wake time before changing other recovery interventions.",
    },
    "sleep-pattern": {
      clinical:
        "Sleep pattern remains irregular, which can affect recovery and metabolic regulation.",
      followUp:
        "Standardize bedtime and wake time daily; monitor consistency across weekdays and weekends.",
    },
  };

  return notes[slug] ?? notes.hr;
}
