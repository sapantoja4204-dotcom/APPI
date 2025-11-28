export type TutorialType = 'step-by-step' | 'timelapse' | 'interactive';
export type ContentCategory = 'hands' | 'anatomy' | 'faces' | 'poses' | 'hair' | 'clothing' | 'objects' | 'lighting' | 'backgrounds';
export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';

export interface TutorialStep {
  id: string;
  image: string;
  description: string;
  tips?: string[];
}

export interface Tutorial {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: ContentCategory;
  type: TutorialType;
  steps?: TutorialStep[];
  timelapseUrl?: string;
  materials?: string[];
  tricks?: string[];
  difficulty: DifficultyLevel;
  createdBy: Artist;
  createdAt: Date;
  views: number;
  likes: number;
}

export interface Artist {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  followers: number;
  tutorials: Tutorial[];
  joinedAt: Date;
}

export interface UserProgress {
  tutorialId: string;
  completedSteps: number;
  totalSteps: number;
  lastAccessed: Date;
}
