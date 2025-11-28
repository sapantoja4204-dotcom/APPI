import { Tutorial } from '../types';
import { useState } from 'react';
import { ArrowLeft, Heart } from 'lucide-react';

interface TutorialDetailProps {
  tutorial: Tutorial;
  onBack: () => void;
}

export default function TutorialDetail({ tutorial, onBack }: TutorialDetailProps) {
  const [activeTab, setActiveTab] = useState<'steps' | 'materials' | 'tricks'>('steps');
  const [liked, setLiked] = useState(false);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="relative h-80 md:h-96 bg-gradient-to-b from-primary-500 to-primary-600 overflow-hidden rounded-b-3xl">
        <img
          src={tutorial.thumbnail}
          alt={tutorial.title}
          className="w-full h-full object-cover"
        />
        <button
          onClick={onBack}
          className="absolute top-4 left-4 bg-white/90 hover:bg-white text-gray-900 rounded-full p-2 transition-all shadow-lg z-10"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
          <div className="p-6 text-white w-full">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">{tutorial.title}</h1>
            <p className="text-sm md:text-base text-gray-200">{tutorial.description}</p>
          </div>
        </div>
      </div>

      {/* Contenido */}
      <div className="p-6 md:p-8">
        {/* Tabs */}
        <div className="flex gap-2 mb-6 border-b border-primary-200 overflow-x-auto">
          <button
            onClick={() => setActiveTab('steps')}
            className={`px-4 py-3 font-semibold border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'steps'
                ? 'border-primary-600 text-primary-600'
                : 'border-transparent text-gray-600 hover:text-primary-600'
            }`}
          >
            📖 Pasos
          </button>
          {tutorial.materials && tutorial.materials.length > 0 && (
            <button
              onClick={() => setActiveTab('materials')}
              className={`px-4 py-3 font-semibold border-b-2 transition-all whitespace-nowrap ${
                activeTab === 'materials'
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-gray-600 hover:text-primary-600'
              }`}
            >
              🎨 Materiales
            </button>
          )}
          {tutorial.tricks && tutorial.tricks.length > 0 && (
            <button
              onClick={() => setActiveTab('tricks')}
              className={`px-4 py-3 font-semibold border-b-2 transition-all whitespace-nowrap ${
                activeTab === 'tricks'
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-gray-600 hover:text-primary-600'
              }`}
            >
              ✨ Trucos
            </button>
          )}
        </div>

        {/* Contenido de Tabs */}
        {activeTab === 'steps' && tutorial.steps && (
          <div className="space-y-8">
            {tutorial.steps.map((step, idx) => (
              <div key={step.id} className="border-l-4 border-primary-600 pl-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary-600 text-white w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {idx + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <img
                      src={step.image}
                      alt={`Paso ${idx + 1}`}
                      className="w-full rounded-2xl shadow-md mb-4 object-cover max-h-96"
                    />
                    <p className="text-gray-800 mb-3 text-sm md:text-base">{step.description}</p>
                    {step.tips && step.tips.length > 0 && (
                      <div className="bg-accent-light/20 p-4 rounded-xl">
                        <p className="font-semibold text-sm text-primary-700 mb-2">💡 Consejos:</p>
                        <ul className="space-y-1">
                          {step.tips.map((tip, i) => (
                            <li key={i} className="text-xs md:text-sm text-gray-700">• {tip}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'materials' && tutorial.materials && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {tutorial.materials.map((material, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-primary-50 to-accent-light/30 p-4 rounded-2xl border border-primary-200 text-center hover:shadow-lg transition-shadow"
              >
                <p className="font-semibold text-sm md:text-base text-gray-800">{material}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'tricks' && tutorial.tricks && (
          <div className="space-y-4">
            {tutorial.tricks.map((trick, i) => (
              <div
                key={i}
                className="bg-gradient-to-r from-primary-500/10 to-accent-DEFAULT/10 p-4 rounded-2xl border-l-4 border-primary-600 hover:shadow-md transition-shadow"
              >
                <p className="text-sm md:text-base text-gray-800"><span className="font-bold text-primary-600">✨ </span>{trick}</p>
              </div>
            ))}
          </div>
        )}

        {/* Botones de acción */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
          <button
            onClick={() => setLiked(!liked)}
            className={`${liked ? 'bg-red-500 text-white' : 'bg-primary-600 text-white hover:bg-primary-700'} py-3 rounded-2xl font-semibold transition-colors text-sm md:text-base flex items-center justify-center gap-2`}
          >
            <Heart className="w-5 h-5" />
            Me Gusta
          </button>
          <button className="bg-accent-light text-white py-3 rounded-2xl font-semibold hover:bg-accent-DEFAULT transition-colors text-sm md:text-base">
            ✏️ Practicar
          </button>
          <button className="bg-surface-200 text-gray-800 py-3 rounded-2xl font-semibold hover:bg-surface-300 transition-colors text-sm md:text-base">
            📤 Compartir
          </button>
          <button className="bg-surface-200 text-gray-800 py-3 rounded-2xl font-semibold hover:bg-surface-300 transition-colors text-sm md:text-base">
            🔖 Guardar
          </button>
        </div>

        {/* Artista */}
        <div className="mt-8 pt-8 border-t border-primary-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src={tutorial.createdBy.avatar}
              alt={tutorial.createdBy.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-bold text-gray-900">{tutorial.createdBy.name}</p>
              <p className="text-sm text-gray-600">{tutorial.createdBy.followers.toLocaleString()} seguidores</p>
            </div>
          </div>
          <button className="bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-colors text-sm md:text-base font-semibold w-full md:w-auto">
            Seguir
          </button>
        </div>
      </div>
    </div>
  );
}
