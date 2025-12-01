
import React, { useMemo } from 'react';
import { Landmark } from '../types';
import { MapPinIcon } from './Icons';

interface MapTabProps {
  landmarks: Landmark[];
}

const MapTab: React.FC<MapTabProps> = ({ landmarks }) => {
  const bounds = useMemo(() => {
    if (landmarks.length === 0) {
      return { minLat: 0, maxLat: 0, minLng: 0, maxLng: 0 };
    }
    const lats = landmarks.map(l => l.latitude);
    const lngs = landmarks.map(l => l.longitude);
    return {
      minLat: Math.min(...lats),
      maxLat: Math.max(...lats),
      minLng: Math.min(...lngs),
      maxLng: Math.max(...lngs),
    };
  }, [landmarks]);

  const getPosition = (lat: number, lng: number) => {
    const latRange = bounds.maxLat - bounds.minLat;
    const lngRange = bounds.maxLng - bounds.minLng;
    
    // Avoid division by zero
    const top = latRange === 0 ? 50 : 10 + ((bounds.maxLat - lat) / latRange) * 80;
    const left = lngRange === 0 ? 50 : 10 + ((lng - bounds.minLng) / lngRange) * 80;

    return { top: `${top}%`, left: `${left}%` };
  };

  return (
    <div className="animate-fade-in-slow">
      <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Landmarks & Points of Interest</h3>
      <p className="text-center text-gray-600 mb-6">Hover over a pin to learn more about each location.</p>
      
      <div className="w-full h-[500px] bg-blue-100 rounded-lg p-4" style={{ perspective: '1000px' }}>
        <div 
          className="relative w-full h-full bg-blue-200 rounded-md border-2 border-blue-300 shadow-2xl overflow-hidden"
          style={{ transform: 'rotateX(60deg) rotateZ(-10deg)', transformStyle: 'preserve-3d' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-200 via-teal-200 to-blue-300 opacity-80"></div>
          {landmarks.map((landmark, index) => {
            const { top, left } = getPosition(landmark.latitude, landmark.longitude);
            return (
              <div 
                key={index}
                className="absolute group"
                style={{ top, left, transform: 'translate(-50%, -100%)' }}
              >
                <MapPinIcon className="w-8 h-8 text-red-500 drop-shadow-lg transform transition-transform duration-300 group-hover:scale-125 group-hover:-translate-y-1"/>
                <div 
                  className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-48 bg-white p-3 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ transform: 'rotateX(-60deg) translateZ(30px) translateY(-20px)'}}
                >
                  <h5 className="font-bold text-sm text-gray-900">{landmark.name}</h5>
                  <p className="text-xs text-gray-600">{landmark.description}</p>
                  <div className="absolute w-3 h-3 bg-white transform rotate-45 -bottom-1 left-1/2 -translate-x-1/2"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MapTab;
