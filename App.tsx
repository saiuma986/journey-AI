import React, { useState, useCallback } from 'react';
import { TravelGuideResponse } from './types';
import { generateTravelExperience } from './services/geminiService';
import InputForm from './components/InputForm';
import LoadingSpinner from './components/LoadingSpinner';
import ResultsDisplay from './components/ResultsDisplay';
import { CompassIcon, SparklesIcon } from './components/Icons';
import HomePage from './components/HomePage';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'generator'>('home');
  const [location, setLocation] = useState<string>('');
  const [interests, setInterests] = useState<string>('');
  const [days, setDays] = useState<number>(3);
  const [budget, setBudget] = useState<string>('Moderate');
  const [travelGuide, setTravelGuide] = useState<TravelGuideResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = useCallback(async () => {
    if (!location) {
      setError('Please enter a location.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setTravelGuide(null);

    try {
      const guide = await generateTravelExperience(location, interests, days, budget);
      setTravelGuide(guide);
    } catch (err) {
      console.error(err);
      setError('Failed to generate travel experience. The model may be unavailable. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  }, [location, interests, days, budget]);

  const navigateToGenerator = () => setView('generator');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 text-gray-800 font-sans p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        <main>
          {view === 'home' ? (
            <HomePage onGetStarted={navigateToGenerator} />
          ) : (
            <>
              <header className="text-center mb-8">
                <div className="flex items-center justify-center gap-4 mb-2">
                  <CompassIcon className="w-12 h-12 text-blue-500" />
                  <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
                    Journey AI
                  </h1>
                  <SparklesIcon className="w-12 h-12 text-purple-500" />
                </div>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Craft your perfect journey with AI. Discover personalized guides, interactive maps, and exciting challenges.
                </p>
              </header>

              <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-200">
                <InputForm
                  location={location}
                  setLocation={setLocation}
                  interests={interests}
                  setInterests={setInterests}
                  days={days}
                  setDays={setDays}
                  budget={budget}
                  setBudget={setBudget}
                  onGenerate={handleGenerate}
                  isLoading={isLoading}
                />
              </div>

              <div className="mt-8">
                {isLoading && <LoadingSpinner />}
                {error && (
                  <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg" role="alert">
                    <p className="font-bold">Error</p>
                    <p>{error}</p>
                  </div>
                )}
                {travelGuide && <ResultsDisplay guide={travelGuide} />}
              </div>
            </>
          )}
        </main>
        
        <footer className="text-center mt-12 text-gray-500 text-sm">
          <p>Powered by Gemini AI. Explore the world from your screen.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;