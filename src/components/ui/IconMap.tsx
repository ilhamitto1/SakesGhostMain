import {
  Bot,
  Calendar,
  Film,
  Globe,
  LayoutDashboard,
  MessageCircle,
  Rocket,
  ShoppingCart,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Bot,
  MessageCircle,
  Calendar,
  ShoppingCart,
  Globe,
  LayoutDashboard,
  Rocket,
  Film,
};

export function getServiceIcon(name: string): LucideIcon {
  return iconMap[name] ?? Bot;
}
