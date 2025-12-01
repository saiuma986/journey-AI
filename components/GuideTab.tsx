import React from 'react';
import { TravelGuideResponse } from '../types';
import { ClockIcon, LightBulbIcon, ChatBubbleLeftRightIcon } from './Icons';

interface GuideTabProps {
  guide: TravelGuideResponse;
}

const GuideTab: React.FC<GuideTabProps> = ({ guide }) => {
  return (
    <div className="space-y-8 animate-fade-in-slow">
      {/* Itinerary Section */}
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-200 pb-2">Your {guide.itinerary.length}-Day Itinerary</h3>
        <div className="space-y-6">
          {guide.itinerary.map((day) => (
            <div key={day.day} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h4 className="text-xl font-semibold text-blue-700">{`Day ${day.day}: ${day.title}`}</h4>
              <p className="text-gray-600 mt-1 mb-4">{day.description}</p>
              <ul className="space-y-3">
                {day.activities.map((activity, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <ClockIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">{activity.time}: {activity.activity}</p>
                      <p className="text-gray-600 text-sm">{activity.details}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Travel Tips & Phrases */}
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-purple-200 pb-2">Travel Tips</h3>
          <ul className="space-y-4">
            {guide.travelTips.map((tip, index) => (
              <li key={index} className="flex items-start gap-4 p-3 bg-purple-50 rounded-lg">
                <LightBulbIcon className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-800">{tip.tip}</p>
                  <p className="text-gray-600 text-sm">{tip.details}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-green-200 pb-2">Local Phrases</h3>
          <ul className="space-y-4">
            {guide.localPhrases.map((phrase, index) => (
              <li key={index} className="flex items-start gap-4 p-3 bg-green-50 rounded-lg">
                <ChatBubbleLeftRightIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-800">"{phrase.phrase}"</p>
                  <p className="text-gray-600 text-sm">Translation: {phrase.translation}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GuideTab;