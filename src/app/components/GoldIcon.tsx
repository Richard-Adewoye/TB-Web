"use client";

interface GoldIconProps {
  icon: React.ReactNode;
  size?: number;
  className?: string;
}

export default function GoldIcon({ icon, size = 24, className = "" }: GoldIconProps) {
  return (
    <div
      className={`bg-brand-gold/20 text-brand-gold p-3 rounded-lg flex items-center justify-center ${className}`}
      style={{ width: size + 16, height: size + 16 }}
    >
      {icon}
    </div>
  );
}
