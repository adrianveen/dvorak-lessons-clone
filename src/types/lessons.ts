export interface Lesson {
  id: number;
  title: string;
  description: string;
  keys: string[];
  exercises: string[];
}

export interface TypingStats {
  wpm: number;
  accuracy: number;
  errors: number;
  totalCharacters: number;
}

export interface UserProgress {
  lessonId: number;
  completed: boolean;
  bestWpm: number;
  bestAccuracy: number;
  attempts: number;
}

export interface CharacterStatus {
  char: string;
  status: 'pending' | 'correct' | 'incorrect';
  index: number;
}