import { Settings, BookOpen, Bookmark, Award, Grid3X3, ChevronRight } from "lucide-react";
import BottomNav from "@/components/BottomNav";
import { tutorials } from "@/data/tutorials";

const Profile = () => {
  const stats = [
    { label: "Tutoriales", value: "12", icon: BookOpen },
    { label: "Guardados", value: "45", icon: Bookmark },
    { label: "Racha", value: "7 días", icon: Award },
  ];

  const savedTutorials = tutorials.slice(0, 4);

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="px-4 pt-6 pb-4">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-bold text-foreground">Mi Perfil</h1>
          <button className="p-2 rounded-full hover:bg-muted transition-colors">
            <Settings className="w-5 h-5 text-foreground" />
          </button>
        </div>

        {/* Profile card */}
        <div className="bg-card rounded-2xl p-5 shadow-card">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-16 h-16 rounded-full gradient-warm flex items-center justify-center">
              <span className="text-2xl font-bold text-primary-foreground">AS</span>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-foreground">Artista Estudiante</h2>
              <p className="text-sm text-muted-foreground">Nivel: Intermedio</p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mb-4">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-muted-foreground">Progreso semanal</span>
              <span className="font-medium text-foreground">75%</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full w-3/4 gradient-warm rounded-full" />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            {stats.map((stat) => (
              <div 
                key={stat.label}
                className="bg-muted/50 rounded-xl p-3 text-center"
              >
                <stat.icon className="w-5 h-5 text-primary mx-auto mb-1" />
                <p className="font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Saved tutorials section */}
      <section className="px-4 mt-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-foreground">Guardados</h3>
          <button className="text-sm text-primary font-medium flex items-center gap-1">
            Ver todos
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {savedTutorials.map((tutorial) => (
            <div 
              key={tutorial.id}
              className="bg-card rounded-xl overflow-hidden shadow-soft"
            >
              <img 
                src={tutorial.image}
                alt={tutorial.title}
                className="w-full h-24 object-cover"
              />
              <div className="p-3">
                <p className="text-sm font-medium text-foreground line-clamp-1">
                  {tutorial.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Menu options */}
      <section className="px-4 mt-6">
        <h3 className="font-semibold text-foreground mb-4">Configuración</h3>
        
        <div className="bg-card rounded-2xl overflow-hidden shadow-soft">
          {[
            { label: "Historial de aprendizaje", icon: BookOpen },
            { label: "Mis colecciones", icon: Grid3X3 },
            { label: "Logros", icon: Award },
            { label: "Preferencias", icon: Settings },
          ].map((item, index, arr) => (
            <button
              key={item.label}
              className={`w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors ${
                index !== arr.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon className="w-5 h-5 text-muted-foreground" />
                <span className="text-foreground">{item.label}</span>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          ))}
        </div>
      </section>

      <BottomNav />
    </div>
  );
};

export default Profile;
