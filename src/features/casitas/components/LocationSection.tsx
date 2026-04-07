'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const METRICS = [
  { value: '350m', label: 'de Playa Punta Uva', sublabel: 'La playa más hermosa del Caribe sur' },
  { value: '6km',  label: 'de Puerto Viejo', sublabel: 'Restaurantes, surf y vida nocturna' },
  { value: '45min', label: 'del Aeropuerto Limón', sublabel: 'Acceso fácil al paraíso' },
]

export function LocationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="location" className="casitas-section-bg py-24 px-4 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#C5A55A] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Ubicación
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-white mb-6">
            En el corazón de <span className="casitas-text-gold italic">Punta Uva</span>
          </h2>
          <div className="casitas-divider mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: text + metrics */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <p className="text-white/65 text-base leading-relaxed">
              Casitas del Bosque se encuentra en Punta Uva, uno de los destinos más
              vírgenes del Caribe costarricense. Rodeados de selva tropical densa,
              ríos cristalinos y a pasos de la playa más hermosa del Caribe sur.
            </p>

            {/* Metric cards */}
            <div className="flex flex-col gap-4">
              {METRICS.map((m, i) => (
                <motion.div
                  key={m.value}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                  className="casitas-glass-card rounded-2xl px-5 py-4 flex items-center gap-5"
                >
                  <div className="flex-shrink-0">
                    <span className="casitas-text-gold font-display text-3xl font-bold">{m.value}</span>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">{m.label}</p>
                    <p className="text-white/45 text-xs mt-0.5">{m.sublabel}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Features list */}
            <div className="flex flex-wrap gap-3 mt-2">
              {[
                'Selva primaria',
                'Ríos cristalinos',
                'Observación de monos',
                'Tortugas marinas (temporada)',
                'Snorkel',
                'Ciclismo',
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-[#C5A55A] border border-[#C5A55A]/30 rounded-full px-3 py-1.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="casitas-glass-card rounded-3xl overflow-hidden h-80 lg:h-[500px]"
          >
            <iframe
              src="https://maps.google.com/maps?q=Punta+Uva+Limon+Costa+Rica&t=k&z=14&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Casitas del Bosque — Punta Uva, Costa Rica"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
