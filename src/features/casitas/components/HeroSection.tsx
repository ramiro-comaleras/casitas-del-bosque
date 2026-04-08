'use client'
import { motion } from 'framer-motion'

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Mobile: imagen de fondo */}
      <img
        src="/casitas/playa-mobile.jpg"
        alt="Playa Punta Uva, Costa Rica"
        className="md:hidden absolute inset-0 w-full h-full object-cover"
      />

      {/* Desktop: video de fondo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="hidden md:block absolute inset-0 w-full h-full object-cover"
        src="/casitas/video-hero.mp4"
      />

      {/* Multi-layer overlay: dark top for navbar, transparent middle, dark bottom for text */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(4,57,39,0.65)] via-[rgba(4,57,39,0.15)] to-[rgba(4,57,39,0.85)]" />

      {/* Title — top center */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="absolute top-28 md:top-36 left-0 right-0 text-center font-display text-2xl md:text-3xl font-light text-white leading-[1.1]"
      >
        Lujo <span className="casitas-text-gold italic">Consciente</span>
      </motion.h1>

      {/* Center content — subtitle, CTAs, social proof */}
      <div className="absolute inset-0 flex items-end justify-center px-4 pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col items-center text-center max-w-2xl"
        >
          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <a
              href="#booking"
              className="casitas-btn-gold px-8 py-4 rounded-full text-sm inline-flex items-center justify-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              Verificar Disponibilidad
            </a>
            <a
              href="#apartments"
              className="casitas-btn-outline px-8 py-4 rounded-full text-sm inline-flex items-center justify-center"
            >
              Ver los Lofts
            </a>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.7 }}
            className="flex items-center justify-center gap-3 flex-wrap"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#C5A55A">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              ))}
            </div>
            <span className="text-white/60 text-sm">
              <span className="text-white font-semibold">4.98</span> · 82 reseñas en Airbnb
            </span>
            <span className="text-white/30">·</span>
            <span className="text-[#C5A55A] text-xs font-medium">Superanfitrión</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 right-8 md:right-16 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs tracking-widest uppercase rotate-90 origin-center mb-4">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
      </motion.div>
    </section>
  )
}
