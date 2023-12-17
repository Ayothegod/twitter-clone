import {
  UserRound,
  Twitter,
  Bookmark,
  CreditCard,
  Home,
  Search,
  Bell,
  Mail,
} from "lucide-react";

export const mobileSidebarLinks = [
  { to: "profile", icon: UserRound, text: "Profile" },
  { to: "premium", icon: Twitter, text: "Premium" },
  { to: "bookmark", icon: Bookmark, text: "Bookmark" },
  { to: "monetization", icon: CreditCard, text: "Monetization" },
];

export const footerLinks = [
  { to: "home", icon: Home },
  { to: "search", icon: Search },
  { to: "notification", icon: Bell },
  { to: "message", icon: Mail },
];
