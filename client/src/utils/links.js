import {
  UserRound,
  Twitter,
  Bookmark,
  CreditCard,
  Home,
  Search,
  Bell,
  Mail,
  MoreVertical,
  Pen,
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

export const sidebarLinks = [
  { to: "home", icon: Twitter, text: "", logo: true },
  { to: "home", icon: Home, text: "Home" },
  { to: "search", icon: Search, text: "Explore" },
  { to: "notification", icon: Bell, text: "Notification" },
  { to: "message", icon: Mail, text: "Message" },
  { to: "premium", icon: Twitter, text: "Premium" },
  { to: "profile", icon: UserRound, text: "Profile" },
  { to: "more", icon: MoreVertical, text: "More" },
  { to: "home", icon: Pen, text: "Tweet" },
];
