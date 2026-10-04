export interface ProgramItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  icon: string;
  targetAudience: string;
}

export interface BookingSlot {
  date: string;
  displayDate: string;
  dayName: string;
  times: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'strength' | 'habits' | 'coaching' | 'nutrition';
  image: string;
  caption: string;
}

export interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  quickReplies?: string[];
  actionLink?: string;
  actionText?: string;
}
