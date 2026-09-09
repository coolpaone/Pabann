export interface MilestoneExperience {
  id: string;
  period: string;
  roleType: string;
  role: string;
  company: string;
  companyUrl?: string;
  location?: string;
  summary?: string;
  highlights: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  accentColor: 'primary' | 'secondary';
  skills: {
    name: string;
    percentage: number;
    detail?: string;
  }[];
  tags: string[];
}

export interface GalleryItem {
  id: number;
  url: string;
  alt: string;
  title?: string;
  location?: string;
}

export interface TelemetryStatus {
  node: string;
  region: string;
  latencyMs: number;
  opticalLossDbm: string;
  uptimePercent: string;
  status: 'OPTIMAL' | 'ACTIVE' | 'DISPATCH';
  timestamp: string;
}
