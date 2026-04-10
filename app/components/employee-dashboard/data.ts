import { Activity, BriefcaseBusiness, Droplets, ShieldAlert } from "lucide-react";

export const EMPLOYEE_BASIC_DETAILS = [
  { label: "Name", value: "Riya Mehta" },
  { label: "Age / Gender", value: "29 / Female" },
  { label: "Employee ID", value: "EMP-2048" },
  { label: "Department", value: "Product Design" },
  { label: "Role", value: "Senior UX Designer" },
  { label: "Location", value: "Bengaluru" },
  { label: "Work Mode", value: "Hybrid" },
  { label: "Manager", value: "A. Srinivasan" },
];

export const EMPLOYEE_HISTORY = [
  { label: "Known Issues", value: "Screen-related eye strain; episodic neck tightness" },
  { label: "Lifestyle Note", value: "Sedentary work blocks during launch cycles" },
  { label: "Wellness Focus", value: "Sleep consistency, posture, hydration" },
];

export const EMPLOYEE_SUMMARY_METRICS = [
  { label: "Blood Pressure", value: "118/76", unit: "mmHg", tone: "sky" as const },
  { label: "Heart Rate", value: "74", unit: "bpm", tone: "rose" as const },
  { label: "SpO2", value: "99", unit: "%", tone: "emerald" as const },
  { label: "Stress Index", value: "61", unit: "/100", tone: "amber" as const },
];

export const EMPLOYEE_OVERVIEW_STRIPS = [
  {
    label: "Attendance Wellness",
    value: "Stable",
    detail: "No recent leave spike tied to health complaints",
    icon: BriefcaseBusiness,
  },
  {
    label: "Hydration",
    value: "76%",
    detail: "Improved from prior review but still below target",
    icon: Droplets,
  },
  {
    label: "Activity",
    value: "Moderate",
    detail: "Walking targets met on 4 of the last 7 days",
    icon: Activity,
  },
  {
    label: "Risk Flag",
    value: "Watch",
    detail: "Monitor posture strain and sleep variability",
    icon: ShieldAlert,
  },
];

export const EMPLOYEE_LIFESTYLE_PATTERN = [
  {
    label: "Sleep Duration",
    value: "7.0 hrs/night",
    detail: "Usually asleep by 11:15 PM on weekdays; slight weekend drift.",
  },
  {
    label: "Screen Time",
    value: "8.5 hrs/day",
    detail: "High during design-review days with prolonged laptop sessions.",
  },
  {
    label: "Physical Activity Level",
    value: "Moderate",
    detail: "Average 6,800 steps/day with yoga twice weekly.",
  },
  {
    label: "Work Stress Level",
    value: "6/10",
    detail: "Stress peaks around release deadlines and stakeholder reviews.",
  },
  {
    label: "Sitting Hours Per Day",
    value: "8.2 hrs/day",
    detail: "Long seated blocks during deep work; movement breaks are inconsistent.",
  },
  {
    label: "Water Intake",
    value: "2.1 L/day",
    detail: "Hydration improved after adding morning and mid-afternoon reminders.",
  },
  {
    label: "Meal Pattern",
    value: "Mostly Regular",
    detail: "Breakfast is consistent; lunch delays happen on meeting-heavy days.",
  },
];

export const EMPLOYEE_HABITS = [
  {
    label: "Smoking",
    value: "No",
    detail: "No active smoking history reported in current dummy profile.",
  },
  {
    label: "Alcohol",
    value: "Occasional",
    detail: "Social intake about 1 to 2 times per month.",
  },
  {
    label: "Tea / Coffee",
    value: "2 cups/day",
    detail: "One morning coffee and one post-lunch tea on most workdays.",
  },
  {
    label: "Tobacco",
    value: "No",
    detail: "No chewing tobacco or nicotine pouch use reported.",
  },
];

export const EMPLOYEE_METABOLIC_HEALTH = [
  {
    code: "7.1.1",
    title: "Agni",
    status: "Slightly Variable",
    summary:
      "Digestive strength is mostly stable, but meal delays during meetings lead to occasional heaviness and reduced appetite rhythm.",
    findings: [
      "Light bloating after delayed lunch",
      "Appetite drops on high-stress mornings",
      "Warm meals feel easier to digest",
    ],
  },
  {
    code: "7.1.2",
    title: "Ama",
    status: "Mild Load",
    summary:
      "Dummy metabolic burden is mild, mainly linked with screen-heavy days, low movement, and occasional late dinners.",
    findings: [
      "Post-lunch sluggishness on desk-heavy days",
      "Energy dip after processed snacks",
      "Improves with hydration and regular meals",
    ],
  },
  {
    code: "7.1.3",
    title: "Koshta",
    status: "Mostly Regular",
    summary:
      "Bowel pattern is generally regular, with mild constipation tendency when hydration and movement both drop.",
    findings: [
      "Best regularity on active days",
      "Dryness appears with low water intake",
      "Morning routine improves clearance",
    ],
  },
] as const;

