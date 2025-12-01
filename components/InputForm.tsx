import React from 'react';
import { SparklesIcon } from './Icons';

interface InputFormProps {
  location: string;
  setLocation: (value: string) => void;
  interests: string;
  setInterests: (value: string) => void;
  days: number;
  setDays: (value: number) => void;
  budget: string;
  setBudget: (value: string) => void;
  onGenerate: () => void;
  isLoading: boolean;
}

const InputForm: React.FC<InputFormProps> = ({
  location, setLocation,
  interests, setInterests,
  days, setDays,
  budget, setBudget,
  onGenerate, isLoading
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate();
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
      <div className="lg:col-span-1">
        <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
          Location
        </label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter a destination..."
          className="w-full px-4 py-2 bg-white/50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
          disabled={isLoading}
        />
      </div>
      <div className="lg:col-span-1">
        <label htmlFor="interests" className="block text-sm font-medium text-gray-700 mb-1">
          Interests (optional)
        </label>
        <input
          type="text"
          id="interests"
          value={interests}
          onChange={(e) => setInterests(e.target.value)}
          placeholder="History, food, photography..."
          className="w-full px-4 py-2 bg-white/50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
          disabled={isLoading}
        />
      </div>
       <div className="lg:col-span-1">
        <label htmlFor="days" className="block text-sm font-medium text-gray-700 mb-1">
          Number of Days
        </label>
        <input
          type="number"
          id="days"
          value={days}
          onChange={(e) => setDays(parseInt(e.target.value, 10))}
          min="1"
          max="14"
          className="w-full px-4 py-2 bg-white/50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
          disabled={isLoading}
        />
      </div>
       <div className="lg:col-span-1">
        <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
          Travel Budget
        </label>
        <select
          id="budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className="w-full px-4 py-2 bg-white/50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
          disabled={isLoading}
        >
          <option>Economy</option>
          <option>Moderate</option>
          <option>Luxury</option>
        </select>
      </div>
      <div className="lg:col-span-1">
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300 disabled:cursor-not-allowed transition-all transform hover:scale-105"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating...
            </>
          ) : (
            <>
              <SparklesIcon className="w-5 h-5" />
              Generate
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default InputForm;