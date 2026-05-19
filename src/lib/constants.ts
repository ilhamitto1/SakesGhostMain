import type { ProjectId, ServiceId } from "@/locales/types";
import type { Project } from "./types";

export const SITE = {
  name: "SalesGhost",
} as const;

export const CONTACT = {
  whatsappUrl: "https://wa.me/37127907470",
  whatsappPhone: "+371 27 907 470",
  instagramUrl: "https://www.instagram.com/salesghost_/",
  instagramHandle: "@salesghost_",
} as const;

export const EXTERNAL_LINK_PROPS = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

export const NAV_HREFS = [
  { key: "services" as const, href: "#services" },
  { key: "process" as const, href: "#process" },
  { key: "projects" as const, href: "#projects" },
  { key: "automation" as const, href: "#automation" },
  { key: "industries" as const, href: "#industries" },
  { key: "contact" as const, href: "#contact" },
] as const;

export const SERVICE_META: { id: ServiceId; icon: string }[] = [
  { id: "ai-assistants", icon: "Bot" },
  { id: "social-automation", icon: "MessageCircle" },
  { id: "booking", icon: "Calendar" },
  { id: "ecommerce-ai", icon: "ShoppingCart" },
  { id: "websites", icon: "Globe" },
  { id: "dashboards", icon: "LayoutDashboard" },
  { id: "saas-mvp", icon: "Rocket" },
  { id: "motion", icon: "Film" },
];

export const PROCESS_STEP_NUMBERS = ["01", "02", "03"] as const;

type ProjectMeta = Pick<
  Project,
  "id" | "type" | "liveUrl" | "images" | "accent" | "glow"
> & { id: ProjectId };

export const LIVE_PROJECT_META: ProjectMeta[] = [
  {
    id: "realtime-assistant",
    type: "live",
    liveUrl: "https://sales-ghost.vercel.app/",
    images: [
      "/images/realtimeassistant/1.jpg",
      "/images/realtimeassistant/2.jpg",
      "/images/realtimeassistant/3.jpg",
    ],
    accent: "from-blue-500/20 to-indigo-500/10",
    glow: "rgba(59, 130, 246, 0.3)",
  },
  {
    id: "booking-system",
    type: "live",
    liveUrl: "https://barber-booking-system-demo.vercel.app/",
    images: [
      "/images/booking-demo/1.jpg",
      "/images/booking-demo/2.jpg",
      "/images/booking-demo/3.jpg",
    ],
    accent: "from-purple-500/20 to-violet-500/10",
    glow: "rgba(139, 92, 246, 0.3)",
  },
];

export const CONCEPT_PROJECT_META: ProjectMeta[] = [
  {
    id: "clinic-assistant",
    type: "concept",
    images: [
      "/images/concepts/clinic/1.png",
      "/images/concepts/clinic/2.png",
      "/images/concepts/clinic/3.png",
    ],
    accent: "from-cyan-500/20 to-blue-500/10",
    glow: "rgba(34, 211, 238, 0.25)",
  },
  {
    id: "restaurant-ordering",
    type: "concept",
    images: [
      "/images/concepts/restaurant/1.png",
      "/images/concepts/restaurant/2.png",
      "/images/concepts/restaurant/3.png",
    ],
    accent: "from-amber-500/15 to-orange-500/10",
    glow: "rgba(251, 146, 60, 0.25)",
  },
  {
    id: "academy-platform",
    type: "concept",
    images: [
      "/images/concepts/academy/1.png",
      "/images/concepts/academy/2.png",
      "/images/concepts/academy/3.png",
    ],
    accent: "from-violet-500/20 to-fuchsia-500/10",
    glow: "rgba(167, 139, 250, 0.3)",
  },
];

export const PROJECT_META_LIST: ProjectMeta[] = [
  ...LIVE_PROJECT_META,
  ...CONCEPT_PROJECT_META,
];

export const BUILT_EXPERIENCE_META = [
  { id: "barber" as const, icon: "Scissors" },
  { id: "beauty" as const, icon: "Sparkles" },
  { id: "tattoo" as const, icon: "PenTool" },
  { id: "restaurants" as const, icon: "UtensilsCrossed" },
  { id: "clinics" as const, icon: "Stethoscope" },
  { id: "academies" as const, icon: "GraduationCap" },
  { id: "ecommerce" as const, icon: "ShoppingBag" },
  { id: "local" as const, icon: "Store" },
];

export const INDUSTRY_META = [
  { id: "barber" as const, icon: "Scissors", gradient: "from-amber-500/25 to-orange-600/5", accent: "text-amber-400" },
  { id: "beauty" as const, icon: "Sparkles", gradient: "from-pink-500/25 to-rose-600/5", accent: "text-pink-400" },
  { id: "tattoo" as const, icon: "PenTool", gradient: "from-violet-500/25 to-purple-600/5", accent: "text-violet-400" },
  { id: "restaurant" as const, icon: "UtensilsCrossed", gradient: "from-orange-500/25 to-red-600/5", accent: "text-orange-400" },
  { id: "clinic" as const, icon: "Stethoscope", gradient: "from-cyan-500/25 to-teal-600/5", accent: "text-cyan-400" },
  { id: "academy" as const, icon: "GraduationCap", gradient: "from-blue-500/25 to-indigo-600/5", accent: "text-blue-400" },
  { id: "realestate" as const, icon: "Building2", gradient: "from-slate-400/20 to-slate-600/5", accent: "text-slate-300" },
  { id: "ecommerce" as const, icon: "ShoppingBag", gradient: "from-emerald-500/25 to-green-600/5", accent: "text-emerald-400" },
  { id: "fitness" as const, icon: "Dumbbell", gradient: "from-lime-500/25 to-green-600/5", accent: "text-lime-400" },
  { id: "local" as const, icon: "Store", gradient: "from-indigo-500/25 to-purple-600/5", accent: "text-indigo-400" },
  { id: "saas" as const, icon: "Rocket", gradient: "from-purple-500/25 to-blue-600/5", accent: "text-purple-400" },
] as const;
