"use client";

import { usePathname, useRouter } from "next/navigation";

const EMPLOYEE_NAV_ITEMS = [
  { href: "/employee-dashboard", label: "Overview" },
  { href: "/employee-vital-parameters", label: "Vitals" },
  { href: "/employee-metabolic-health", label: "Metabolic Health" },
  { href: "/employee-tissue-health", label: "Tissue Health" },
  { href: "/employee-lifestyle-pattern", label: "Lifestyle Pattern" },
  { href: "/employee-risk-scoring", label: "Risk Scoring" },
  { href: "/employee-health-kit", label: "Health Kit" },
  { href: "/employee-recommendation", label: "Recommendation" },
] as const;

export default function EmployeeNavbar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="-mx-1 flex gap-2 overflow-x-auto whitespace-nowrap px-1 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {EMPLOYEE_NAV_ITEMS.map((item) => {
        const isActive = pathname === item.href;

        return (
          <button
            key={item.href}
            type="button"
            onClick={() => router.push(item.href)}
            className={`shrink-0 rounded-xl border px-3.5 py-1.5 text-xs font-semibold transition ${
              isActive
                ? "border-transparent bg-[linear-gradient(135deg,#1f3b78_0%,#172d5c_100%)] text-white shadow-lg shadow-blue-900/20"
                : "border-[var(--border)] bg-white/90 text-slate-600 hover:bg-slate-50"
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
