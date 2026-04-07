'use client'
import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { DateRangePicker } from './DateRangePicker'
import { APARTMENTS } from '../data/apartments'

function diffDays(a: Date, b: Date) {
  return Math.round((b.getTime() - a.getTime()) / (1000 * 60 * 60 * 24))
}

export function BookingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const [checkIn, setCheckIn] = useState<Date | null>(null)
  const [checkOut, setCheckOut] = useState<Date | null>(null)
  const [showCalendar, setShowCalendar] = useState(false)
  const [apartmentId, setApartmentId] = useState('')
  const [guests, setGuests] = useState(2)

  const selectedApt = APARTMENTS.find((a) => a.id === apartmentId) ?? null
  const nights = checkIn && checkOut ? diffDays(checkIn, checkOut) : 0
  const pricePerNight = selectedApt?.pricePerNight ?? 195
  const subtotal = nights * pricePerNight

  function formatDate(d: Date | null) {
    if (!d) return 'Seleccionar'
    return d.toLocaleDateString('es-CR', { day: 'numeric', month: 'short', year: 'numeric' })
  }

  return (
    <section id="booking" className="casitas-section-bg py-24 px-4 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-[#C5A55A] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Reservaciones
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-white mb-6">
            Elige tus <span className="casitas-text-gold italic">Fechas</span>
          </h2>
          <div className="casitas-divider mx-auto" />
        </motion.div>

        {/* Booking card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="casitas-glass-card rounded-3xl p-6 md:p-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Left: form */}
            <div className="lg:col-span-3 flex flex-col gap-6">

              {/* Date range input */}
              <div className="relative">
                <label className="block text-white/50 text-xs uppercase tracking-widest mb-2">
                  Fechas de estadía
                </label>
                <button
                  onClick={() => setShowCalendar(!showCalendar)}
                  className="w-full flex items-center gap-3 bg-white/5 border border-white/15 hover:border-[#C5A55A]/50 rounded-2xl px-4 py-4 transition-all text-left"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C5A55A" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  <div className="flex-1 flex items-center gap-3 text-sm">
                    <span className={checkIn ? 'text-white' : 'text-white/40'}>
                      {formatDate(checkIn)}
                    </span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/30">
                      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                    </svg>
                    <span className={checkOut ? 'text-white' : 'text-white/40'}>
                      {formatDate(checkOut)}
                    </span>
                  </div>
                  {nights > 0 && (
                    <span className="text-[#C5A55A] text-xs font-medium bg-[#C5A55A]/10 px-2 py-1 rounded-full">
                      {nights} {nights === 1 ? 'noche' : 'noches'}
                    </span>
                  )}
                </button>

                {showCalendar && (
                  <DateRangePicker
                    checkIn={checkIn}
                    checkOut={checkOut}
                    onSelect={(s, e) => { setCheckIn(s); setCheckOut(e) }}
                    onClose={() => setShowCalendar(false)}
                  />
                )}
              </div>

              {/* Apartment selector */}
              <div>
                <label className="block text-white/50 text-xs uppercase tracking-widest mb-2">
                  Apartamento
                </label>
                <div className="relative">
                  <select
                    value={apartmentId}
                    onChange={(e) => setApartmentId(e.target.value)}
                    className="w-full appearance-none bg-white/5 border border-white/15 hover:border-[#C5A55A]/50 rounded-2xl px-4 py-4 text-white text-sm transition-all outline-none focus:border-[#C5A55A]/70 cursor-pointer"
                    style={{ background: 'rgba(255,255,255,0.05)' }}
                  >
                    <option value="" style={{ background: '#043927' }}>Cualquier apartamento</option>
                    {APARTMENTS.map((a) => (
                      <option key={a.id} value={a.id} style={{ background: '#043927' }}>
                        {a.name} — ${a.pricePerNight}/noche
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/40">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Guests counter */}
              <div>
                <label className="block text-white/50 text-xs uppercase tracking-widest mb-2">
                  Huéspedes
                </label>
                <div className="flex items-center gap-4 bg-white/5 border border-white/15 rounded-2xl px-4 py-3 w-fit">
                  <button
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                    className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#C5A55A]/50 hover:text-[#C5A55A] transition-all"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/></svg>
                  </button>
                  <span className="text-white font-semibold text-lg w-6 text-center">{guests}</span>
                  <button
                    onClick={() => setGuests(Math.min(6, guests + 1))}
                    className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#C5A55A]/50 hover:text-[#C5A55A] transition-all"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                  </button>
                  <span className="text-white/40 text-sm ml-1">{guests === 1 ? 'huésped' : 'huéspedes'}</span>
                </div>
              </div>

              {/*
                TODO: iCal Integration
                Para verificar disponibilidad real, conectar con feeds iCal de Airbnb:
                - Loft Tucán:      https://www.airbnb.com/calendar/ical/{LISTING_ID_1}.ics
                - Loft Mono Congo: https://www.airbnb.com/calendar/ical/{LISTING_ID_2}.ics
                - Loft Guacamaya:  https://www.airbnb.com/calendar/ical/{LISTING_ID_3}.ics
                - Loft Jaguar:     https://www.airbnb.com/calendar/ical/{LISTING_ID_4}.ics

                Crear API route en /api/availability?apartment=X&checkin=YYYY-MM-DD&checkout=YYYY-MM-DD
                que haga proxy del feed iCal (evita CORS), parsee bloques VEVENT con DTSTART/DTEND,
                y retorne { available: boolean, blockedDates: string[] }

                Channel Managers recomendados: Lodgify, Hostaway, Guesty, Smoobu
              */}
            </div>

            {/* Right: summary */}
            <div className="lg:col-span-2 flex flex-col">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex-1 flex flex-col">
                <h3 className="text-white font-semibold text-base mb-5 flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C5A55A" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
                  </svg>
                  Resumen de Reserva
                </h3>

                <div className="space-y-3 text-sm flex-1">
                  <div className="flex justify-between text-white/60">
                    <span>Apartamento</span>
                    <span className="text-white text-right">
                      {selectedApt ? selectedApt.name : 'Sin seleccionar'}
                    </span>
                  </div>
                  <div className="flex justify-between text-white/60">
                    <span>Check-in</span>
                    <span className="text-white">{checkIn ? formatDate(checkIn) : '—'}</span>
                  </div>
                  <div className="flex justify-between text-white/60">
                    <span>Check-out</span>
                    <span className="text-white">{checkOut ? formatDate(checkOut) : '—'}</span>
                  </div>
                  <div className="flex justify-between text-white/60">
                    <span>Huéspedes</span>
                    <span className="text-white">{guests}</span>
                  </div>

                  {nights > 0 && (
                    <>
                      <div className="border-t border-white/10 pt-3 mt-3" />
                      <div className="flex justify-between text-white/60">
                        <span>${pricePerNight} × {nights} {nights === 1 ? 'noche' : 'noches'}</span>
                        <span className="text-white">${subtotal}</span>
                      </div>
                      <div className="flex justify-between font-semibold text-base">
                        <span className="text-white">Total estimado</span>
                        <span className="casitas-text-gold">${subtotal} USD</span>
                      </div>
                      <p className="text-white/30 text-xs">* Precio de referencia. Confirmación por WhatsApp.</p>
                    </>
                  )}
                </div>

                <a
                  href={`https://wa.me/50661525346?text=${encodeURIComponent(
                    `Hola! Me interesa reservar en Casitas del Bosque.\n` +
                    (selectedApt ? `Apartamento: ${selectedApt.name}\n` : '') +
                    (checkIn ? `Check-in: ${formatDate(checkIn)}\n` : '') +
                    (checkOut ? `Check-out: ${formatDate(checkOut)}\n` : '') +
                    `Huéspedes: ${guests}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="casitas-btn-gold w-full py-4 rounded-2xl text-sm flex items-center justify-center gap-2 mt-6"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12.007 2C6.477 2 2 6.484 2 12.017c0 1.99.554 3.847 1.52 5.442L2 22l4.674-1.487A9.96 9.96 0 0 0 12.007 22C17.523 22 22 17.516 22 12.017 22 6.496 17.536 2 12.007 2zm0 18c-1.674 0-3.237-.454-4.584-1.246l-.329-.195-3.399 1.082 1.087-3.31-.214-.34A7.964 7.964 0 0 1 4 12.017C4 7.589 7.584 4 12.007 4 16.42 4 20 7.589 20 12.017 20 16.411 16.43 20 12.007 20z"/>
                  </svg>
                  Verificar Disponibilidad
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-6 mt-8"
        >
          {[
            { icon: '🔒', text: 'Pago seguro vía Airbnb' },
            { icon: '✓', text: 'Cancelación flexible' },
            { icon: '⭐', text: 'Superanfitrión verificado' },
          ].map((badge) => (
            <div key={badge.text} className="flex items-center gap-2 text-white/40 text-xs">
              <span>{badge.icon}</span>
              <span>{badge.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
