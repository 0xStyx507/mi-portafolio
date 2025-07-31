export function Input({ type = "text", ...props }) {
  return (
    <input
      type={type}
      className="w-full rounded-md border px-4 py-2 text-sm shadow-sm focus:outline-none
      bg-rojoclaro "
      {...props}
    />
  );
}
