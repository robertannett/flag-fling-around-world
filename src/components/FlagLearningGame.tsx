import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { FlagCard } from './FlagCard';
import { QuizOption } from './QuizOption';
import { WelcomeScreen } from './WelcomeScreen';
import { Scoreboard } from './Scoreboard';
import { useToast } from '@/hooks/use-toast';
import { Trophy, Star, RotateCcw, Heart, Target } from 'lucide-react';

// Import flag images
import usaFlag from '@/assets/flags/usa.png';
import franceFlag from '@/assets/flags/france.png';
import japanFlag from '@/assets/flags/japan.png';
import brazilFlag from '@/assets/flags/brazil.png';
import canadaFlag from '@/assets/flags/canada.png';
import germanyFlag from '@/assets/flags/germany.png';
import ukFlag from '@/assets/flags/uk.png';
import australiaFlag from '@/assets/flags/australia.png';
import southKoreaFlag from '@/assets/flags/south-korea.png';
import mexicoFlag from '@/assets/flags/mexico.png';
import indiaFlag from '@/assets/flags/india.png';
import chinaFlag from '@/assets/flags/china.png';
import russiaFlag from '@/assets/flags/russia.png';
import spainFlag from '@/assets/flags/spain.png';
import italyFlag from '@/assets/flags/italy.png';
import netherlandsFlag from '@/assets/flags/netherlands.png';
import swedenFlag from '@/assets/flags/sweden.png';
import norwayFlag from '@/assets/flags/norway.png';
import denmarkFlag from '@/assets/flags/denmark.png';
import switzerlandFlag from '@/assets/flags/switzerland.png';
import polandFlag from '@/assets/flags/poland.png';
import irelandFlag from '@/assets/flags/ireland.png';
import portugalFlag from '@/assets/flags/portugal.png';
import greeceFlag from '@/assets/flags/greece.png';
import turkeyFlag from '@/assets/flags/turkey.png';
import argentinaFlag from '@/assets/flags/argentina.png';
import chileFlag from '@/assets/flags/chile.png';
import newZealandFlag from '@/assets/flags/new-zealand.png';
import belgiumFlag from '@/assets/flags/belgium.png';
import austriaFlag from '@/assets/flags/austria.png';

interface FlagData {
  id: string;
  country: string;
  flag: string;
  options: string[];
}

