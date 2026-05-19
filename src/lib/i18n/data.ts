import type { Translation } from "@/locales";
import type { Project } from "@/lib/types";
import {
  CONCEPT_PROJECT_META,
  LIVE_PROJECT_META,
  PROJECT_META_LIST,
} from "@/lib/constants";

export function getLocalizedProjects(t: Translation): Project[] {
  return PROJECT_META_LIST.map((meta) => {
    const copy = t.portfolio.projects[meta.id];
    return {
      ...meta,
      title: copy.title,
      description: copy.description,
      badge: copy.badge,
      industry: copy.industry,
      features: copy.features,
    };
  });
}

export function getLiveProjects(t: Translation): Project[] {
  return LIVE_PROJECT_META.map((meta) => {
    const copy = t.portfolio.projects[meta.id];
    return { ...meta, ...copy };
  });
}

export function getConceptProjects(t: Translation): Project[] {
  return CONCEPT_PROJECT_META.map((meta) => {
    const copy = t.portfolio.projects[meta.id];
    return { ...meta, ...copy };
  });
}
