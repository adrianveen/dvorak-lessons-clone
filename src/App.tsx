import { useState } from 'react';
import { lessons } from './data/lessons';
import { LessonSelector } from './components/LessonSelector';
import { TypingLesson } from './components/TypingLesson';
import { useProgress } from './hooks/useProgress';
import type { TypingStats } from './types/lessons';
import './App.css';

function App() {
  const [currentLessonId, setCurrentLessonId] = useState<number | null>(null);
  const { userProgress, updateProgress, resetProgress } = useProgress();

  const currentLesson = lessons.find(l => l.id === currentLessonId);

  const handleLessonSelect = (lessonId: number) => {
    setCurrentLessonId(lessonId);
  };

  const handleLessonComplete = (stats: TypingStats) => {
    if (currentLessonId) {
      updateProgress(currentLessonId, stats, true);
      setCurrentLessonId(null);
    }
  };

  const handleBack = () => {
    setCurrentLessonId(null);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>DVORAK Typing Lessons</h1>
        <p>Learn to type with the DVORAK keyboard layout</p>
        {userProgress.length > 0 && (
          <button onClick={resetProgress} className="reset-progress-button">
            Reset Progress
          </button>
        )}
      </header>

      <main className="app-main">
        {currentLesson ? (
          <TypingLesson
            lesson={currentLesson}
            onComplete={handleLessonComplete}
            onBack={handleBack}
          />
        ) : (
          <LessonSelector
            lessons={lessons}
            currentLessonId={currentLessonId || 0}
            userProgress={userProgress}
            onLessonSelect={handleLessonSelect}
          />
        )}
      </main>
    </div>
  );
}

export default App;
