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
  const { data, loading, error } = usePortfolioData();

  if (loading) {
    return <div className="flex min-h-screen items-center justify-center">{TEXTS.LOADING}</div>;
  }

  if (error || !data) {
    return <div className="flex min-h-screen items-center justify-center">{TEXTS.ERROR_LOADING}</div>;
  }

  const emailDestino =
    data.enlaces.find((enlace) => enlace.url.startsWith("mailto:"))?.url.replace("mailto:", "") ??
    "";

  return (
    <div className="min-h-screen bg-background pt-20 text-foreground">
      <Navbar />

      <AboutSection descripcion={data.descripcion} enlaces={data.enlaces} />
      <SkillsSection />
      <ProjectsSection proyectos={data.proyectos} />
      <EducationSection formacion={data.formacion} />
      <ExperienceSection experiencia={data.experiencia} />
      <ContactSection emailDestino={emailDestino} />
      <FooterSection nombre={data.nombre} añoPie={data.añoPie} />
    </div>
  );
}
