import Link from "next/link"
import { Pill, Stethoscope, FlaskRoundIcon as Flask, ShoppingBag, Heart, ShoppingCart } from "lucide-react"
import { Libre_Baskerville } from "next/font/google"

const baskerville = Libre_Baskerville({
  subsets: ["latin"],
  display: "swap",
  weight: ["700"],
})

const services = [
  {
    icon: <ShoppingCart size={40} className="text-green-700" />,
    title: "E-commerce",
    description: (
      <>
        ¡Ya podés comprar online en nuestra red de farmacias!<br />
        <a
          href="https://www.farmared24.com.ar/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 py-2 px-6 rounded-md font-semibold transition-colors"
          style={{ backgroundColor: "#246142", color: "white", boxShadow: "0 2px 8px rgba(36,97,66,0.10)" }}
        >
          Ir al E-commerce
        </a>
      </>
    ),
  },
  {
    icon: <Pill size={40} className="text-green-700" />,
    title: "Dispensación de medicamentos",
    description: "Ofrecemos una amplia gama de medicamentos y productos naturales.",
  },
  {
    icon: <Stethoscope size={40} className="text-green-700" />,
    title: "Asesoramiento farmacéutico",
    description: "Nuestros profesionales te brindan orientación personalizada.",
  },
  {
    icon: <Heart size={40} className="text-green-700" />,
    title: "Control de presión y glucosa",
    description: "Monitoreo regular para mantener tu salud bajo control.",
  },
  {
    icon: <Flask size={40} className="text-green-700" />,
    title: "Fórmulas magistrales",
    description: "Preparaciones personalizadas según tus necesidades específicas.",
  },
  {
    icon: <ShoppingBag size={40} className="text-green-700" />,
    title: "Productos de cuidado personal",
    description: "Amplia selección de productos naturales para tu bienestar.",
  },
]

export default function ServicesPreview() {
  return (
    <section className="py-20" style={{ backgroundColor: "#f0ece0" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-3xl font-bold mb-4 ${baskerville.className}`} style={{ color: "#246142" }}>
            Nuestros Servicios
          </h2>
          {/* Divisor centrado con espacio */}
          <div className="w-24 h-1 bg-[#246142] mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-lg">
            Ofrecemos una variedad de servicios diseñados para cuidar tu salud de manera integral
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">{service.icon}</div>
              <h3 className={`text-xl font-bold mb-3 ${baskerville.className}`}>{service.title}</h3>
              <p className="mb-4">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/servicios"
            className="inline-block py-3 px-8 rounded-md font-medium transition-colors"
            style={{ backgroundColor: "#246142", color: "white" }}
          >
            Ver todos los servicios
          </Link>
        </div>
      </div>
    </section>
  )
}

