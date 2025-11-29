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
  image: string; // ahora siempre string (URL o placeholder)
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

export const TutorialsProvider = ({ children }: { children: ReactNode }) => {
  const [tutorials, setTutorials] = useState<Tutorial[]>([]);

  // cargar desde localStorage en cliente
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        const raw = localStorage.getItem(STORAGE_KEY);
        setTutorials(raw ? JSON.parse(raw) : []);
      }
    } catch {
      setTutorials([]);
    }
  }, []);

  // guardar cambios
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tutorials));
      }
    } catch {
      // ignorar errores
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

