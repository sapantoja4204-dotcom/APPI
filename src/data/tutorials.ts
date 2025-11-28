import { Tutorial, Artist } from '../types';

export const artists: Artist[] = [
  {
    id: 'artist-1',
    name: 'Luna Celestial',
    avatar: '',
    bio: 'Ilustradora especializada en anatomía y personajes anime',
    followers: 2500,
    tutorials: [],
    joinedAt: new Date('2023-01-15'),
  },
  {
    id: 'artist-2',
    name: 'Marco Realista',
    avatar: '',
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
    thumbnail: '',
    category: 'hands',
    type: 'step-by-step',
    difficulty: 'intermediate',
    steps: [
      {
        id: 'step-1',
        image: '',
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
        image: '',
        description:
          'Paso 2: Añade cilindros para los dedos. El pulgar es más corto y se ubica lateralmente.',
        tips: [
          'Cada dedo es más largo en la base',
          'Los nudillos crean protuberancias visibles',
        ],
      },
      {
        id: 'step-3',
        image: '',
        description:
          'Paso 3: Define los músculos y tendones. Añade arrugas de flexión.',
        tips: [
          'Las arrugas siguen los movimientos naturales',
          'La base del pulgar tiene músculos prominentes',
        ],
      },
      {
        id: 'step-4',
        image: '',
        description:
          'Paso 4: Sombreado y detalles finales. Añade uñas y textura de piel.',
        tips: [
          'El sombreado sigue la forma cilíndrica de los dedos',
          'Las uñas tienen una forma ligeramente ovalada',
        ],
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
    thumbnail: '',
    category: 'hands',
    type: 'step-by-step',
    difficulty: 'beginner',
    steps: [
      {
        id: 'gesture-1',
        image: '',
        description:
          'Mano abierta relajada: símbolo de paz y apertura',
        tips: ['Los dedos están ligeramente separados', 'La palma está visible'],
      },
      {
        id: 'gesture-2',
        image: '',
        description: 'Puño cerrado: emoción intensa o determinación',
        tips: ['El pulgar se coloca al lado de los dedos', 'La forma es compacta'],
      },
      {
        id: 'gesture-3',
        image: '',
        description: 'Mano señalando: dirección y atención',
        tips: [
          'Un dedo extendido, los otros flexionados',
          'La palma está girada naturalmente',
        ],
      },
      {
        id: 'gesture-4',
        image: '',
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

  // ANATOMÍA
  {
    id: 'tut-anatomy1',
    title: 'Anatomía Masculina - Estructura Corporal',
    description: 'Proporciones y estructura del cuerpo masculino',
    thumbnail: '',
    category: 'anatomy',
    type: 'step-by-step',
    difficulty: 'intermediate',
    steps: [
      {
        id: 'anat-1',
        image: '',
        description:
          'Paso 1: Esqueleto básico - Cabeza (8 cabezas de altura)',
        tips: ['El cuerpo mide aprox. 8 cabezas', 'Usa círculos para articulaciones'],
      },
      {
        id: 'anat-2',
        image: '',
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
    thumbnail: '',
    category: 'anatomy',
    type: 'timelapse',
    difficulty: 'intermediate',
    timelapseUrl: '',
    materials: ['Lápices', 'Papel de dibujo'],
    tricks: ['Las mujeres tienen caderas más anchas', 'Los hombros son más estrechos'],
    createdBy: artists[0],
    createdAt: new Date('2024-01-11'),
    views: 6200,
    likes: 1500,
  },

  // ROSTROS
  {
    id: 'tut-faces-1',
    title: 'Rostro Frontal - Proporciones Básicas',
    description: 'Cómo dibujar un rostro visto de frente con proporciones correctas',
    thumbnail: '',
    category: 'faces',
    type: 'step-by-step',
    difficulty: 'beginner',
    steps: [
      { id: 'face-1', image: '', description: 'Paso 1: Dibuja un círculo para el cráneo', tips: ['El rostro mide 1.5 veces el ancho de la cabeza'] },
      { id: 'face-2', image: '', description: 'Paso 2: Líneas de construcción - Horizontal para los ojos', tips: ['Los ojos están a mitad de altura de la cabeza'] },
      { id: 'face-3', image: '', description: 'Paso 3: Dibuja los rasgos faciales con precisión', tips: ['Los ojos están separados por el ancho de un ojo', 'La nariz comienza en la mitad del rostro'] },
      { id: 'face-4', image: '', description: 'Paso 4: Sombreado y detalles finales', tips: ['Sigue la curvatura de la cara', 'Añade textura a la piel'] },
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
    thumbnail: '',
    category: 'faces',
    type: 'step-by-step',
    difficulty: 'intermediate',
    steps: [
      { id: 'expr-1', image: '', description: 'Felicidad: Levanta las comisuras de los labios y los músculos alrededor de los ojos', tips: ['Las arrugas alrededor de los ojos crean líneas de sonrisa', 'Los pómulos se levantan'] },
      { id: 'expr-2', image: '', description: 'Tristeza: Baja las comisuras de los labios y levanta las cejas interiores', tips: ['Las cejas se juntan en el centro', 'Los ojos se ven más pequeños'] },
      { id: 'expr-3', image: '', description: 'Enojo: Cejas bajas y fruncidas, labios apretados', tips: ['Las cejas se acercan', 'La boca se tensa'] },
      { id: 'expr-4', image: '', description: 'Sorpresa: Boca abierta, ojos grandes, cejas levantadas', tips: ['La boca forma una O', 'Los ojos están muy abiertos'] },
    ],
    materials: ['Lápices', 'Papel'],
    tricks: ['Observa tu propio reflejo', 'Practica frente a un espejo'],
    createdBy: artists[0],
    createdAt: new Date('2024-01-13'),
    views: 5600,
    likes: 1400,
  },

  // POSES
  {
    id: 'tut-poses-1',
    title: 'Poses Dinámicas - Acción y Movimiento',
    description: 'Cómo dibujar personajes en poses dinámicas y llenas de energía',
    thumbnail: '',
    category: 'poses',
    type: 'step-by-step',
    difficulty: 'advanced',
    steps: [
      { id: 'pose-1', image: '', description: 'Paso 1: Línea de acción - Una línea que muestre el flujo del movimiento', tips: ['La línea de acción es lo más importante', 'Crea una S o una C para dinamismo'] },
      { id: 'pose-2', image: '', description: 'Paso 2: Estructura básica con formas geométricas', tips: ['Usa esferas, cilindros y cubos', 'Coloca el peso del cuerpo correctamente'] },
      { id: 'pose-3', image: '', description: 'Paso 3: Anatomía y músculos', tips: ['Respeta las proporciones', 'Los músculos se tensan según el movimiento'] },
      { id: 'pose-4', image: '', description: 'Paso 4: Detalles y acabados finales', tips: ['Añade sombras para profundidad', 'Define los contornos'] },
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
    thumbnail: '',
    category: 'poses',
    type: 'timelapse',
    difficulty: 'beginner',
    timelapseUrl: '',
    materials: ['Lápices', 'Papel'],
    tricks: ['El peso se distribuye en los puntos de apoyo', 'La columna vertebral es importante'],
    createdBy: artists[0],
    createdAt: new Date('2024-01-14'),
    views: 4100,
    likes: 1050,
  },

  // CABELLO
  {
    id: 'tut-hair-1',
    title: 'Cabello Largo - Flujo y Movimiento',
    description: 'Técnicas para dibujar cabello largo realista y dinámico',
    thumbnail: '',
    category: 'hair',
    type: 'step-by-step',
    difficulty: 'intermediate',
    steps: [
      { id: 'hair-1', image: '', description: 'Paso 1: Estructura base del cabello', tips: [] },
      { id: 'hair-2', image: '', description: 'Paso 2: Agrupa mechones y define volumen', tips: [] },
      { id: 'hair-3', image: '', description: 'Paso 3: Sombras y brillo', tips: [] },
      { id: 'hair-4', image: '', description: 'Paso 4: Detalles finales', tips: [] },
    ],
    materials: ['Lápiz HB', 'Papel'],
    tricks: ['El cabello fluye con el movimiento', 'Divide en mechones grandes primero'],
    createdBy: artists[0],
    createdAt: new Date('2024-01-15'),
    views: 3900,
    likes: 980,
  },
];


