"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

// Constantes para configuración (Clean Code)
const CAROUSEL_INTERVAL = 5000;
const SCROLL_AMOUNT_RATIO = 0.85;
const SCROLL_BUTTON_SIZE = 20;

// Tipos específicos (ISP)
type ScrollDirection = "left" | "right";
type ButtonPosition = "left" | "right";

interface CarouselProps {
  children: React.ReactNode;
  className?: string;
  autoScrollInterval?: number;
}

export default function Carousel({
  children,
  className = "",
  autoScrollInterval = CAROUSEL_INTERVAL
}: CarouselProps): React.ReactElement {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const scroll = (direction: ScrollDirection): void => {
    const element = scrollRef.current;
    if (!element) return;
    const amount = element.clientWidth * SCROLL_AMOUNT_RATIO;
    element.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      if (!isPaused) {
        scroll("right");
      }
    }, autoScrollInterval);

    return () => window.clearInterval(intervalId);
  }, [isPaused, autoScrollInterval]);

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <ScrollButton onClick={() => scroll("left")} position="left" />
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide px-10 py-10 md:px-12 md:py-12 bg-background/70 backdrop-blur-sm"
      >
        {children}
      </div>
      <ScrollButton onClick={() => scroll("right")} position="right" />
    </div>
  );
}

interface ScrollButtonProps {
  onClick: () => void;
  position: ButtonPosition;
}

function ScrollButton({ onClick, position }: ScrollButtonProps): React.ReactElement {
  const isLeft = position === "left";
  const Icon = isLeft ? ChevronLeft : ChevronRight;
  const ariaLabel = isLeft ? "Desplazar izquierda" : "Desplazar derecha";

  return (
    <button
      onClick={onClick}
      type="button"
      className={`hidden md:flex absolute top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-background/80 text-primary shadow-lg shadow-primary/10 ${isLeft ? "left-2" : "right-2"}`}
      aria-label={ariaLabel}
    >
      <Icon size={SCROLL_BUTTON_SIZE} />
    </button>
  );
}

interface CarouselItemProps {
  children: React.ReactNode;
  className?: string;
}

export function CarouselItem({ children, className = "" }: CarouselItemProps): React.ReactElement {
  return (
    <div className={`min-w-[300px] flex-shrink-0 snap-start ${className}`}>
      <div className="rounded-3xl border border-border/30 bg-card/95 p-6 shadow-[0_20px_60px_rgba(194,77,44,0.12)] backdrop-blur-sm">
        {children}
      </div>
    </div>
  );
}
