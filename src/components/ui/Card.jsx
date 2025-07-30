export function Card({ children }) {
  return <div className="rounded-xl border bg-black/10 text-white shadow p-4">{children}</div>;
}

export function CardContent({ children }) {
  return <div className="text-sm text-white">{children}</div>;
}
