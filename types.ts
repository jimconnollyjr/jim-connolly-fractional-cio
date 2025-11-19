export interface ServiceItem {
  title: string;
  iconName: string;
  points: string[];
}

export interface MetricItem {
  label: string;
  value: string;
}

export interface HistoryItem {
  company: string;
  role: string;
  bullets: string[];
}

export interface EngagementType {
  title: string;
  commitment: string;
  description: string;
}