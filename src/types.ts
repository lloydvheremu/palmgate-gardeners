export type ActiveTab = 'home' | 'services' | 'gallery' | 'about' | 'contact';

export interface QuoteState {
  gardenSize: 'small' | 'medium' | 'large' | 'estate';
  services: string[];
  frequency: 'weekly' | 'fortnightly' | 'monthly' | 'once-off';
  name: string;
  phone: string;
  email: string;
  address: string;
  message: string;
}

export interface PlantRecommendationQuery {
  sun: 'full-sun' | 'partial-shade' | 'deep-shade';
  soil: 'sandy' | 'loamy' | 'clay' | 'rocky';
  purpose: 'flowering' | 'privacy-hedge' | 'ground-cover' | 'drought-hardy' | 'shade-tree';
}

export interface Plant {
  name: string;
  scientificName: string;
  type: string;
  soil: string;
  sun: string;
  watering: string;
  growthRate: string;
  description: string;
  highlights: string[];
}
