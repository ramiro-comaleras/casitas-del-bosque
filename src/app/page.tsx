import type { Metadata } from 'next'
import { Navbar }            from '@/features/casitas/components/Navbar'
import { HeroSection }       from '@/features/casitas/components/HeroSection'
import { ApartmentsSection } from '@/features/casitas/components/ApartmentsSection'
import { BookingSection }    from '@/features/casitas/components/BookingSection'
import { LocationSection }   from '@/features/casitas/components/LocationSection'
import { ReviewsSection }    from '@/features/casitas/components/ReviewsSection'
import { Footer }            from '@/features/casitas/components/Footer'
import { WhatsAppButton }    from '@/features/casitas/components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Casitas del Bosque — Lujo Consciente en Punta Uva, Costa Rica',
  description:
    'Cuatro lofts privados de lujo en el corazón de la selva de Punta Uva. A 350m de la playa, fibra óptica garantizada, camas ortopédicas. Superanfitrión Airbnb · 4.98★',
  openGraph: {
    title: 'Casitas del Bosque',
    description: 'Lujo Consciente en el Corazón de Punta Uva · Costa Rica',
    locale: 'es_CR',
    type: 'website',
  },
}

export default function Page() {
  return (
    <main className="casitas-section-bg min-h-screen">
      <Navbar />
      <HeroSection />
      <ApartmentsSection />
      <BookingSection />
      <LocationSection />
      <ReviewsSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
