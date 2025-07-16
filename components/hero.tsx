import Link from "next/link"
import Image from "next/image"
import { Libre_Baskerville } from "next/font/google"
import { MapPin } from "lucide-react"

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
          src="/images/hero-bg.jpg"
          alt="Apotek"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(36, 97, 66, 0.5)" }}></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-white">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between max-w-5xl mx-auto w-full">
          {/* Hero principal */}
          <div className="max-w-2xl md:mr-8">
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
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=FARMACIA+APOTEK&destination_place_id=ChIJRdomLjhDIpQRTznkZ8OGqTM"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center py-2 px-6 rounded-md font-medium transition-colors border-2"
                style={{ borderColor: "white", color: "white" }}
              >
                <MapPin size={18} className="mr-2" />
                ¿Cómo llegar?
              </a>
            </div>
          </div>
          {/* Anuncio E-commerce */}
          <div className="mt-10 md:mt-0 md:max-w-md w-full md:w-[380px] p-6 rounded-lg shadow-lg" style={{ background: "rgba(255,255,255,0.90)", color: "#246142" }}>
            <h2 className={`text-3xl md:text-4xl font-bold mb-2 ${baskerville.className}`}>¡Ya abrimos nuestro E-commerce!</h2>
            <p className="mb-4 text-base md:text-lg">Ahora podés comprar online en la red de farmacias a la que pertenecemos.</p>
            <a
              href="https://www.farmared24.com.ar/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center py-2 px-6 rounded-md font-semibold transition-colors"
              style={{ backgroundColor: "#246142", color: "white", boxShadow: "0 2px 8px rgba(36,97,66,0.10)" }}
            >
              Ir al E-commerce
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="ml-2" style={{ width: 20, height: 20 }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
