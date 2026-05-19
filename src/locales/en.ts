import type { Translation } from "./types";

export const en: Translation = {
  site: {
    name: "SalesGhost",
    description:
      "We build AI assistants, automation workflows, smart booking systems and digital products that help businesses respond faster, sell smarter and operate 24/7.",
  },
  nav: {
    services: "Services",
    process: "Process",
    projects: "Projects",
    automation: "Automation",
    industries: "Industries",
    contact: "Contact",
  },
  buttons: {
    bookDemo: "Book a Demo",
    viewProjects: "View Projects",
    talkWhatsApp: "Talk on WhatsApp",
    contactSalesGhost: "Contact SalesGhost",
    getStarted: "Get Started",
    startProject: "Start a Project",
    viewLiveDemo: "View Live Demo",
    requestSimilarBuild: "Request Similar Build",
    discussSystem: "Discuss this system",
    viewCaseStudy: "View case study",
    exploreShowcase: "Explore showcase",
    yourProjectNext: "Your project next?",
    yourProjectDesc: "We design and build custom AI systems for your industry.",
  },
  hero: {
    badge: "AI Automation & Digital Product Studio",
    titleLine1: "AI Systems That Turn",
    titleHighlight: "Business Interactions",
    titleLine2: "Into Sales",
    stats: [
      { value: "24/7", label: "AI Operations" },
      { value: "5+", label: "Products & Showcases" },
      { value: "11+", label: "Industries" },
    ],
    visual: {
      orbit: {
        ai: { label: "AI Assistant", sub: "24/7 replies" },
        wa: { label: "WhatsApp", sub: "Automation" },
        booking: { label: "Booking", sub: "Smart slots" },
        dashboard: { label: "Dashboard", sub: "Live metrics" },
        ig: { label: "Instagram", sub: "DM flows" },
      },
      phoneBrand: "SalesGhost AI",
      phoneGreeting: "Hi — how can we help grow your business today?",
      phoneCta: "Book a demo →",
      phoneMetric: "+34% conversion · live",
    },
  },
  services: {
    label: "Services",
    title: "AI Systems & Digital Products We Build",
    subtitle:
      "From intelligent assistants to full SaaS products — every solution is engineered to automate, convert and scale your business.",
    items: {
      "ai-assistants": {
        title: "AI Assistants",
        description:
          "Custom AI chatbots and voice assistants that qualify leads, answer questions and drive conversions 24/7.",
      },
      "social-automation": {
        title: "Instagram & WhatsApp Automation",
        description:
          "Automated DM flows, lead capture and customer follow-ups across your most active channels.",
      },
      booking: {
        title: "Smart Booking Systems",
        description:
          "Online scheduling with time-slot logic, service durations and admin dashboards for service businesses.",
      },
      "ecommerce-ai": {
        title: "E-commerce AI Recommendation Systems",
        description:
          "Real-time behavior tracking, personalized offers and smart product recommendations that boost AOV.",
      },
      websites: {
        title: "Business Websites",
        description:
          "High-conversion websites with premium design, fast performance and conversion-focused UX.",
      },
      dashboards: {
        title: "Dashboards & Admin Panels",
        description:
          "Custom admin interfaces to manage bookings, customers, analytics and business operations.",
      },
      "saas-mvp": {
        title: "Custom SaaS MVPs",
        description:
          "Rapid MVP development for founders who need a working product to validate and scale fast.",
      },
      motion: {
        title: "AI Content & Motion Creatives",
        description:
          "SaaS motion videos, product showcases and AI-powered ad creatives for modern brand presence.",
      },
    },
  },
  process: {
    label: "Process",
    title: "How We Build Your AI System",
    subtitle:
      "A clear, proven workflow — from business analysis to live automation that drives measurable results.",
    steps: [
      {
        title: "Analyze the Business Problem",
        description:
          "We map your sales flow, customer touchpoints and operational bottlenecks to identify where AI and automation create the highest impact.",
      },
      {
        title: "Build the AI / Digital System",
        description:
          "Our team designs and develops your custom solution — assistants, booking flows, dashboards or full SaaS products — with production-ready quality.",
      },
      {
        title: "Automate Sales, Booking & Communication",
        description:
          "Launch systems that respond instantly, book appointments automatically and keep customers engaged without manual effort.",
      },
    ],
  },
  portfolio: {
    label: "Portfolio",
    title: "Products, Live Demos & SalesGhost Showcases",
    subtitle:
      "Two deployed systems you can try today — plus concept experiences that show how we design AI platforms for clinics, restaurants, academies and more.",
    live: {
      label: "Live Products",
      title: "Deployed & Ready to Explore",
      description:
        "Fully functional demos — open in a new tab and experience the systems in action.",
    },
    concept: {
      label: "SalesGhost Showcase",
      title: "Concept Experiences & Product Direction",
      description:
        "Premium UI concepts and product visions — built under SalesGhost direction. Each can become your custom platform.",
    },
    badges: {
      liveProduct: "Live Product",
      showcase: "SalesGhost Showcase",
      conceptExperience: "Concept Experience",
      deployed: "Deployed",
    },
    projects: {
      "realtime-assistant": {
        title: "Realtime AI E-commerce Assistant",
        description:
          "An AI-powered e-commerce automation system that analyzes customer behavior in real time and generates personalized offers, smart product recommendations and automated customer engagement flows.",
        badge: "Live Product",
        industry: "E-commerce",
        features: [
          "Real-time customer behavior tracking",
          "AI-generated personalized offers",
          "Smart product recommendations",
          "Website notification automation",
          "Email / CRM workflow potential",
          "Admin & analytics view",
        ],
      },
      "booking-system": {
        title: "Smart Booking System for Service Businesses",
        description:
          "A responsive booking system where customers choose services, dates and available time slots online, while business owners manage all reservations from a simple admin dashboard.",
        badge: "Live Product",
        industry: "Barber & Services",
        features: [
          "Online booking flow",
          "Admin dashboard",
          "Time-slot blocking",
          "Service duration logic",
          "Closed days management",
          "Mobile responsive design",
        ],
      },
      "clinic-assistant": {
        title: "AI Clinic Assistant",
        description:
          "AI-powered patient communication and appointment management platform with smart dashboard and automation — designed for clinics that need 24/7 responsiveness and organized patient flow.",
        badge: "SalesGhost Showcase",
        industry: "Clinics",
        conceptNote:
          "Concept experience — product direction, UX and visual systems by SalesGhost. Available as a custom build for your business.",
        features: [
          "AI patient messaging & triage",
          "Appointment scheduling automation",
          "Smart clinic dashboard",
          "Follow-up & reminder flows",
          "Admin analytics overview",
          "Mobile-friendly patient portal",
        ],
      },
      "restaurant-ordering": {
        title: "Restaurant Smart Ordering System",
        description:
          "Restaurant system with digital menu, reservations, customer flow and AI-assisted interactions — built to streamline orders, tables and guest experience in one cohesive platform.",
        badge: "Concept Experience",
        industry: "Restaurants",
        conceptNote:
          "Concept experience — product direction, UX and visual systems by SalesGhost. Available as a custom build for your business.",
        features: [
          "Digital menu & ordering flow",
          "Table reservations",
          "AI-assisted guest interactions",
          "Kitchen & order management view",
          "Customer journey automation",
          "Owner analytics dashboard",
        ],
      },
      "academy-platform": {
        title: "Academy Management Platform",
        description:
          "Student dashboard, enrollment flows and smart management platform — a complete academy operating system for courses, students and institutional growth.",
        badge: "SalesGhost Showcase",
        industry: "Academies",
        conceptNote:
          "Concept experience — product direction, UX and visual systems by SalesGhost. Available as a custom build for your business.",
        features: [
          "Student dashboard & progress",
          "Enrollment & onboarding flows",
          "Course & class management",
          "Payment & subscription logic",
          "AI student support assistant",
          "Admin reporting & insights",
        ],
      },
    },
  },
  builtExperiences: {
    label: "Industries",
    title: "Built Experiences Across Industries",
    subtitle:
      "From barbershops to academies — SalesGhost designs AI systems and digital products tailored to how each business actually operates.",
    items: {
      barber: "Barber",
      beauty: "Beauty",
      tattoo: "Tattoo",
      restaurants: "Restaurants",
      clinics: "Clinics",
      academies: "Academies",
      ecommerce: "E-commerce",
      local: "Local businesses",
    },
  },
  automation: {
    label: "Automation",
    title: "Intelligent Automation for Every Channel",
    subtitle:
      "SalesGhost builds end-to-end automation pipelines that connect your customers, CRM and business tools — without manual handoffs.",
    whatTitle: "What we automate",
    whatDesc:
      "From first contact to closed deal — intelligent flows that work across WhatsApp, Instagram, your website and internal tools.",
    flowFooter: "Connected workflows across your entire customer journey",
    nodes: ["Customer Message", "AI Qualification", "CRM / n8n Flow"],
    items: [
      "AI chatbots",
      "Lead qualification flows",
      "Auto-replies",
      "Customer support assistants",
      "CRM / Google Sheets / n8n workflows",
      "WhatsApp / Instagram / site automation",
    ],
  },
  industries: {
    label: "Industries",
    title: "Built for Businesses That Need Results",
    subtitle:
      "Whether you run a local salon or a growing SaaS — SalesGhost adapts AI systems to your industry and workflow.",
    items: {
      barber: {
        title: "Barber Shops",
        description: "Smart bookings & AI customer handling",
      },
      beauty: {
        title: "Beauty Salons",
        description: "Appointments, reminders & client chat",
      },
      tattoo: {
        title: "Tattoo Studios",
        description: "Consultation flows & deposit booking",
      },
      restaurant: {
        title: "Restaurants",
        description: "Reservations + digital ordering",
      },
      clinic: {
        title: "Clinics",
        description: "Patient workflows & dashboards",
      },
      academy: {
        title: "Academies",
        description: "Enrollment, scheduling & parent comms",
      },
      realestate: {
        title: "Real Estate",
        description: "Lead capture & viewing automation",
      },
      ecommerce: {
        title: "E-commerce",
        description: "Cart recovery & support automation",
      },
      fitness: {
        title: "Fitness",
        description: "Class booking & member engagement",
      },
      local: {
        title: "Local Businesses",
        description: "24/7 replies across every channel",
      },
      saas: {
        title: "SaaS Startups",
        description: "Onboarding, demos & product-led growth",
      },
    },
  },
  creative: {
    label: "Creative",
    title: "Cinematic Product & Brand Content",
    subtitle:
      "Beyond code — SalesGhost produces motion design and AI-powered creatives that make your product impossible to ignore.",
    footer: "Motion reels · Product demos · Launch visuals · Social ad suites",
    items: [
      {
        title: "SaaS Motion Videos",
        description:
          "Cinematic product demos that explain complex AI systems in seconds.",
      },
      {
        title: "Product Showcase Visuals",
        description:
          "Premium UI captures and animated walkthroughs for your digital products.",
      },
      {
        title: "AI Ad Creatives",
        description:
          "Scroll-stopping ads powered by AI-generated visuals and motion design.",
      },
      {
        title: "Social Media Content",
        description:
          "Consistent, on-brand content for Instagram, TikTok and LinkedIn.",
      },
      {
        title: "Brand Presentation Assets",
        description:
          "Pitch decks, launch visuals and investor-ready product presentations.",
      },
    ],
  },
  why: {
    label: "Why SalesGhost",
    title: "Why Businesses Choose SalesGhost",
    subtitle:
      "We combine AI engineering, product design and automation expertise to deliver systems that actually move revenue.",
    items: [
      {
        title: "Fast MVP Delivery",
        description:
          "Ship working products in weeks, not months — so you can validate and iterate quickly.",
      },
      {
        title: "AI-First Approach",
        description:
          "Every solution is built around intelligent automation, not bolted-on afterthoughts.",
      },
      {
        title: "Business-Focused Systems",
        description:
          "We design for revenue, retention and operational efficiency — not just aesthetics.",
      },
      {
        title: "Custom Solutions",
        description:
          "No cookie-cutter templates. Your workflows, your brand, your business logic.",
      },
      {
        title: "Automation + Design + Product",
        description:
          "Full-stack thinking: UX, backend logic and automation pipelines in one studio.",
      },
      {
        title: "Built for Conversion",
        description:
          "Every interface and flow is engineered to turn interactions into measurable results.",
      },
    ],
  },
  cta: {
    label: "Get Started",
    title: "Ready to automate your business?",
    subtitle:
      "Message us on WhatsApp — one click and we'll discuss your AI assistant, booking system, or custom digital product.",
  },
  footer: {
    description:
      "SalesGhost is an AI automation and digital product studio. We build intelligent systems — assistants, booking platforms, e-commerce AI and custom SaaS products — that help businesses sell smarter and operate around the clock.",
    servicesTitle: "Services",
    navigationTitle: "Navigation",
    rights: "All rights reserved.",
    services: [
      "AI Assistants",
      "Booking Systems",
      "E-commerce AI",
      "Automation",
      "Websites & Dashboards",
      "SaaS MVPs",
      "Motion Creatives",
    ],
  },
  a11y: {
    openMenu: "Open menu",
    closeMenu: "Close menu",
    instagram: "Instagram",
    switchToEn: "Switch to English",
    switchToAz: "Switch to Azerbaijani",
  },
};
