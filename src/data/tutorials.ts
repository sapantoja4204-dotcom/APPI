import type { Tutorial } from "@/contexts/TutorialsContext";

export const defaultReferences: Tutorial[] = [
  {
    id: "1",
    image: "https://via.placeholder.com/400x300/FF6B6B/FFFFFF?text=Rojo", // cuadro rojo
    title: "Anatomía de Manos Paso a Paso",
    artist: "Ana García",
    description:
      "Tutorial completo para entender la anatomía de las manos y dibujarlas correctamente desde diferentes ángulos.",
    steps: [
      {
        id: 1,
        image: "https://via.placeholder.com/400x300/FFD93D/000000?text=Amarillo",
        title: "Paso 1: Formas Básicas",
        description:
          "Comienza con formas geométricas simples para construir la estructura de la mano.",
      },
      {
        id: 2,
        image: "https://via.placeholder.com/400x300/6BCB77/FFFFFF?text=Verde",
        title: "Paso 2: Proporciones",
        description:
          "Aprende las proporciones correctas entre dedos, palma y muñeca.",
      },
      {
        id: 3,
        image: "https://via.placeholder.com/400x300/4D96FF/FFFFFF?text=Azul",
        title: "Paso 3: Detalles",
        description: "Añade detalles como nudillos, uñas y pliegues de la piel.",
      },
    ],
    materials: ["Lápiz HB", "Lápiz 2B", "Goma", "Papel Bristol"],
    tips: [
      "Practica primero con formas simples",
      "Observa tus propias manos como referencia",
      "Las manos tienen más de 27 huesos - conoce la anatomía",
    ],
    hasTutorial: true,
    hasVideo: true,
    hasProcess: true,
  },
  {
    id: "2",
    image: "https://via.placeholder.com/400x300/6BCB77/FFFFFF?text=Verde",
    title: "Poses de Manos Avanzadas",
    artist: "Carlos Ruiz",
    description:
      "Explora poses complejas de manos para escenas dinámicas y expresivas.",
    hasTutorial: true,
    hasProcess: true,
  },
  {
    id: "3",
    image: "https://via.placeholder.com/400x300/4D96FF/FFFFFF?text=Azul",
    title: "Arte Geométrico y Color",
    artist: "María López",
    description: "Aplica color y formas geométricas para crear manos estilizadas.",
    hasVideo: true,
    hasProcess: true,
  },
  {
    id: "4",
    image: "https://via.placeholder.com/400x300/FFD93D/000000?text=Amarillo",
    title: "Poses Dinámicas y Acción",
    artist: "José Martínez",
    description: "Crea poses llenas de energía para tus personajes.",
    hasTutorial: true,
    hasVideo: true,
  },
  {
    id: "5",
    image: "https://via.placeholder.com/400x300/FF6B6B/FFFFFF?text=Rojo",
    title: "Poses en Movimiento",
    artist: "Laura Sánchez",
    description: "Estudia el gesto y el movimiento del cuerpo humano.",
    hasTutorial: true,
    hasVideo: true,
    hasProcess: true,
  },
  {
    id: "6",
    image: "https://via.placeholder.com/400x300/6BCB77/FFFFFF?text=Verde",
    title: "Acción y Perspectiva Corporal",
    artist: "Pedro Gómez",
    description: "Combina acción intensa con perspectiva.",
    hasTutorial: true,
    hasVideo: true,
  },
  {
    id: "7",
    image: "https://via.placeholder.com/400x300/4D96FF/FFFFFF?text=Azul",
    title: "Expresiones Faciales Básicas",
    artist: "Sofia Díaz",
    description: "Aprende las emociones básicas y cómo representarlas.",
    hasTutorial: true,
    hasProcess: true,
  },
  {
    id: "8",
    image: "https://via.placeholder.com/400x300/FFD93D/000000?text=Amarillo",
    title: "Emociones y Rostros",
    artist: "Miguel Torres",
    description: "Explora expresiones más complejas en estilo anime.",
    hasTutorial: true,
    hasVideo: true,
  },
  {
    id: "9",
    image: "https://via.placeholder.com/400x300/FF6B6B/FFFFFF?text=Rojo",
    title: "Perspectiva con Formas Básicas",
    artist: "Carmen Ruiz",
    description: "Domina la perspectiva con cubos y formas simples.",
    hasTutorial: true,
    hasVideo: true,
  },
  {
    id: "10",
    image: "https://via.placeholder.com/400x300/6BCB77/FFFFFF?text=Verde",
    title: "Perspectiva de Interiores",
    artist: "Roberto Silva",
    description: "Aplica la perspectiva en espacios arquitectónicos.",
    hasTutorial: true,
    hasProcess: true,
  },
];


