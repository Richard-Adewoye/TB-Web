// components/ui/IconBox.tsx
import { LucideIcon } from "lucide-react";

interface IconBoxProps {
  icon: LucideIcon;
}

export default function IconBox({ icon: Icon }: IconBoxProps) {
  return (
    <div className="bg-[#A68249]/20 text-[#A68249] p-3 rounded-lg flex items-center justify-center">
      <Icon size={20} />
    </div>
  );
}
