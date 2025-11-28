import { useState } from "react";
import { ArrowLeft, TrendingUp } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import SearchBar from "@/components/SearchBar";
import CategoryPill from "@/components/CategoryPill";
import ReferenceCard from "@/components/ReferenceCard";
import BottomNav from "@/components/BottomNav";
import { tutorials } from "@/data/tutorials";

const popularSearches = [
  "manos difíciles",
  "ojos realistas",
  "poses dinámicas",
  "perspectiva",
  "cabello rizado",
  "expresiones faciales",
  "ropa y pliegues",
  "anatomía básica",
];

const SearchPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const [hasSearched, setHasSearched] = useState(!!initialQuery);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    setHasSearched(true);
  };

  const filteredResults = query
    ? tutorials.filter(
        (t) =>
          t.title.toLowerCase().includes(query.toLowerCase()) ||
          t.category.toLowerCase().includes(query.toLowerCase()) ||
          t.artist.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-xl pt-safe">
        <div className="px-4 pt-4 pb-4">
          <div className="flex items-center gap-3 mb-4">
            <button 
              onClick={() => navigate(-1)}
              className="p-2 rounded-full hover:bg-muted transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-foreground" />
            </button>
            <h1 className="text-lg font-semibold text-foreground">Buscar tutoriales</h1>
          </div>
          
          <SearchBar 
            placeholder="¿Qué quieres aprender a dibujar?" 
            onSearch={handleSearch}
            autoFocus
          />
        </div>
      </header>

      <main className="px-4">
        {!hasSearched ? (
          /* Initial state - popular searches */
          <div className="animate-fade-up">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-primary" />
              <h2 className="font-semibold text-foreground">Búsquedas populares</h2>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {popularSearches.map((search) => (
                <button
                  key={search}
                  onClick={() => handleSearch(search)}
                  className="px-4 py-2.5 bg-card rounded-full text-sm text-foreground border border-border hover:border-primary hover:text-primary transition-all"
                >
                  {search}
                </button>
              ))}
            </div>

            {/* Categories section */}
            <h2 className="font-semibold text-foreground mb-4">Explora por categoría</h2>
            <div className="grid grid-cols-2 gap-3">
              {["Ojos", "Manos", "Rostro", "Poses", "Cabello", "Anime"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleSearch(cat)}
                  className="bg-card rounded-xl p-4 text-left hover:shadow-card transition-all group"
                >
                  <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                    {cat}
                  </span>
                  <p className="text-xs text-muted-foreground mt-1">
                    {tutorials.filter(t => t.category === cat).length} tutoriales
                  </p>
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* Search results */
          <div>
            <p className="text-sm text-muted-foreground mb-4">
              {filteredResults.length} resultados para "{query}"
            </p>

            {filteredResults.length > 0 ? (
              <div className="masonry-grid">
                {filteredResults.map((tutorial, index) => (
                  <div key={tutorial.id} className={`stagger-${(index % 6) + 1}`}>
                    <ReferenceCard
                      id={tutorial.id}
                      image={tutorial.image}
                      title={tutorial.title}
                      artist={tutorial.artist}
                      hasTutorial={tutorial.hasTutorial}
                      hasTimelapse={tutorial.hasTimelapse}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">No encontramos tutoriales para "{query}"</p>
                <button 
                  onClick={() => setHasSearched(false)}
                  className="text-primary font-medium hover:underline"
                >
                  Ver búsquedas populares
                </button>
              </div>
            )}
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
};

export default SearchPage;
