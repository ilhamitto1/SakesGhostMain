export type Locale = "en" | "az";

export type NavLinkKey =
  | "services"
  | "process"
  | "projects"
  | "automation"
  | "industries"
  | "contact";

export type ServiceId =
  | "ai-assistants"
  | "social-automation"
  | "booking"
  | "ecommerce-ai"
  | "websites"
  | "dashboards"
  | "saas-mvp"
  | "motion";

export type ProjectId =
  | "realtime-assistant"
  | "booking-system"
  | "clinic-assistant"
  | "restaurant-ordering"
  | "academy-platform";

export type IndustryId =
  | "barber"
  | "beauty"
  | "tattoo"
  | "restaurant"
  | "clinic"
  | "academy"
  | "realestate"
  | "ecommerce"
  | "fitness"
  | "local"
  | "saas";

export type BuiltExperienceId =
  | "barber"
  | "beauty"
  | "tattoo"
  | "restaurants"
  | "clinics"
  | "academies"
  | "ecommerce"
  | "local";

export interface Translation {
  site: {
    name: string;
    description: string;
  };
  nav: Record<NavLinkKey, string>;
  buttons: {
    bookDemo: string;
    viewProjects: string;
    talkWhatsApp: string;
    contactSalesGhost: string;
    getStarted: string;
    startProject: string;
    viewLiveDemo: string;
    requestSimilarBuild: string;
    discussSystem: string;
    viewCaseStudy: string;
    exploreShowcase: string;
    yourProjectNext: string;
    yourProjectDesc: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleHighlight: string;
    titleLine2: string;
    stats: { value: string; label: string }[];
    visual: {
      orbit: Record<
        "ai" | "wa" | "booking" | "dashboard" | "ig",
        { label: string; sub: string }
      >;
      phoneBrand: string;
      phoneGreeting: string;
      phoneCta: string;
      phoneMetric: string;
    };
  };
  services: {
    label: string;
    title: string;
    subtitle: string;
    items: Record<ServiceId, { title: string; description: string }>;
  };
  process: {
    label: string;
    title: string;
    subtitle: string;
    steps: { title: string; description: string }[];
  };
  portfolio: {
    label: string;
    title: string;
    subtitle: string;
    live: { label: string; title: string; description: string };
    concept: { label: string; title: string; description: string };
    projects: Record<
      ProjectId,
      {
        title: string;
        description: string;
        badge: string;
        industry: string;
        features: string[];
        conceptNote?: string;
      }
    >;
    badges: {
      liveProduct: string;
      showcase: string;
      conceptExperience: string;
      deployed: string;
    };
  };
  builtExperiences: {
    label: string;
    title: string;
    subtitle: string;
    items: Record<BuiltExperienceId, string>;
  };
  automation: {
    label: string;
    title: string;
    subtitle: string;
    whatTitle: string;
    whatDesc: string;
    flowFooter: string;
    nodes: [string, string, string];
    items: string[];
  };
  industries: {
    label: string;
    title: string;
    subtitle: string;
    items: Record<IndustryId, { title: string; description: string }>;
  };
  creative: {
    label: string;
    title: string;
    subtitle: string;
    footer: string;
    items: { title: string; description: string }[];
  };
  why: {
    label: string;
    title: string;
    subtitle: string;
    items: { title: string; description: string }[];
  };
  cta: {
    label: string;
    title: string;
    subtitle: string;
  };
  footer: {
    description: string;
    servicesTitle: string;
    navigationTitle: string;
    rights: string;
    services: string[];
  };
  a11y: {
    openMenu: string;
    closeMenu: string;
    instagram: string;
    switchToEn: string;
    switchToAz: string;
  };
}
