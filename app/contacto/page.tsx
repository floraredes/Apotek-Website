"use client"

import type React from "react"
import { useState } from "react"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Libre_Baskerville } from "next/font/google"

const baskerville = Libre_Baskerville({
  subsets: ["latin"],
  display: "swap",
  weight: ["700"],
})

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    error: null as string | null,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ submitted: false, submitting: true, error: null })

    try {
      // Enviar directamente a Formspree
      // Reemplaza "xknpwgeo" con tu ID de formulario de Formspree
      const response = await fetch("https://formspree.io/f/xrbpyadq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Error al enviar el formulario")
      }

      // Éxito
      setStatus({ submitted: true, submitting: false, error: null })
      setFormData({ name: "", email: "", phone: "", message: "" })
    } catch (error) {
      console.error("Error al enviar el formulario:", error)
      setStatus({
        submitted: false,
        submitting: false,
        error: error instanceof Error ? error.message : "Ocurrió un error al enviar el mensaje",
      })
    }
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${baskerville.className}`} style={{ color: "#246142" }}>
        Contacto
      </h1>
      <div className="w-24 h-1 bg-[#246142] mb-12"></div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <p className="text-lg mb-8">
            Estamos aquí para ayudarte. No dudes en contactarnos para cualquier consulta o información adicional.
          </p>

          <div className="space-y-6">
            <div className="flex items-start">
              <MapPin size={24} className="text-green-700 mr-4 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Dirección</h3>
                <p>Galería Mercato, San Lorenzo y Cariola, Yerba Buena, Tucuman, Argentina</p>
              </div>
            </div>

            <div className="flex items-start">
              <Phone size={24} className="text-green-700 mr-4 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Teléfono</h3>
                <p>+54 9 381 454-7817</p>
              </div>
            </div>

            <div className="flex items-start">
              <Mail size={24} className="text-green-700 mr-4 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Email</h3>
                <p>Apotek.farmared@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <Clock size={24} className="text-green-700 mr-4 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Horarios de atención</h3>
                <p>Lunes - Viernes: 8:00 - 20:00</p>
                <p>Sábados: 9:00 - 18:00</p>
                <p>Domingos: 10:00 - 14:00</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white border border-green-700 border-opacity-10 p-6 rounded-lg shadow-md">
            <h2 className={`text-2xl font-bold mb-4 ${baskerville.className}`}>Envíanos un mensaje</h2>

            {!status.submitted ? (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block mb-2 font-medium">
                    Nombre completo <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block mb-2 font-medium">
                    Correo electrónico <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="phone" className="block mb-2 font-medium">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="block mb-2 font-medium">
                    Mensaje <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
                  ></textarea>
                </div>

                {status.error && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">{status.error}</div>}

                <button
                  type="submit"
                  disabled={status.submitting}
                  className="w-full py-3 px-4 rounded-md font-medium transition-colors disabled:opacity-70"
                  style={{ backgroundColor: "#246142", color: "white" }}
                >
                  {status.submitting ? "Enviando..." : "Enviar mensaje"}
                </button>
              </form>
            ) : (
              <div className="bg-green-700 bg-opacity-10 p-4 rounded-md text-center">
                <p className="text-lg font-medium text-green-700">¡Gracias por tu mensaje!</p>
                <p>Nos pondremos en contacto contigo lo antes posible.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="mb-16">
        <h2 className={`text-2xl font-bold mb-4 ${baskerville.className}`}>Encuéntranos</h2>
        <div className="w-20 h-1 bg-[#246142] mb-8"></div>

        <div className="rounded-lg overflow-hidden h-[450px] shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14243.081642389867!2d-65.2942228!3d-26.8154381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942243382e26da45%3A0x33a986c367e4394f!2sFARMACIA%20APOTEK!5e0!3m2!1ses-419!2sar!4v1743712540078!5m2!1ses-419!2sar"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de Apotek"
            aria-label="Mapa mostrando la ubicación de Apotek"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

