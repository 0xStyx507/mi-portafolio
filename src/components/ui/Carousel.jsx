"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Carousel({ children, className = "" }) {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 2;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <div className={`relative ${className}`}>
      {/* Botón izquierdo */}
      <ScrollButton onClick={() => scroll("left")} position="left" />

      {/* Contenido deslizable */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide items-center justify-center "
      >
        {children}
      </div>

      {/* Botón derecho */}
      <ScrollButton onClick={() => scroll("right")} position="right" />
    </div>
  );
}

function ScrollButton({ onClick, position }) {
  const isLeft = position === "left";
  const Icon = isLeft ? ChevronLeft : ChevronRight;

  return (
    <button
      onClick={onClick}
      className={`hidden md:flex absolute top-1/2 -translate-y-1/2 z-10 p-2 bg-white text-[#12345] rounded-full shadow ${
        isLeft ? "left-2" : "right-2"
      }`}
    >
      <Icon size={20} />
    </button>
  );
}

export function CarouselItem({ children, className = "" }) {
  return (
    <div className={`min-w-[150px] shrink-0 ${className}`}>
      <div className="rounded-lg border p-4 text-center bg-black/10  shadow">
        {children}
      </div>
    </div>
  );
}
