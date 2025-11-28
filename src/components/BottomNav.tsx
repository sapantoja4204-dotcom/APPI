import React from 'react';
import { Home, Search, Plus, Bookmark, User } from 'lucide-react';

export const BottomNav: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-primary-200 shadow-2xl">
      <div className="max-w-7xl mx-auto px-0">
        <div className="flex items-center justify-around">
          <button className="flex-1 flex items-center justify-center py-4 text-primary-600 hover:bg-primary-50 transition-colors">
            <Home className="w-6 h-6" />
          </button>
          <button className="flex-1 flex items-center justify-center py-4 text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors">
            <Search className="w-6 h-6" />
          </button>
          <button className="flex-1 flex items-center justify-center py-4 text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors">
            <Plus className="w-6 h-6" />
          </button>
          <button className="flex-1 flex items-center justify-center py-4 text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors">
            <Bookmark className="w-6 h-6" />
          </button>
          <button className="flex-1 flex items-center justify-center py-4 text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors">
            <User className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};
