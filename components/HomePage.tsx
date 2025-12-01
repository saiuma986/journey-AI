import React from 'react';
import { BookOpenIcon, CompassIcon, MapIcon, SparklesIcon, TrophyIcon } from './Icons';

interface HomePageProps {
  onGetStarted: () => void;
}

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-gray-200 text-center h-full">
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-white/80 mx-auto mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );

const HomePage: React.FC<HomePageProps> = ({ onGetStarted }) => {
  return (
    <div className="animate-fade-in text-center py-10 sm:py-16">
      <div className="flex items-center justify-center gap-4 mb-4">
        <CompassIcon className="w-12 h-12 sm:w-16 sm:h-16 text-blue-500" />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
          Journey AI
        </h1>
        <SparklesIcon className="w-12 h-12 sm:w-16 sm:h-16 text-purple-500" />
      </div>
      <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
        Craft your perfect journey with AI. Discover personalized guides, interactive maps, and exciting challenges for any destination in the world.
      </p>

      <button
        onClick={onGetStarted}
        className="bg-blue-600 text-white font-bold py-3 px-8 sm:py-4 sm:px-10 rounded-full text-lg shadow-lg hover:bg-blue-700 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        aria-label="Start planning your trip"
      >
        Start Planning Your Trip
      </button>

      <div className="mt-16 sm:mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <FeatureCard
          icon={<BookOpenIcon className="w-10 h-10 text-blue-500" />}
          title="Personalized Itineraries"
          description="Get day-by-day plans tailored to your interests, from famous landmarks to hidden gems."
        />
        <FeatureCard
          icon={<MapIcon className="w-10 h-10 text-green-500" />}
          title="Interactive 3D Maps"
          description="Visualize your trip with interactive maps that bring your destination to life."
        />
        <FeatureCard
          icon={<TrophyIcon className="w-10 h-10 text-purple-500" />}
          title="Engaging Challenges"
          description="Make learning about your destination fun with custom scavenger hunts and trivia."
        />
      </div>
    </div>
  );
};

export default HomePage;