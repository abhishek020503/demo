import type { LucideIcon } from "lucide-react";

export type DoctorVitalItem = {
  slug: string;
  shortLabel: string;
  title: string;
  value: string;
  unit: string;
  status: string;
  normalRange: string;
  description: string;
};

export type DoctorDashboardSection = "overview" | "vitals" | "blood";

export type DoctorSummaryMetric = {
  label: string;
  value: string;
  unit: string;
  tone: "sky" | "rose" | "emerald" | "amber";
};

export type DoctorOverviewStrip = {
  label: string;
  value: string;
  detail: string;
  icon: LucideIcon;
};
