"use client";

import React from "react";
import Navbar from "../../../components/ui/Navbar";
import AboutSection from "../../../components/AboutSection";
import ProjectsSection from "../../../components/ProjectsSection";
import EducationSection from "../../../components/EducationSection";
import ExperienceSection from "../../../components/ExperienceSection";
import ContactSection from "../../../components/ContactSection";
import FooterSection from "../../../components/FooterSection";
import SkillsSection from "../../../components/SkillsSection";
import { TEXTS } from "../content/copy";
import { usePortfolioData } from "../hooks/usePortfolioData";

export default function PortfolioPage(): React.ReactElement {
  const { data, loading, error, retry } = usePortfolioData();

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center" role="status" aria-live="polite">
        {TEXTS.LOADING}
      </main>
    );
  }

  if (error || !data) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-5 px-6 text-center" role="alert">
        <p>{TEXTS.ERROR_LOADING}</p>
        <button
          type="button"
          onClick={retry}
          className="border-2 border-border bg-primary px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          Reintentar
        </button>
      </main>
    );
  }

  const emailDestino =
    data.enlaces.find((enlace) => enlace.url.startsWith("mailto:"))?.url.replace("mailto:", "") ??
    "";

  return (
    <div className="min-h-screen bg-background pt-20 text-foreground">
      <Navbar />

      <AboutSection descripcion={data.descripcion} enlaces={data.enlaces} />
      <SkillsSection skills={data.skills} />
      <ProjectsSection proyectos={data.proyectos} />
      <EducationSection formacion={data.formacion} />
      <ExperienceSection experiencia={data.experiencia} />
      <ContactSection emailDestino={emailDestino} />
      <FooterSection nombre={data.nombre} añoPie={data.añoPie} />
    </div>
  );
}
