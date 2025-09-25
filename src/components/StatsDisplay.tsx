import React from 'react';
import type { TypingStats } from '../types/lessons';

interface StatsDisplayProps {
  stats: TypingStats;
  isCompleted: boolean;
}

export const StatsDisplay: React.FC<StatsDisplayProps> = ({ stats, isCompleted }) => {
  return (
    <div className="stats-display">
      <div className="stat-item">
        <span className="stat-label">WPM:</span>
        <span className="stat-value">{Math.round(stats.wpm)}</span>
      </div>
      <div className="stat-item">
        <span className="stat-label">Accuracy:</span>
        <span className="stat-value">{Math.round(stats.accuracy)}%</span>
      </div>
      <div className="stat-item">
        <span className="stat-label">Errors:</span>
        <span className="stat-value">{stats.errors}</span>
      </div>
      {isCompleted && (
        <div className="completion-message">
          <span className="completion-text">Lesson Complete!</span>
        </div>
      )}
    </div>
  );
};