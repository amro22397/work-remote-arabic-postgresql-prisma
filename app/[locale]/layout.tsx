import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PopupWidget } from "@/components/PopupWidget";

import "./globals.css";
import { Providers } from "./provider";

import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

import styles from "./layout.module.css";

import AppProvider from "@/components/AppContext";
import { getUser } from "@/actions/getUser";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "عمل عن بعد",
  description:
    "هذه منصة تتيح لك البحث عن فرص عمل عن بعد وتتيح لأصحاب الأعمال عرض الوظائف التي لديهم",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();


  // if (
  //   localStorage.getItem("theme") === "dark" ||
  //   (!("theme" in localStorage) &&
  //     window.matchMedia("(prefers-color-scheme: dark)").matches)
  // ) {
  //   document.documentElement.classList.add("dark");
  // } else {
  //   document.documentElement.classList.remove("dark");
  // }


  const user = await getUser();
  const jUser = JSON.parse(JSON.stringify(user) || '{}')


  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Alexandria:wght@100..900&family=Almarai:wght@300;400;700;800&family=Amiri:ital,wght@0,400;0,700;1,400;1,700&family=Atma:wght@300;400;500;600;700&family=Audiowide&family=Baloo+Bhaijaan+2:wght@400..800&family=Beiruti:wght@200..900&family=Bonbon&family=Bungee+Outline&family=Cairo:slnt,wght@-11..11,200..1000&family=Delius+Swash+Caps&family=Delius+Unicase:wght@400;700&family=DynaPuff:wght@400..700&family=El+Messiri:wght@400..700&family=Galindo&family=Gemunu+Libre:wght@200..800&family=Handjet:wght@100..900&family=Harmattan:wght@400;500;600;700&family=Henny+Penny&family=Iceberg&family=Irish+Grover&family=Jersey+15&family=Jockey+One&family=Kablammo&family=Lalezar&family=Lateef:wght@200;300;400;500;600;700;800&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Mada:wght@200..900&family=Marhey:wght@300..700&family=Metal+Mania&family=Mogra&family=Mystery+Quest&family=New+Rocker&family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&family=Noto+Kufi+Arabic:wght@100..900&family=Nova+Cut&family=Odibee+Sans&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Outfit:wght@100..900&family=Oxanium:wght@200..800&family=Pacifico&family=Passero+One&family=Poiret+One&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Rakkas&family=Readex+Pro:wght@160..700&family=Reem+Kufi:wght@400..700&family=Roboto+Slab:wght@100..900&family=Rubik+Distressed&family=Rubik:wght@300..900&family=Ruwudu:wght@400;500;600;700&family=Saira+Stencil+One&family=Silkscreen:wght@400;700&family=Squada+One&family=Tajawal:wght@200;300;400;500;700;800;900&family=Tourney:ital,wght@0,100..900;1,100..900&family=Turret+Road:wght@200;300;400;500;700;800&family=Vibes&family=Zain:ital,wght@0,200;0,300;0,400;0,700;0,800;0,900;1,300;1,400&display=swap');
        </style>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased
        ${locale === "ar" && styles.arabic} overflow-x-hidden`}
      >
        <AppProvider session>
        <Providers>
          <NextIntlClientProvider messages={messages}>
            <Navbar />

            {children}

            <Footer />
          </NextIntlClientProvider>
        </Providers>
        </AppProvider>
        
        {/* <ThemeProvider attribute="class"> */}

        {/* <PopupWidget /> */}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
