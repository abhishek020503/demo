"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  AlertTriangle,
  BriefcaseBusiness,
  Building2,
  HeartPulse,
  Search,
  ShieldAlert,
  Sparkles,
  Stethoscope,
  Users,
  X,
} from "lucide-react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import DashboardShell from "./DashboardShell";

type RiskLevel = "Low" | "Medium" | "High" | "Critical";
type EmployeeStatus = "Active" | "On Leave";
type DashboardTab = "overview" | "employees" | "wellness" | "analytics" | "alerts";
type RiskTrendRange = "1w" | "1m" | "6m";

type EmployeeRecord = {
  id: string;
  name: string;
  dept: string;
  age: number;
  bmi: "Normal" | "Overweight" | "Obese";
  bp: "Normal" | "Elevated" | "High";
  risk: RiskLevel;
  stress: number;
  lastCheckup: string;
  wellness: boolean;
  leave: number;
  status: EmployeeStatus;
};

const employeeData: EmployeeRecord[] = [
  { id: "E001", name: "Sarah Chen", dept: "Engineering", age: 34, bmi: "Normal", bp: "Normal", risk: "Low", stress: 42, lastCheckup: "2025-01-10", wellness: true, leave: 2, status: "Active" },
  { id: "E002", name: "Marcus Johnson", dept: "Sales", age: 47, bmi: "Overweight", bp: "Elevated", risk: "High", stress: 78, lastCheckup: "2024-11-05", wellness: false, leave: 8, status: "Active" },
  { id: "E003", name: "Priya Sharma", dept: "HR", age: 29, bmi: "Normal", bp: "Normal", risk: "Low", stress: 35, lastCheckup: "2025-02-15", wellness: true, leave: 1, status: "Active" },
  { id: "E004", name: "Tom Wilkins", dept: "Finance", age: 52, bmi: "Obese", bp: "High", risk: "Critical", stress: 88, lastCheckup: "2024-09-20", wellness: false, leave: 15, status: "On Leave" },
  { id: "E005", name: "Aisha Patel", dept: "Marketing", age: 38, bmi: "Normal", bp: "Normal", risk: "Low", stress: 50, lastCheckup: "2025-01-28", wellness: true, leave: 3, status: "Active" },
  { id: "E006", name: "James O'Brien", dept: "Operations", age: 44, bmi: "Overweight", bp: "Elevated", risk: "Medium", stress: 65, lastCheckup: "2024-12-12", wellness: true, leave: 6, status: "Active" },
  { id: "E007", name: "Li Wei", dept: "Engineering", age: 31, bmi: "Normal", bp: "Normal", risk: "Low", stress: 30, lastCheckup: "2025-02-01", wellness: true, leave: 0, status: "Active" },
  { id: "E008", name: "Fatima Al-Hassan", dept: "Legal", age: 41, bmi: "Normal", bp: "Elevated", risk: "Medium", stress: 72, lastCheckup: "2024-10-30", wellness: false, leave: 9, status: "Active" },
];

const trendDataByRange: Record<RiskTrendRange, Array<{ label: string; low: number; medium: number; high: number; critical: number }>> = {
  "1w": [
    { label: "Mon", low: 57, medium: 27, high: 11, critical: 5 },
    { label: "Tue", low: 56, medium: 28, high: 11, critical: 5 },
    { label: "Wed", low: 58, medium: 27, high: 10, critical: 5 },
    { label: "Thu", low: 55, medium: 29, high: 11, critical: 5 },
    { label: "Fri", low: 56, medium: 28, high: 12, critical: 4 },
    { label: "Sat", low: 57, medium: 27, high: 12, critical: 4 },
    { label: "Sun", low: 58, medium: 26, high: 12, critical: 4 },
  ],
  "1m": [
    { label: "W1", low: 54, medium: 29, high: 12, critical: 5 },
    { label: "W2", low: 55, medium: 29, high: 12, critical: 4 },
    { label: "W3", low: 56, medium: 28, high: 12, critical: 4 },
    { label: "W4", low: 57, medium: 27, high: 11, critical: 5 },
  ],
  "6m": [
    { label: "Sep", low: 60, medium: 26, high: 11, critical: 3 },
    { label: "Oct", low: 57, medium: 29, high: 10, critical: 4 },
    { label: "Nov", low: 55, medium: 30, high: 12, critical: 3 },
    { label: "Dec", low: 52, medium: 32, high: 11, critical: 5 },
    { label: "Jan", low: 54, medium: 29, high: 13, critical: 4 },
    { label: "Feb", low: 56, medium: 28, high: 12, critical: 4 },
  ],
};

const deptData = [
  { dept: "Engineering", score: 82 },
  { dept: "Sales", score: 61 },
  { dept: "HR", score: 90 },
  { dept: "Finance", score: 55 },
  { dept: "Marketing", score: 79 },
  { dept: "Operations", score: 68 },
  { dept: "Legal", score: 71 },
];

