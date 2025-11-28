import { useState } from 'react';
import { BottomNav } from './components/BottomNav';
import Index from './pages/Index';
import TutorialDetail from './pages/TutorialDetail';
import { Tutorial } from './types';

function App() {
  const [selectedTutorial, setSelectedTutorial] = useState<Tutorial | null>(null);

  if (selectedTutorial) {
    return (
      <div className="bg-white min-h-screen pb-20">
        <TutorialDetail 
          tutorial={selectedTutorial} 
          onBack={() => setSelectedTutorial(null)} 
        />
        <BottomNav />
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-20">
      <Index onSelectTutorial={setSelectedTutorial} />
      <BottomNav />
    </div>
  );
}

export default App;
