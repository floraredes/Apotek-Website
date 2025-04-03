import { NextResponse } from "next/server"

// Esta es una alternativa usando Formspree, un servicio gratuito para formularios
export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Enviar a Formspree (necesitas crear una cuenta y obtener tu endpoint)
    // Reemplaza XXXX con tu ID de formulario de Formspree
    const response = await fetch("https://formspree.io/f/XXXX", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      throw new Error("Error al enviar el formulario a Formspree")
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error al procesar el formulario:", error)
    return NextResponse.json(
      { error: "Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde." },
      { status: 500 },
    )
  }
}