const flagsData: FlagData[] = [
  {
    id: 'usa',
    country: 'United States',
    flag: usaFlag,
    options: ['United States', 'United Kingdom', 'Australia', 'New Zealand']
  },
  {
    id: 'france',
    country: 'France',
    flag: franceFlag,
    options: ['France', 'Netherlands', 'Russia', 'Czech Republic']
  },
  {
    id: 'japan',
    country: 'Japan',
    flag: japanFlag,
    options: ['Japan', 'South Korea', 'China', 'Bangladesh']
  },
  {
    id: 'brazil',
    country: 'Brazil',
    flag: brazilFlag,
    options: ['Brazil', 'Argentina', 'Colombia', 'Peru']
  },
  {
    id: 'canada',
    country: 'Canada',
    flag: canadaFlag,
    options: ['Canada', 'United States', 'Denmark', 'Switzerland']
  },
  {
    id: 'germany',
    country: 'Germany',
    flag: germanyFlag,
    options: ['Germany', 'Belgium', 'Romania', 'Chad']
  },
  {
    id: 'uk',
    country: 'United Kingdom',
    flag: ukFlag,
    options: ['United Kingdom', 'United States', 'Australia', 'New Zealand']
  },
  {
    id: 'australia',
    country: 'Australia',
    flag: australiaFlag,
    options: ['Australia', 'New Zealand', 'United Kingdom', 'Fiji']
  },
  {
    id: 'south-korea',
    country: 'South Korea',
    flag: southKoreaFlag,
    options: ['South Korea', 'North Korea', 'Japan', 'China']
  },
  {
    id: 'mexico',
    country: 'Mexico',
    flag: mexicoFlag,
    options: ['Mexico', 'Italy', 'Ireland', 'Hungary']
  },
  {
    id: 'india',
    country: 'India',
    flag: indiaFlag,
    options: ['India', 'Niger', 'Ireland', 'Ivory Coast']
  },
  {
    id: 'china',
    country: 'China',
    flag: chinaFlag,
    options: ['China', 'Vietnam', 'North Korea', 'Myanmar']
  },
  {
    id: 'russia',
    country: 'Russia',
    flag: russiaFlag,
    options: ['Russia', 'Netherlands', 'Slovenia', 'Slovakia']
  },
  {
    id: 'spain',
    country: 'Spain',
    flag: spainFlag,
    options: ['Spain', 'Andorra', 'Portugal', 'Colombia']
  },
  {
    id: 'italy',
    country: 'Italy',
    flag: italyFlag,
    options: ['Italy', 'Ireland', 'Mexico', 'Hungary']
  },
  {
    id: 'netherlands',
    country: 'Netherlands',
    flag: netherlandsFlag,
    options: ['Netherlands', 'Russia', 'France', 'Luxembourg']
  },
  {
    id: 'sweden',
    country: 'Sweden',
    flag: swedenFlag,
    options: ['Sweden', 'Finland', 'Norway', 'Denmark']
  },
  {
    id: 'norway',
    country: 'Norway',
    flag: norwayFlag,
    options: ['Norway', 'Iceland', 'Sweden', 'Denmark']
  },
  {
    id: 'denmark',
    country: 'Denmark',
    flag: denmarkFlag,
    options: ['Denmark', 'Switzerland', 'Georgia', 'Tonga']
  },
  {
    id: 'switzerland',
    country: 'Switzerland',
    flag: switzerlandFlag,
    options: ['Switzerland', 'Denmark', 'Georgia', 'Tonga']
  },
  {
    id: 'poland',
    country: 'Poland',
    flag: polandFlag,
    options: ['Poland', 'Monaco', 'Indonesia', 'Czech Republic']
  },
  {
    id: 'ireland',
    country: 'Ireland',
    flag: irelandFlag,
    options: ['Ireland', 'Italy', 'India', 'Ivory Coast']
  },
  {
    id: 'portugal',
    country: 'Portugal',
    flag: portugalFlag,
    options: ['Portugal', 'Spain', 'Brazil', 'Morocco']
  },
  {
    id: 'greece',
    country: 'Greece',
    flag: greeceFlag,
    options: ['Greece', 'Uruguay', 'Israel', 'Finland']
  },
  {
    id: 'turkey',
    country: 'Turkey',
    flag: turkeyFlag,
    options: ['Turkey', 'Tunisia', 'Singapore', 'Pakistan']
  },
  {
    id: 'argentina',
    country: 'Argentina',
    flag: argentinaFlag,
    options: ['Argentina', 'Uruguay', 'Guatemala', 'Nicaragua']
  },
  {
    id: 'chile',
    country: 'Chile',
    flag: chileFlag,
    options: ['Chile', 'Texas', 'Puerto Rico', 'Czech Republic']
  },
  {
    id: 'new-zealand',
    country: 'New Zealand',
    flag: newZealandFlag,
    options: ['New Zealand', 'Australia', 'Fiji', 'Tuvalu']
  },
  {
    id: 'belgium',
    country: 'Belgium',
    flag: belgiumFlag,
    options: ['Belgium', 'Germany', 'Chad', 'Romania']
  },
  {
    id: 'austria',
    country: 'Austria',
    flag: austriaFlag,
    options: ['Austria', 'Latvia', 'Lebanon', 'Indonesia']
  }
];

