import Link from "next/link"
import Image from "next/image"
import { Libre_Baskerville } from "next/font/google"

const baskerville = Libre_Baskerville({
  subsets: ["latin"],
  display: "swap",
  weight: ["700"],
})

export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg" // Cambia esto a tu imagen real
          alt="Apotek"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(36, 97, 66, 0.5)" }}></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-white">
        <div className="max-w-2xl">
          <h1 className={`text-4xl md:text-6xl font-bold mb-4 ${baskerville.className}`}>
            Más que una farmacia, un espacio para vos
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Descubre nuestra selección boutique de productos naturales, dermocosmética y medicamentos, con atención
            personalizada y asesoramiento profesional.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/nosotros"
              className="inline-block py-2 px-6 rounded-md font-medium transition-colors"
              style={{ backgroundColor: "#246142", color: "white" }}
            >
              Conócenos
            </Link>
            <Link
              href="/servicios"
              className="inline-block py-2 px-6 rounded-md font-medium transition-colors border-2"
              style={{ borderColor: "white", color: "white" }}
            >
              Servicios
            </Link>
            <Link
              href="/contacto"
              className="inline-block py-2 px-6 rounded-md font-medium transition-colors border-2"
              style={{ borderColor: "white", color: "white" }}
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

