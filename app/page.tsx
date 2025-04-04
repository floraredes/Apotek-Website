import Hero from "@/components/hero"
import AboutPreview from "@/components/about-preview"
import ServicesPreview from "@/components/services-preview"
import InstagramFeed from "@/components/instagram-feed"
import ComingSoon from "@/components/coming-soon"
import { Libre_Baskerville } from "next/font/google"

const baskerville = Libre_Baskerville({
  subsets: ["latin"],
  display: "swap",
  weight: ["700"],
})

export default function Home() {
  return (
    <>
      <Hero />

      {/* Sección de bienvenida con fondo diferente */}
      <div className="py-20" style={{ backgroundColor: "#f0ece0" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className={`text-4xl font-bold mb-6 ${baskerville.className}`} style={{ color: "#246142" }}>
              Bienvenidos a Apotek
            </h2>
            <div className="w-24 h-1 bg-[#246142] mx-auto mb-8"></div>
            <p className="text-lg mb-10">
              Más que una farmacia, un espacio para vos. Combinamos medicamentos con propuestas naturales y de calidad
              para mejorar tu vida de manera integral.
            </p>
            <a
              href="/nosotros"
              className="inline-block py-3 px-8 rounded-md font-medium transition-colors"
              style={{ backgroundColor: "#246142", color: "white" }}
            >
              Conoce más sobre nosotros
            </a>
          </div>
        </div>
      </div>

      <AboutPreview />
      <ServicesPreview />
      <InstagramFeed />
      <ComingSoon />
    </>
  )
}

