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
  <div className="min-h-screen px-4 py-8 md:px-16">
 
        <Navbar className="hidden lg:block" />
    
      <section className="m-12">
        <h2 className="text-2xl font-semibold mb-2">Sobre mí</h2>
        <p className="text-lg">{data.descripcion}</p>

        <div className="flex flex-wrap gap-4 mt-4">

          {data.enlaces.map((enlace, i) => (
            <a key={i} href={enlace.url} target="_blank" className="underline text-sm">{enlace.label}</a>
          ))}

        </div>

      </section>

       {/* Skills Section */}
       <section className="my-10">

        <h2 className="text-2xl font-bold mb-4">Habilidades</h2>

      <Logo/>
        </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Proyectos</h2>    
        <Carousel className="w-full">
          {data.proyectos.map((proyecto, i) => (
            <CarouselItem key={i} className="p-4">
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold">{proyecto.titulo}</h3>
                  <p className="text-sm">{proyecto.descripcion}</p>
                  <a href={proyecto.enlace} target="_blank" className="text-blue-500 underline">Ver proyecto</a>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </Carousel>
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
       
        <h2 className="text-2xl font-semibold mb-4">Experiencia laboral</h2>
       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
       
          {data.experiencia.map((exp, i) => (
       
          <Card key={i}>
        
             <CardContent className="p-4">
        
                <p className="font-semibold">{exp.puesto}</p>
                <p className="text-sm">{exp.descripcion}</p>
                <p className="text-sm">{exp.año} - {exp.empresa}</p>
        
              </CardContent>
        
            </Card>
        
          ))}
        </div>
      </section>

      <section className="mb-12">
       
        <h2 className="text-2xl font-semibold mb-4">Contacto</h2>
       
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <Input placeholder="Nombre" />
       
          <Input placeholder="Correo electrónico" type="email" />
       
          <textarea placeholder= "Mensaje" className=" resize-none md:col-span-2 rounded-md border border-ring text-sm shadow-sm hover:border-chart-2 focus:border-chart-1" />
       
          <Button>Enviar mensaje</Button>
       
        </form>

      </section>

      <footer className="text-center text-sm mt-12">
        Desarrollado por {data.nombre} - {data.añoPie}
      </footer>
    </div>
  );
}
