import { useState } from "react";
import { Pencil, Clock, Target, ChevronRight, Sparkles } from "lucide-react";
import BottomNav from "@/components/BottomNav";
import { interactiveTutorials } from "@/data/tutorials";

const InteractiveTutorials = () => {
  const [activeLevel, setActiveLevel] = useState<string | null>(null);

  const levels = ["Principiante", "Intermedio", "Avanzado"];
  
  const filteredTutorials = activeLevel
    ? interactiveTutorials.filter(t => t.level === activeLevel)
    : interactiveTutorials;

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Principiante":
        return "bg-secondary text-secondary-foreground";
      case "Intermedio":
        return "bg-tutorial text-tutorial-foreground";
      case "Avanzado":
        return "bg-primary/10 text-primary";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="px-4 pt-6 pb-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-tutorial flex items-center justify-center">
            <Pencil className="w-5 h-5 text-tutorial-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">Tutoriales Interactivos</h1>
            <p className="text-sm text-muted-foreground">Practica dibujando paso a paso</p>
          </div>
        </div>
      </header>

      {/* Level filter */}
      <div className="px-4 pb-4">
        <div className="flex gap-2">
          <button
            onClick={() => setActiveLevel(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeLevel === null
                ? "bg-primary text-primary-foreground"
                : "bg-card text-foreground border border-border"
            }`}
          >
            Todos
          </button>
          {levels.map((level) => (
            <button
              key={level}
              onClick={() => setActiveLevel(level)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeLevel === level
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-foreground border border-border"
              }`}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      {/* Featured exercise */}
      <div className="px-4 mb-6">
        <div className="relative bg-gradient-to-br from-primary/20 via-primary/10 to-tutorial/20 rounded-2xl p-5 overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary">Ejercicio del día</span>
            </div>
            
            <h3 className="text-lg font-bold text-foreground mb-2">
              Practica el dibujo gestual
            </h3>
            
            <p className="text-sm text-muted-foreground mb-4">
              5 poses de 60 segundos para mejorar tu fluidez
            </p>
            
            <button className="px-5 py-2.5 bg-primary text-primary-foreground rounded-xl font-medium text-sm shadow-soft hover:shadow-card transition-all">
              Comenzar ahora
            </button>
          </div>
        </div>
      </div>

      {/* Tutorial list */}
      <main className="px-4">
        <h2 className="font-semibold text-foreground mb-4">Todos los ejercicios</h2>
        
        <div className="space-y-3">
          {filteredTutorials.map((tutorial, index) => (
            <button
              key={tutorial.id}
              className="w-full bg-card rounded-2xl p-4 text-left shadow-soft hover:shadow-card transition-all animate-fade-up group"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getLevelColor(tutorial.level)}`}>
                      {tutorial.level}
                    </span>
                  </div>
                  
                  <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {tutorial.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-3">
                    {tutorial.description}
                  </p>
                  
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {tutorial.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Target className="w-3.5 h-3.5" />
                      {tutorial.exercises} ejercicios
                    </span>
                  </div>
                </div>
                
                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
            </button>
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default InteractiveTutorials;
