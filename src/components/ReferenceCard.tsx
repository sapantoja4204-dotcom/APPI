import { PlayCircle, Bookmark } from "lucide-react";
import { Link } from "react-router-dom";

interface ReferenceCardProps {
  id: string;
  image: string;
  title: string;
  artist: string;
  hasTutorial?: boolean;
  hasTimelapse?: boolean;
}

const ReferenceCard = ({ 
  id, 
  image, 
  title, 
  artist, 
  hasTutorial = true,
  hasTimelapse = false 
}: ReferenceCardProps) => {
  return (
    <Link 
      to={`/tutorial/${id}`}
      className="masonry-item group block animate-fade-up opacity-0"
      style={{ animationFillMode: 'forwards' }}
    >
      <article className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
        <div className="relative overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Tutorial/Timelapse indicator */}
          <div className="absolute top-2 right-2 flex gap-1.5">
            {hasTutorial && (
              <span className="bg-tutorial text-tutorial-foreground px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                <BookOpen className="w-3 h-3" />
                Tutorial
              </span>
            )}
            {hasTimelapse && (
              <span className="bg-primary/90 text-primary-foreground px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                <PlayCircle className="w-3 h-3" />
              </span>
            )}
          </div>

          {/* Save button */}
          <button 
            className="absolute top-2 left-2 p-2 rounded-full bg-card/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-card"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <Bookmark className="w-4 h-4 text-foreground" />
          </button>
        </div>

        <div className="p-3">
          <h3 className="font-semibold text-sm text-foreground line-clamp-2 mb-1">
            {title}
          </h3>
          <p className="text-xs text-muted-foreground">
            por {artist}
          </p>
        </div>
      </article>
    </Link>
  );
};

// Import for icon usage
import { BookOpen } from "lucide-react";

export default ReferenceCard;