const wellnessProgramData = [
  { name: "Enrolled", value: 61 },
  { name: "Not Enrolled", value: 39 },
];

const stressData = [
  { week: "W1", avg: 52 },
  { week: "W2", avg: 58 },
  { week: "W3", avg: 54 },
  { week: "W4", avg: 61 },
  { week: "W5", avg: 57 },
  { week: "W6", avg: 63 },
  { week: "W7", avg: 59 },
  { week: "W8", avg: 55 },
];

const radarData = [
  { metric: "Physical", score: 72 },
  { metric: "Mental", score: 61 },
  { metric: "Nutrition", score: 68 },
  { metric: "Activity", score: 55 },
  { metric: "Sleep", score: 64 },
  { metric: "Care", score: 78 },
];

const wellnessPrograms = [
  { title: "Gym/Fitness Subsidy", enrolled: 5, total: 8, color: "#14b8a6" },
  { title: "Mental Health Support", enrolled: 3, total: 8, color: "#818cf8" },
  { title: "Annual Health Screenings", enrolled: 6, total: 8, color: "#38bdf8" },
  { title: "Nutrition Counseling", enrolled: 4, total: 8, color: "#34d399" },
  { title: "Stress Management", enrolled: 2, total: 8, color: "#fbbf24" },
  { title: "Sleep Health Program", enrolled: 3, total: 8, color: "#f472b6" },
];

const complianceData = [
  { label: "Annual Physical Completed", pct: 75, color: "#14b8a6" },
  { label: "Dental Checkup", pct: 62, color: "#818cf8" },
  { label: "Vision Screening", pct: 50, color: "#38bdf8" },
  { label: "Blood Panel / Labs", pct: 87, color: "#34d399" },
  { label: "Mental Health Assessment", pct: 37, color: "#fbbf24" },
];

const alerts = [
  {
    type: "Critical",
    title: "Critical Health Risk - Tom Wilkins",
    body:
      "Tom shows obese BMI, high blood pressure, stress index 88, and 15 leave days. Immediate intervention is recommended.",
    time: "March 11, 2026 09:02",
    action: "Schedule Review",
  },
  {
    type: "High",
    title: "High Risk Alert - Marcus Johnson",
    body:
      "Marcus has elevated BP, stress score 78, and no wellness enrollment. A targeted wellness and screening referral is due.",
    time: "March 11, 2026 08:45",
    action: "Send Wellness Invite",
  },
  {
    type: "Medium",
    title: "Overdue Health Checkup - Fatima Al-Hassan",
    body:
      "Last checkup was October 30, 2024. Elevated BP was noted and the screening reminder remains pending.",
    time: "March 10, 2026 16:15",
    action: "Send Reminder",
  },
  {
    type: "Info",
    title: "Wellness Program Non-Enrollment",
    body:
      "Three employees are still outside the active wellness programs. Consider focused outreach with incentives.",
    time: "March 8, 2026",
    action: "View Employees",
  },
];

const tabMeta: { id: DashboardTab; label: string; icon: LucideIcon }[] = [
  { id: "overview", label: "Overview", icon: Activity },
  { id: "employees", label: "Employees", icon: Users },
  { id: "wellness", label: "Wellness", icon: Sparkles },
  { id: "analytics", label: "Analytics", icon: HeartPulse },
  { id: "alerts", label: "Alerts", icon: ShieldAlert },
];

const riskStyles: Record<
  RiskLevel,
  { dot: string; badge: string; text: string }
> = {
  Low: {
    dot: "#34d399",
    badge: "bg-emerald-100 text-emerald-700 border-emerald-200",
    text: "text-emerald-700",
  },
  Medium: {
    dot: "#fbbf24",
    badge: "bg-amber-100 text-amber-700 border-amber-200",
    text: "text-amber-700",
  },
  High: {
    dot: "#fb923c",
    badge: "bg-orange-100 text-orange-700 border-orange-200",
    text: "text-orange-700",
  },
  Critical: {
    dot: "#f87171",
    badge: "bg-rose-100 text-rose-700 border-rose-200",
    text: "text-rose-700",
  },
};

const pieColors = ["#14b8a6", "#d9e4f4"];

