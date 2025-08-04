export function Button({ children, ...props }) {
  return (
    <button
      className="rounded-md border px-4 py-2 text-sm transition"
      {...props}
    >
      {children}
    </button>
  );
}
