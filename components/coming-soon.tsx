"use client"

import type React from "react"
import { useState } from "react"
import { Send } from "lucide-react"

export default function ComingSoon() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    try {
      const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_SUBSCRIPTION_ID
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          subject: "Nueva suscripción para notificaciones de e-commerce",
          message: "Suscripción desde la sección Coming Soon de la página principal",
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
    <section className="bg-green-700 text-cream py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">E-commerce Próximamente</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Muy pronto podrás hacer tus compras desde la comodidad de tu hogar. Estamos trabajando para ofrecerte la mejor
          experiencia de compra online.
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
                className="flex-grow px-4 py-2 rounded-l-md text-green-900 focus:outline-none"
                disabled={submitting}
              />
              <button
                type="submit"
                className="bg-green-800 hover:bg-green-900 px-4 py-2 rounded-r-md transition-colors disabled:opacity-70"
                disabled={submitting}
              >
                {submitting ? (
                  <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  <Send size={20} />
                )}
              </button>
            </div>
            <p className="mt-2 text-sm text-cream text-opacity-80">Notifícame cuando el e-commerce esté disponible</p>
            {error && <p className="mt-2 text-sm text-red-300">{error}</p>}
          </form>
        ) : (
          <div className="bg-green-800 max-w-md mx-auto p-4 rounded-md">
            <p>¡Gracias! Te notificaremos cuando esté disponible.</p>
          </div>
        )}
      </div>
    </section>
  )
}

