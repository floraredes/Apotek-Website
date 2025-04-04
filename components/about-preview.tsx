import Link from "next/link"
import Image from "next/image"
import { Libre_Baskerville } from "next/font/google"

const baskerville = Libre_Baskerville({
  subsets: ["latin"],
  display: "swap",
  weight: ["700"],
})

export default function AboutPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className={`text-3xl font-bold mb-4 ${baskerville.className}`} style={{ color: "#246142" }}>
              Nosotros
            </h2>
            {/* Divisor con espacio */}
            <div className="w-20 h-1 bg-[#246142] mb-8"></div>
            <p className="mb-6 text-lg">
              Somos una farmacia boutique que nació en 2025 con la visión de crear un espacio diferente, donde la
              atención personalizada y los productos de calidad son nuestra prioridad.
            </p>
            <p className="mb-8">
              En Apotek combinamos medicamentos con propuestas naturales como cosmética vegana, dermocosmética de marcas
              líderes y productos cuidadosamente seleccionados para mejorar tu calidad de vida.
            </p>
            <Link
              href="/nosotros"
              className="inline-block py-3 px-8 rounded-md font-medium transition-colors"
              style={{ backgroundColor: "#246142", color: "white" }}
            >
              Conoce más sobre nosotros
            </Link>
          </div>
          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/about.jpg" // Cambia esto a tu imagen real
              alt="Equipo de Apotek"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

