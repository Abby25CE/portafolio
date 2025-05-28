"use client";
import { Footer } from "@/containers/Footer";
import React from "react";
import { IconType } from "react-icons";
import {
  FiCreditCard,
  FiCpu,
  FiUser,
  FiSlack,
  FiLink2,
  FiSun,
  FiChevronLeft,
} from "react-icons/fi";

const HoverDevCards = () => {
  return (
    <>
      <div className="p-4">
        <div className="flex flex-row pb-3 items-center justify-between text-2xl">
          <a href="/">
            <FiChevronLeft />
          </a>
          <p className="">M i s P r o y e c t o s</p>
          <div></div>
        </div>
        <hr className="border-2 mb-6" />
        <div className=" grid gap-4 grid-cols-2 lg:grid-cols-4">
          <Card
            title="Notaria 183"
            subtitle="Encargada Tecnica de Sistemas"
            text="Encargada del sistema Administrativo Notarial DBA donde constantemente identificaba y resolvia problemas del lado del cliente"
            Icon={FiUser}
          />
          <Card
            title="Live Tech"
            subtitle="Desarrolladora Web"
            text="Encargada del desarrollo Front End donde fui responsable del diseño responsivo utilizando Next y de las funcionalidades del sistema expecificadas por el cliente"
            Icon={FiCpu}
          />
          <Card
            title="Digital Ignition"
            subtitle="Desarrolladora Web"
            text="Encargada de la maquetacion y del diseño responsivo enfocado en moviles donde tambien de pruebas unitarias de las mismas "
            Icon={FiSlack}
          />
          <Card
            title="Gaytan Studios"
            subtitle="Desarrolladora Web"
            text="Encargada de crear componentes en React, dinamicos y reutilizables donde tambien fui apoyo en la creacion de consultas en SQL."
            Icon={FiCreditCard}
          />
          <Card
            title="Pulcera NFC"
            subtitle="Desarrolladora Web"
            text="De manera independiente desarrolle un portafolio personalizado enfocado en el diseño responsivo para moviles y donde fue programado en una pulcera NFC para su uso."
            Icon={FiLink2}
          />
          {/*
        <Card
          title="Granja Espinoza"
          subtitle="Desarrolladora Web"
          text="De manera independiente desarrolle una Landing Page personalizada, para la Finca Espinoza"
          Icon={FiSun}
        />*/}
        </div>
      </div>
      <Footer />
    </>
  );
};

interface CardType {
  title: string;
  subtitle: string;
  text: string;
  Icon: IconType;
}

const Card = ({ title, subtitle, text, Icon }: CardType) => {
  return (
    <a className="w-full lg:h-60 h-72 p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon
        className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100
      group-hover:text-sky-500 group-hover:rotate-12 transition-transform duration-300"
      />
      <Icon className="mb-2 text-2xl text-sky-600 group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-end text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-slate-400 text-end group-hover:text-violet-200 relative z-10 duration-300">
        {subtitle}
      </p>
      <p className="text-slate-400 text-justify lg:text-base text-sm group-hover:text-violet-200 relative z-10 duration-300">
        {text}
      </p>
    </a>
  );
};

export default HoverDevCards;
