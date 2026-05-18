import type { Project } from "./types";

export const SITE = {
  name: "SalesGhost",
  tagline: "AI Systems That Turn Business Interactions Into Sales",
  description:
    "We build AI assistants, automation workflows, smart booking systems and digital products that help businesses respond faster, sell smarter and operate 24/7.",
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

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Projects", href: "#projects" },
  { label: "Automation", href: "#automation" },
  { label: "Industries", href: "#industries" },
  { label: "Contact", href: "#contact" },
] as const;

export const SERVICES = [
  {
    title: "AI Assistants",
    description:
      "Custom AI chatbots and voice assistants that qualify leads, answer questions and drive conversions 24/7.",
    icon: "Bot",
  },
  {
    title: "Instagram & WhatsApp Automation",
    description:
      "Automated DM flows, lead capture and customer follow-ups across your most active channels.",
    icon: "MessageCircle",
  },
  {
    title: "Smart Booking Systems",
    description:
      "Online scheduling with time-slot logic, service durations and admin dashboards for service businesses.",
    icon: "Calendar",
  },
  {
    title: "E-commerce AI Recommendation Systems",
    description:
      "Real-time behavior tracking, personalized offers and smart product recommendations that boost AOV.",
    icon: "ShoppingCart",
  },
  {
    title: "Business Websites",
    description:
      "High-conversion websites with premium design, fast performance and conversion-focused UX.",
    icon: "Globe",
  },
  {
    title: "Dashboards & Admin Panels",
    description:
      "Custom admin interfaces to manage bookings, customers, analytics and business operations.",
    icon: "LayoutDashboard",
  },
  {
    title: "Custom SaaS MVPs",
    description:
      "Rapid MVP development for founders who need a working product to validate and scale fast.",
    icon: "Rocket",
  },
  {
    title: "AI Content & Motion Creatives",
    description:
      "SaaS motion videos, product showcases and AI-powered ad creatives for modern brand presence.",
    icon: "Film",
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Analyze the Business Problem",
    description:
      "We map your sales flow, customer touchpoints and operational bottlenecks to identify where AI and automation create the highest impact.",
  },
  {
    step: "02",
    title: "Build the AI / Digital System",
    description:
      "Our team designs and develops your custom solution — assistants, booking flows, dashboards or full SaaS products — with production-ready quality.",
  },
  {
    step: "03",
    title: "Automate Sales, Booking & Communication",
    description:
      "Launch systems that respond instantly, book appointments automatically and keep customers engaged without manual effort.",
  },
] as const;

export const LIVE_PROJECTS: Project[] = [
  {
    id: "realtime-assistant",
    title: "Realtime AI E-commerce Assistant",
    description:
      "An AI-powered e-commerce automation system that analyzes customer behavior in real time and generates personalized offers, smart product recommendations and automated customer engagement flows.",
    type: "live",
    badge: "Live Product",
    liveUrl: "https://sales-ghost.vercel.app/",
    industry: "E-commerce",
    images: [
      "/images/realtimeassistant/1.jpg",
      "/images/realtimeassistant/2.jpg",
      "/images/realtimeassistant/3.jpg",
    ],
    features: [
      "Real-time customer behavior tracking",
      "AI-generated personalized offers",
      "Smart product recommendations",
      "Website notification automation",
      "Email / CRM workflow potential",
      "Admin & analytics view",
    ],
    accent: "from-blue-500/20 to-indigo-500/10",
    glow: "rgba(59, 130, 246, 0.3)",
  },
  {
    id: "booking-system",
    title: "Smart Booking System for Service Businesses",
    description:
      "A responsive booking system where customers choose services, dates and available time slots online, while business owners manage all reservations from a simple admin dashboard.",
    type: "live",
    badge: "Live Product",
    liveUrl: "https://barber-booking-system-demo.vercel.app/",
    industry: "Barber & Services",
    images: [
      "/images/booking-demo/1.jpg",
      "/images/booking-demo/2.jpg",
      "/images/booking-demo/3.jpg",
    ],
    features: [
      "Online booking flow",
      "Admin dashboard",
      "Time-slot blocking",
      "Service duration logic",
      "Closed days management",
      "Mobile responsive design",
    ],
    accent: "from-purple-500/20 to-violet-500/10",
    glow: "rgba(139, 92, 246, 0.3)",
  },
];

