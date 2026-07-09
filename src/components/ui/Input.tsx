import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string;
}

export function Input({ type = "text", ...props }: InputProps): React.ReactElement {
  return (
    <input
      type={type}
      className="w-full border-2 border-border bg-input px-4 py-3 text-base text-foreground shadow-[4px_4px_0_rgba(0,0,0,0.12)] placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 transition-colors duration-300 ease-in-out"
      {...props}
    />
  );
}
