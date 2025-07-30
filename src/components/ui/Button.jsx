export function Button({ children, ...props }) {
  return (
    <button
      className="rounded-md bg-blue-600 text-white px-4 py-2 text-sm hover:bg-blue-700 transition"
      {...props}
    >
      {children}
    </button>
  );
}
