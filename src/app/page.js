"use client";
import data from "./data/data.json";
import { Card, CardContent } from "../components/ui/Card.jsx";
import { Input } from "../components/ui/Input.jsx";
import { Button } from "../components/ui/Button.jsx";
import React, { useRef } from "react";
import Carousel, { CarouselItem } from "../components/ui/Carousel.jsx";
import Navbar from "../components/ui/Navbar.jsx";
import Logo from "../components/LogoInline.jsx";

export default function Home() {
   
  
  return (
  <main className="min-h-screen px-4 py-8 md:px-16">
 
        <Navbar className="hidden lg:block" />
    

      <section className="mb-12">

        <p className="text-lg">{data.descripcion}</p>

        <div className="flex flex-wrap gap-4 mt-4">

          {data.enlaces.map((enlace, i) => (
            <a key={i} href={enlace.url} className="underline text-sm">{enlace.label}</a>
          ))}

        </div>

      </section>

      <section className="mb-12">

        <h2 className="text-2xl font-semibold mb-2">Sobre mí</h2>

        <p className="text-sm leading-relaxed">{data.sobreMi}</p>

      </section>

       {/* Skills Section */}
       <section className="my-10">

      <h2 className="text-2xl font-bold mb-4">Habilidades</h2>

      <Logo/>
        </section>
     
      <section className="mb-12">
       
        <h2 className="text-2xl font-semibold mb-4">Formación académica</h2>
       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
       
          {data.formacion.map((form, i) => (
       
          <Card key={i}>
        
             <CardContent className="p-4">
        
                <p className="font-semibold">{form.titulo}</p>
        
                <p className="text-sm">{form.año} - {form.institucion}</p>
        
              </CardContent>
        
            </Card>
        
          ))}
        </div>

      </section>

      <section className="mb-12">
       
        <h2 className="text-2xl font-semibold mb-4">Contacto</h2>
       
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
       
          <Input placeholder="Asunto" className="md:col-span-2" />
          
          <Input placeholder="Nombre" />
       
          <Input placeholder="Correo electrónico" type="email" />
       
          <textarea placeholder="Mensaje" className="border rounded-md p-2 h-32 md:col-span-2" />
       
          <Button>Enviar mensaje</Button>
       
        </form>

      </section>

      <footer className="text-center text-sm mt-12">
        Desarrollado por {data.nombre} - {data.añoPie}
      </footer>
    </main>
  );
}
