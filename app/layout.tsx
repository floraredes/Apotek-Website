import type React from "react"
import type { Metadata } from "next"
import { Libre_Baskerville, Raleway } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

const baskerville = Libre_Baskerville({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--font-baskerville",
})

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-raleway",
})

export const metadata: Metadata = {
  title: "Apotek - Farmacia Boutique en Yerba Buena, Tucumán",
  description:
    "Farmacia boutique en Galería Mercato, Yerba Buena, Tucumán. Ofrecemos medicamentos, cosmética vegana, dermocosmética y productos naturales con atención personalizada.",
  keywords: "farmacia, Yerba Buena, Tucumán, productos naturales, dermocosmética, atención personalizada, Apotek",
  openGraph: {
    title: "Apotek - Farmacia Boutique en Yerba Buena, Tucumán",
    description:
      "Farmacia boutique en Galería Mercato, Yerba Buena, Tucumán. Ofrecemos medicamentos, cosmética vegana, dermocosmética y productos naturales con atención personalizada.",
    url: "https://www.apotekfarmacia.com.ar",
    siteName: "Apotek Farmacia",
    locale: "es_AR",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${baskerville.variable} ${raleway.variable}`}>
      <head>
        {/* Google Tag (gtag.js) */}
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=AW-849983186" />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-849983186');
            `,
          }}
        />
      </head>
      <body className={`${raleway.className} bg-[#f8f5f0] text-[#0f2a1d]`}>
        <Navbar />
        <main>{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  )
}
