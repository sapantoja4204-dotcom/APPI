import { useState } from 'react';
import { tutorials } from '../data/tutorials';
import { TutorialCard } from '../components/TutorialCard';
import { ContentCategory, Tutorial } from '../types';

const categoryLabels: Record<ContentCategory, string> = {
  hands: '✋ Manos',
  anatomy: '🦴 Anatomía',
  faces: '😊 Rostros',
  poses: '🧘 Poses',
  hair: '💇 Cabello',
  clothing: '👕 Ropa',
  objects: '📦 Objetos',
  lighting: '💡 Iluminación',
  backgrounds: '🌅 Fondos',
};

interface IndexProps {
  onSelectTutorial: (tutorial: Tutorial) => void;
}

export default function Index({ onSelectTutorial }: IndexProps) {
  const [selectedCategory, setSelectedCategory] = useState<ContentCategory | null>(null);

  const categories: ContentCategory[] = [
    'hands', 'anatomy', 'faces', 'poses', 'hair', 
    'clothing', 'objects', 'lighting', 'backgrounds'
  ];

  const filteredTutorials = selectedCategory
    ? tutorials.filter(t => t.category === selectedCategory)
    : tutorials;

  const sortedTutorials = [...filteredTutorials].sort((a, b) => b.views - a.views);

  return (
    <div>
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-primary-100">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary-600 to-accent-DEFAULT bg-clip-text text-transparent">
              🎨 ArtSteps
            </h1>
            <button className="px-4 py-2 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors text-sm md:text-base font-semibold">
              + Subir
            </button>
          </div>

          {/* Categorías */}
          <div className="overflow-x-auto pb-2 -mx-4 px-4">
            <div className="flex gap-2 min-w-min">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-all text-sm font-medium ${
                  selectedCategory === null
                    ? 'bg-primary-600 text-white'
                    : 'bg-surface-200 text-gray-700 hover:bg-surface-300'
                }`}
              >
                📚 Todos
              </button>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-all text-sm font-medium ${
                    selectedCategory === cat
                      ? 'bg-primary-600 text-white'
                      : 'bg-surface-200 text-gray-700 hover:bg-surface-300'
                  }`}
                >
                  {categoryLabels[cat]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Grid de Tutoriales */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedTutorials.map(tutorial => (
            <div key={tutorial.id}>
              <TutorialCard
                tutorial={tutorial}
                onClick={() => onSelectTutorial(tutorial)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
