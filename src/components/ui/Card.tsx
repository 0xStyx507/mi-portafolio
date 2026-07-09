import React from 'react';

// Constantes para clases base (Clean Code)
const CARD_BASE_CLASSES = "section-shell";
const CARD_CONTENT_BASE_CLASSES = "p-6";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps): React.ReactElement {
  return <div className={`${CARD_BASE_CLASSES} ${className}`}>{children}</div>;
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export function CardContent({ children, className = "" }: CardContentProps): React.ReactElement {
  return <div className={`${CARD_CONTENT_BASE_CLASSES} ${className}`}>{children}</div>;
}
