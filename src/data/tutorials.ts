import { Tutorial, Artist } from '../types';

// ARTISTAS
export const artists: Artist[] = [
  {
    id: 'artist-1',
    name: 'Luna Celestial',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    bio: 'Ilustradora especializada en anatomía y personajes anime',
    followers: 2500,
    tutorials: [],
    joinedAt: new Date('2023-01-15'),
  },
  {
    id: 'artist-2',
    name: 'Marco Realista',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    bio: 'Arte realista y técnicas de sombreado',
    followers: 3200,
    tutorials: [],
    joinedAt: new Date('2022-06-20'),
  },
];

// TUTORIALES
export const tutorials: Tutorial[] = [
  // hands
  {
    id: 'tut-hands-1',
    title: 'Manos Anatómicamente Correctas - Paso a Paso',
    description: 'Aprende la estructura ósea y muscular de las manos desde cero',
    thumbnail:
      'https://images.unsplash.com/photo-1579783902614-e3fb5141b0cb?w=400&h=300&fit=crop',
    category: 'hands',
    type: 'step-by-step',
    difficulty: 'intermediate',
    steps: [
      {
        id: 'step-1',
        image:
          'https://images.unsplash.com/photo-1579783902614-e3fb5141b0cb?w=800&h=600&fit=crop',
        description:
          'Paso 1: Dibuja un rectángulo para la palma. Divide en 3 secciones horizontales para ubicar nudillos.',
        tips: [
          'Usa referencias reales para medir proporciones',
          'La palma es aproximadamente cuadrada',
          'Los dedos parten del tercio superior de la palma',
        ],
      },
      {
        id: 'step-2',
        image:
          'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800&h=600&fit=crop',
        description:
          'Paso 2: Añade cilindros para los dedos. El pulgar es más corto y se ubica lateralmente.',
        tips: ['Cada dedo es más largo en la base', 'Los nudillos crean protuberancias visibles'],
      },
      {
        id: 'step-3',
        image:
          'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
        description: 'Paso 3: Define los músculos y tendones. Añade arrugas de flexión.',
        tips: ['Las arrugas siguen los movimientos naturales', 'La base del pulgar tiene músculos prominentes'],
      },
      {
        id: 'step-4',
        image:
          'https://images.unsplash.com/photo-1578321272176-b7bfd2d0adc4?w=800&h=600&fit=crop',
        description: 'Paso 4: Sombreado y detalles finales. Añade uñas y textura de piel.',
        tips: ['El sombreado sigue la forma cilíndrica de los dedos', 'Las uñas tienen una forma ligeramente ovalada'],
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
  {
    id: 'tut-hands-2',
    title: 'Gestos de Mano - Comunicación No Verbal',
    description: 'Cómo dibujar manos expresivas en diferentes gestos y emociones',
    thumbnail:
      'https://images.unsplash.com/photo-1577720643272-265e434f0f9f?w=400&h=300&fit=crop',
    category: 'hands',
    type: 'step-by-step',
    difficulty: 'beginner',
    steps: [
      {
        id: 'gesture-1',
        image:
          'https://images.unsplash.com/photo-1588882657179-d4d5a0b60e09?w=800&h=600&fit=crop',
        description: 'Mano abierta relajada: símbolo de paz y apertura',
        tips: ['Los dedos están ligeramente separados', 'La palma está visible'],
      },
      {
        id: 'gesture-2',
        image:
          'https://images.unsplash.com/photo-1562070555-61d397763a46?w=800&h=600&fit=crop',
        description: 'Puño cerrado: emoción intensa o determinación',
        tips: ['El pulgar se coloca al lado de los dedos', 'La forma es compacta'],
      },
      {
        id: 'gesture-3',
        image:
          'https://images.unsplash.com/photo-1578667150363-4dc5d752b0c5?w=800&h=600&fit=crop',
        description: 'Mano señalando: dirección y atención',
        tips: ['Un dedo extendido, los otros flexionados', 'La palma está girada naturalmente'],
      },
      {
        id: 'gesture-4',
        image:
          'https://images.unsplash.com/photo-1577720643272-265e434f0f9f?w=800&h=600&fit=crop',
        description: 'Mano sosteniendo algo: interacción y agarre',
        tips: ['Los dedos rodean el objeto', 'Muestra contacto realista'],
      },
    ],
    materials: ['Lápiz', 'Papel'],
    tricks: ['Observa tus propias manos', 'Crea una galería de gestos'],
    createdBy: artists[0],
    createdAt: new Date('2024-01-12'),
    views: 3100,
    likes: 890,
  },

  // anatomy
  {
    id: 'tut-anatomy-1',
    title: 'Anatomía Masculina - Estructura Corporal',
    description: 'Proporciones y estructura del cuerpo masculino',
    thumbnail:
      'https://images.unsplash.com/photo-1578321272176-b7bfd2d0adc4?w=400&h=300&fit=crop',
    category: 'anatomy',
    type: 'step-by-step',
    difficulty: 'intermediate',
    steps: [
      {
        id: 'anat-1',
        image:
          'https://images.unsplash.com/photo-1578321272176-b7bfd2d0adc4?w=800&h=600&fit=crop',
        description: 'Paso 1: Esqueleto básico - Cabeza (8 cabezas de altura)',
        tips: ['El cuerpo mide aprox. 8 cabezas', 'Usa círculos para articulaciones'],
      },
      {
        id: 'anat-2',
        image:
          'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800&h=600&fit=crop',
        description: 'Paso 2: Músculos principales del torso y extremidades',
        tips: ['Los músculos son más grandes y angulares', 'La mandíbula es más pronunciada'],
      },
    ],
    materials: ['Lápices de diferentes durezas', 'Papel A4 o A3'],
    tricks: ['Usa proporciones de 8 cabezas', 'Estudia referentes reales'],
    createdBy: artists[1],
    createdAt: new Date('2024-01-08'),
    views: 4500,
    likes: 1100,
  },
  {
    id: 'tut-anatomy-2',
    title: 'Anatomía Femenina - Curvas y Proporciones',
    description: 'Diferencias anatómicas y proporciones del cuerpo femenino',
    thumbnail:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
    category: 'anatomy',
    type: 'timelapse',
    difficulty: 'intermediate',
    timelapseUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    materials: ['Lápices', 'Papel de dibujo'],
    tricks: ['Las mujeres tienen caderas más anchas', 'Los hombros son más estrechos'],
    createdBy: artists[0],
    createdAt: new Date('2024-01-11'),
    views: 6200,
    likes: 1500,
  },

  // faces
  {
    id: 'tut-faces-1',
    title: 'Rostro Frontal - Proporciones Básicas',
    description: 'Cómo dibujar un rostro visto de frente con proporciones correctas',
    thumbnail:
      'https://images.unsplash.com/photo-1578692408949-64b61cb29e80?w=400&h=300&fit=crop',
    category: 'faces',
    type: 'step-by-step',
    difficulty: 'beginner',
    steps: [
      {
        id: 'face-1',
        image:
          'https://images.unsplash.com/photo-1578692408949-64b61cb29e80?w=800&h=600&fit=crop',
        description: 'Paso 1: Dibuja un círculo para el cráneo',
        tips: ['El rostro mide 1.5 veces el ancho de la cabeza'],
      },
      {
        id: 'face-2',
        image:
          'https://images.unsplash.com/photo-1578642181284-1dba84a0acfc?w=800&h=600&fit=crop',
        description: 'Paso 2: Líneas de construcción - Horizontal para los ojos',
        tips: ['Los ojos están a mitad de altura de la cabeza'],
      },
      {
        id: 'face-3',
        image:
          'https://images.unsplash.com/photo-1578321272176-b7bfd2d0adc4?w=800&h=600&fit=crop',
        description: 'Paso 3: Dibuja los rasgos faciales con precisión',
        tips: ['Los ojos están separados por el ancho de un ojo', 'La nariz comienza en la mitad del rostro'],
      },
      {
        id: 'face-4',
        image:
          'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800&h=600&fit=crop',
        description: 'Paso 4: Sombreado y detalles finales',
        tips: ['Sigue la curvatura de la cara', 'Añade textura a la piel'],
      },
    ],
    materials: ['Lápiz HB', 'Papel'],
    tricks: ['Los ojos están separados por el ancho de un ojo', 'La nariz comienza en la mitad del rostro'],
    createdBy: artists[0],
    createdAt: new Date('2024-01-09'),
    views: 7800,
    likes: 2100,
  },
  {
    id: 'tut-faces-2',
    title: 'Expresiones Faciales - Emociones',
    description: 'Cómo transmitir emociones a través del rostro',
    thumbnail:
      'https://images.unsplash.com/photo-1578821154957-4f9e4d3a6b0b?w=400&h=300&fit=crop',
    category: 'faces',
    type: 'step-by-step',
    difficulty: 'intermediate',
    steps: [
      {
        id: 'expr-1',
        image:
          'https://images.unsplash.com/photo-1578821154957-4f9e4d3a6b0b?w=800&h=600&fit=crop',
        description:
          'Felicidad: Levanta las comisuras de los labios y los músculos alrededor de los ojos',
        tips: ['Las arrugas alrededor de los ojos crean líneas de sonrisa', 'Los pómulos se levantan'],
      },
      {
        id: 'expr-2',
        image:
          'https://images.unsplash.com/photo-1578642181284-1dba84a0acfc?w=800&h=600&fit=crop',
        description:
          'Tristeza: Baja las comisuras de los labios y levanta las cejas interiores',
        tips: ['Las cejas se juntan en el centro', 'Los ojos se ven más pequeños'],
      },
      {
        id: 'expr-3',
        image:
          'https://images.unsplash.com/photo-1578321272176-b7bfd2d0adc4?w=800&h=600&fit=crop',
        description: 'Enojo: Cejas bajas y fruncidas, labios apretados',
        tips: ['Las cejas se acercan', 'La boca se tensa'],
      },
      {
        id: 'expr-4',
        image:
          'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800&h=600&fit=crop',
        description: 'Sorpresa: Boca abierta, ojos grandes, cejas levantadas',
        tips: ['La boca forma una O', 'Los ojos están muy abiertos'],
      },
    ],
    materials: ['Lápices', 'Papel'],
    tricks: ['Observa tu propio reflejo', 'Practica frente a un espejo'],
    createdBy: artists[0],
    createdAt: new Date('2024-01-13'),
    views: 5600,
    likes: 1400,
  },

  // poses
  {
    id: 'tut-poses-1',
    title: 'Poses Dinámicas - Acción y Movimiento',
    description: 'Cómo dibujar personajes en poses dinámicas y llenas de energía',
    thumbnail:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
    category: 'poses',
    type: 'step-by-step',
    difficulty: 'advanced',
    steps: [
      {
        id: 'pose-1',
        image:
          'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
        description:
          'Paso 1: Línea de acción - Una línea que muestre el flujo del movimiento',
        tips: ['La línea de acción es lo más importante', 'Crea una S o una C para dinamismo'],
      },
      {
        id: 'pose-2',
        image:
          'https://images.unsplash.com/photo-1578642181284-1dba84a0acfc?w=800&h=600&fit=crop',
        description: 'Paso 2: Estructura básica con formas geométricas',
        tips: ['Usa esferas, cilindros y cubos', 'Coloca el peso del cuerpo correctamente'],
      },
      {
        id: 'pose-3',
        image:
          'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800&h=600&fit=crop',
        description: 'Paso 3: Anatomía y músculos',
        tips: ['Respeta las proporciones', 'Los músculos se tensan según el movimiento'],
      },
      {
        id: 'pose-4',
        image:
          'https://images.unsplash.com/photo-1578321272176-b7bfd2d0adc4?w=800&h=600&fit=crop',
        description: 'Paso 4: Detalles y acabados finales',
        tips: ['Añade sombras para profundidad', 'Define los contornos'],
      },
    ],
    materials: ['Lápices', 'Papel de dibujo'],
    tricks: ['Usa referencia de video', 'Dibuja múltiples poses rápidamente'],
    createdBy: artists[1],
    createdAt: new Date('2024-01-07'),
    views: 3400,
    likes: 920,
  },
  {
    id: 'tut-poses-2',
    title: 'Pose Sentada - Comodidad y Balance',
    description: 'Técnicas para dibujar personajes sentados naturalmente',
    thumbnail:
      'https://images.unsplash.com/photo-1567721913486-6585dfe1feed?w=400&h=300&fit=crop',
    category: 'poses',
    type: 'timelapse',
    difficulty: 'beginner',
    timelapseUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    materials: ['Lápices', 'Papel'],
    tricks: ['El peso se distribuye en los puntos de apoyo', 'La columna vertebral es importante'],
    createdBy: artists[0],
    createdAt: new Date('2024-01-14'),
    views: 4100,
    likes: 1050,
  },

  // hair
  {
    id: 'tut-hair-1',
    title: 'Cabello Largo - Flujo y Movimiento',
    description: 'Técnicas para dibujar cabello largo realista y dinámico',
    thumbnail:
      'https://images.unsplash.com/photo-1560807707-38cc5baea42d?w=400&h=300&fit=crop',
    category: 'hair',
    type: 'step-by-step',
    difficulty: 'intermediate',
    steps: [
      {
        id: 'hair-1',
        image:
          'https://images.unsplash.com/photo-1560807707-38cc5baea42d?w=800&h=600&fit=crop',
        description: 'Paso 1: Estructura base del cabello',
        tips: ['El cabello sigue la forma de la cabeza', 'Divide en secciones para mejor control'],
      },
      {
        id: 'hair-2',
        image:
          'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800&h=600&fit=crop',
        description: 'Paso 2: Dirección de flujo y movimiento',
        tips: ['Dibuja líneas que indiquen dirección', 'El cabello se distribuye naturalmente'],
      },
      {
        id: 'hair-3',
        image:
          'https://images.unsplash.com/photo-1578321272176-b7bfd2d0adc4?w=800&h=600&fit=crop',
        description: 'Paso 3: Mechas y textura',
        tips: ['Agrupa el cabello en mechas grandes', 'Respeta la curvatura natural'],
      },
      {
        id: 'hair-4',
        image:
          'https://images.unsplash.com/photo-1578642181284-1dba84a0acfc?w=800&h=600&fit=crop',
        description: 'Paso 4: Luz y sombra',
        tips: ['El cabello tiene reflejos de luz', 'Las sombras siguen la forma'],
      },
    ],
    materials: ['Lápices', 'Papel'],
    tricks: ['Observa cabello real', 'Practica diferentes texturas y largos'],
    createdBy: artists[0],
    createdAt: new Date('2024-01-06'),
    views: 5900,
    likes: 1600,
  },

  // clothing
  {
    id: 'tut-clothing-1',
    title: 'Pliegues de Tela - Realismo en Ropa',
    description: 'Cómo dibujar pliegues naturales y realistas en diferentes tipos de ropa',
    thumbnail:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    category: 'clothing',
    type: 'step-by-step',
    difficulty: 'intermediate',
    steps: [
      {
        id: 'cloth-1',
        image:
          'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
        description: 'Paso 1: Entiende cómo la tela cae según el material',
        tips: ['Tela ligera = pliegues suaves', 'Tela gruesa = pliegues más duros'],
      },
      {
        id: 'cloth-2',
        image:
          'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800&h=600&fit=crop',
        description: 'Paso 2: Dibuja pliegues principales siguiendo el cuerpo',
        tips: ['Los pliegues fluyen sobre el cuerpo', 'Convergen en puntos de apoyo'],
      },
      {
        id: 'cloth-3',
        image:
          'https://images.unsplash.com/photo-1578321272176-b7bfd2d0adc4?w=800&h=600&fit=crop',
        description: 'Paso 3: Añade pliegues secundarios para detalle',
        tips: ['No hagas demasiados pliegues', 'Mantén la claridad'],
      },
      {
        id: 'cloth-4',
        image:
          'https://images.unsplash.com/photo-1578642181284-1dba84a0acfc?w=800&h=600&fit=crop',
        description: 'Paso 4: Sombreado para dar forma',
        tips: ['Las sombras definen la forma de la tela', 'Respeta la fuente de luz'],
      },
    ],
    materials: ['Lápices', 'Goma de borrar'],
    tricks: ['Observa ropa real', 'Los pliegues siguen la gravedad'],
    createdBy: artists[1],
    createdAt: new Date('2024-01-05'),
    views: 3700,
    likes: 780,
  },

  // objects
  {
    id: 'tut-objects-1',
    title: 'Perspectiva en Objetos - 3D Convincente',
    description: 'Cómo aplicar perspectiva para objetos 3D que se ven reales',
    thumbnail:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
    category: 'objects',
    type: 'step-by-step',
    difficulty: 'beginner',
    steps: [
      {
        id: 'obj-1',
        image:
          'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
        description: 'Paso 1: Perspectiva de 1 punto',
        tips: ['Todas las líneas convergen a un punto', 'Perfecto para pasillos y objetos lineales'],
      },
      {
        id: 'obj-2',
        image:
          'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800&h=600&fit=crop',
        description: 'Paso 2: Perspectiva de 2 puntos',
        tips: ['Las líneas convergen a dos puntos', 'Ideal para objetos girados'],
      },
      {
        id: 'obj-3',
        image:
          'https://images.unsplash.com/photo-1578321272176-b7bfd2d0adc4?w=800&h=600&fit=crop',
        description: 'Paso 3: Proporciones y tamaños',
        tips: ['Los objetos lejanos se ven más pequeños', 'Mantén consistencia en la escala'],
      },
    ],
    materials: ['Lápices', 'Regla'],
    tricks: ['Usa regla para líneas de perspectiva', 'Practica con cubos y cajas'],
    createdBy: artists[1],
    createdAt: new Date('2024-01-04'),
    views: 2900,
    likes: 650,
  },

  // lighting
  {
    id: 'tut-lighting-1',
    title: 'Iluminación Dramática - Luz y Sombra',
    description: 'Técnicas de iluminación para crear atmósfera y profundidad',
    thumbnail:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
    category: 'lighting',
    type: 'step-by-step',
    difficulty: 'advanced',
    steps: [
      {
        id: 'light-1',
        image:
          'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
        description: 'Paso 1: Establece tu fuente de luz',
        tips: ['Elige un lado: luz frontal, lateral o trasera', 'Mantén la consistencia'],
      },
      {
        id: 'light-2',
        image:
          'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800&h=600&fit=crop',
        description: 'Paso 2: Sombras principales y secundarias',
        tips: ['Las sombras siguen la forma del objeto', 'Las sombras proyectadas son más oscuras'],
      },
      {
        id: 'light-3',
        image:
          'https://images.unsplash.com/photo-1578321272176-b7bfd2d0adc4?w=800&h=600&fit=crop',
        description: 'Paso 3: Reflejos y medios tonos',
        tips: ['Los reflejos iluminan las sombras', 'Los medios tonos crean transiciones suaves'],
      },
    ],
    materials: ['Lápices', 'Papel'],
    tricks: ['Observa fotografías iluminadas', 'Practica con esferas y cilindros'],
    createdBy: artists[0],
    createdAt: new Date('2024-01-03'),
    views: 4200,
    likes: 1050,
  },

  // backgrounds
  {
    id: 'tut-backgrounds-1',
    title: 'Fondos Atmosféricos - Profundidad y Perspectiva',
    description: 'Crear fondos que mejoren tus ilustraciones',
    thumbnail:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
    category: 'backgrounds',
    type: 'step-by-step',
    difficulty: 'intermediate',
    steps: [
      {
        id: 'bg-1',
        image:
          'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
        description: 'Paso 1: Líneas de horizonte y perspectiva',
        tips: ['La línea del horizonte divide la imagen', 'Establece puntos de fuga'],
      },
      {
        id: 'bg-2',
        image:
          'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800&h=600&fit=crop',
        description: 'Paso 2: Elementos del fondo en capas',
        tips: ['Los elementos lejanos son más borrosos', 'Usa menos detalle en la distancia'],
      },
      {
        id: 'bg-3',
        image:
          'https://images.unsplash.com/photo-1578321272176-b7bfd2d0adc4?w=800&h=600&fit=crop',
        description: 'Paso 3: Atmosfera y luz ambiental',
        tips: ['La atmósfera afecta los colores', 'Los objetos lejanos son más claros'],
      },
    ],
    materials: ['Lápices', 'Papel'],
    tricks: ['Observa fotografías de paisajes', 'La claridad disminuye con la distancia'],
    createdBy: artists[1],
    createdAt: new Date('2024-01-02'),
    views: 3800,
    likes: 890,
  },
];

// CLAVES DE CATEGORÍA (internas, para lógica/filtrado)
export const categoryKeys = [
  'hands',
  'anatomy',
  'faces',
  'poses',
  'hair',
  'clothing',
  'objects',
  'lighting',
  'backgrounds',
] as const;

// ETIQUETAS DE CATEGORÍA (para UI en español)
export const categoryLabels: Record<(typeof categoryKeys)[number], string> = {
  hands: 'Manos',
  anatomy: 'Anatomía',
  faces: 'Rostro',
  poses: 'Poses',
  hair: 'Cabello',
  clothing: 'Ropa',
  objects: 'Objetos',
  lighting: 'Iluminación',
  backgrounds: 'Fondos',
};