export const CONCEPT_PROJECTS: Project[] = [
  {
    id: "clinic-assistant",
    title: "AI Clinic Assistant",
    description:
      "AI-powered patient communication and appointment management platform with smart dashboard and automation — designed for clinics that need 24/7 responsiveness and organized patient flow.",
    type: "concept",
    badge: "SalesGhost Showcase",
    industry: "Clinics",
    images: [
      "/images/concepts/clinic/1.png",
      "/images/concepts/clinic/2.png",
      "/images/concepts/clinic/3.png",
    ],
    features: [
      "AI patient messaging & triage",
      "Appointment scheduling automation",
      "Smart clinic dashboard",
      "Follow-up & reminder flows",
      "Admin analytics overview",
      "Mobile-friendly patient portal",
    ],
    accent: "from-cyan-500/20 to-blue-500/10",
    glow: "rgba(34, 211, 238, 0.25)",
  },
  {
    id: "restaurant-ordering",
    title: "Restaurant Smart Ordering System",
    description:
      "Restaurant system with digital menu, reservations, customer flow and AI-assisted interactions — built to streamline orders, tables and guest experience in one cohesive platform.",
    type: "concept",
    badge: "Concept Experience",
    industry: "Restaurants",
    images: [
      "/images/concepts/restaurant/1.png",
      "/images/concepts/restaurant/2.png",
      "/images/concepts/restaurant/3.png",
    ],
    features: [
      "Digital menu & ordering flow",
      "Table reservations",
      "AI-assisted guest interactions",
      "Kitchen & order management view",
      "Customer journey automation",
      "Owner analytics dashboard",
    ],
    accent: "from-amber-500/15 to-orange-500/10",
    glow: "rgba(251, 146, 60, 0.25)",
  },
  {
    id: "academy-platform",
    title: "Academy Management Platform",
    description:
      "Student dashboard, enrollment flows and smart management platform — a complete academy operating system for courses, students and institutional growth.",
    type: "concept",
    badge: "SalesGhost Showcase",
    industry: "Academies",
    images: [
      "/images/concepts/academy/1.png",
      "/images/concepts/academy/2.png",
      "/images/concepts/academy/3.png",
    ],
    features: [
      "Student dashboard & progress",
      "Enrollment & onboarding flows",
      "Course & class management",
      "Payment & subscription logic",
      "AI student support assistant",
      "Admin reporting & insights",
    ],
    accent: "from-violet-500/20 to-fuchsia-500/10",
    glow: "rgba(167, 139, 250, 0.3)",
  },
];

export const ALL_PROJECTS: Project[] = [
  ...LIVE_PROJECTS,
  ...CONCEPT_PROJECTS,
];

export const BUILT_EXPERIENCES = [
  { name: "Barber", icon: "Scissors" },
  { name: "Beauty", icon: "Sparkles" },
  { name: "Tattoo", icon: "PenTool" },
  { name: "Restaurants", icon: "UtensilsCrossed" },
  { name: "Clinics", icon: "Stethoscope" },
  { name: "Academies", icon: "GraduationCap" },
  { name: "E-commerce", icon: "ShoppingBag" },
  { name: "Local businesses", icon: "Store" },
] as const;

export const AUTOMATION_ITEMS = [
  "AI chatbots",
  "Lead qualification flows",
  "Auto-replies",
  "Customer support assistants",
  "CRM / Google Sheets / n8n workflows",
  "WhatsApp / Instagram / site automation",
] as const;

