import DashboardShell from "./DashboardShell";
import DoctorNavbar from "./doctor-dashboard/DoctorNavbar";

export default function DoctorSectionScaffold({
  title,
  subtitle,
  eyebrow = "Doctor Module",
  children,
}: {
  title: string;
  subtitle: string;
  eyebrow?: string;
  children: React.ReactNode;
}) {
  return (
    <DashboardShell headerActions={<DoctorNavbar />}>
      <section className="glass-panel rounded-[1.9rem] p-4 md:p-5">
        {eyebrow ? (
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">{title}</h2>
        <p className="mt-2 max-w-4xl text-sm leading-6 text-slate-600 md:text-base">{subtitle}</p>
        <div className="mt-4 min-w-0 rounded-[1.6rem] border border-slate-200/70 bg-white/88 p-3 md:p-4">
          {children}
        </div>
      </section>
    </DashboardShell>
  );
}
