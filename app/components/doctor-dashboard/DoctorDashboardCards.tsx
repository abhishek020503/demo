export function DoctorStatusBadge({ status }: { status: string }) {
  const style =
    status === "High"
      ? "bg-rose-100 text-rose-700"
      : status === "Low"
        ? "bg-amber-100 text-amber-700"
        : status === "Borderline"
          ? "bg-sky-100 text-sky-700"
          : "bg-emerald-100 text-emerald-700";

  return <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${style}`}>{status}</span>;
}
