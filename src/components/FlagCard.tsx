import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface FlagCardProps {
  flag: string;
  country: string;
  isRevealed?: boolean;
  className?: string;
}

export const FlagCard: React.FC<FlagCardProps> = ({ 
  flag, 
  country, 
  isRevealed = false, 
  className = '' 
}) => {
  return (
    <Card className={`relative overflow-hidden bg-card border-2 shadow-card hover:shadow-glow transition-all duration-300 ${className}`}>
      <div className="aspect-[4/3] relative">
        <img 
          src={flag} 
          alt={isRevealed ? `Flag of ${country}` : "Flag to guess"}
          className="w-full h-full object-cover"
        />
        {isRevealed && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <Badge variant="outline" className="bg-background/90 text-foreground">
              {country}
            </Badge>
          </div>
        )}
      </div>
    </Card>
  );
};