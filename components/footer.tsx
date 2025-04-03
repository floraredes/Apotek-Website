import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"
import { Libre_Baskerville } from "next/font/google"

const baskerville = Libre_Baskerville({
  subsets: ["latin"],
  display: "swap",
  weight: ["700"],
})

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#246142", color: "white" }}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className={`text-xl font-bold mb-4 ${baskerville.className}`}>APOTEK</h3>
            <p className="mb-4">Tu farmacia de confianza, comprometida con tu bienestar y salud natural.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-white/80 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-white/80 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-white/80 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:underline">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="hover:underline">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="hover:underline">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:underline">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Horarios</h4>
            <ul className="space-y-2">
              <li>Lunes - Viernes: 8:00 - 20:00</li>
              <li>Sábados: 9:00 - 18:00</li>
              <li>Domingos: 10:00 - 14:00</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contacto</h4>
            <address className="not-italic">
              <p className="mb-2">Av. Principal 123, Ciudad</p>
              <p className="mb-2">Teléfono: (123) 456-7890</p>
              <p>Email: info@apotek.com</p>
            </address>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-sm text-center">
          <p>© {new Date().getFullYear()} Apotek. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