export const EMPLOYEE_EXCRETORY_HEALTH = [
  {
    code: "7.2.1",
    title: "Mutra",
    status: "Stable",
    summary:
      "Urinary pattern is acceptable, though afternoon concentration increases when work blocks reduce water intake.",
    findings: [
      "Urine color darkens on busy afternoons",
      "No burning or urgency reported",
      "Improves with reminder-based hydration",
    ],
  },
  {
    code: "7.2.2",
    title: "Sweda",
    status: "Stress Reactive",
    summary:
      "Sweating increases during presentations and deadline pressure, reflecting mild stress-reactive thermoregulation.",
    findings: [
      "Palmar sweating during review meetings",
      "Heat rises in afternoon work pressure",
      "Less noticeable on low-stress days",
    ],
  },
  {
    code: "7.2.3",
    title: "Purisha",
    status: "Mostly Regular",
    summary:
      "Stool frequency remains fairly regular, with minor variability during travel or meal schedule disruption.",
    findings: [
      "Occasional delayed motion after late dinners",
      "Regular on routine office-from-home days",
      "Fiber and water improve consistency",
    ],
  },
] as const;

export const EMPLOYEE_TISSUE_HEALTH = [
  {
    code: "8.1.1",
    title: "Rasa",
    score: 76,
    status: "Stable",
    summary: "Nourishment flow appears adequate, though hydration still needs consistent attention on office days.",
  },
  {
    code: "8.1.2",
    title: "Raktha",
    score: 66,
    status: "Watch",
    summary: "Dummy raktha status is acceptable but should be watched if fatigue or low energy begins increasing.",
  },
  {
    code: "8.1.3",
    title: "Mamsa",
    score: 72,
    status: "Good",
    summary: "Muscle support is satisfactory, with some stiffness related more to sitting time than actual weakness.",
  },
  {
    code: "8.1.4",
    title: "Meda",
    score: 63,
    status: "Mild Excess",
    summary: "Workstyle and reduced movement suggest mild meda accumulation risk over time.",
  },
  {
    code: "8.1.5",
    title: "Asthi",
    score: 68,
    status: "Stable",
    summary: "Bone support is fair in this dummy profile, with posture and resistance work still worth improving.",
  },
  {
    code: "8.1.6",
    title: "Majja",
    score: 62,
    status: "Stress Sensitive",
    summary: "Majja balance reflects screen fatigue and mental overuse during high-delivery weeks.",
  },
  {
    code: "8.1.7",
    title: "Sukra",
    score: 70,
    status: "Moderate Reserve",
    summary: "Vital reserve is acceptable, but recovery quality depends heavily on sleep consistency.",
  },
] as const;

export const EMPLOYEE_IMMUNITY_TOLERANCE = [
  {
    code: "8.2.1",
    title: "Ojas",
    score: 67,
    status: "Moderate",
    summary: "Overall resilience is fair and improves when sleep and hydration stay on track.",
  },
  {
    code: "8.2.2",
    title: "Satwa",
    score: 71,
    status: "Stable",
    summary: "Mental steadiness is good, though extended work pressure reduces clarity by evening.",
  },
  {
    code: "8.2.3",
    title: "Satmya",
    score: 64,
    status: "Variable",
    summary: "Adaptation remains decent, but routine disruption still lowers comfort and digestion.",
  },
] as const;

export const EMPLOYEE_RISK_SCORES = [
  {
    label: "Fatty Liver Risk",
    score: "24%",
    level: "Low",
    detail: "Current pattern suggests low near-term concern, but sedentary work and late dinners should still be watched.",
    action: "Keep dinner lighter on workdays and maintain at least 30 minutes of movement.",
  },
  {
    label: "Cardiovascular Risk",
    score: "31%",
    level: "Moderate",
    detail: "Stress load and screen-heavy routine slightly raise long-term cardiovascular watch factors.",
    action: "Focus on movement breaks, sleep regularity, and consistent weekly exercise.",
  },
  {
    label: "Anemia Risk",
    score: "18%",
    level: "Low",
    detail: "No strong current red flags in this dummy profile, though energy should be tracked during heavier work periods.",
    action: "Maintain iron-rich meals and review fatigue if it becomes persistent.",
  },
  {
    label: "Gout Risk",
    score: "12%",
    level: "Low",
    detail: "Dummy profile suggests low current risk with no major pattern pointing toward uric acid concerns.",
    action: "Stay hydrated and avoid frequent high-purine binge meals.",
  },
  {
    label: "Hypertension Risk",
    score: "29%",
    level: "Moderate",
    detail: "Baseline blood pressure is normal, but prolonged sitting and work stress keep this on the watchlist.",
    action: "Continue monthly BP checks and reduce long uninterrupted desk sessions.",
  },
  {
    label: "Diabetes Risk",
    score: "22%",
    level: "Low",
    detail: "Risk is currently low in this dummy view, though meal delays and reduced activity could shift it upward over time.",
    action: "Keep lunch timing stable and preserve daily walking targets.",
  },
];

