import * as Icons from "lucide-react";

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function LucideIcon({ name, className = "", size = 24 }: LucideIconProps) {
  // Safe dynamic icon resolving
  const IconComponent = (Icons as any)[name];

  if (!IconComponent) {
    // Return a default question mark or circle if string isn't found
    return <Icons.HelpCircle className={className} size={size} />;
  }

  return <IconComponent className={className} size={size} />;
}
