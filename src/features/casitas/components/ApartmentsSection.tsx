'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { APARTMENTS, type Apartment } from '../data/apartments'

function BedIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M2 9V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v5"/>
      <path d="M2 20v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5"/>
      <line x1="2" y1="15" x2="22" y2="15"/>
      <path d="M6 11V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"/>
    </svg>
  )
}

function WifiIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
      <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
      <circle cx="12" cy="20" r="1" fill="currentColor"/>
    </svg>
  )
}

function LeafIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M17 8C8 10 5.9 16.17 3.82 19.93a1.07 1.07 0 0 0 1.38 1.5C7.11 20.46 9.74 18.71 12 17c2.26-1.71 4.49-3.76 5-7 .36-2.28-.82-5.24-1.63-6.75a1 1 0 0 0-1.75.25C13.19 5.24 13.08 7 13 8c0 0 0-5-3-8"/>
    </svg>
  )
}

const ICON_MAP = { bed: BedIcon, wifi: WifiIcon, leaf: LeafIcon }

function ApartmentCard({ apt, index }: { apt: Apartment; index: number }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.97 },
    visible: {
      opacity: 1, y: 0, scale: 1,
      transition: { duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }

  return (
    <motion.div
      variants={cardVariants}
      className="casitas-glass-card rounded-2xl overflow-hidden group cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={apt.image}
          alt={apt.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(4,57,39,0.7)] via-transparent to-transparent" />
        {/* Price badge */}
        <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-md border border-white/20 rounded-full px-3 py-1">
          <span className="casitas-text-gold text-sm font-bold">${apt.pricePerNight}</span>
          <span className="text-white/60 text-xs"> /noche</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display text-xl font-semibold text-white mb-1">{apt.name}</h3>
        <p className="text-white/55 text-sm leading-relaxed mb-4">{apt.description}</p>

        {/* Amenities */}
        <div className="flex flex-col gap-2 mb-5">
          {apt.amenities.map((amenity) => {
            const Icon = ICON_MAP[amenity.icon]
            return (
              <div key={amenity.label} className="flex items-center gap-2.5 text-white/65 text-xs">
                <span className="text-[#C5A55A] flex-shrink-0">
                  <Icon />
                </span>
                {amenity.label}
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <a
          href="#booking"
          className="casitas-btn-gold w-full py-3 rounded-xl text-xs flex items-center justify-center gap-2"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <rect x="3" y="4" width="18" height="18" rx="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          Ver Disponibilidad
        </a>
      </div>
    </motion.div>
  )
}

export function ApartmentsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="apartments" className="casitas-section-bg py-24 px-4 scroll-mt-20">
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
            Nuestros Lofts
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-white mb-6">
            Cuatro Refugios en la <span className="casitas-text-gold italic">Selva</span>
          </h2>
          <div className="casitas-divider mx-auto mb-6" />
          <p className="text-white/60 text-base max-w-xl mx-auto leading-relaxed">
            Cuatro lofts privados inmersos en la selva del Caribe costarricense.
            A 350m de la playa. Selva, silencio y conexión total.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          {APARTMENTS.map((apt, index) => (
            <ApartmentCard key={apt.id} apt={apt} index={index} />
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center text-white/35 text-xs mt-10"
        >
          Todos los lofts incluyen desayuno de bienvenida con frutas tropicales locales
        </motion.p>
      </div>
    </section>
  )
}
