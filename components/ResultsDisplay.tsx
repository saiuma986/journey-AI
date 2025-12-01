
import React, { useState } from 'react';
import { TravelGuideResponse, Tab } from '../types';
import GuideTab from './GuideTab';
import MapTab from './MapTab';
import ChallengeTab from './ChallengeTab';
import { BookOpenIcon, MapIcon, TrophyIcon } from './Icons';

interface ResultsDisplayProps {
  guide: TravelGuideResponse;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ guide }) => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.Guide);

  const renderTabContent = () => {
    switch (activeTab) {
      case Tab.Guide:
        return <GuideTab guide={guide} />;
      case Tab.Map:
        return <MapTab landmarks={guide.landmarks} />;
      case Tab.Challenge:
        return <ChallengeTab challenge={guide.scavengerHunt} />;
      default:
        return null;
    }
  };

  const TabButton = ({ tab, icon, label }: { tab: Tab, icon: React.ReactNode, label: string }) => (
    <button
      onClick={() => setActiveTab(tab)}
      className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
        activeTab === tab 
        ? 'bg-blue-600 text-white shadow-lg scale-105' 
        : 'bg-white/80 text-gray-700 hover:bg-blue-100 hover:text-blue-700'
      }`}
    >
      {icon}
      {label}
    </button>
  );

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden border border-gray-200 animate-fade-in">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900">{guide.title}</h2>
        <p className="mt-2 text-gray-600">{guide.summary}</p>
      </div>
      
      <div className="p-4 bg-gray-50/50 border-b border-gray-200">
        <div className="flex items-center justify-center space-x-2 sm:space-x-4">
          <TabButton tab={Tab.Guide} icon={<BookOpenIcon className="w-5 h-5"/>} label="Guide" />
          <TabButton tab={Tab.Map} icon={<MapIcon className="w-5 h-5"/>} label="Interactive Map" />
          <TabButton tab={Tab.Challenge} icon={<TrophyIcon className="w-5 h-5"/>} label="Challenge" />
        </div>
      </div>

      <div className="p-6">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default ResultsDisplay;
