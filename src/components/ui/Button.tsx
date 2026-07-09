import React from 'react';

// Constantes para clases CSS (Clean Code: evitar hardcode)
const BUTTON_CLASSES = "inline-flex items-center justify-center border-2 border-border bg-primary px-6 py-3 text-sm font-bold uppercase tracking-[0.22em] text-primary-foreground transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0_rgba(0,0,0,0.3)] focus:outline-none focus:ring-2 focus:ring-primary/40";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className = "", ...props }: ButtonProps): React.ReactElement {
  return (
    <button
      className={`${BUTTON_CLASSES} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
