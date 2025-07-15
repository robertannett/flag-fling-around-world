import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface QuizOptionProps {
  option: string;
  onClick: () => void;
  isCorrect?: boolean;
  isSelected?: boolean;
  isRevealed?: boolean;
  className?: string;
}

export const QuizOption: React.FC<QuizOptionProps> = ({
  option,
  onClick,
  isCorrect = false,
  isSelected = false,
  isRevealed = false,
  className = ''
}) => {
  const getVariant = () => {
    if (!isRevealed) return 'outline';
    if (isCorrect) return 'success';
    if (isSelected && !isCorrect) return 'destructive';
    return 'outline';
  };

  return (
    <Button
      variant={getVariant()}
      className={cn(
        'w-full justify-start text-left h-auto py-4 px-6 text-base',
        isRevealed && isCorrect && 'animate-pulse-success',
        isRevealed && isSelected && !isCorrect && 'animate-bounce-in',
        className
      )}
      onClick={onClick}
      disabled={isRevealed}
    >
      {option}
    </Button>
  );
};