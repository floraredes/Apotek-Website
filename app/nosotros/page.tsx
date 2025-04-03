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
          <h2 className={`text-2xl font-bold mb-4 ${baskerville.className}`}>Nuestra Historia</h2>
          <p className="mb-4">
            Fundada en 2003, Apotek nació con la visión de ofrecer alternativas naturales para el cuidado de la salud.
            Lo que comenzó como una pequeña botica familiar, se ha convertido en un referente en productos naturales y
            atención farmacéutica personalizada.
          </p>
          <p>
            A lo largo de estos años, hemos crecido manteniendo nuestra esencia: el compromiso con la salud integral y
            el bienestar de nuestros clientes.
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
              Proporcionar soluciones naturales y personalizadas para mejorar la calidad de vida de nuestros clientes,
              combinando la sabiduría tradicional con los avances científicos modernos.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className={`text-xl font-bold mb-3 ${baskerville.className}`} style={{ color: "#246142" }}>
              Visión
            </h3>
            <p>
              Ser reconocidos como la farmacia de referencia en productos naturales y atención farmacéutica
              personalizada, contribuyendo a una sociedad más saludable y consciente.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className={`text-xl font-bold mb-3 ${baskerville.className}`} style={{ color: "#246142" }}>
              Valores
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Compromiso con la salud</li>
              <li>Atención personalizada</li>
              <li>Calidad y confianza</li>
              <li>Respeto por la naturaleza</li>
              <li>Innovación constante</li>
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

        <div className="grid md:grid-cols-3 gap-12">
          {[1, 2, 3].map((item) => (
            <div key={item} className="text-center">
              <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden mb-6 shadow-md">
                <Image
                  src={`/images/team-${item}.jpg`} // Cambia esto a tus imágenes reales
                  alt={`Miembro del equipo ${item}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                  className="object-cover"
                />
              </div>
              <h3 className={`text-xl font-bold mb-1 ${baskerville.className}`}>Nombre Apellido</h3>
              <p style={{ color: "#246142" }}>Cargo / Especialidad</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

