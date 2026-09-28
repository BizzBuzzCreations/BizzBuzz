import {
  Headset, Headphones, Code, Globe, ChartLine, BarChart3, Search, Video, Share2,
  Megaphone, Target, Bot, Workflow, Rocket, PenTool, Handshake, Users, Briefcase,
  Lightbulb, Mail, Phone, MessageCircle, ShoppingCart, Smartphone, Monitor, Layers,
  Zap, Shield, CheckCircle, Star, Heart, TrendingUp, Award, Settings, Cpu, Database,
  FileText, Camera, Palette, MapPin, Clock, DollarSign, Compass, Puzzle, BadgeCheck,
  Sparkles, Cog, ClipboardCheck, Wrench, Newspaper,
} from "lucide-react";

// Icons an admin can pick in the dashboard for a card/step ("icon" field
// type — see components/sections/dashboardOutsideLocation.js). The saved
// value is just the name string; resolveIcon turns it back into the
// component, falling back to the section's own built-in icon whenever
// nothing (or an unknown name) is saved.
export const ICON_OPTIONS = {
  Headset, Headphones, Code, Globe, ChartLine, BarChart3, Search, Video, Share2,
  Megaphone, Target, Bot, Workflow, Rocket, PenTool, Handshake, Users, Briefcase,
  Lightbulb, Mail, Phone, MessageCircle, ShoppingCart, Smartphone, Monitor, Layers,
  Zap, Shield, CheckCircle, Star, Heart, TrendingUp, Award, Settings, Cpu, Database,
  FileText, Camera, Palette, MapPin, Clock, DollarSign, Compass, Puzzle, BadgeCheck,
  Sparkles, Cog, ClipboardCheck, Wrench, Newspaper,
};

export function resolveIcon(name, fallback) {
  return (typeof name === "string" && ICON_OPTIONS[name]) || fallback;
}
