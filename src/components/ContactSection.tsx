import React, { useState } from "react";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";

interface ContactSectionProps {
  emailDestino: string;
  id?: string;
}

const CONTACT_TOPICS = ["Proyecto", "Revisión técnica", "Colaboración"];

export default function ContactSection({ emailDestino, id = "contacto" }: ContactSectionProps): React.ReactElement {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [statusMessage, setStatusMessage] = useState<string>("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (!emailDestino.trim()) {
      setStatusMessage("El correo de contacto no está disponible en este momento.");
      return;
    }

    const subject = encodeURIComponent(`Nuevo mensaje desde portafolio: ${name || "Contacto"}`);
    const body = encodeURIComponent(`Nombre: ${name}\nCorreo: ${email}\n\nMensaje:\n${message}`);
    const mailtoLink = `mailto:${emailDestino}?subject=${subject}&body=${body}`;

    setStatusMessage("Abriendo tu cliente de correo con el mensaje preparado.");
    window.location.href = mailtoLink;
  };

  return (
    <section id={id} className="px-4 py-10 sm:py-12 md:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex flex-col gap-4 border-b-2 border-border/60 pb-6 sm:mb-10 sm:pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="min-w-0">
            <span className="section-label">Direct Line</span>
            <h2 className="title-display mt-5 text-4xl text-primary sm:text-5xl md:text-6xl">Contacto</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-muted-foreground md:text-base">
            Describe el proyecto, la necesidad técnica o la colaboración que quieres iniciar. El mensaje se prepara localmente en tu cliente de correo.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="section-shell min-w-0 p-5 sm:p-6 lg:p-8">
            <div className="mb-7 flex flex-col gap-3 border-b border-border/60 pb-6 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent">Message composer</p>
                <h3 className="mt-2 text-2xl font-semibold text-foreground sm:text-3xl">Formulario de contacto</h3>
                <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
                  Completa los campos y prepara una consulta clara para iniciar la conversación.
                </p>
              </div>
              <span className="shrink-0 border border-border bg-background px-2 py-1 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-secondary">
                Local / Mailto
              </span>
            </div>

            <div className="mb-7 flex flex-wrap items-center gap-2 border-b border-border/60 pb-6">
              <span className="mr-1 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-secondary">Temas frecuentes</span>
              {CONTACT_TOPICS.map((topic) => (
                <span key={topic} className="border border-border/70 px-2 py-1 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-muted-foreground">
                  {topic}
                </span>
              ))}
            </div>

            <div className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid min-w-0 gap-2 text-sm font-semibold text-foreground">
                  <span className="text-[0.68rem] uppercase tracking-[0.22em] text-muted-foreground">Nombre</span>
                  <Input
                    type="text"
                    value={name}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
                    placeholder="Tu nombre completo"
                    autoComplete="name"
                    required
                  />
                </label>

                <label className="grid min-w-0 gap-2 text-sm font-semibold text-foreground">
                  <span className="text-[0.68rem] uppercase tracking-[0.22em] text-muted-foreground">Correo electrónico</span>
                  <Input
                    type="email"
                    value={email}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
                    placeholder="tu@correo.com"
                    autoComplete="email"
                    required
                  />
                </label>
              </div>

              <label className="grid min-w-0 gap-2 text-sm font-semibold text-foreground">
                <span className="text-[0.68rem] uppercase tracking-[0.22em] text-muted-foreground">Mensaje</span>
                <textarea
                  value={message}
                  onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(event.target.value)}
                  placeholder="Describe tu proyecto, tus necesidades y el resultado que quieres lograr."
                  className="min-h-40 w-full min-w-0 resize-y border-2 border-border bg-input px-4 py-3 text-base leading-7 text-foreground shadow-[4px_4px_0_rgba(0,0,0,0.12)] placeholder:text-muted-foreground transition-colors duration-300 ease-in-out focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                  required
                />
              </label>

              <div className="flex flex-col gap-4 border-t border-border/60 pt-5 sm:flex-row sm:items-end sm:justify-between">
                <div className="min-w-0">
                  <p className="max-w-xl text-sm leading-6 text-muted-foreground">
                    Al continuar, se abrirá el cliente de correo con la información preparada para revisar y enviar.
                  </p>
                  <p className="mt-2 min-h-6 text-sm text-accent" role="status" aria-live="polite">
                    {statusMessage}
                  </p>
                </div>
                <Button type="submit" className="w-full shrink-0 px-8 py-3 sm:w-auto">
                  Preparar mensaje
                </Button>
              </div>
            </div>
          </form>
      </div>
    </section>
  );
}
