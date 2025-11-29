'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface TutorialStep {
  id: number;
  image?: string | null;
  title: string;
  description: string;
}

export interface Tutorial {
  id: string;
  image: string;
  title: string;
  artist: string;
  hasTutorial?: boolean;
  hasVideo?: boolean;
  hasProcess?: boolean;
  description?: string;
  steps?: TutorialStep[];
  materials?: string[];
  tips?: string[];
  videoUrl?: string | null;
  createdByMe?: boolean;
}

interface TutorialsContextType {
  tutorials: Tutorial[];
  addTutorial: (tutorial: Tutorial) => void;
}

const TutorialsContext = createContext<TutorialsContextType | undefined>(undefined);

const STORAGE_KEY = 'artsteps-tutorials';

// Datos por defecto (se usarán si no hay nada en localStorage)
const defaultTutorials: Tutorial[] = [
  {
    id: '1',
    image: 'https://via.placeholder.com/600x400',
    title: 'Cómo dibujar una mano',
    artist: 'Artista Ejemplar',
    hasTutorial: true,
    description: 'Aprende a dibujar una mano paso a paso con técnicas simples.',
    steps: [
      {
        id: 1,
        image: 'https://via.placeholder.com/600x400',
        title: 'Paso 1: Dibuja la forma básica',
        description: 'Comienza dibujando un óvalo para la palma y líneas para los dedos.',
      },
      {
        id: 2,
        image: 'https://via.placeholder.com/600x400',
        title: 'Paso 2: Añade detalles',
        description: 'Dibuja las articulaciones y la forma de los dedos.',
      },
    ],
    materials: ['Lápiz', 'Papel', 'Goma de borrar'],
    tips: ['Practica con diferentes posiciones de la mano.', 'Observa tu propia mano como referencia.'],
  },
  {
    id: '2',
    image: 'https://via.placeholder.com/600x400',
    title: 'Cómo dibujar un rostro',
    artist: 'Artista Ejemplar',
    hasTutorial: true,
    description: 'Aprende a dibujar un rostro humano con proporciones correctas.',
    steps: [
      {
        id: 1,
        image: 'https://via.placeholder.com/600x400',
        title: 'Paso 1: Dibuja la forma básica',
        description: 'Dibuja un óvalo para la cabeza y líneas guía para los rasgos.',
      },
    ],
    materials: ['Lápiz', 'Papel', 'Goma de borrar'],
    tips: ['Usa referencias fotográficas.', 'Practica diferentes expresiones faciales.'],
  },
];

export const TutorialsProvider = ({ children }: { children: ReactNode }) => {
  // Inicializa vacío para evitar desajuste de hidratación en SSR
  const [tutorials, setTutorials] = useState<Tutorial[]>([]);

  // Carga desde localStorage en cliente; si no hay, usa default
  useEffect(() => {
    try {
      const raw = typeof window !== 'undefined' ? window.localStorage.getItem(STORAGE_KEY) : null;
      if (raw) {
        const parsed = JSON.parse(raw) as Tutorial[];
        setTutorials(parsed);
      } else {
        setTutorials(defaultTutorials);
      }
    } catch {
      setTutorials(defaultTutorials);
    }
  }, []);

  // Persiste cambios en cliente
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(tutorials));
      }
    } catch {
      // Silenciar errores de almacenamiento (modo privado, etc.)
    }
  }, [tutorials]);

  const addTutorial = (tutorial: Tutorial) => {
    setTutorials((prev) => [tutorial, ...prev]);
  };

  return (
    <TutorialsContext.Provider value={{ tutorials, addTutorial }}>
      {children}
    </TutorialsContext.Provider>
  );
};

export const useTutorials = () => {
  const context = useContext(TutorialsContext);
  if (!context) {
    throw new Error('useTutorials must be used within TutorialsProvider');
  }
  return context;
};

