// src/app/layout.tsx
import Head from "next/head";
import { metadata } from "../containers/metadata"; // Asegúrate de que la ruta sea correcta
import Title from "../containers/Title"; // Importa el nuevo componente
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const title = (metadata?.title as string) || "Título por defecto"; // Valor por defecto
  const favicon = "/favicon.ico";

  return (
    <html lang="en">
      <Head>
        <link rel="icon" href={favicon} />
      </Head>
      <body>
        {/* Usamos el componente PageTitle */}
        <Title title={title} favicon={favicon} />
        {children}
      </body>
    </html>
  );
}
