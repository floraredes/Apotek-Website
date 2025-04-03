"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { Send } from "lucide-react"

export default function EcommercePage() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    try {
      // Reemplaza "xknpwgeo" con tu ID de formulario de Formspree para suscripciones
      const response = await fetch("https://formspree.io/f/xknpwgeo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          subject: "Nueva suscripción para notificaciones de e-commerce",
          message: "Suscripción desde la página de E-commerce",
        }),
      })

      if (!response.ok) {
        throw new Error("Error al enviar el formulario")
      }

      // Éxito
      setSubmitted(true)
      setEmail("")
    } catch (err) {
      console.error("Error al enviar el formulario:", err)
      setError("Ocurrió un error al enviar tu correo. Por favor, inténtalo de nuevo.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-8 text-green-700">E-commerce Próximamente</h1>

        <div className="relative h-64 md:h-80 mb-8">
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="E-commerce Próximamente"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-contain"
          />
        </div>

        <p className="text-lg mb-8">
          Estamos trabajando para ofrecerte la mejor experiencia de compra online. Muy pronto podrás adquirir todos
          nuestros productos desde la comodidad de tu hogar.
        </p>

        <div className="bg-green-700 bg-opacity-5 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-playfair font-bold mb-4">¿Qué podrás encontrar?</h2>

          <div className="grid md:grid-cols-3 gap-6 text-left mb-8">
            <div>
              <h3 className="font-bold mb-2">Productos naturales</h3>
              <p>Amplia gama de productos naturales para el cuidado de tu salud.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Suplementos</h3>
              <p>Complementos alimenticios y vitaminas para fortalecer tu organismo.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Cosmética natural</h3>
              <p>Productos de belleza y cuidado personal elaborados con ingredientes naturales.</p>
            </div>
          </div>

          <div className="text-center">
            <p className="font-medium mb-4">Además, disfrutarás de:</p>
            <ul className="inline-block text-left">
              <li className="mb-2">✓ Envío a domicilio</li>
              <li className="mb-2">✓ Asesoramiento online</li>
              <li className="mb-2">✓ Promociones exclusivas</li>
              <li>✓ Programa de fidelización</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-playfair font-bold mb-4">¿Quieres ser el primero en enterarte?</h2>
          <p className="mb-6">
            Déjanos tu correo electrónico y te notificaremos cuando nuestro e-commerce esté disponible.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Tu correo electrónico"
                  required
                  className="flex-grow px-4 py-2 rounded-l-md border border-green-700 focus:outline-none focus:ring-2 focus:ring-green-700"
                  disabled={submitting}
                />
                <button
                  type="submit"
                  className="bg-green-700 hover:bg-green-800 text-cream px-4 py-2 rounded-r-md transition-colors disabled:opacity-70"
                  disabled={submitting}
                >
                  {submitting ? (
                    <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  ) : (
                    <Send size={20} />
                  )}
                </button>
              </div>
              {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
            </form>
          ) : (
            <div className="bg-green-700 text-cream max-w-md mx-auto p-4 rounded-md">
              <p>¡Gracias! Te notificaremos cuando nuestro e-commerce esté disponible.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

