"use client";

import { ReactNode } from "react";
import { BackgroundGradient } from "./Hero";

interface SectionBackgroundProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function SectionBackground({ 
  children, 
  className = "", 
  id 
}: SectionBackgroundProps) {
  return (
    <section 
      id={id}
      className={`relative bg-white dark:bg-black overflow-hidden ${className}`}
    >
      <BackgroundGradient />
      <div className="container max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
        {children}
      </div>
    </section>
  );
} 