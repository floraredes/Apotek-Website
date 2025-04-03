"use client"

import { Libre_Baskerville } from "next/font/google"
import { Instagram } from "lucide-react"
import Link from "next/link"

const baskerville = Libre_Baskerville({
  subsets: ["latin"],
  display: "swap",
  weight: ["700"],
})

export default function InstagramFeed() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold mb-4 ${baskerville.className}`} style={{ color: "#246142" }}>
            Síguenos en Instagram
          </h2>
          <div className="w-24 h-1 bg-[#246142] mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-lg mb-6">
            Mantente al día con nuestras novedades, consejos de salud y promociones especiales
          </p>
          <Link
            href="https://www.instagram.com/apotek.farmacia/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-[#246142] font-medium hover:underline mb-10"
          >
            <Instagram className="mr-2" size={20} />
            @apotek
          </Link>
        </div>

        <div className="text-center">
          <Link
            href="https://www.instagram.com/apotek.farmacia/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block py-3 px-8 rounded-md font-medium transition-colors"
            style={{ backgroundColor: "#246142", color: "white" }}
          >
            Ver nuestro perfil en Instagram
          </Link>
        </div>
      </div>
    </section>
  )
}

