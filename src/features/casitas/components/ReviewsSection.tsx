'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { REVIEWS, type Review } from '../data/reviews'

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill={filled ? '#C5A55A' : 'transparent'} stroke="#C5A55A" strokeWidth="1.5">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  )
}

function ReviewCard({ review, index }: { review: Review; index: number }) {
  return (
    <motion.div
      variants={{
        hidden:  { opacity: 0, y: 30, scale: 0.97 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, delay: index * 0.08, ease: 'easeOut' } },
      }}
      className="casitas-glass-card rounded-2xl p-6 flex flex-col gap-4"
    >
      {/* Author */}
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${review.avatarColor} flex items-center justify-center flex-shrink-0`}>
          <span className="text-white font-bold text-sm">{review.initials}</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-white font-semibold text-sm truncate">{review.author}</p>
          <p className="text-white/40 text-xs truncate">{review.location}</p>
        </div>
      </div>

      {/* Stars + date */}
      <div className="flex items-center justify-between">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => <StarIcon key={i} filled={i < review.rating} />)}
        </div>
        <span className="text-white/35 text-xs">{review.date}</span>
      </div>

      {/* Text */}
      <p className="text-white/65 text-sm leading-relaxed line-clamp-5">
        {review.text}
      </p>

      {/* Airbnb link */}
      <a
        href="https://www.airbnb.es/rooms/844148194830889913"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-[#C5A55A] text-xs hover:text-[#DFC080] transition-colors mt-auto"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
        </svg>
        Ver en Airbnb
      </a>
    </motion.div>
  )
}

export function ReviewsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="reviews" className="casitas-section-bg py-24 px-4 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-[#C5A55A] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Reseñas
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-white mb-4">
            Lo que dicen nuestros <span className="casitas-text-gold italic">Huéspedes</span>
          </h2>

          {/* Aggregate rating */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => <StarIcon key={i} filled />)}
            </div>
            <span className="text-white font-bold text-xl">4.98</span>
            <span className="text-white/50 text-sm">· 82 reseñas en Airbnb</span>
          </div>

          {/* Airbnb badge */}
          <div className="inline-flex items-center gap-3 casitas-glass-card rounded-full px-5 py-2.5 text-sm">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#FF5A5F">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
            </svg>
            <span className="text-white/80">Recomendación del Viajero · Uno de los Airbnb favoritos</span>
          </div>

          <div className="casitas-divider mx-auto mt-6" />
        </motion.div>

        {/* Reviews grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {REVIEWS.map((review, index) => (
            <ReviewCard key={review.id} review={review} index={index} />
          ))}
        </motion.div>

        {/* CTA to Airbnb */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.airbnb.es/rooms/844148194830889913"
            target="_blank"
            rel="noopener noreferrer"
            className="casitas-btn-outline px-8 py-3.5 rounded-full text-sm inline-flex items-center gap-2"
          >
            Ver todas las 82 reseñas en Airbnb
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
