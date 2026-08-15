import React, { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'gold' | 'surface' | 'outline' | 'success';
  size?: 'sm' | 'md';
  className?: string;
}

export function Badge({
  children,
  variant = 'surface',
  size = 'md',
  className = '',
}: BadgeProps) {
  const base = 'inline-flex items-center font-mono font-medium rounded-full tracking-wider uppercase';

  const variants = {
    gold: 'bg-[#C8A45D]/15 text-[#C8A45D] border border-[#C8A45D]/30',
    surface: 'bg-[#1C2024] text-[#A8ADB3] border border-[#2A2F34]',
    outline: 'bg-transparent text-[#F5F3EF] border border-[#2A2F34]',
    success: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
  };

  const sizes = {
    sm: 'text-[10px] px-2 py-0.5 gap-1',
    md: 'text-xs px-3 py-1 gap-1.5',
  };

  return (
    <span className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </span>
  );
}
