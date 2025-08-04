export function Input({ type = "text", ...props }) {
  return (
    <input
      type={type}
      className="w-full rounded-md border border-ring px-4 py-2 text-sm shadow-sm hover:border-chart-2 focus:border-chart-1"
      {...props}
    />
  );
}
