"use client";
import { useEffect } from "react";

interface PageTitleProps {
  title: string; // Asegúrate de que sea un string
  favicon: string;
}

export const Title: React.FC<PageTitleProps> = ({
  title = "Título por defecto",
  favicon = "/app/favicon.ico",
}) => {
  (title = "Título por defecto"),
    favicon,
    useEffect(() => {
      const handleVisibilityChange = () => {
        if (document.hidden) {
          document.title = "¡Vuelve pronto!";
          changeFavicon("/app/favicon.ico");
        } else {
          document.title = title;
          changeFavicon(favicon);
        }
      };

      const changeFavicon = (src: string) => {
        let link = document.querySelector(
          "link[rel*='icon']"
        ) as HTMLLinkElement | null;

        if (!link) {
          link = document.createElement("link") as HTMLLinkElement;
          link.rel = "/app/favicon.ico";
          document.getElementsByTagName("head")[0].appendChild(link);
        }

        link.href = src;
      };

      document.addEventListener("visibilitychange", handleVisibilityChange);

      // Establecer el título y favicon inicial
      document.title = title || "Título por defecto"; // Usa un valor por defecto
      changeFavicon(favicon);

      return () => {
        document.removeEventListener(
          "visibilitychange",
          handleVisibilityChange
        );
      };
    }, [title, favicon]);

  return null; // Este componente no renderiza nada en el DOM
};

export default Title;
