import { Pill, Stethoscope, Droplet, FlaskRoundIcon as Flask, ShoppingBag, Heart, ShoppingCart } from "lucide-react"
import { Libre_Baskerville } from "next/font/google"

const baskerville = Libre_Baskerville({
  subsets: ["latin"],
  display: "swap",
  weight: ["700"],
})

const services = [
  {
    icon: <ShoppingCart size={48} className="text-green-700" />,
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
    icon: <Pill size={48} className="text-green-700" />,
    title: "Dispensación de medicamentos",
    description:
      "Ofrecemos una amplia gama de medicamentos y productos naturales, con asesoramiento profesional para su uso correcto y seguro.",
  },
  {
    icon: <Stethoscope size={48} className="text-green-700" />,
    title: "Asesoramiento farmacéutico",
    description:
      "Nuestros profesionales te brindan orientación personalizada sobre el uso de medicamentos, interacciones y efectos secundarios.",
  },
  {
    icon: <Heart size={48} className="text-green-700" />,
    title: "Control de presión y glucosa",
    description:
      "Realizamos monitoreo regular de presión arterial y niveles de glucosa para ayudarte a mantener tu salud bajo control.",
  },
  {
    icon: <Flask size={48} className="text-green-700" />,
    title: "Fórmulas magistrales",
    description:
      "Preparamos fórmulas personalizadas según tus necesidades específicas, siguiendo los más altos estándares de calidad.",
  },
  {
    icon: <ShoppingBag size={48} className="text-green-700" />,
    title: "Productos de cuidado personal",
    description:
      "Disponemos de una amplia selección de productos naturales para el cuidado personal, desde cosmética natural hasta suplementos para tu bienestar diario.",
  },
  {
    icon: <Droplet size={48} className="text-green-700" />,
    title: "Suplementos naturales",
    description:
      "Complementos alimenticios y suplementos naturales para fortalecer tu salud y prevenir deficiencias nutricionales.",
  },
]

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${baskerville.className}`} style={{ color: "#246142" }}>
        Nuestros Servicios
      </h1>
      {/* Divisor con espacio */}
      <div className="w-24 h-1 bg-[#246142] mb-12"></div>

      <p className="text-lg mb-16 max-w-3xl">
        En Apotek nos comprometemos a ofrecer servicios de calidad para el cuidado integral de tu salud. Nuestro equipo
        de profesionales está a tu disposición para brindarte la mejor atención personalizada.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white border border-green-700 border-opacity-10 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className={`text-2xl font-bold mb-3 ${baskerville.className}`}>{service.title}</h3>
            <p className="mb-4">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-20 py-12 px-8 rounded-lg" style={{ backgroundColor: "#f0ece0" }}>
        <h2 className={`text-2xl font-bold mb-4 ${baskerville.className}`}>¿Necesitas un servicio personalizado?</h2>
        <p className="mb-6">
          Si tienes alguna necesidad específica o deseas más información sobre nuestros servicios, no dudes en
          contactarnos. Estaremos encantados de ayudarte.
        </p>
        <a
          href="/contacto"
          className="inline-block py-3 px-8 rounded-md font-medium transition-colors"
          style={{ backgroundColor: "#246142", color: "white" }}
        >
          Contactar ahora
        </a>
      </div>
    </div>
  )
}

