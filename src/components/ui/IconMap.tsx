import {
  Bot,
  Building2,
  Calendar,
  Dumbbell,
  Film,
  Globe,
  GraduationCap,
  LayoutDashboard,
  MessageCircle,
  PenTool,
  Rocket,
  Scissors,
  ShoppingBag,
  Sparkles,
  Store,
  Stethoscope,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Bot,
  MessageCircle,
  Calendar,
  ShoppingBag,
  Globe,
  LayoutDashboard,
  Rocket,
  Film,
  Scissors,
  Sparkles,
  PenTool,
  UtensilsCrossed,
  Stethoscope,
  GraduationCap,
  Building2,
  Dumbbell,
  Store,
};

export function getServiceIcon(name: string): LucideIcon {
  return iconMap[name] ?? Bot;
}
