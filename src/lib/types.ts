export type ProjectType = "live" | "concept";

export interface IndustryCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  gradient: string;
  accent: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  type: ProjectType;
  badge: string;
  liveUrl?: string;
  images: readonly string[];
  features: readonly string[];
  accent: string;
  glow: string;
  industry?: string;
}
