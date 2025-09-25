import React from 'react';
import type { CharacterStatus } from '../types/lessons';

interface TypingDisplayProps {
  text: string;
  currentIndex: number;
  characters: CharacterStatus[];
}

export const TypingDisplay: React.FC<TypingDisplayProps> = ({
  text,
  currentIndex,
  characters
}) => {
  return (
    <div className="typing-display">
      <div className="text-to-type">
        {text.split('').map((char, index) => {
          const charStatus = characters[index];
          let className = 'character';
          
          if (index < currentIndex) {
            className += charStatus?.status === 'correct' ? ' correct' : ' incorrect';
          } else if (index === currentIndex) {
            className += ' current';
          }

          return (
            <span key={index} className={className}>
              {char === ' ' ? '\u00A0' : char}
            </span>
          );
        })}
      </div>
    </div>
  );
};