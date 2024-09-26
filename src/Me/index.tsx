"use client";
import React from "react";
import { MotionProps, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import {
  SiGithub,
  SiLinkedin,
  SiGoogledrive,
  SiCreatereactapp,
  SiNextdotjs,
  SiTypescript,
  SiExpress,
} from "react-icons/si";
import Image from "next/image";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaFigma, FaNode } from "react-icons/fa";

export const RevealBento = () => {
  return (
    <div className="min-h-screen px-4 py-12 text-zinc-50">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-6xl grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />
        <SocialsBlock />
        <AboutBlock />
        <ListBlock />
        <LocationBlock />
        <WorkBlock />
      </motion.div>
      <Footer />
    </div>
  );
};

type BlockProps = {
  className?: string;
} & MotionProps;

const Block = ({ className, ...rest }: BlockProps) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-[#546D8A] p-6",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => {
  const pdfUrl = "/files/Curriculum Vitae Abby.pdf";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.setAttribute("download", "CV.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Block className="col-span-12 row-span-2 md:col-span-6">
      <Image
        src="/assets/Yo.jpeg"
        alt="avatar"
        className="mb-4 size-20 rounded-full"
        width={70}
        height={70}
      />
      <h1 className="mb-12 text-2xl font-medium leading-tight">
        Hola, soy Luna Abigail{" "}
        <span className="text-slate-900">
          Soy desarrolladora FrontEnd y creo paginas cool.... Sí, como esta
        </span>
      </h1>

      <button
        className="px-6 py-2 font-medium bg-[#282D33] text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
        onClick={handleDownload}
      >
        Descargar CV
      </button>
    </Block>
  );
};

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-red-400 md:col-span-3"
    >
      <a
        // onMouseEnter={() => alert("Click Me")}
        href="mailto:abby250399@gmail.com"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <FiMail />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-green-400 md:col-span-3"
    >
      <a
        href="https://github.com/Abby25CE"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiGithub />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-zinc-200 md:col-span-3"
    >
      <a
        href="https://www.linkedin.com/in/luna-carrillo-espinosa-922056313/"
        className="grid h-full place-content-center text-3xl text-black"
      >
        <SiLinkedin />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-purple-400 md:col-span-3"
    >
      <a
        href="https://drive.google.com/drive/folders/1ayBmV_-4E8Y-6SsEvNJ1JQj6-Ts3511a?usp=sharing"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiGoogledrive />
      </a>
    </Block>
  </>
);

const WorkBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-[#A287E6] md:col-span-3"
    >
      <h1>Prueba tecnica</h1>
      <h2>Buscador de Peliculas con uso de API</h2>
      <p>Con uso de useContext, creacion de CustomeHooks</p>
      <a
        href="https://github.com/Abby25CE/Buscador_Peliculas.git"
        className="flex items-center gap-1 text-black hover:underline"
      >
        Ver codigo <FiArrowRight />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-green-400 md:col-span-3"
    >
      <h1>Prueba tecnica</h1>
      <h2>
        Tienda vitual con uso de JSON, carrito, uso de useContext, useId y
        useReducer
      </h2>
      <a
        href="https://github.com/Abby25CE/Shopping.git"
        className="flex items-center gap-1 text-black hover:underline"
      >
        Ver codigo <FiArrowRight />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-emerald-400 md:col-span-3"
    >
      <h1>Este mismo portafolio</h1>
      <p>
        Uso de componentes, clases taildwind, uso de animacioes con FramerMotion
      </p>
      <a
        href="https://github.com/Abby25CE/portafolio.git"
        className="flex items-center gap-1 text-black hover:underline"
      >
        Ver codigo <FiArrowRight />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-indigo-400 md:col-span-3"
    >
      <h1>Prueba tecnica Calculadora</h1>
      <p>
        Uso de componentes, clases taildwind, crreacion de diferentes tipos de
        temas.
      </p>
      <a
        href="https://github.com/Abby25CE/Calculadora.git"
        className="flex items-center gap-1 text-black hover:underline"
      >
        Ver codigo <FiArrowRight />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-violet-500 md:col-span-3"
    >
      <h1>Prueba tecnica con API</h1>
      <p>
        Recupera un hecho aleatorio de gatos de la primera API Recuperar la
        primera palabra del hecho Muestra una imagen de un gato con la primera
        palabra.
      </p>
      <a
        href="https://github.com/Abby25CE/React_Prueba.git"
        className="flex items-center gap-1 text-black hover:underline"
      >
        Ver codigo <FiArrowRight />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-[#C26BA2] md:col-span-3"
    >
      <h1>Prueba tecnica Clima</h1>
      <p>
        Prueba Tecnica con uso de API del clima, visualiza estados del clima
        actuales y futuros
      </p>
      <a
        href="https://github.com/Abby25CE/Clima_React.git"
        className="flex items-center gap-1 text-black hover:underline"
      >
        Ver codigo <FiArrowRight />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-[#517DB0] md:col-span-3"
    >
      <h1>GhitHub Search</h1>
      <p>
        Prueba Tecnica con uso de API de GitHub con uso de UseContext y cambio
        de temas
      </p>
      <a
        href="https://github.com/Abby25CE/Github_Search.git"
        className="flex items-center gap-1 text-black hover:underline"
      >
        Ver codigo <FiArrowRight />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-slate-700 md:col-span-3"
    >
      <p>
        Proyectos escolares, donde participe con mis compañeros, donde se
        crearon sistemas a medida a empresas y de forma academica donde se
        entregaban los proyectos ganadores
      </p>
    </Block>
  </>
);

const AboutBlock = () => (
  <Block className="col-span-12 text-xl leading-snug">
    <strong>🚀 Una apasionada por el desarrollo y la programación 🧪</strong>
    <p>
      Soy una desarrolladora FrontEnd JavaScript con dos años de experiencia. Me
      apasiona mucho el desarrollo web y en general la creación de productos
      digitales. Me gusta el camino de aprendizaje continuo, los retos y
      enfocada en identificar áreas de mejora después cada proyecto, con el
      objetivo de entregar un producto de alta calidad.
    </p>
  </Block>
);

const LocationBlock = () => (
  <Block className="col-span-12 flex flex-col justify-center items-center gap-4 md:col-span-3">
    <a
      className="text-center text-lg text-zinc-400"
      href="https://maps.app.goo.gl/h3c4yKZg217Vzhf38"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FiMapPin className="text-center text-3xl" />
      Morelia Michoacan
    </a>
  </Block>
);

const ListBlock = () => (
  <Block className="col-span-12 md:col-span-9">
    <div className="mb-3 text-lg">
      Aquí hay algunas tecnologías con las que he trabajado:
      <br />
      <div className="grid grid-cols-2">
        <ul className="flex flex-col">
          Tecnologias FrontEnd
          <li className="flex items-center gap-3">
            <SiCreatereactapp /> React.js
          </li>
          <li className="flex items-center gap-3">
            <SiNextdotjs /> Next.js
          </li>
          <li className="flex items-center gap-3">
            <IoLogoJavascript />
            JavaScript (ES6+)
          </li>
          <li className="flex items-center gap-3">
            <RiTailwindCssFill />
            TailwindCSS
          </li>
          <li className="flex items-center gap-3">
            <SiTypescript />
            TypeScript
          </li>
        </ul>
        <ul className="flex flex-col">
          Tecnologías BackEnd
          <li className="flex items-center gap-3">
            <FaNode />
            Node.js
          </li>
          <li className="flex items-center gap-3">
            <SiExpress /> Express.js
          </li>
          <li className="flex items-center gap-3">
            <FaFigma />
            Figma
          </li>
        </ul>
      </div>
    </div>
  </Block>
);

const Footer = () => {
  return (
    <footer className="mt-12">
      <p className="flex flex-col justify-center items-center text-black">
        © Copyright 2024 AbbyCE. All rights reserved.
        <a
          href="https://www.linkedin.com/in/luna-carrillo-espinosa-922056313/"
          className="text-slate-800 hover:underline"
        >
          @LunaCE25
        </a>
      </p>
    </footer>
  );
};
