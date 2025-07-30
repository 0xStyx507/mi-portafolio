export function Input({ type = "text", ...props }) {
  return (
    <input
      type={type}
      className="w-full rounded-md border border-white px-4 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none"
      {...props}
    />
  );
}
