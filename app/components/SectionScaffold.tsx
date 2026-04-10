import DashboardShell from "./DashboardShell";
import PatientNavbar from "./PatientNavbar";

export default function SectionScaffold({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <DashboardShell headerActions={<PatientNavbar />}>
      <section className="glass-panel min-w-0 rounded-[1.8rem] p-4 md:p-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
          Patient Module
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">{title}</h2>
        <p className="mt-2 max-w-4xl text-base leading-7 text-slate-600 md:text-lg">{subtitle}</p>
        <div className="mt-5 min-w-0">{children}</div>
      </section>
    </DashboardShell>
  );
}