export const INDUSTRY_CARDS = [
  {
    id: "barber",
    title: "Barber Shops",
    description: "Smart bookings & AI customer handling",
    icon: "Scissors",
    gradient: "from-amber-500/25 to-orange-600/5",
    accent: "text-amber-400",
  },
  {
    id: "beauty",
    title: "Beauty Salons",
    description: "Appointments, reminders & client chat",
    icon: "Sparkles",
    gradient: "from-pink-500/25 to-rose-600/5",
    accent: "text-pink-400",
  },
  {
    id: "tattoo",
    title: "Tattoo Studios",
    description: "Consultation flows & deposit booking",
    icon: "PenTool",
    gradient: "from-violet-500/25 to-purple-600/5",
    accent: "text-violet-400",
  },
  {
    id: "restaurant",
    title: "Restaurants",
    description: "Reservations + digital ordering",
    icon: "UtensilsCrossed",
    gradient: "from-orange-500/25 to-red-600/5",
    accent: "text-orange-400",
  },
  {
    id: "clinic",
    title: "Clinics",
    description: "Patient workflows & dashboards",
    icon: "Stethoscope",
    gradient: "from-cyan-500/25 to-teal-600/5",
    accent: "text-cyan-400",
  },
  {
    id: "academy",
    title: "Academies",
    description: "Enrollment, scheduling & parent comms",
    icon: "GraduationCap",
    gradient: "from-blue-500/25 to-indigo-600/5",
    accent: "text-blue-400",
  },
  {
    id: "realestate",
    title: "Real Estate",
    description: "Lead capture & viewing automation",
    icon: "Building2",
    gradient: "from-slate-400/20 to-slate-600/5",
    accent: "text-slate-300",
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    description: "Cart recovery & support automation",
    icon: "ShoppingBag",
    gradient: "from-emerald-500/25 to-green-600/5",
    accent: "text-emerald-400",
  },
  {
    id: "fitness",
    title: "Fitness",
    description: "Class booking & member engagement",
    icon: "Dumbbell",
    gradient: "from-lime-500/25 to-green-600/5",
    accent: "text-lime-400",
  },
  {
    id: "local",
    title: "Local Businesses",
    description: "24/7 replies across every channel",
    icon: "Store",
    gradient: "from-indigo-500/25 to-purple-600/5",
    accent: "text-indigo-400",
  },
  {
    id: "saas",
    title: "SaaS Startups",
    description: "Onboarding, demos & product-led growth",
    icon: "Rocket",
    gradient: "from-purple-500/25 to-blue-600/5",
    accent: "text-purple-400",
  },
] as const;

export const MOTION_ITEMS = [
  {
    title: "SaaS Motion Videos",
    description: "Cinematic product demos that explain complex AI systems in seconds.",
  },
  {
    title: "Product Showcase Visuals",
    description: "Premium UI captures and animated walkthroughs for your digital products.",
  },
  {
    title: "AI Ad Creatives",
    description: "Scroll-stopping ads powered by AI-generated visuals and motion design.",
  },
  {
    title: "Social Media Content",
    description: "Consistent, on-brand content for Instagram, TikTok and LinkedIn.",
  },
  {
    title: "Brand Presentation Assets",
    description: "Pitch decks, launch visuals and investor-ready product presentations.",
  },
] as const;

export const WHY_ITEMS = [
  {
    title: "Fast MVP Delivery",
    description: "Ship working products in weeks, not months — so you can validate and iterate quickly.",
  },
  {
    title: "AI-First Approach",
    description: "Every solution is built around intelligent automation, not bolted-on afterthoughts.",
  },
  {
    title: "Business-Focused Systems",
    description: "We design for revenue, retention and operational efficiency — not just aesthetics.",
  },
  {
    title: "Custom Solutions",
    description: "No cookie-cutter templates. Your workflows, your brand, your business logic.",
  },
  {
    title: "Automation + Design + Product",
    description: "Full-stack thinking: UX, backend logic and automation pipelines in one studio.",
  },
  {
    title: "Built for Conversion",
    description: "Every interface and flow is engineered to turn interactions into measurable results.",
  },
] as const;

export const FOOTER_SERVICES = [
  "AI Assistants",
  "Booking Systems",
  "E-commerce AI",
  "Automation",
  "Websites & Dashboards",
  "SaaS MVPs",
  "Motion Creatives",
] as const;
