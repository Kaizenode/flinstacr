import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "Flinsta | Posicionamiento Estratégico",
  description:
    "Deja de vender horas. Empieza a vender autoridad. Ayudamos a profesionales 1:1 a construir ofertas premium y generar demanda orgánica de alto valor.",
  openGraph: {
    title: "Flinsta — Posicionamiento Estratégico",
    description:
      "Deja de vender horas. Empieza a vender autoridad. Ayudamos a profesionales 1:1 a construir ofertas premium y generar demanda orgánica de alto valor.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" style={{ background: "#000", colorScheme: "dark" }}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@700,500,400&display=swap"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ background: "#000", color: "#fff" }}
      >
        {children}
      </body>
    </html>
  );
}
