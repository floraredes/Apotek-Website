import type React from "react"
import type { Metadata } from "next"
import { Libre_Baskerville, Raleway } from "next/font/google"
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
  title: "Apotek - Tu salud, nuestra prioridad",
  description: "Farmacia especializada en productos naturales y atención personalizada para tu bienestar",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${baskerville.variable} ${raleway.variable}`}>
      <body className={`${raleway.className} bg-[#f8f5f0] text-[#0f2a1d]`}>
        <Navbar />
        <main>{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  )
}

