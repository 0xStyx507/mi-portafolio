import React, { useState } from 'react';
import { Input } from './ui/Input';
import { Button } from './ui/Button';

interface ContactSectionProps {
    emailDestino: string;
    id?: string;
}

export default function ContactSection({ emailDestino, id = 'contacto' }: ContactSectionProps): React.ReactElement {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();

        const subject = encodeURIComponent(`Nuevo mensaje desde portafolio: ${name || 'Contacto'}`);
        const body = encodeURIComponent(`Nombre: ${name}\nCorreo: ${email}\n\nMensaje:\n${message}`);
        const mailtoLink = `mailto:${emailDestino}?subject=${subject}&body=${body}`;

        window.location.href = mailtoLink;
    };

    return (
        <section id={id} className="px-4 py-16 md:px-8">
            <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
                <div className="section-shell p-8">
                    <span className="section-label">Direct Line</span>
                    <h2 className="title-display mt-6 text-4xl text-primary md:text-6xl">Contacto</h2>
                    <p className="mt-6 leading-8 text-muted-foreground">
                        Envíame un mensaje directo para hablar de proyectos, seguridad, automatización o colaboraciones con foco real de negocio.
                    </p>
                    <div className="mt-8 grid gap-4 text-sm">
                        <div className="border border-border bg-background/70 p-4">
                            <p className="text-xs font-bold uppercase tracking-[0.24em] text-secondary">Canal</p>
                            <p className="mt-2 text-foreground">Correo preparado por cliente local</p>
                        </div>
                        <div className="border border-border bg-background/70 p-4">
                            <p className="text-xs font-bold uppercase tracking-[0.24em] text-secondary">Ideal para</p>
                            <p className="mt-2 text-foreground">Nuevos proyectos, revisiones técnicas y trabajo freelance.</p>
                        </div>
                    </div>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="section-shell mx-auto w-full max-w-none p-8"
                >
                    <div className="mb-8 space-y-2">
                        <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent">Message composer</p>
                        <p className="text-3xl font-semibold text-foreground">Formulario de contacto</p>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                            Completa tus datos y recibiré tu consulta por correo.
                        </p>
                    </div>

                    <div className="grid gap-6">
                        <label className="block text-sm font-semibold text-foreground">
                            <span className="mb-3 block text-xs uppercase tracking-[0.24em] text-muted-foreground">Nombre</span>
                            <Input
                                type="text"
                                value={name}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
                                placeholder="Tu nombre completo"
                                className="mt-2"
                                required
                            />
                        </label>

                        <label className="block text-sm font-semibold text-foreground">
                            <span className="mb-3 block text-xs uppercase tracking-[0.24em] text-muted-foreground">Correo electrónico</span>
                            <Input
                                type="email"
                                value={email}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
                                placeholder="tu@correo.com"
                                className="mt-2"
                                required
                            />
                        </label>

                        <label className="block text-sm font-semibold text-foreground">
                            <span className="mb-3 block text-xs uppercase tracking-[0.24em] text-muted-foreground">Mensaje</span>
                            <textarea
                                value={message}
                                onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(event.target.value)}
                                placeholder="Cuéntame sobre tu proyecto, tus necesidades y qué te gustaría lograr."
                                className="mt-2 min-h-[160px] w-full resize-none border-2 border-border bg-input px-4 py-3 text-base text-foreground shadow-[4px_4px_0_rgba(0,0,0,0.12)] placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 transition-colors duration-300 ease-in-out"
                                required
                            />
                        </label>

                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <p className="text-sm text-muted-foreground">
                                El botón abrirá tu cliente de correo con el mensaje listo para enviar.
                            </p>
                            <Button type="submit" className="px-8 py-3">
                                Enviar
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}
