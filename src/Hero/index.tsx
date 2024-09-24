"use client";

export const Hero = () => {
  return (
    <div className=" flex flex-col lg:flex-row h-screen w-full overflow-hidden">
      {/* Contenedor de texto */}
      <div className="flex flex-col items-center justify-center text-neutral-700 p-4 lg:pl-14 lg:w-1/2">
        <h2 className="text-xl lg:text-4xl font-bold">
          Hola me presento, soy
          <br />
        </h2>
        <h1 className="lg:text-7xl text-2xl ">
          {"<"} <strong>Desarrolladora FrontEnd</strong> con React {">"}
        </h1>
        <h2 className="text-xl lg:text-2xl font-bold text-right">
          Soy Luna Abigail
        </h2>
      </div>

      {/* Contenedor del iframe Lottie */}
      <div className="flex justify-center items-center lg:w-1/2">
        <iframe
          className="w-full h-[500px] lg:h-[700px] lg:w-full"
          src="https://lottie.host/embed/16787e2b-6aed-49f8-8841-9ab8ae9ad0a7/10q2xqoJDV.json"
          frameBorder="0"
        />
      </div>
    </div>
  );
};

export default Hero;
