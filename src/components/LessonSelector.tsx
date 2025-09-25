import React from 'react';
import type { Lesson, UserProgress } from '../types/lessons';

interface LessonSelectorProps {
  lessons: Lesson[];
  currentLessonId: number;
  userProgress: UserProgress[];
  onLessonSelect: (lessonId: number) => void;
}

export const LessonSelector: React.FC<LessonSelectorProps> = ({
  lessons,
  currentLessonId,
  userProgress,
  onLessonSelect
}) => {
  const getProgressForLesson = (lessonId: number) => {
    return userProgress.find(p => p.lessonId === lessonId);
  };

  return (
    <div className="lesson-selector">
      <h2>Select a Lesson</h2>
      <div className="lessons-grid">
        {lessons.map(lesson => {
          const progress = getProgressForLesson(lesson.id);
          const isCompleted = progress?.completed || false;
          const isActive = lesson.id === currentLessonId;

          return (
            <div
              key={lesson.id}
              className={`lesson-card ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
              onClick={() => onLessonSelect(lesson.id)}
            >
              <div className="lesson-number">{lesson.id}</div>
              <div className="lesson-info">
                <h3>{lesson.title}</h3>
                <p>{lesson.description}</p>
                {isCompleted && (
                  <div className="lesson-stats">
                    <span>Best WPM: {progress?.bestWpm || 0}</span>
                    <span>Best Accuracy: {progress?.bestAccuracy || 0}%</span>
                  </div>
                )}
              </div>
              {isCompleted && <div className="completion-badge">✓</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
};