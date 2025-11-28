import { Tutorial, Artist } from '../types';

export const artists: Artist[] = [
  {
    id: 'artist-1',
    name: 'Luna Celestial',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    bio: 'Ilustradora especializada en anatomía y personajes anime',
    followers: 2500,
    tutorials: [],
    joinedAt: new Date('2023-01-15'),
  },
  {
    id: 'artist-2',
    name: 'Marco Realista',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    bio: 'Arte realista y técnicas de sombreado',
    followers: 3200,
    tutorials: [],
    joinedAt: new Date('2022-06-20'),
  },
];

export const tutorials: Tutorial[] = [
  // MANOS
  {
    id: 'tut-hands-1',
    title: 'Manos Anatómicamente Correctas - Paso a Paso',
    description: 'Aprende la estructura ósea y muscular de las manos desde cero',
    thumbnail: 'https://images.unsplash.com/photo-1579783902614-e3fb5141b0cb?w=400&h=300&fit=crop',
    category: 'hands',
    type: 'step-by-step',
    difficulty: 'intermediate',
    steps: [
      {
        id: 'step-1',
        image: 'https://images.unsplash.com/photo-1579783902614-e3fb5141b0cb?w=800&h=600&fit=crop',
        description: 'Paso 1: Dibuja un rectángulo para la palma. Divide en 3 secciones horizontales para ubicar nudillos.',
        tips: [
          'Usa referencias reales para medir proporciones',
          'La palma es aproximadamente cuadrada',
          'Los dedos parten del tercio superior de la palma',
        ]
      },
      {
        id: 'step-2',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800&h=600&fit=crop',
        description: 'Paso 2: Añade cilindros para los dedos. El pulgar es más corto y se ubica lateralmente.',
        tips: [
          'Cada dedo es más largo en la base',
          'Los nudillos crean protuberancias visibles',
        ]
      },
      {
        id: 'step-3',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
        description: 'Paso 3: Define los músculos y tendones. Añade arrugas de flexión.',
        tips: [
          'Las arrugas siguen los movimientos naturales',
          'La base del pulgar tiene músculos prominentes',
        ]
      },
      {
        id: 'step-4',
        image: 'https://images.unsplash.com/photo-1578321272176-b7bfd2d0adc4?w=800&h=600&fit=crop',
        description: 'Paso 4: Sombreado y detalles finales. Añade uñas y textura de piel.',
        tips: [
          'El sombreado sigue la forma cilíndrica de los dedos',
          'Las uñas tienen una forma ligeramente ovalada',
        ]
      },
    ],
    materials: ['Lápiz HB', 'Lápiz 2B', 'Difumino', 'Goma de borrar'],
    tricks: [
      'Usa tu propia mano como referencia',
      'Practica diferentes ángulos y posiciones',
      'Estudia manos en reposo y en movimiento',
    ],
    createdBy: artists[0],
    createdAt: new Date('2024-01-10'),
    views: 5200,
    likes: 1200,
  },

  // … (todos tus demás tutoriales iguales, sin modificar)
  
  // POSES - ESTE ES EL QUE ESTABA INCOMPLETO
  {
    id: 'tut-poses-2',
    title: 'Pose Sentada - Comodidad y Balance',
    description: 'Técnicas para dibujar personajes sentados naturalmente',
    thumbnail: 'https://images.unsplash.com/photo-1579783902614-e3fb5141b0cb?w=400&h=300&fit=crop',
    category: 'poses',
    type: 'step-by-step',
    difficulty: 'beginner',
    steps: [
      // ⚠️ Agrega tus pasos aquí
    ],
    materials: ['Lápiz', 'Papel'],
    tricks: ['Observa el peso del cuerpo', 'Practica diferentes ángulos'],
    createdBy: artists[1],
    createdAt: new Date('2024-01-06'),
    views: 2100,
    likes: 560,
  },
];

