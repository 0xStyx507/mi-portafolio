export function Card({ children }) {
  return <div className="rounded-xl border p-4">{children}</div>;
}

export function CardContent({ children }) {
  return <div className="text-sm">{children}</div>;
}
