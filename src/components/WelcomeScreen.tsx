import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Target, Star, Trophy, Heart, Zap } from 'lucide-react';

interface WelcomeScreenProps {
  onStartGame: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStartGame }) => {
  return (
    <div className="min-h-screen bg-gradient-background flex items-center justify-center p-4">
      <Card className="w-full max-w-lg bg-card/95 backdrop-blur-sm border-2 shadow-glow">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Target className="w-16 h-16 text-primary animate-bounce-in" />
          </div>
          <CardTitle className="text-3xl font-bold mb-2">Flag Master</CardTitle>
          <p className="text-muted-foreground">
            Test your knowledge of world flags in this fun, Tinder-style learning game!
          </p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-accent/10 rounded-lg">
              <Star className="w-8 h-8 text-accent mx-auto mb-2" />
              <div className="text-sm font-medium">Learn</div>
              <div className="text-xs text-muted-foreground">World Flags</div>
            </div>
            <div className="text-center p-4 bg-warning/10 rounded-lg">
              <Trophy className="w-8 h-8 text-warning mx-auto mb-2" />
              <div className="text-sm font-medium">Score</div>
              <div className="text-xs text-muted-foreground">Build Streaks</div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Target className="w-4 h-4 text-primary-foreground" />
              </div>
              <div>
                <div className="text-sm font-medium">Multiple Choice</div>
                <div className="text-xs text-muted-foreground">Choose the correct country</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
                <Zap className="w-4 h-4 text-success-foreground" />
              </div>
              <div>
                <div className="text-sm font-medium">Streak System</div>
                <div className="text-xs text-muted-foreground">Build combos for higher scores</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-destructive rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-destructive-foreground" />
              </div>
              <div>
                <div className="text-sm font-medium">3 Lives</div>
                <div className="text-xs text-muted-foreground">Make them count!</div>
              </div>
            </div>
          </div>

          <Button 
            variant="hero" 
            onClick={onStartGame}
            className="w-full text-lg py-6"
          >
            <Target className="w-5 h-5 mr-2" />
            Start Learning!
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};