export default function HRDashboard() {
  const [activeTab, setActiveTab] = useState<DashboardTab>("overview");
  const [selectedEmployee, setSelectedEmployee] = useState<EmployeeRecord | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [riskFilter, setRiskFilter] = useState<"All" | RiskLevel>("All");
  const [riskTrendRange, setRiskTrendRange] = useState<RiskTrendRange>("6m");

  const filteredEmployees = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();
    return employeeData.filter((employee) => {
      const matchesRisk = riskFilter === "All" || employee.risk === riskFilter;
      const matchesQuery =
        !normalizedQuery ||
        employee.name.toLowerCase().includes(normalizedQuery) ||
        employee.dept.toLowerCase().includes(normalizedQuery);

      return matchesRisk && matchesQuery;
    });
  }, [riskFilter, searchQuery]);

  const riskCount = useMemo(
    () =>
      employeeData.reduce(
        (accumulator, employee) => {
          accumulator[employee.risk] += 1;
          return accumulator;
        },
        { Low: 0, Medium: 0, High: 0, Critical: 0 }
      ),
    []
  );

  const highRiskEmployees = employeeData.filter(
    (employee) => employee.risk === "High" || employee.risk === "Critical"
  ).length;
  const enrolledEmployees = employeeData.filter((employee) => employee.wellness).length;
  const averageStress = Math.round(
    employeeData.reduce((total, employee) => total + employee.stress, 0) / employeeData.length
  );
  const riskTrendData = trendDataByRange[riskTrendRange];

  return (
    <DashboardShell
      headerActions={
        <div className="flex flex-wrap gap-2">
          <HeaderChip label="Dashboard" value="HR Health" />
          <HeaderChip label="Employees" value={`${employeeData.length}`} />
          <HeaderChip label="Current Time" value="" empty />
        </div>
      }
    >
      <section className="overflow-hidden rounded-[1.9rem] border border-slate-200 bg-[linear-gradient(180deg,#fffefc_0%,#f8f5ef_28%,#edf4fb_100%)] text-slate-900 shadow-[0_30px_80px_rgba(148,163,184,0.18)]">
        <div className="border-b border-slate-200 bg-[linear-gradient(90deg,rgba(255,247,237,0.92)_0%,rgba(248,250,252,0.96)_58%,rgba(239,246,255,0.96)_100%)] px-4 py-4 md:px-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-[1.25rem] bg-[linear-gradient(135deg,#f1d3a6_0%,#d9e4f4_100%)] text-slate-900 shadow-lg shadow-slate-200/70">
                <BriefcaseBusiness size={24} />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
                  HealthPulse HR
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                  Employee Health Intelligence
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
                  Central workforce health dashboard for employee risk tracking, wellness
                  participation, absenteeism, and clinical follow-up routing.
                </p>
              </div>
            </div>

            <div className="grid gap-2 sm:grid-cols-2 lg:min-w-[330px]">
              <TopBadge label="Review Month" value="March 2026" />
              <TopBadge label="Open Alerts" value="3 Active" tone="rose" />
              <TopBadge label="Route To" value="Doctor / Patient" />
              <TopBadge label="Current Time" value="" muted />
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {tabMeta.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                    isActive
                      ? "border-slate-300 bg-white text-slate-900 shadow-sm"
                      : "border-slate-200 bg-slate-50/90 text-slate-500 hover:border-slate-300 hover:bg-white hover:text-slate-800"
                  }`}
                >
                  <Icon size={16} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="p-4 md:p-6">
          {activeTab === "overview" && (
            <div className="space-y-4">
              <section className="grid gap-4 xl:grid-cols-4">
                <MetricCard
                  label="Overall Health Score"
                  value="72"
                  suffix="/100"
                  note="+3 pts from last month"
                  icon={HeartPulse}
                  accent="text-emerald-700"
                />
                <MetricCard
                  label="High Risk Employees"
                  value={`${highRiskEmployees}`}
                  suffix=" flagged"
                  note="Marcus J. and Tom W. need review"
                  icon={AlertTriangle}
                  accent="text-rose-700"
                />
                <MetricCard
                  label="Wellness Enrollment"
                  value={`${Math.round((enrolledEmployees / employeeData.length) * 100)}`}
                  suffix="%"
                  note={`${enrolledEmployees} of ${employeeData.length} enrolled`}
                  icon={Sparkles}
                  accent="text-indigo-700"
                />
                <MetricCard
                  label="Average Stress Index"
                  value={`${averageStress}`}
                  suffix="/100"
                  note="Sales and Finance need attention"
                  icon={Activity}
                  accent="text-amber-700"
                />
              </section>

              <section className="grid gap-4 xl:grid-cols-[0.95fr_1.35fr]">
                <PanelCard
                  kicker="Risk Distribution"
                  title="Current Employee Risk Mix"
                  subtitle="Live split across the 8 tracked employees"
                >
                  <div className="space-y-4">
                    {(Object.entries(riskCount) as [RiskLevel, number][]).map(([risk, count]) => (
                      <div key={risk}>
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-2">
                            <span
                              className="h-2.5 w-2.5 rounded-full"
                              style={{ backgroundColor: riskStyles[risk].dot }}
                            />
                            <span className={`text-sm font-semibold ${riskStyles[risk].text}`}>
                              {risk}
                            </span>
                          </div>
                          <span className="text-xs font-medium text-slate-400">
                            {count} / {employeeData.length}
                          </span>
                        </div>
                        <div className="mt-2 h-2 rounded-full bg-slate-800">
                          <div
                            className="h-2 rounded-full"
                            style={{
                              width: `${(count / employeeData.length) * 100}%`,
                              backgroundColor: riskStyles[risk].dot,
                            }}
                          />
                        </div>
                      </div>
                    ))}

                    <div className="rounded-[1.2rem] border border-rose-200 bg-rose-50 p-4 text-sm text-slate-700">
                      <p className="font-semibold text-rose-700">Action Required</p>
                      <p className="mt-2 leading-6">
                        One employee is marked critical and one high risk. HR should route both
                        for doctor review and wellness intervention.
                      </p>
                    </div>
                  </div>
                </PanelCard>

                <PanelCard
                  kicker="Risk Trend"
                  title={
                    riskTrendRange === "1w"
                      ? "Last 7 Days"
                      : riskTrendRange === "1m"
                        ? "Last 4 Weeks"
                        : "Last 6 Months"
                  }
                  subtitle="Low, medium, high, and critical category movement"
                  action={
                    <div className="flex flex-wrap gap-2">
                      {[
                        { id: "1w", label: "1 Week" },
                        { id: "1m", label: "1 Month" },
                        { id: "6m", label: "6 Month" },
                      ].map((range) => (
                        <button
                          key={range.id}
                          type="button"
                          onClick={() => setRiskTrendRange(range.id as RiskTrendRange)}
                          className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                            riskTrendRange === range.id
                              ? "border-slate-300 bg-slate-900 text-white"
                              : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                          }`}
                        >
                          {range.label}
                        </button>
                      ))}
                    </div>
                  }
                >
                  <ChartWrap>
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={riskTrendData}>
                        <defs>
                          {[
                            ["low", "#34d399"],
                            ["medium", "#fbbf24"],
                            ["high", "#fb923c"],
                            ["critical", "#f87171"],
                          ].map(([key, color]) => (
                            <linearGradient key={key} id={`hr-${key}`} x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor={color} stopOpacity={0.35} />
                              <stop offset="95%" stopColor={color} stopOpacity={0.02} />
                            </linearGradient>
                          ))}
                        </defs>
                        <CartesianGrid stroke="#e2e8f0" strokeDasharray="3 3" />
                        <XAxis dataKey="label" tick={axisTick} axisLine={false} tickLine={false} />
                        <YAxis tick={axisTick} axisLine={false} tickLine={false} />
                        <Tooltip contentStyle={tooltipStyle} />
                        <Area type="monotone" dataKey="low" fill="url(#hr-low)" stroke="#34d399" strokeWidth={2} />
                        <Area type="monotone" dataKey="medium" fill="url(#hr-medium)" stroke="#fbbf24" strokeWidth={2} />
                        <Area type="monotone" dataKey="high" fill="url(#hr-high)" stroke="#fb923c" strokeWidth={2} />
                        <Area type="monotone" dataKey="critical" fill="url(#hr-critical)" stroke="#f87171" strokeWidth={2} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </ChartWrap>
                </PanelCard>
              </section>

              <section className="grid gap-4 xl:grid-cols-[1.3fr_0.9fr]">
                <PanelCard
                  kicker="Department Health"
                  title="Scores By Team"
                  subtitle="Quick comparison of department wellness conditions"
                >
                  <ChartWrap>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={deptData} barSize={28}>
                        <CartesianGrid stroke="#e2e8f0" strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="dept" tick={smallAxisTick} axisLine={false} tickLine={false} />
                        <YAxis domain={[0, 100]} tick={smallAxisTick} axisLine={false} tickLine={false} />
                        <Tooltip contentStyle={tooltipStyle} />
                        <Bar dataKey="score" radius={[6, 6, 0, 0]}>
                          {deptData.map((entry) => (
                            <Cell
                              key={entry.dept}
                              fill={entry.score >= 80 ? "#14b8a6" : entry.score >= 65 ? "#818cf8" : "#f87171"}
                            />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartWrap>
                </PanelCard>

                <PanelCard
                  kicker="Health Dimensions"
                  title="Capability Radar"
                  subtitle="Workforce score across care and recovery dimensions"
                >
                  <ChartWrap>
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart data={radarData}>
                        <PolarGrid stroke="#dbeafe" />
                        <PolarAngleAxis dataKey="metric" tick={{ fill: "#94a3b8", fontSize: 10 }} />
                        <PolarRadiusAxis angle={24} domain={[0, 100]} tick={false} axisLine={false} />
                        <Radar dataKey="score" stroke="#14b8a6" fill="#14b8a6" fillOpacity={0.25} strokeWidth={2} />
                      </RadarChart>
                    </ResponsiveContainer>
                  </ChartWrap>
                </PanelCard>
              </section>
            </div>
          )}

          {activeTab === "employees" && (
            <div className="space-y-4">
              <section className="flex flex-col gap-4 rounded-[1.5rem] border border-slate-200 bg-white/85 p-4 shadow-sm shadow-slate-200/60 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                    Employee Records
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-slate-900">Health Roster</h2>
                  <p className="mt-2 text-sm text-slate-400">
                    Showing {filteredEmployees.length} of {employeeData.length} employees.
                  </p>
                </div>

                <div className="flex flex-col gap-3 md:flex-row">
                  <label className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600">
                    <Search size={16} className="text-slate-500" />
                    <input
                      value={searchQuery}
                      onChange={(event) => setSearchQuery(event.target.value)}
                      placeholder="Search by name or department"
                      className="w-full bg-transparent outline-none placeholder:text-slate-500 md:w-64"
                    />
                  </label>
                  <select
                    value={riskFilter}
                    onChange={(event) => setRiskFilter(event.target.value as "All" | RiskLevel)}
                    className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 outline-none"
                  >
                    <option>All</option>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                    <option>Critical</option>
                  </select>
                </div>
              </section>

              <section className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white/90 shadow-sm shadow-slate-200/60">
                <div className="overflow-x-auto">
                  <table className="min-w-[1080px] w-full border-collapse">
                    <thead className="bg-slate-50">
                      <tr className="border-b border-slate-200 text-left">
                        {[
                          "Employee",
                          "Department",
                          "Age",
                          "BMI",
                          "Blood Pressure",
                          "Stress",
                          "Risk",
                          "Last Checkup",
                          "Wellness",
                          "Leave",
                          "Status",
                          "Action",
                        ].map((head) => (
                          <th
                            key={head}
                            className="whitespace-nowrap px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500"
                          >
                            {head}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {filteredEmployees.map((employee) => (
                        <tr
                          key={employee.id}
                          className="cursor-pointer border-b border-slate-100 transition hover:bg-sky-50"
                          onClick={() => setSelectedEmployee(employee)}
                        >
                          <td className="px-4 py-4">
                            <div className="flex items-center gap-3">
                              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,#d9e4f4_0%,#f1d3a6_100%)] text-sm font-bold text-slate-900">
                                {getInitials(employee.name)}
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-slate-900">{employee.name}</p>
                                <p className="text-xs text-slate-500">{employee.id}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm text-slate-300">{employee.dept}</td>
                          <td className="px-4 py-4 text-sm text-slate-400">{employee.age}</td>
                          <td className="px-4 py-4">
                            <MiniStatus value={employee.bmi} tone={employee.bmi === "Normal" ? "good" : employee.bmi === "Overweight" ? "warn" : "bad"} />
                          </td>
                          <td className="px-4 py-4">
                            <MiniStatus value={employee.bp} tone={employee.bp === "Normal" ? "good" : employee.bp === "Elevated" ? "warn" : "bad"} />
                          </td>
                          <td className="px-4 py-4">
                            <div className="flex items-center gap-2">
                              <div className="h-1.5 w-24 rounded-full bg-slate-200">
                                <div
                                  className="h-1.5 rounded-full"
                                  style={{
                                    width: `${employee.stress}%`,
                                    backgroundColor:
                                      employee.stress > 70 ? "#f87171" : employee.stress > 50 ? "#fbbf24" : "#34d399",
                                  }}
                                />
                              </div>
                              <span className="text-xs text-slate-400">{employee.stress}</span>
                            </div>
                          </td>
                          <td className="px-4 py-4">
                            <span className={`inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs font-semibold ${riskStyles[employee.risk].badge}`}>
                              <span
                                className="h-2 w-2 rounded-full"
                                style={{ backgroundColor: riskStyles[employee.risk].dot }}
                              />
                              {employee.risk}
                            </span>
                          </td>
                          <td className="px-4 py-4 text-sm text-slate-400">{employee.lastCheckup}</td>
                          <td className="px-4 py-4 text-sm text-slate-300">{employee.wellness ? "Enrolled" : "Not enrolled"}</td>
                          <td className="px-4 py-4 text-sm text-slate-400">{employee.leave}d</td>
                          <td className="px-4 py-4">
                            <MiniStatus value={employee.status} tone={employee.status === "Active" ? "good" : "bad"} />
                          </td>
                          <td className="px-4 py-4">
                            <button
                              type="button"
                              className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5 text-xs font-semibold text-sky-700"
                            >
                              View
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          )}

          {activeTab === "wellness" && (
            <div className="space-y-4">
              <section className="grid gap-4 lg:grid-cols-3">
                {wellnessPrograms.map((program) => {
                  const completion = Math.round((program.enrolled / program.total) * 100);
                  return (
                    <div key={program.title} className="rounded-[1.5rem] border border-slate-200 bg-white/85 p-5 shadow-sm shadow-slate-200/60">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-sm font-semibold text-slate-900">{program.title}</p>
                          <p className="mt-1 text-xs text-slate-500">
                            {program.enrolled} / {program.total} employees enrolled
                          </p>
                        </div>
                        <span
                          className="rounded-full px-2.5 py-1 text-xs font-semibold"
                          style={{ backgroundColor: `${program.color}20`, color: program.color }}
                        >
                          {completion}%
                        </span>
                      </div>
                      <div className="mt-4 h-2 rounded-full bg-slate-800">
                        <div
                          className="h-2 rounded-full"
                          style={{ width: `${completion}%`, backgroundColor: program.color }}
                        />
                      </div>
                    </div>
                  );
                })}
              </section>

              <section className="grid gap-4 xl:grid-cols-[0.95fr_1.05fr]">
                <PanelCard
                  kicker="Enrollment"
                  title="Overall Wellness Participation"
                  subtitle="Current adoption across the tracked workforce"
                >
                  <div className="flex flex-col items-center gap-6 lg:flex-row">
                    <div className="h-48 w-full max-w-[220px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={wellnessProgramData}
                            dataKey="value"
                            innerRadius={55}
                            outerRadius={78}
                            paddingAngle={4}
                          >
                            {wellnessProgramData.map((item, index) => (
                              <Cell key={item.name} fill={pieColors[index]} />
                            ))}
                          </Pie>
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <p className="text-4xl font-bold text-slate-900">61%</p>
                        <p className="mt-1 text-sm text-slate-400">Enrollment rate</p>
                      </div>
                      <p className="text-sm text-slate-600">5 of 8 employees are enrolled.</p>
                      <LegendItem color="#14b8a6" label="Enrolled: 61%" />
                      <LegendItem color="#d9e4f4" label="Not enrolled: 39%" />
                    </div>
                  </div>
                </PanelCard>

                <PanelCard
                  kicker="Compliance"
                  title="Preventive Care Completion"
                  subtitle="Core screening compliance across employee wellness programs"
                >
                  <div className="space-y-4">
                    {complianceData.map((item) => (
                      <div key={item.label}>
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-sm text-slate-300">{item.label}</span>
                          <span className="text-xs font-semibold" style={{ color: item.color }}>
                            {item.pct}%
                          </span>
                        </div>
                        <div className="mt-2 h-2 rounded-full bg-slate-800">
                          <div
                            className="h-2 rounded-full"
                            style={{ width: `${item.pct}%`, backgroundColor: item.color }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </PanelCard>
              </section>
            </div>
          )}

          {activeTab === "analytics" && (
            <div className="space-y-4">
              <section className="grid gap-4 xl:grid-cols-2">
                <PanelCard
                  kicker="Stress Trend"
                  title="Average Stress Index"
                  subtitle="Weekly trend across the last 8 weeks"
                >
                  <ChartWrap>
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={stressData}>
                        <CartesianGrid stroke="#e2e8f0" strokeDasharray="3 3" />
                        <XAxis dataKey="week" tick={axisTick} axisLine={false} tickLine={false} />
                        <YAxis domain={[0, 100]} tick={axisTick} axisLine={false} tickLine={false} />
                        <Tooltip contentStyle={tooltipStyle} />
                        <Line
                          type="monotone"
                          dataKey="avg"
                          stroke="#fbbf24"
                          strokeWidth={2.5}
                          dot={{ fill: "#fbbf24", r: 4 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </ChartWrap>
                </PanelCard>

                <PanelCard
                  kicker="Absenteeism"
                  title="Health-Related Leave Days"
                  subtitle="Current leave distribution by employee"
                >
                  <ChartWrap>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={employeeData.map((employee) => ({
                          name: employee.name.split(" ")[0],
                          days: employee.leave,
                        }))}
                        barSize={28}
                      >
                        <CartesianGrid stroke="#e2e8f0" strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="name" tick={smallAxisTick} axisLine={false} tickLine={false} />
                        <YAxis tick={smallAxisTick} axisLine={false} tickLine={false} />
                        <Tooltip contentStyle={tooltipStyle} />
                        <Bar dataKey="days" radius={[6, 6, 0, 0]}>
                          {employeeData.map((employee) => (
                            <Cell
                              key={employee.id}
                              fill={employee.leave > 10 ? "#f87171" : employee.leave > 5 ? "#fbbf24" : "#14b8a6"}
                            />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartWrap>
                </PanelCard>
              </section>

              <PanelCard
                kicker="Age and Risk"
                title="Correlation Snapshot"
                subtitle="Compact matrix for age, stress, and risk review"
              >
                <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                  {employeeData.map((employee) => (
                    <div
                      key={employee.id}
                      className="rounded-[1.2rem] border p-4"
                      style={{
                        borderColor: `${riskStyles[employee.risk].dot}44`,
                        backgroundColor: "#f8fafc",
                      }}
                    >
                      <p className="text-sm font-semibold text-slate-900">{employee.name.split(" ")[0]}</p>
                      <div className="mt-3 space-y-2 text-xs">
                        <MetricRow label="Age" value={`${employee.age}`} />
                        <MetricRow label="Stress" value={`${employee.stress}`} tone={employee.stress > 70 ? "warn" : "default"} />
                        <MetricRow label="Risk" value={employee.risk} color={riskStyles[employee.risk].dot} />
                      </div>
                    </div>
                  ))}
                </div>
              </PanelCard>
            </div>
          )}

          {activeTab === "alerts" && (
            <div className="space-y-4">
              {alerts.map((alert) => {
                const palette =
                  alert.type === "Critical"
                    ? { edge: "#f87171", bg: "bg-rose-50", badge: "bg-rose-100 text-rose-700" }
                    : alert.type === "High"
                      ? { edge: "#fb923c", bg: "bg-orange-50", badge: "bg-orange-100 text-orange-700" }
                      : alert.type === "Medium"
                        ? { edge: "#fbbf24", bg: "bg-amber-50", badge: "bg-amber-100 text-amber-700" }
                        : { edge: "#38bdf8", bg: "bg-sky-50", badge: "bg-sky-100 text-sky-700" };

                return (
                  <div
                    key={alert.title}
                    className={`rounded-[1.4rem] border p-5 ${palette.bg}`}
                    style={{ borderColor: `${palette.edge}33`, borderLeftWidth: "4px", borderLeftColor: palette.edge }}
                  >
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-lg font-semibold text-slate-900">{alert.title}</h3>
                          <span className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] ${palette.badge}`}>
                            {alert.type}
                          </span>
                        </div>
                        <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-600">{alert.body}</p>
                      </div>
                      <div className="flex shrink-0 flex-col items-start gap-3 lg:items-end">
                        <span className="text-xs text-slate-500">{alert.time}</span>
                        <button
                          type="button"
                          className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                        >
                          {alert.action}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="border-t border-slate-200 bg-[linear-gradient(180deg,rgba(248,250,252,0.92)_0%,rgba(255,255,255,0.88)_100%)] px-4 py-4 md:px-6">
          <div className="grid gap-3 md:grid-cols-3">
            <FooterLink
              href="/"
              title="Dashboard Selector"
              description="Return to the root selector."
              icon={Building2}
            />
            <FooterLink
              href="/patient-dashboard"
              title="Patient Dashboard"
              description="Open the patient-facing dashboard."
              icon={Users}
            />
            <FooterLink
              href="/doctor-dashboard"
              title="Doctor Dashboard"
              description="Open the doctor module hub."
              icon={Stethoscope}
            />
          </div>
        </div>
      </section>

      {selectedEmployee && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-slate-900/35 p-4 backdrop-blur"
          onClick={() => setSelectedEmployee(null)}
        >
          <div
            className="w-full max-w-2xl rounded-[1.8rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] p-5 text-slate-900 shadow-[0_30px_90px_rgba(148,163,184,0.24)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,#d9e4f4_0%,#f1d3a6_100%)] text-lg font-bold text-slate-900">
                  {getInitials(selectedEmployee.name)}
                </div>
                <div>
                  <p className="text-xl font-semibold text-slate-900">{selectedEmployee.name}</p>
                  <p className="text-sm text-slate-500">
                    {selectedEmployee.dept} - {selectedEmployee.id}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedEmployee(null)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 hover:text-slate-900"
              >
                <X size={18} />
              </button>
            </div>

            <div
              className="mt-5 rounded-[1.3rem] border p-4"
              style={{
                borderColor: `${riskStyles[selectedEmployee.risk].dot}44`,
                backgroundColor: `${riskStyles[selectedEmployee.risk].dot}14`,
              }}
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Overall Risk</p>
                  <p className="mt-1 text-2xl font-bold" style={{ color: riskStyles[selectedEmployee.risk].dot }}>
                    {selectedEmployee.risk} Risk
                  </p>
                </div>
                <MiniStatus
                  value={selectedEmployee.status}
                  tone={selectedEmployee.status === "Active" ? "good" : "bad"}
                />
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <DetailTile label="Age" value={`${selectedEmployee.age} years`} />
              <DetailTile label="Department" value={selectedEmployee.dept} />
              <DetailTile label="BMI Category" value={selectedEmployee.bmi} />
              <DetailTile label="Blood Pressure" value={selectedEmployee.bp} />
              <DetailTile label="Stress Index" value={`${selectedEmployee.stress} / 100`} />
              <DetailTile label="Leave Taken" value={`${selectedEmployee.leave} days`} />
              <DetailTile label="Last Checkup" value={selectedEmployee.lastCheckup} />
              <DetailTile
                label="Wellness Program"
                value={selectedEmployee.wellness ? "Enrolled" : "Not enrolled"}
              />
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                className="flex-1 rounded-xl border border-sky-200 bg-sky-50 px-4 py-3 text-sm font-semibold text-sky-700"
              >
                Send Health Reminder
              </button>
              <button
                type="button"
                className="flex-1 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-700"
              >
                Schedule Review
              </button>
            </div>
          </div>
        </div>
      )}
    </DashboardShell>
  );
}

function HeaderChip({
  label,
  value,
  empty = false,
}: {
  label: string;
  value: string;
  empty?: boolean;
}) {
  return (
    <div className="rounded-full border border-slate-200 bg-white/90 px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-sm">
      {label}: {empty ? "" : value}
    </div>
  );
}

function TopBadge({
  label,
  value,
  tone = "default",
  muted = false,
}: {
  label: string;
  value: string;
  tone?: "default" | "rose";
  muted?: boolean;
}) {
  const toneClasses =
    tone === "rose"
      ? "border-rose-200 bg-rose-50 text-rose-700"
      : "border-slate-200 bg-white/90 text-slate-700";

  return (
    <div className={`rounded-[1.1rem] border px-3 py-3 ${toneClasses}`}>
      <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500">{label}</p>
      <p className={`mt-1 text-sm font-semibold ${muted ? "text-slate-300" : "text-slate-900"}`}>{value || " "}</p>
    </div>
  );
}

function MetricCard({
  label,
  value,
  suffix,
  note,
  icon: Icon,
  accent,
}: {
  label: string;
  value: string;
  suffix: string;
  note: string;
  icon: LucideIcon;
  accent: string;
}) {
  return (
    <div className="rounded-[1.5rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] p-5 shadow-sm shadow-slate-200/70">
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
          <Icon size={18} />
        </div>
        <span className="rounded-full border border-sky-200 bg-sky-50 px-2.5 py-1 text-[11px] font-semibold text-sky-700">
          Live
        </span>
      </div>
      <p className="mt-5 text-sm font-medium text-slate-500">{label}</p>
      <div className="mt-2 flex items-end gap-2">
        <span className={`text-4xl font-bold ${accent}`}>{value}</span>
        <span className="pb-1 text-sm text-slate-500">{suffix}</span>
      </div>
      <p className="mt-3 text-xs leading-5 text-slate-500">{note}</p>
    </div>
  );
}

function PanelCard({
  kicker,
  title,
  subtitle,
  action,
  children,
}: {
  kicker: string;
  title: string;
  subtitle: string;
  action?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-[1.5rem] border border-slate-200 bg-white/85 p-5 shadow-sm shadow-slate-200/60 backdrop-blur">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">{kicker}</p>
          <h2 className="mt-2 text-xl font-semibold text-slate-900">{title}</h2>
          <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
        </div>
        {action ? <div className="shrink-0">{action}</div> : null}
      </div>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function ChartWrap({ children }: { children: React.ReactNode }) {
  return <div className="h-64 w-full rounded-[1.2rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] p-3">{children}</div>;
}

function LegendItem({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-2 text-sm text-slate-400">
      <span className="h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: color }} />
      {label}
    </div>
  );
}

function MetricRow({
  label,
  value,
  tone = "default",
  color,
}: {
  label: string;
  value: string;
  tone?: "default" | "warn";
  color?: string;
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-slate-500">{label}</span>
      <span className={`font-semibold ${tone === "warn" ? "text-rose-300" : "text-slate-200"}`} style={color ? { color } : undefined}>
        {value}
      </span>
    </div>
  );
}

function DetailTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.1rem] border border-slate-200 bg-slate-50/90 p-4">
      <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500">{label}</p>
      <p className="mt-2 text-sm font-semibold text-slate-900">{value}</p>
    </div>
  );
}

function MiniStatus({
  value,
  tone,
}: {
  value: string;
  tone: "good" | "warn" | "bad";
}) {
  const classes =
    tone === "good"
      ? "border-emerald-200 bg-emerald-50 text-emerald-700"
      : tone === "warn"
        ? "border-amber-200 bg-amber-50 text-amber-700"
        : "border-rose-200 bg-rose-50 text-rose-700";

  return <span className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${classes}`}>{value}</span>;
}

function FooterLink({
  href,
  title,
  description,
  icon: Icon,
}: {
  href: string;
  title: string;
  description: string;
  icon: LucideIcon;
}) {
  return (
    <Link
      href={href}
      className="rounded-[1.3rem] border border-slate-200 bg-[linear-gradient(135deg,#ffffff_0%,#f8fafc_100%)] p-4 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-sm"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
        <Icon size={18} />
      </div>
      <p className="mt-4 text-base font-semibold text-slate-900">{title}</p>
      <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p>
    </Link>
  );
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

const axisTick = { fontSize: 11, fill: "#64748b" };
const smallAxisTick = { fontSize: 10, fill: "#64748b" };
const tooltipStyle = {
  backgroundColor: "#ffffff",
  border: "1px solid #cbd5e1",
  borderRadius: "12px",
  fontSize: "12px",
  color: "#0f172a",
};
