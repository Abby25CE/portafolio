import Head from "next/head";
import { metadata } from "../containers/metadata";
import Title from "../containers/Title";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const title = (metadata?.title as string) || "AbbyCE";
  const favicon = "/favicon.ico";

  return (
    <html lang="en">
      <Head>
        <link rel="icon" href={favicon} />
      </Head>
      <body>
        <Title title={title} favicon={favicon} />
        {children}
      </body>
    </html>
  );
}
