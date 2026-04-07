'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

const WA_URL =
  'https://wa.me/50661525346?text=' +
  encodeURIComponent('Hola! Me interesa reservar en Casitas del Bosque. ¿Pueden ayudarme con disponibilidad?')

export function WhatsAppButton() {
  const [hovered, setHovered] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center justify-end">
      {/* Tooltip */}
      <motion.span
        initial={{ opacity: 0, x: 10, scale: 0.95 }}
        animate={hovered ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 10, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="mr-3 bg-[rgba(4,57,39,0.95)] backdrop-blur-md border border-white/15 text-white text-xs font-medium px-3 py-2 rounded-full whitespace-nowrap shadow-lg pointer-events-none"
      >
        Chateá con nosotros
      </motion.span>

      {/* Button */}
      <motion.a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.93 }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-2xl"
        style={{ backgroundColor: '#25D366' }}
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full animate-ping" style={{ backgroundColor: '#25D366', opacity: 0.35 }} />

        {/* Icon */}
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white" className="relative z-10">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12.007 2C6.477 2 2 6.484 2 12.017c0 1.99.554 3.847 1.52 5.442L2 22l4.674-1.487A9.96 9.96 0 0 0 12.007 22C17.523 22 22 17.516 22 12.017 22 6.496 17.536 2 12.007 2zm0 18c-1.674 0-3.237-.454-4.584-1.246l-.329-.195-3.399 1.082 1.087-3.31-.214-.34A7.964 7.964 0 0 1 4 12.017C4 7.589 7.584 4 12.007 4 16.42 4 20 7.589 20 12.017 20 16.411 16.43 20 12.007 20z"/>
        </svg>
      </motion.a>
    </div>
  )
}
