import Image from "next/image"
import { Libre_Baskerville } from "next/font/google"

const baskerville = Libre_Baskerville({
  subsets: ["latin"],
  display: "swap",
  weight: ["700"],
})

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${baskerville.className}`} style={{ color: "#246142" }}>
        Nosotros
      </h1>
      {/* Divisor con espacio */}
      <div className="w-24 h-1 bg-[#246142] mb-12"></div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className={`text-2xl font-bold mb-4 ${baskerville.className}`}>Sobre Nosotros</h2>
          <p className="mb-4">
            Farmacia Apotek abrió sus puertas el 14 de febrero de 2025, con el sueño de ofrecer un espacio distinto: más
            humano, más natural y más conectado con las verdaderas necesidades de las personas.
          </p>
          <p>
            Desde el comienzo, nos propusimos ir más allá del modelo tradicional de farmacia. En Apotek, combinamos
            medicamentos con propuestas naturales y de calidad como cosmética vegana, dermocosmética de marcas líderes,
            perfumería y regalería cuidadosamente seleccionadas. Cada producto que ofrecemos responde a una premisa
            clara: mejorar la vida de nuestros pacientes de manera integral.
          </p>
        </div>
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/about.jpg" // Cambia esto a tu imagen real
            alt="Historia de Apotek"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="mb-20 py-16" style={{ backgroundColor: "#f0ece0" }}>
        <h2 className={`text-2xl font-bold mb-4 text-center ${baskerville.className}`}>Misión, Visión y Valores</h2>
        <div className="w-20 h-1 bg-[#246142] mx-auto mb-12"></div>

        <div className="grid md:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className={`text-xl font-bold mb-3 ${baskerville.className}`} style={{ color: "#246142" }}>
              Misión
            </h3>
            <p>
              Nuestra misión es proporcionar soluciones naturales y personalizadas para mejorar la calidad de vida,
              uniendo el conocimiento tradicional con los avances científicos más recientes.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className={`text-xl font-bold mb-3 ${baskerville.className}`} style={{ color: "#246142" }}>
              Visión
            </h3>
            <p>
              Nos diferencia nuestra atención boutique, donde cada cliente es recibido con tiempo, dedicación y empatía.
              Queremos que cada visita sea una experiencia positiva y cercana.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className={`text-xl font-bold mb-3 ${baskerville.className}`} style={{ color: "#246142" }}>
              Valores
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Compromiso real con la salud</li>
              <li>Atención ágil, cercana y personalizada</li>
              <li>Productos de calidad y marcas de confianza</li>
              <li>Respeto por la naturaleza y elección consciente</li>
              <li>Búsqueda constante de innovación</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h2 className={`text-2xl font-bold mb-4 text-center ${baskerville.className}`}>Nuestro Equipo</h2>
        <div className="w-20 h-1 bg-[#246142] mx-auto mb-12"></div>
        <p className="mb-12 text-center max-w-3xl mx-auto">
          Contamos con un equipo de profesionales altamente cualificados y comprometidos con tu bienestar.
          Farmacéuticos, técnicos y asesores de salud natural trabajan juntos para ofrecerte el mejor servicio.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className={`text-xl font-bold mb-1 ${baskerville.className}`}>Gabriela Somaini</h3>
            <p style={{ color: "#246142" }}>Farmacéutica</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className={`text-xl font-bold mb-1 ${baskerville.className}`}>Pedro Aredes</h3>
            <p style={{ color: "#246142" }}>Fundador & Director General</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className={`text-xl font-bold mb-1 ${baskerville.className}`}>Camila Sercan</h3>
            <p style={{ color: "#246142" }}>Auxiliar farmacéutica</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className={`text-xl font-bold mb-1 ${baskerville.className}`}>Nahuel Soraire</h3>
            <p style={{ color: "#246142" }}>Auxiliar farmacéutico</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className={`text-xl font-bold mb-1 ${baskerville.className}`}>Agustina Bulacio</h3>
            <p style={{ color: "#246142" }}>Dermoconsejera</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className={`text-xl font-bold mb-1 ${baskerville.className}`}>Christian Cruz</h3>
            <p style={{ color: "#246142" }}>Auxiliar farmacéutico</p>
          </div>
        </div>
      </div>
    </div>
  )
}

