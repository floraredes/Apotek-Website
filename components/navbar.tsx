"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Libre_Baskerville } from "next/font/google"

// Libre Baskerville es una alternativa a Baskerville disponible en Google Fonts
const baskerville = Libre_Baskerville({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
})

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header style={{ backgroundColor: "#f8f5f0" }} className="sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/images/logo.png" alt="Apotek Logo" width={40} height={40} className="h-10 w-10 object-contain" />
          <span className={`text-2xl font-bold ${baskerville.className}`} style={{ color: "#246142" }}>
            APOTEK
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" style={{ color: "#246142" }} className="hover:text-opacity-80 transition-colors">
            Inicio
          </Link>
          <Link href="/nosotros" style={{ color: "#246142" }} className="hover:text-opacity-80 transition-colors">
            Nosotros
          </Link>
          <Link href="/servicios" style={{ color: "#246142" }} className="hover:text-opacity-80 transition-colors">
            Servicios
          </Link>
          <Link href="/contacto" style={{ color: "#246142" }} className="hover:text-opacity-80 transition-colors">
            Contacto
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button style={{ color: "#246142" }} className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div style={{ backgroundColor: "#f8f5f0" }} className="md:hidden py-4 px-4">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              style={{ color: "#246142" }}
              className="hover:text-opacity-80 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/nosotros"
              style={{ color: "#246142" }}
              className="hover:text-opacity-80 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Nosotros
            </Link>
            <Link
              href="/servicios"
              style={{ color: "#246142" }}
              className="hover:text-opacity-80 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Servicios
            </Link>
            <Link
              href="/contacto"
              style={{ color: "#246142" }}
              className="hover:text-opacity-80 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

