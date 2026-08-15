import React from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-2xl mb-12 sm:mb-16 ${alignClass} ${className}`}>
      {eyebrow && (
        <span className="inline-block text-xs font-mono font-semibold tracking-widest text-[#C8A45D] uppercase mb-3 px-3 py-1 bg-[#C8A45D]/10 border border-[#C8A45D]/20 rounded-full">
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#F5F3EF]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-sm sm:text-base text-[#A8ADB3] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
