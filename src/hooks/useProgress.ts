import { useState, useEffect } from 'react';
import type { UserProgress, TypingStats } from '../types/lessons';

const STORAGE_KEY = 'dvorak-lessons-progress';

export const useProgress = () => {
  const [userProgress, setUserProgress] = useState<UserProgress[]>([]);

  // Load progress from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setUserProgress(JSON.parse(saved));
      } catch (error) {
        console.error('Error loading progress:', error);
        setUserProgress([]);
      }
    }
  }, []);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userProgress));
  }, [userProgress]);

  const updateProgress = (lessonId: number, stats: TypingStats, completed: boolean) => {
    setUserProgress(prev => {
      const existing = prev.find(p => p.lessonId === lessonId);
      
      if (existing) {
        // Update existing progress
        return prev.map(p => 
          p.lessonId === lessonId 
            ? {
                ...p,
                completed: completed || p.completed,
                bestWpm: Math.max(p.bestWpm, stats.wpm),
                bestAccuracy: Math.max(p.bestAccuracy, stats.accuracy),
                attempts: p.attempts + 1
              }
            : p
        );
      } else {
        // Create new progress entry
        return [
          ...prev,
          {
            lessonId,
            completed,
            bestWpm: stats.wpm,
            bestAccuracy: stats.accuracy,
            attempts: 1
          }
        ];
      }
    });
  };

  const resetProgress = () => {
    setUserProgress([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  const getProgressForLesson = (lessonId: number) => {
    return userProgress.find(p => p.lessonId === lessonId);
  };

  return {
    userProgress,
    updateProgress,
    resetProgress,
    getProgressForLesson
  };
};