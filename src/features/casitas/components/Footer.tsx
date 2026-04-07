export function Footer() {
  return (
    <footer className="casitas-section-bg border-t border-white/8 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mb-12">
          {/* Col 1: Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C5A55A] to-[#DFC080] flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#043927" strokeWidth="2.5">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <span className="font-display text-lg font-semibold text-white">
                Casitas <span className="casitas-text-gold">del Bosque</span>
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              Lujo consciente en el corazón del Caribe costarricense.
              Cuatro lofts privados inmersos en la selva de Punta Uva.
            </p>
            {/* Social icons */}
            <div className="flex gap-4">
              <a
                href="https://wa.me/50661525346"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/8 border border-white/12 flex items-center justify-center text-white/60 hover:text-[#25D366] hover:border-[#25D366]/40 transition-all"
                aria-label="WhatsApp"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12.007 2C6.477 2 2 6.484 2 12.017c0 1.99.554 3.847 1.52 5.442L2 22l4.674-1.487A9.96 9.96 0 0 0 12.007 22C17.523 22 22 17.516 22 12.017 22 6.496 17.536 2 12.007 2zm0 18c-1.674 0-3.237-.454-4.584-1.246l-.329-.195-3.399 1.082 1.087-3.31-.214-.34A7.964 7.964 0 0 1 4 12.017C4 7.589 7.584 4 12.007 4 16.42 4 20 7.589 20 12.017 20 16.411 16.43 20 12.007 20z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/8 border border-white/12 flex items-center justify-center text-white/60 hover:text-[#E1306C] hover:border-[#E1306C]/40 transition-all"
                aria-label="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/8 border border-white/12 flex items-center justify-center text-white/60 hover:text-[#1877F2] hover:border-[#1877F2]/40 transition-all"
                aria-label="Facebook"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Navegación</h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'Apartamentos', href: '#apartments' },
                { label: 'Reservar',     href: '#booking' },
                { label: 'Ubicación',    href: '#location' },
                { label: 'Reseñas',      href: '#reviews' },
                { label: 'Ver en Airbnb', href: 'https://www.airbnb.es/rooms/844148194830889913', external: true },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="text-white/50 hover:text-[#DFC080] text-sm transition-colors flex items-center gap-1.5"
                  >
                    {link.label}
                    {link.external && (
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Contacto</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="https://wa.me/50661525346"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/50 hover:text-white transition-colors group"
                >
                  <svg className="flex-shrink-0 mt-0.5 text-[#25D366] group-hover:scale-110 transition-transform" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12.007 2C6.477 2 2 6.484 2 12.017c0 1.99.554 3.847 1.52 5.442L2 22l4.674-1.487A9.96 9.96 0 0 0 12.007 22C17.523 22 22 17.516 22 12.017 22 6.496 17.536 2 12.007 2zm0 18c-1.674 0-3.237-.454-4.584-1.246l-.329-.195-3.399 1.082 1.087-3.31-.214-.34A7.964 7.964 0 0 1 4 12.017C4 7.589 7.584 4 12.007 4 16.42 4 20 7.589 20 12.017 20 16.411 16.43 20 12.007 20z"/>
                  </svg>
                  <span className="text-sm">+506 6152 5346</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/50">
                <svg className="flex-shrink-0 mt-0.5 text-[#C5A55A]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <span className="text-sm leading-relaxed">
                  Punta Uva, Puerto Viejo<br />
                  de Talamanca, Limón<br />
                  Costa Rica
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <p>© 2025 Casitas del Bosque. Todos los derechos reservados.</p>
          <p>Punta Uva · Puerto Viejo de Talamanca · Limón · Costa Rica</p>
        </div>
      </div>
    </footer>
  )
}