export const EMPLOYEE_RISK_SUMMARY = [
  {
    label: "Highest Watch Area",
    value: "Cardiovascular",
    detail: "Driven by workload stress and long seated blocks rather than current acute findings.",
  },
  {
    label: "Overall Risk Posture",
    value: "Mostly Low",
    detail: "Most risk scores remain low with two moderate watch areas.",
  },
  {
    label: "Priority Focus",
    value: "Routine Consistency",
    detail: "Sleep, movement, and meal timing improvements give the best return in this profile.",
  },
];

export const EMPLOYEE_HEALTH_KIT = [
  {
    code: "8.1",
    title: "Daily Immunity & Energy",
    focus: "Morning resilience",
    detail: "Dummy kit suggests starting the day with hydration, sunlight exposure, and a protein-rich breakfast to reduce the late-morning crash.",
  },
  {
    code: "8.2",
    title: "Stress & Mental Wellness",
    focus: "Nervous system reset",
    detail: "Short breathing breaks, meeting buffers, and an evening shutdown ritual are recommended to lower cumulative work stress.",
  },
  {
    code: "8.3",
    title: "Gut Health & Digestion",
    focus: "Digestive regularity",
    detail: "Regular meal timing, lighter lunches on office days, and fewer processed snacks are the main support themes in this dummy profile.",
  },
  {
    code: "8.4",
    title: "Metabolic Health",
    focus: "Energy stability",
    detail: "Walking after meals and limiting late dinners are shown as the best levers for improving metabolic consistency.",
  },
  {
    code: "8.5",
    title: "Heart Health",
    focus: "Cardio care",
    detail: "The kit emphasizes weekly cardio sessions, stress management, and reducing uninterrupted sitting time.",
  },
  {
    code: "8.6",
    title: "Office Desk Detox",
    focus: "Desk reset",
    detail: "Dummy support plan includes eye breaks, posture resets, standing intervals, and blue-light reduction after work.",
  },
  {
    code: "8.7",
    title: "Musculoskeletal Relief",
    focus: "Neck and back relief",
    detail: "Stretches for shoulders, hips, wrists, and lower back are positioned as the main preventive recovery block.",
  },
  {
    code: "8.8",
    title: "Women's Health",
    focus: "Cycle-aware wellness",
    detail: "This dummy section highlights energy pacing, iron-rich meals, hydration, and symptom journaling support.",
  },
  {
    code: "8.9",
    title: "Corporate Detox",
    focus: "Burnout prevention",
    detail: "Focus areas include boundaries after work hours, screen reduction, and one lower-load evening routine each week.",
  },
  {
    code: "8.10",
    title: "Productivity Booster",
    focus: "Performance rhythm",
    detail: "A simple work structure of deep-work blocks, movement breaks, and meal timing is recommended for sustained output.",
  },
];

export const EMPLOYEE_RECOMMENDATIONS = [
  {
    code: "7.1.1",
    title: "Diet",
    detail: "Prefer lighter lunches on office days, add protein to breakfast, and keep dinner earlier during busy weeks.",
  },
  {
    code: "7.1.2",
    title: "Lifestyle",
    detail: "Use 3-minute movement breaks between meetings, maintain a fixed sleep window, and avoid screen spillover after work.",
  },
  {
    code: "7.1.3",
    title: "Herbs",
    detail: "Dummy support includes ginger-fennel tea after heavy meals and tulsi infusion during high-stress work cycles.",
  },
];

