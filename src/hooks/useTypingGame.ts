import { useState, useEffect, useCallback } from 'react';
import type { CharacterStatus, TypingStats } from '../types/lessons';

export const useTypingGame = (targetText: string, onComplete: () => void) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [characters, setCharacters] = useState<CharacterStatus[]>([]);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [stats, setStats] = useState<TypingStats>({
    wpm: 0,
    accuracy: 0,
    errors: 0,
    totalCharacters: 0
  });

  // Initialize characters
  useEffect(() => {
    const initialCharacters: CharacterStatus[] = targetText.split('').map((char, index) => ({
      char,
      status: 'pending',
      index
    }));
    setCharacters(initialCharacters);
    setCurrentIndex(0);
    setIsCompleted(false);
    setStartTime(null);
    setStats({
      wpm: 0,
      accuracy: 0,
      errors: 0,
      totalCharacters: 0
    });
  }, [targetText]);

  const calculateStats = useCallback((chars: CharacterStatus[], startTs: number) => {
    const completedChars = chars.filter(c => c.status !== 'pending').length;
    const correctChars = chars.filter(c => c.status === 'correct').length;
    const errors = chars.filter(c => c.status === 'incorrect').length;
    
    const timeElapsed = (Date.now() - startTs) / 1000 / 60; // minutes
    const wpm = timeElapsed > 0 ? (correctChars / 5) / timeElapsed : 0;
    const accuracy = completedChars > 0 ? (correctChars / completedChars) * 100 : 100;

    return {
      wpm,
      accuracy,
      errors,
      totalCharacters: completedChars
    };
  }, []);

  const handleKeyPress = useCallback((key: string) => {
    if (isCompleted) return;

    // Start timer on first keypress
    if (!startTime) {
      setStartTime(Date.now());
    }

    const newCharacters = [...characters];
    const currentChar = newCharacters[currentIndex];

    if (currentChar) {
      if (key === currentChar.char) {
        currentChar.status = 'correct';
        setCurrentIndex(prev => prev + 1);
      } else {
        currentChar.status = 'incorrect';
        setCurrentIndex(prev => prev + 1);
      }
      
      setCharacters(newCharacters);

      // Calculate stats
      const currentStats = calculateStats(newCharacters, startTime || Date.now());
      setStats(currentStats);

      // Check if completed
      if (currentIndex + 1 >= targetText.length) {
        setIsCompleted(true);
        onComplete();
      }
    }
  }, [characters, currentIndex, isCompleted, startTime, targetText.length, calculateStats, onComplete]);

  const reset = useCallback(() => {
    const resetCharacters: CharacterStatus[] = targetText.split('').map((char, index) => ({
      char,
      status: 'pending',
      index
    }));
    setCharacters(resetCharacters);
    setCurrentIndex(0);
    setIsCompleted(false);
    setStartTime(null);
    setStats({
      wpm: 0,
      accuracy: 0,
      errors: 0,
      totalCharacters: 0
    });
  }, [targetText]);

  return {
    currentIndex,
    characters,
    stats,
    isCompleted,
    handleKeyPress,
    reset
  };
};