export interface Review {
  id: string
  author: string
  location: string
  date: string
  rating: number
  text: string
  initials: string
  avatarColor: string
}

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Luis',
    location: 'Curridabat, Costa Rica',
    date: 'enero de 2026',
    rating: 5,
    text: 'El lugar es espectacular, inmerso en el bosque y cerca de todo. Canzio y Barbara súper amables y pendientes a que todo esté excelente y muy amigables, volvería siempre. La cama ortopédica fue la mejor sorpresa, dormimos como nunca. El wifi funcionó perfecto durante toda la estadía.',
    initials: 'L',
    avatarColor: 'from-emerald-700 to-emerald-500',
  },
  {
    id: '2',
    author: 'Lucrecia',
    location: 'Heredia, Costa Rica',
    date: 'febrero de 2026',
    rating: 5,
    text: 'Fue una hermosa experiencia, el lugar impecable, la atención excelente y los anfitriones de lujo. Volvería a repetir mi visita. La terraza privada vale cada centavo, por las noches escuchabas solo la selva y el mar a lo lejos.',
    initials: 'L',
    avatarColor: 'from-teal-700 to-teal-500',
  },
  {
    id: '3',
    author: 'Julia',
    location: 'Lleva 7 años en Airbnb',
    date: 'agosto de 2025',
    rating: 5,
    text: 'Es el mejor alojamiento en el que hemos estado en Costa Rica. El lugar es idílico y en medio de la selva. Tanto Barbara como Cancio fueron un encanto. Estaban pendientes de nosotros y nos dieron excelentes recomendaciones de actividades y restaurantes.',
    initials: 'J',
    avatarColor: 'from-amber-700 to-amber-500',
  },
  {
    id: '4',
    author: 'Dolores',
    location: 'Lleva 8 años en Airbnb',
    date: 'abril de 2025',
    rating: 5,
    text: 'El alojamiento de Canzio y Bárbara es ideal si tienes pensado ir al Caribe costarricense. La casa en medio de la selva cuenta con un balcón en el que todas las mañanas aparecen monitos. Privacidad total y decoración con maderas locales que le da una calidez increíble.',
    initials: 'D',
    avatarColor: 'from-rose-700 to-rose-500',
  },
  {
    id: '5',
    author: 'Valeria',
    location: 'Lima, Perú',
    date: 'Hace 1 semana',
    rating: 5,
    text: 'Si te gusta la naturaleza es el lugar ideal para ti. Los ventanales espectaculares permiten ver amanecer entre las palmeras desde la cama. Una experiencia surrealista. Puerto Viejo está a solo unos minutos para cenar y explorar.',
    initials: 'V',
    avatarColor: 'from-violet-700 to-violet-500',
  },
  {
    id: '6',
    author: 'Danny',
    location: 'Lleva 10 años en Airbnb',
    date: 'Hace 2 semanas',
    rating: 5,
    text: 'Nos sentimos muy bienvenidos y cómodos desde el principio. Los anfitriones nos recibieron calurosamente y nos explicaron muchas cosas sobre la fauna de Costa Rica. La filosofía del lugar, inmerso en la naturaleza con todas las comodidades, es simplemente perfecta.',
    initials: 'D',
    avatarColor: 'from-sky-700 to-sky-500',
  },
]
