export type ProjectType = "live" | "concept";

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
