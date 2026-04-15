"use client";

import { useState } from "react";
import { Bell, ChevronDown, Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { DOCTOR_PROFILE_DETAILS } from "./doctor-dashboard/data";
import DoctorChatbotWidget from "./DoctorChatbotWidget";

const NAV_ITEMS = [
  { href: "/doctor-dashboard", label: "Overview" },
] as const;

function getDashboardProfile() {
  return { name: "Arjun Kapoor", email: "arjun.kapoor@mail.com", role: "Patient" };
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function DashboardShell({
  children,
  headerActions,
}: {
  children: React.ReactNode;
  headerActions?: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const profile = getDashboardProfile();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const navigateTo = (href: string) => {
    setMobileSidebarOpen(false);
    setProfileOpen(false);
    router.push(href);
  };

  return (
    <main className="app-gradient-bg relative min-h-screen overflow-hidden px-2 py-2 md:px-4 md:py-4 xl:px-5">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.82),rgba(255,255,255,0))]" />
      <div className="pointer-events-none absolute left-[-10rem] top-28 h-72 w-72 rounded-full bg-sky-100/45 blur-3xl" />
      <div className="pointer-events-none absolute bottom-12 right-[-10rem] h-72 w-72 rounded-full bg-amber-100/45 blur-3xl" />

      {mobileSidebarOpen ? (
        <button
          type="button"
          aria-label="Close sidebar overlay"
          className="motion-fade-in fixed inset-0 z-40 bg-white/80 backdrop-blur-md"
          onClick={() => setMobileSidebarOpen(false)}
        />
      ) : null}

      <aside
        className={`soft-scrollbar fixed inset-y-0 left-0 z-50 w-[90%] max-w-[324px] overflow-y-auto border-r border-slate-200/90 bg-[rgba(255,255,255,0.97)] p-4 shadow-[0_24px_55px_rgba(100,116,139,0.16)] backdrop-blur-xl transition-transform duration-300 ease-out ${
          mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-500">Workspace</p>
            <p className="mt-1 text-base font-semibold text-slate-900">Patient Dashboard</p>
          </div>
          <button
            type="button"
            aria-label="Close sidebar"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border)] bg-white"
            onClick={() => setMobileSidebarOpen(false)}
          >
            <X className="h-4 w-4 text-slate-700" />
          </button>
        </div>

        <div className="surface-panel space-y-1 rounded-[1.4rem] p-2.5">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => navigateTo(item.href)}
              className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm font-medium transition ${
                pathname === item.href
                  ? "bg-[linear-gradient(135deg,#edf5ff_0%,#f9fbff_100%)] text-sky-950 shadow-sm"
                  : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              <span>{item.label}</span>
              <span className={`h-2 w-2 rounded-full ${pathname === item.href ? "bg-sky-500" : "bg-slate-200"}`} />
            </button>
          ))}
        </div>

        {headerActions ? (
          <div className="surface-inset mt-4 rounded-[1.3rem] p-2.5">
            <p className="px-1 pb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
              Quick Navigation
            </p>
            {headerActions}
          </div>
        ) : null}
      </aside>

      <div className="relative z-10 mx-auto max-w-[1460px] min-w-0">
        <header className="glass-panel motion-fade-up sticky top-2 z-30 rounded-[1.6rem] px-3 py-3 md:px-4">
          <div className="flex flex-wrap items-center justify-between gap-2.5">
            <div className="flex min-w-0 flex-1 items-center gap-1.5">
              <button
                type="button"
                aria-label="Open sidebar menu"
                className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[var(--border)] bg-white/95 text-slate-700 shadow-sm"
                onClick={() => setMobileSidebarOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </button>

              <div className="min-w-0 flex-1 overflow-hidden rounded-[1.2rem] bg-white/72 px-1 py-1">
                {headerActions}
              </div>
            </div>

            <div className="hidden items-center gap-2 md:flex">
              <div className="relative">
                <button
                  type="button"
                  aria-label="Open profile details"
                  onClick={() => setProfileOpen((current) => !current)}
                  className="flex items-center gap-2 rounded-[1.1rem] border border-[var(--border)] bg-white/90 px-2.5 py-2 transition hover:bg-slate-50"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[linear-gradient(135deg,#e7f2ff_0%,#f6fbff_100%)] text-xs font-bold text-sky-900">
                    {getInitials(profile.name)}
                  </div>
                  <div className="text-left">
                    <p className="text-[13px] font-semibold text-slate-900">{profile.name}</p>
                    <p className="text-[11px] text-slate-500">{profile.role}</p>
                  </div>
                  <ChevronDown className={`h-4 w-4 text-slate-400 transition ${profileOpen ? "rotate-180" : ""}`} />
                </button>

                {profileOpen ? (
                  <div className="glass-panel absolute right-0 top-[calc(100%+10px)] z-40 w-[380px] rounded-[1.6rem] p-3.5">
                    <div className="flex items-center gap-3 border-b border-slate-200/80 pb-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#e7f2ff_0%,#f6fbff_100%)] text-sm font-bold text-sky-900">
                        {getInitials(profile.name)}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{profile.name}</p>
                        <p className="text-xs text-slate-500">{profile.role}</p>
                      </div>
                    </div>
                    <div className="mt-3 grid gap-2 sm:grid-cols-2">
                      {DOCTOR_PROFILE_DETAILS.map((item) => (
                        <div key={item.label} className="surface-inset rounded-[1.1rem] px-3 py-2.5">
                          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-600">
                            {item.label}
                          </p>
                          <p className="mt-1 text-xs font-semibold leading-5 text-slate-900">{item.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
              <IconButton ariaLabel="notifications">
                <Bell className="h-4 w-4 text-slate-600" />
              </IconButton>
            </div>
          </div>

          <div className="mt-2.5 md:hidden">
            <button
              type="button"
              onClick={() => setProfileOpen((current) => !current)}
              className="flex w-full items-center justify-between gap-2 rounded-[1.1rem] border border-[var(--border)] bg-white/90 px-2.5 py-2"
            >
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[linear-gradient(135deg,#e7f2ff_0%,#f6fbff_100%)] text-xs font-bold text-sky-900">
                  {getInitials(profile.name)}
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold text-slate-900">{profile.name}</p>
                  <p className="text-[11px] text-slate-500">{profile.role}</p>
                </div>
              </div>
              <ChevronDown className={`h-4 w-4 text-slate-400 transition ${profileOpen ? "rotate-180" : ""}`} />
            </button>
            {profileOpen ? (
              <div className="glass-panel mt-2 grid gap-2 rounded-[1.3rem] p-2.5">
                {DOCTOR_PROFILE_DETAILS.map((item) => (
                  <div key={item.label} className="surface-inset rounded-[1rem] px-2.5 py-2.5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-600">
                      {item.label}
                    </p>
                    <p className="mt-1 text-xs font-semibold leading-5 text-slate-900">{item.value}</p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </header>

        <div className="mt-3 min-w-0">{children}</div>
      </div>

      <DoctorChatbotWidget />
    </main>
  );
}

function IconButton({
  children,
  ariaLabel,
}: {
  children: React.ReactNode;
  ariaLabel: string;
}) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-white/92 shadow-sm transition hover:bg-slate-50"
    >
      {children}
    </button>
  );
}
