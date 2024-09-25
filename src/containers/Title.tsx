"use client";
import { useEffect } from "react";

interface PageTitleProps {
  title: string;
  favicon: string;
}
export const Title: React.FC<PageTitleProps> = ({
  title = "AbbyCE",
  favicon = "/app/favicon.ico",
}) => {
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "¡No me dejes!";
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

    document.title = title || "AbbyCE";
    changeFavicon(favicon);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [title, favicon]);

  return null;
};

export default Title;
