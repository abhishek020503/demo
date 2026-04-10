"use client";

import { usePathname, useRouter } from "next/navigation";

const DOCTOR_NAV_ITEMS = [
  { href: "/doctor-dashboard", label: "Overview" },
  { href: "/doctor-biohack-data", label: "Bio Hack" },
  { href: "/doctor-smart-watch-data", label: "Smart Watch" },
  { href: "/doctor-prakriti-dosha", label: "Prakrati" },
  { href: "/doctor-blood-ayurveda", label: "Body Analysis" },
  { href: "/doctor-imaging-report", label: "Imaging" },
  { href: "/doctor-risk-scoring", label: "Risk" },
  { href: "/treatment-plan", label: "Plan" },
] as const;

export default function DoctorNavbar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav className="-mx-0.5 flex flex-nowrap items-center gap-1 overflow-x-auto whitespace-nowrap rounded-[1.1rem] px-0.5 pb-0.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {DOCTOR_NAV_ITEMS.map((item) => {
        const isActive = pathname === item.href;

        return (
          <button
            key={item.href}
            type="button"
            onClick={() => router.push(item.href)}
            className={`shrink-0 rounded-[0.95rem] border px-3 py-1.5 text-[11px] font-semibold leading-none transition ${
              isActive
                ? "border-sky-200/80 bg-[linear-gradient(135deg,#edf5ff_0%,#ffffff_100%)] text-sky-900 shadow-sm"
                : "border-transparent bg-transparent text-slate-600 hover:border-slate-200/90 hover:bg-white/90"
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </nav>
  );
}