export const FlagLearningGame: React.FC = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [currentFlagIndex, setCurrentFlagIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [lives, setLives] = useState(3);
  const [flagsAnswered, setFlagsAnswered] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const { toast } = useToast();

  const startGame = () => {
    setGameStarted(true);
    toast({
      title: "🎯 Game Started!",
      description: "Good luck learning the flags of the world!",
      duration: 2000,
    });
  };

  const currentFlag = flagsData[currentFlagIndex];

  // Track best streak
  useEffect(() => {
    if (streak > bestStreak) {
      setBestStreak(streak);
    }
  }, [streak, bestStreak]);

  const handleOptionSelect = (option: string) => {
    if (isRevealed || gameOver) return;

    setSelectedOption(option);
    setIsRevealed(true);

    const isCorrect = option === currentFlag.country;

    if (isCorrect) {
      setScore(score + (10 * (streak + 1)));
      setStreak(streak + 1);
      setFlagsAnswered(flagsAnswered + 1);
      toast({
        title: "✅ Correct!",
        description: `+${10 * (streak + 1)} points! Streak: ${streak + 1}`,
        duration: 2000,
      });
    } else {
      setStreak(0);
      setLives(lives - 1);
      setFlagsAnswered(flagsAnswered + 1);
      toast({
        title: "❌ Wrong!",
        description: `The correct answer was ${currentFlag.country}`,
        duration: 3000,
      });

      if (lives <= 1) {
        setGameOver(true);
        toast({
          title: "💔 Game Over!",
          description: `Final score: ${score}`,
          duration: 5000,
        });
      }
    }
  };

  const nextFlag = () => {
    // Generate a random index for endless gameplay
    const randomIndex = Math.floor(Math.random() * flagsData.length);
    setCurrentFlagIndex(randomIndex);
    setSelectedOption(null);
    setIsRevealed(false);
  };

  const resetGame = () => {
    setGameStarted(false);
    setCurrentFlagIndex(0);
    setScore(0);
    setStreak(0);
    setBestStreak(0);
    setLives(3);
    setFlagsAnswered(0);
    setSelectedOption(null);
    setIsRevealed(false);
    setGameOver(false);
    toast({
      title: "🎮 Game Reset!",
      description: "Ready to play again!",
      duration: 2000,
    });
  };

  // Remove progress calculation since game is now endless

  if (!gameStarted) {
    return <WelcomeScreen onStartGame={startGame} />;
  }

  if (gameOver) {
    return (
      <div className="min-h-screen bg-gradient-background p-4">
        <div className="max-w-2xl mx-auto space-y-6">
          <Card className="bg-card/95 backdrop-blur-sm border-2 shadow-glow">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Target className="w-16 h-16 text-destructive animate-bounce-in" />
              </div>
              <CardTitle className="text-2xl font-bold">💔 Game Over!</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-primary">{score}</div>
                <div className="text-muted-foreground">Final Score</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-xl font-bold text-accent">{bestStreak}</div>
                  <div className="text-sm text-muted-foreground">Best Streak</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-warning">{flagsAnswered}</div>
                  <div className="text-sm text-muted-foreground">Flags Answered</div>
                </div>
              </div>

              <Button 
                variant="hero" 
                onClick={resetGame}
                className="w-full"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Play Again
              </Button>
            </CardContent>
          </Card>

          <Scoreboard 
            currentScore={score}
            currentStreak={bestStreak}
            currentFlags={flagsAnswered}
            onNewScore={() => {}}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-background p-4">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Header */}
        <Card className="bg-card/95 backdrop-blur-sm border-2 shadow-card">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-2xl font-bold flex items-center gap-2">
                <Target className="w-6 h-6 text-primary" />
                Flag Master
              </CardTitle>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(3)].map((_, i) => (
                    <Heart 
                      key={i}
                      className={`w-5 h-5 ${i < lives ? 'text-destructive fill-destructive' : 'text-muted-foreground'}`}
                    />
                  ))}
                </div>
                <Badge variant="outline" className="bg-background/90">
                  <Trophy className="w-4 h-4 mr-1" />
                  {score}
                </Badge>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">
                  Flags Answered: {flagsAnswered}
                </span>
                <span className="text-muted-foreground">
                  🔥 Streak: {streak}
                </span>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Flag Card */}
        <div className="animate-card-enter">
          <FlagCard 
            flag={currentFlag.flag}
            country={currentFlag.country}
            isRevealed={isRevealed}
            className="mx-auto max-w-md"
          />
        </div>

        {/* Question */}
        <Card className="bg-card/95 backdrop-blur-sm border-2 shadow-card">
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold text-center mb-6">
              Which country does this flag belong to?
            </h2>
            
            <div className="space-y-3">
              {currentFlag.options.map((option) => (
                <QuizOption
                  key={option}
                  option={option}
                  onClick={() => handleOptionSelect(option)}
                  isCorrect={option === currentFlag.country}
                  isSelected={selectedOption === option}
                  isRevealed={isRevealed}
                />
              ))}
            </div>

            {isRevealed && (
              <div className="mt-6 text-center">
                <Button
                  variant="hero"
                  onClick={nextFlag}
                  className="w-full animate-bounce-in"
                >
                  <Star className="w-4 h-4 mr-2" />
                  Next Flag
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};