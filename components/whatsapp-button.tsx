"use client"

import { useEffect, useState } from "react"

export default function WhatsAppButton() {
  const [showNotification, setShowNotification] = useState(false)

  useEffect(() => {
    // Mostrar la notificación después de 2 segundos
    const timer = setTimeout(() => {
      setShowNotification(true)
    }, 2000)

    // Ocultar la notificación después de 8 segundos
    const hideTimer = setTimeout(() => {
      setShowNotification(false)
    }, 10000)

    return () => {
      clearTimeout(timer)
      clearTimeout(hideTimer)
    }
  }, [])

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Notificación */}
      {showNotification && (
        <div
          className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg p-3 mb-3 w-48"
          style={{
            borderLeft: "4px solid #25D366",
            animation: "fadeInUp 0.3s ease-out",
          }}
        >
          <p className="text-sm font-medium">Contáctanos en WhatsApp</p>
          <span
            className="absolute top-2 right-2 text-gray-400 cursor-pointer hover:text-gray-600"
            onClick={() => setShowNotification(false)}
          >
            ×
          </span>
          {/* Triángulo para el globo de diálogo */}
          <div
            className="absolute -bottom-2 right-6 w-0 h-0"
            style={{
              borderLeft: "8px solid transparent",
              borderRight: "8px solid transparent",
              borderTop: "8px solid white",
            }}
          ></div>
        </div>
      )}

      {/* Botón de WhatsApp */}
      <a
        href="https://wa.me/5493814547817"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center p-3 rounded-full shadow-lg transition-transform hover:scale-110"
        style={{ backgroundColor: "#25D366", color: "white" }}
        aria-label="Contactar por WhatsApp"
        onClick={() => setShowNotification(false)}
      >
        {/* Logo de WhatsApp */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="white"
          stroke="white"
          strokeWidth="0"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.3929 4.6071C17.4433 2.6575 14.8546 1.5 12.0884 1.5C6.4276 1.5 1.8161 6.1115 1.8161 11.7723C1.8161 13.6456 2.3006 15.4732 3.2261 17.0638L1.7153 22.5L7.2941 21.0207C8.8262 21.8599 10.4417 22.3002 12.0884 22.3002H12.0941C17.7492 22.3002 22.5 17.6887 22.5 12.0279C22.5 9.2617 21.1867 6.5567 19.3929 4.6071ZM12.0884 20.5383C10.6434 20.5383 9.2271 20.1152 8.0023 19.3217L7.6364 19.1019L4.5057 20.0044L5.4253 16.9565L5.1826 16.5735C4.3087 15.2999 3.8471 13.7678 3.8471 12.1778C3.8471 7.5456 7.4562 3.9365 12.0941 3.9365C14.3999 3.9365 16.5599 4.8848 18.1893 6.5142C19.8187 8.1436 20.9434 10.3036 20.9377 12.6093C20.9377 17.2473 16.7224 20.5383 12.0884 20.5383ZM16.9429 14.0687C16.6659 13.9302 15.3808 13.2971 15.1267 13.2039C14.8726 13.1107 14.6871 13.0641 14.4959 13.3411C14.3047 13.6181 13.8024 14.2047 13.6399 14.3959C13.4773 14.5871 13.3148 14.6104 13.0378 14.4719C12.7608 14.3334 11.9092 14.0628 10.9141 13.1689C10.1322 12.4683 9.6126 11.6051 9.45 11.3281C9.2874 11.0511 9.4326 10.9001 9.5721 10.7608C9.6969 10.6359 9.8478 10.4326 9.9871 10.2701C10.1264 10.1075 10.173 9.991 10.2662 9.7998C10.3594 9.6086 10.3128 9.446 10.2429 9.3075C10.173 9.169 9.6534 7.8839 9.4156 7.3299C9.1835 6.7933 8.9457 6.8689 8.7774 6.8632C8.6149 6.8575 8.4237 6.8575 8.2325 6.8575C8.0413 6.8575 7.7411 6.9274 7.487 7.2044C7.2329 7.4814 6.5533 8.1145 6.5533 9.3996C6.5533 10.6847 7.5078 11.9232 7.6471 12.1144C7.7864 12.3056 9.6069 15.1089 12.3887 16.2336C13.0378 16.5106 13.5458 16.6724 13.9399 16.7946C14.5889 16.9971 15.1848 16.9681 15.6523 16.8982C16.1778 16.8169 17.2199 16.2626 17.4577 15.6156C17.6955 14.9686 17.6955 14.4146 17.6256 14.3001C17.5557 14.1856 17.3645 14.1157 16.9429 13.9772V14.0687Z"
            fill="white"
          />
        </svg>
      </a>
    </div>
  )
}

