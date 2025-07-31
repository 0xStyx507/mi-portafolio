export function Card({ children }) {
  return <div className="rounded-xl border shadow p-4 bg-fondo-claro dark:bg-fondo-oscuro">{children}</div>;
}

export function CardContent({ children }) {
  return <div className="text-sm text-fondo-claro dark:text-fondo-oscuro">{children}</div>;
}
