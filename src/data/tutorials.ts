import handTutorial from "@/assets/hand-tutorial.png";
import handPoses from "@/assets/hand-poses.png";
import colorfulHand from "@/assets/colorful-hand.png";
import dynamicPoses from "@/assets/dynamic-poses.png";
import actionPoses from "@/assets/action-poses.png";
import movementPoses from "@/assets/movement-poses.png";
import facialExpressions from "@/assets/facial-expressions.png";
import faceExpressions from "@/assets/face-expressions.png";
import perspectiveBoxes from "@/assets/perspective-boxes.png";
import perspectiveRoom from "@/assets/perspective-room.png";
import type { Tutorial } from "@/contexts/TutorialsContext";

export const defaultReferences: Tutorial[] = [
  {
    id: "1",
    image: handTutorial,
    title: "Anatomía de Manos Paso a Paso",
    artist: "Ana García",
    description:
      "Tutorial completo para entender la anatomía de las manos y dibujarlas correctamente desde diferentes ángulos.",
    steps: [
      {
        id: "1",
        image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&h=400&fit=crop",
        title: "Paso 1: Formas Básicas",
        description:
          "Comienza con formas geométricas simples para construir la estructura de la mano.",
      },
      {
        id: "2",
        image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&h=400&fit=crop",
        title: "Paso 2: Proporciones",
        description:
          "Aprende las proporciones correctas entre dedos, palma y muñeca.",
      },
      {
        id: "3",
        image: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=600&h=400&fit=crop",
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
    image: handPoses,
    title: "Poses de Manos Avanzadas",
    artist: "Carlos Ruiz",
    description:
      "Explora poses complejas de manos para escenas dinámicas y expresivas.",
    hasTutorial: true,
    hasProcess: true,
  },
  {
    id: "3",
    image: colorfulHand,
    title: "Arte Geométrico y Color",
    artist: "María López",
    description: "Aplica color y formas geométricas para crear manos estilizadas.",
    hasVideo: true,
    hasProcess: true,
  },
  {
    id: "4",
    image: dynamicPoses,
    title: "Poses Dinámicas y Acción",
    artist: "José Martínez",
    description: "Crea poses llenas de energía para tus personajes.",
    hasTutorial: true,
    hasVideo: true,
  },
  {
    id: "5",
    image: actionPoses,
    title: "Poses en Movimiento",
    artist: "Laura Sánchez",
    description: "Estudia el gesto y el movimiento del cuerpo humano.",
    hasTutorial: true,
    hasVideo: true,
    hasProcess: true,
  },
  {
    id: "6",
    image: movementPoses,
    title: "Acción y Perspectiva Corporal",
    artist: "Pedro Gómez",
    description: "Combina acción intensa con perspectiva.",
    hasTutorial: true,
    hasVideo: true,
  },
  {
    id: "7",
    image: facialExpressions,
    title: "Expresiones Faciales Básicas",
    artist: "Sofia Díaz",
    description: "Aprende las emociones básicas y cómo representarlas.",
    hasTutorial: true,
    hasProcess: true,
  },
  {
    id: "8",
    image: faceExpressions,
    title: "Emociones y Rostros",
    artist: "Miguel Torres",
    description: "Explora expresiones más complejas en estilo anime.",
    hasTutorial: true,
    hasVideo: true,
  },
  {
    id: "9",
    image: perspectiveBoxes,
    title: "Perspectiva con Formas Básicas",
    artist: "Carmen Ruiz",
    description: "Domina la perspectiva con cubos y formas simples.",
    hasTutorial: true,
    hasVideo: true,
  },
  {
    id: "10",
    image: perspectiveRoom,
    title: "Perspectiva de Interiores",
    artist: "Roberto Silva",
    description: "Aplica la perspectiva en espacios arquitectónicos.",
    hasTutorial: true,
    hasProcess: true,
  },
  {
    id: "11",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=600&fit=crop",
    title: "Iluminación Natural",
    artist: "Elena Mora",
    hasTutorial: true,
    hasVideo: true,
  },
  {
    id: "12",
    image:
      "https://images.unsplash.com/photo-1578926288207-8aa5f1b9b0f4?w=400&h=600&fit=crop",
    title: "Anatomía Corporal Completa",
    artist: "Diego Vega",
    hasTutorial: true,
    hasProcess: true,
  },
  {
    id: "13",
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&h=600&fit=crop",
    title: "Proporciones Faciales",
    artist: "Isabel Santos",
    hasVideo: true,
    hasProcess: true,
  },
  {
    id: "14",
    image:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=600&fit=crop",
    title: "Construcción de Figuras",
    artist: "Andrés Luna",
    hasTutorial: true,
  },
  {
    id: "15",
    image:
      "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=400&h=600&fit=crop",
    title: "Sombras y Volumen",
    artist: "Patricia Ramos",
    hasTutorial: true,
    hasVideo: true,
    hasProcess: true,
  },
  {
    id: "16",
    image:
      "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=400&h=600&fit=crop",
    title: "Estructura del Rostro",
    artist: "Fernando Cruz",
    hasVideo: true,
  },
  {
    id: "17",
    image:
      "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?w=400&h=600&fit=crop",
    title: "Texturas en Tela",
    artist: "Gloria Méndez",
    hasTutorial: true,
    hasProcess: true,
  },
  {
    id: "18",
    image:
      "https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=400&h=600&fit=crop",
    title: "Cabello Realista",
    artist: "Julio Campos",
    hasTutorial: true,
    hasVideo: true,
  },
];
