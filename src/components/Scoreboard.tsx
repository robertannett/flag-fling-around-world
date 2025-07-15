import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Medal, Award } from 'lucide-react';

interface ScoreEntry {
  score: number;
  date: string;
  streak: number;
  flagsAnswered: number;
}

interface ScoreboardProps {
  currentScore?: number;
  currentStreak?: number;
  currentFlags?: number;
  onNewScore?: (score: number, streak: number, flagsAnswered: number) => void;
}

export const Scoreboard: React.FC<ScoreboardProps> = ({ 
  currentScore, 
  currentStreak, 
  currentFlags, 
  onNewScore 
}) => {
  const [scores, setScores] = useState<ScoreEntry[]>([]);

  useEffect(() => {
    const savedScores = localStorage.getItem('flagMasterScores');
    if (savedScores) {
      setScores(JSON.parse(savedScores));
    }
  }, []);

  useEffect(() => {
    if (currentScore !== undefined && currentStreak !== undefined && currentFlags !== undefined && onNewScore) {
      const newEntry: ScoreEntry = {
        score: currentScore,
        date: new Date().toLocaleDateString(),
        streak: currentStreak,
        flagsAnswered: currentFlags,
      };

      const updatedScores = [...scores, newEntry]
        .sort((a, b) => b.score - a.score)
        .slice(0, 10);

      setScores(updatedScores);
      localStorage.setItem('flagMasterScores', JSON.stringify(updatedScores));
    }
  }, [currentScore, currentStreak, currentFlags, onNewScore, scores]);

  const getRankIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Trophy className="w-5 h-5 text-warning" />;
      case 1:
        return <Medal className="w-5 h-5 text-muted-foreground" />;
      case 2:
        return <Award className="w-5 h-5 text-accent" />;
      default:
        return <span className="w-5 h-5 flex items-center justify-center text-sm font-bold text-muted-foreground">#{index + 1}</span>;
    }
  };

  if (scores.length === 0) {
    return (
      <Card className="bg-card/95 backdrop-blur-sm border-2 shadow-card">
        <CardHeader>
          <CardTitle className="text-lg font-bold flex items-center gap-2">
            <Trophy className="w-5 h-5 text-warning" />
            Leaderboard
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center text-muted-foreground py-8">
            No scores yet. Be the first to play!
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-card/95 backdrop-blur-sm border-2 shadow-card">
      <CardHeader>
        <CardTitle className="text-lg font-bold flex items-center gap-2">
          <Trophy className="w-5 h-5 text-warning" />
          Leaderboard
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {scores.map((entry, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-3 rounded-lg ${
                index === 0 ? 'bg-warning/10 border border-warning/20' : 'bg-background/50'
              }`}
            >
              <div className="flex items-center gap-3">
                {getRankIcon(index)}
                <div>
                  <div className="font-semibold">{entry.score}</div>
                  <div className="text-xs text-muted-foreground">{entry.date}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">
                  🔥 {entry.streak}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {entry.flagsAnswered} flags
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};