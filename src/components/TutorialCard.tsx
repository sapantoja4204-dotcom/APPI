import React from 'react';
import { Tutorial } from '../types';
import { Play, BookOpen, Zap } from 'lucide-react';

interface TutorialCardProps {
  tutorial: Tutorial;
  onClick: () => void;
}

export const TutorialCard: React.FC<TutorialCardProps> = ({ tutorial, onClick }) => {
  const typeIcons = {
    'step-by-step': <BookOpen className="w-5 h-5" />,
    'timelapse': <Play className="w-5 h-5" />,
    'interactive': <Zap className="w-5 h-5" />,
  };

  const difficultyColors = {
    'beginner': 'bg-green-500',
    'intermediate': 'bg-yellow-500',
    'advanced': 'bg-red-500',
  };

  const difficultyLabels = {
    'beginner': 'Principiante',
    'intermediate': 'Intermedio',
    'advanced': 'Avanzado',
  };

  return (
    <div
      onClick={onClick}
      className="group cursor-pointer rounded-3xl overflow-hidden bg-surface-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
    >
      {/* Imagen */}
      <div className="relative overflow-hidden h-48 bg-surface-200">
        <img
          src={tutorial.thumbnail}
          alt={tutorial.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        
        {/* Badge del tipo */}
        <div className="absolute top-3 right-3 bg-primary-600 text-white p-2 rounded-full shadow-lg">
          {typeIcons[tutorial.type]}
        </div>

        {/* Dificultad */}
        <div className="absolute bottom-3 left-3">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${difficultyColors[tutorial.difficulty]}`}>
            {difficultyLabels[tutorial.difficulty]}
          </span>
        </div>
      </div>

      {/* Contenido */}
      <div className="p-4">
        <h3 className="font-bold text-sm text-gray-900 mb-2 line-clamp-2">
          {tutorial.title}
        </h3>
        
        <p className="text-xs text-gray-600 mb-3 line-clamp-2">
          {tutorial.description}
        </p>

        {/* Stats */}
        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <span>👁️ {(tutorial.views / 1000).toFixed(1)}k</span>
            <span>❤️ {tutorial.likes}</span>
          </div>
          <div className="flex items-center gap-1">
            <img
              src={tutorial.createdBy.avatar}
              alt={tutorial.createdBy.name}
              className="w-5 h-5 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
