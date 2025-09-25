import React, { useState, useEffect } from 'react';
import type { Lesson, TypingStats } from '../types/lessons';
import { TypingDisplay } from './TypingDisplay';
import { StatsDisplay } from './StatsDisplay';
import { useTypingGame } from '../hooks/useTypingGame';

interface TypingLessonProps {
  lesson: Lesson;
  onComplete: (stats: TypingStats) => void;
  onBack: () => void;
}

export const TypingLesson: React.FC<TypingLessonProps> = ({
  lesson,
  onComplete,
  onBack
}) => {
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);

  const currentExercise = lesson.exercises[currentExerciseIndex];

  const {
    currentIndex,
    characters,
    stats,
    isCompleted,
    handleKeyPress,
    reset
  } = useTypingGame(currentExercise, () => {
    setShowNextButton(true);
  });

  // Handle keyboard input
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Prevent default behavior for most keys
      if (event.key.length === 1 || event.key === ' ') {
        event.preventDefault();
        handleKeyPress(event.key);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyPress]);

  const handleNext = () => {
    if (currentExerciseIndex < lesson.exercises.length - 1) {
      setCurrentExerciseIndex(prev => prev + 1);
      setShowNextButton(false);
      reset();
    } else {
      // Lesson completed
      onComplete(stats);
    }
  };

  const handleRestart = () => {
    reset();
    setShowNextButton(false);
  };

  return (
    <div className="typing-lesson">
      <div className="lesson-header">
        <button onClick={onBack} className="back-button">
          ← Back to Lessons
        </button>
        <div className="lesson-info">
          <h1>{lesson.title}</h1>
          <p>{lesson.description}</p>
          <div className="exercise-progress">
            Exercise {currentExerciseIndex + 1} of {lesson.exercises.length}
          </div>
        </div>
      </div>

      <div className="lesson-content">
        <TypingDisplay
          text={currentExercise}
          currentIndex={currentIndex}
          characters={characters}
        />

        <StatsDisplay stats={stats} isCompleted={isCompleted} />

        <div className="controls">
          {showNextButton && (
            <button onClick={handleNext} className="next-button">
              {currentExerciseIndex < lesson.exercises.length - 1 ? 'Next Exercise' : 'Complete Lesson'}
            </button>
          )}
          <button onClick={handleRestart} className="restart-button">
            Restart
          </button>
        </div>

        {lesson.keys.length > 0 && (
          <div className="keyboard-reference">
            <h3>Keys to practice:</h3>
            <div className="keys">
              {lesson.keys.map(key => (
                <span key={key} className="key">{key}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};