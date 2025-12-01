
import React from 'react';
import { Challenge } from '../types';
import { PuzzlePieceIcon, MagnifyingGlassIcon } from './Icons';

interface ChallengeTabProps {
  challenge: Challenge;
}

const ChallengeTab: React.FC<ChallengeTabProps> = ({ challenge }) => {
  return (
    <div className="max-w-3xl mx-auto text-center animate-fade-in-slow">
      <PuzzlePieceIcon className="w-16 h-16 text-purple-500 mx-auto mb-4" />
      <h3 className="text-3xl font-bold text-gray-800 mb-2">{challenge.title}</h3>
      <p className="text-gray-600 mb-8">{challenge.description}</p>

      <div className="space-y-4 text-left">
        {challenge.clues.map((clue, index) => (
          <div key={index} className="bg-purple-50 p-4 rounded-lg border border-purple-200 flex items-start gap-4">
            <div className="flex-shrink-0 bg-purple-500 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold text-lg">
              {index + 1}
            </div>
            <div>
              <p className="font-semibold text-gray-800">{clue.clue}</p>
              <div className="flex items-center gap-2 mt-1 text-sm text-purple-700">
                <MagnifyingGlassIcon className="w-4 h-4" />
                <span>Location: {clue.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChallengeTab;
