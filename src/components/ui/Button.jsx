export function Button({ children, ...props }) {
  return (
    <button
      className="rounded-md px-4 py-2 text-sm w-full md:w-auto md:col-span-2"
      {...props}
    >
      {children}
    </button>
  );
}
