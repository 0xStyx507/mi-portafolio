"use client";
import data from "./data/data.json";
import { Card, CardContent } from "../components/ui/Card.jsx";
import { Input } from "../components/ui/Input.jsx";
import { Button } from "../components/ui/Button.jsx";
import React, { useRef } from "react";
import Carousel, { CarouselItem } from "../components/ui/Carousel.jsx";
import Navbar from "../components/ui/navbar.jsx";


export default function Home() {
   
  
  return (
  <div className="bg-bg p-6 hover:border-color3 transition-colors">

    <Navbar/>

      <header className="">

        <h1 className="text-2xl">Hola, soy {data.nombre}</h1>
       
        <a href={`mailto:${data.email}`}  className="text-sm underline ">{data.email}</a>
      
      </header>

      <section className="">

        <p className="">{data.descripcion}</p>

        <div className="">

          {data.enlaces.map((enlace, i) => (
            <a key={i} href={enlace.url} className="">{enlace.label}</a>
          ))}

        </div>

      </section>

      <section className="mb-12">

        <h2 className="">Sobre mí</h2>

        <p className="text-sm leading-relaxed">{data.sobreMi}</p>

      </section>

       {/* Skills Section */}
       <section className="my-10">

      <h2 className="">Frontend</h2>

      <Carousel>

        {data.front.map((skill, i) => (
          <CarouselItem key={i}>{skill}</CarouselItem>
        ))}

      </Carousel>

      <h2 className="text-2xl text-center font-bold mt-8 mb-4">Backend</h2>
            <Carousel>

        {data.back.map((skill, i) => (
          <CarouselItem key={i}>{skill}</CarouselItem>
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
       
        <h2 className="text-2xl font-semibold mb-4">Contacto</h2>
       
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
       
          <Input placeholder="Nombre" />
       
          <Input placeholder="Correo electrónico" type="email" />
       
          <Input placeholder="Asunto" className="md:col-span-2" />
       
          <textarea placeholder="Mensaje" className="border rounded-md p-2 h-32 md:col-span-2" />
       
          <Button className="">Enviar mensaje</Button>
       
        </form>

      </section>

      <footer className="text-center text-sm mt-12">
        Desarrollado por {data.nombre} - {data.añoPie}
      </footer>
    </div>
  );
}
