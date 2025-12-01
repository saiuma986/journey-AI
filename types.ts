
export interface DayPlan {
  day: number;
  title: string;
  description: string;
  activities: {
    time: string;
    activity: string;
    details: string;
  }[];
}

export interface Landmark {
  name: string;
  description: string;
  latitude: number;
  longitude: number;
}

export interface TravelTip {
  tip: string;
  details: string;
}

export interface LocalPhrase {
  phrase: string;
  translation: string;
}

export interface Challenge {
  title: string;
  description: string;
  clues: {
    clue: string;
    location: string;
  }[];
}

export interface TravelGuideResponse {
  location: string;
  title: string;
  summary: string;
  itinerary: DayPlan[];
  landmarks: Landmark[];
  travelTips: TravelTip[];
  localPhrases: LocalPhrase[];
  scavengerHunt: Challenge;
}

export enum Tab {
  Guide = 'Guide',
  Map = 'Map',
  Challenge = 'Challenge'
}
