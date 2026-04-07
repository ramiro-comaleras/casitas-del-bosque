export interface Amenity {
  icon: 'bed' | 'wifi' | 'leaf'
  label: string
}

export interface Apartment {
  id: string
  name: string
  image: string
  pricePerNight: number
  description: string
  amenities: Amenity[]
}

export const APARTMENTS: Apartment[] = [
  {
    id: '1',
    name: 'Loft Tucán',
    image: '/casitas/imagen-1.jpg',
    pricePerNight: 185,
    description: 'Espacioso loft con vista al dosel del bosque y hamaca privada en la selva.',
    amenities: [
      { icon: 'bed',  label: 'Cama ortopédica de alta gama' },
      { icon: 'wifi', label: 'Fibra óptica + UPS garantizado' },
      { icon: 'leaf', label: 'Terraza privada en la selva' },
    ],
  },
  {
    id: '2',
    name: 'Loft Mono Congo',
    image: '/casitas/imagen-2.jpg',
    pricePerNight: 195,
    description: 'El favorito de nómadas digitales, con espacio de trabajo y jardín privado.',
    amenities: [
      { icon: 'bed',  label: 'Cama ortopédica de alta gama' },
      { icon: 'wifi', label: 'Fibra óptica + UPS garantizado' },
      { icon: 'leaf', label: 'Terraza privada en la selva' },
    ],
  },
  {
    id: '3',
    name: 'Loft Guacamaya',
    image: '/casitas/imagen-3.jpg',
    pricePerNight: 205,
    description: 'El más luminoso, con ventanales de piso a techo y bañera al aire libre.',
    amenities: [
      { icon: 'bed',  label: 'Cama ortopédica de alta gama' },
      { icon: 'wifi', label: 'Fibra óptica + UPS garantizado' },
      { icon: 'leaf', label: 'Terraza privada en la selva' },
    ],
  },
  {
    id: '4',
    name: 'Loft Jaguar',
    image: '/casitas/imagen-4.jpg',
    pricePerNight: 220,
    description: 'El refugio más íntimo, diseñado para parejas en busca de desconexión total.',
    amenities: [
      { icon: 'bed',  label: 'Cama ortopédica de alta gama' },
      { icon: 'wifi', label: 'Fibra óptica + UPS garantizado' },
      { icon: 'leaf', label: 'Terraza privada en la selva' },
    ],
  },
]