export const EMPLOYEE_HEALTH_PROGRESS = [
  {
    code: "7.2.1",
    title: "Work Place Ergonomics",
    value: "Improved",
    detail: "Chair height, monitor placement, and wrist support were adjusted over the last month.",
  },
  {
    code: "7.2.2",
    title: "Weight Change",
    value: "-1.4 kg",
    detail: "Dummy trend shows mild improvement after consistent walks and fewer late-night snacks.",
  },
  {
    code: "7.2.3",
    title: "BP Trend",
    value: "Stable",
    detail: "Blood pressure remained in normal range across recent monthly checks.",
  },
  {
    code: "7.2.4",
    title: "Stress Score",
    value: "-8 pts",
    detail: "Stress index improved after reducing back-to-back meetings and improving sleep timing.",
  },
  {
    code: "7.2.5",
    title: "Energy Level",
    value: "Better",
    detail: "Morning energy is more stable and afternoon crash episodes are less frequent.",
  },
  {
    code: "7.2.6",
    title: "Productivity Improvement",
    value: "+11%",
    detail: "Deep-work blocks and reduced task-switching improved overall consistency in output.",
  },
];

const EMPLOYEE_VITALS = [
  {
    slug: "bp",
    shortLabel: "BP",
    title: "Blood Pressure",
    value: "118/76",
    unit: "mmHg",
    status: "Normal",
    normalRange: "Less than 120/80 mmHg is ideal",
    description: "Blood pressure remains stable during routine working-day measurements.",
  },
  {
    slug: "hr",
    shortLabel: "HR",
    title: "Heart Rate",
    value: "74",
    unit: "bpm",
    status: "Normal",
    normalRange: "60-100 bpm (resting adult)",
    description: "Resting heart rate is within normal range and stable across recent checks.",
  },
  {
    slug: "rr",
    shortLabel: "RR",
    title: "Respiratory Rate",
    value: "15",
    unit: "breaths/min",
    status: "Normal",
    normalRange: "12-20 breaths/min (adult)",
    description: "Respiratory rate is stable without signs of respiratory strain.",
  },
  {
    slug: "spo2",
    shortLabel: "SpO2",
    title: "Oxygen Saturation",
    value: "99",
    unit: "%",
    status: "Normal",
    normalRange: "95-100% at sea level",
    description: "Oxygen saturation remains strong at rest.",
  },
  {
    slug: "temperature",
    shortLabel: "Temp",
    title: "Body Temperature",
    value: "98.2",
    unit: "F",
    status: "Normal",
    normalRange: "97 F to 99 F (oral)",
    description: "Body temperature remains in expected baseline range.",
  },
  {
    slug: "hrv",
    shortLabel: "HRV",
    title: "Heart Rate Variability",
    value: "46",
    unit: "ms",
    status: "Average",
    normalRange: "Trend over time is most useful",
    description: "HRV suggests acceptable recovery with some workload-driven variation.",
  },
  {
    slug: "vo2-max",
    shortLabel: "VO2",
    title: "VO2 Max",
    value: "33",
    unit: "ml/kg/min",
    status: "Fair",
    normalRange: "Varies by age and sex",
    description: "Cardiorespiratory fitness is fair and improving with regular activity.",
  },
  {
    slug: "sleep-duration",
    shortLabel: "Sleep",
    title: "Sleep Duration",
    value: "7.0",
    unit: "hours/night",
    status: "Good",
    normalRange: "7-9 hours/night (adult)",
    description: "Sleep duration is close to target on most weekdays.",
  },
  {
    slug: "ecg-rhythm",
    shortLabel: "ECG",
    title: "ECG Rhythm",
    value: "Sinus Rhythm",
    unit: "",
    status: "Normal",
    normalRange: "Regular sinus rhythm",
    description: "ECG rhythm shows a normal sinus pattern in this employee baseline view.",
  },
];

export function getEmployeeDisplayedVitals() {
  const mappedVitals = [
    ...EMPLOYEE_VITALS,
    {
      slug: "pulse-rate",
      shortLabel: "PR",
      title: "Pulse Rate",
      value: "74",
      unit: "bpm",
      status: "Normal",
      normalRange: "60-100 bpm (resting adult)",
      description: "Pulse rate is stable during working-day baseline measurement.",
    },
    {
      slug: "sleep-quality",
      shortLabel: "SQ",
      title: "Sleep Quality",
      value: "7.1/10",
      unit: "",
      status: "Good",
      normalRange: "7/10 or above",
      description: "Sleep quality has improved with a more consistent weekday routine.",
    },
  ];

  const requiredOrder = [
    "Blood Pressure",
    "Heart Rate",
    "Respiratory Rate",
    "Oxygen Saturation",
    "Body Temperature",
    "Pulse Rate",
    "Heart Rate Variability",
    "VO2 Max",
    "Sleep Duration",
    "Sleep Quality",
    "ECG Rhythm",
  ];

  return requiredOrder
    .map((key) => mappedVitals.find((item) => item.title === key))
    .filter((item): item is (typeof mappedVitals)[number] => Boolean(item));
}
