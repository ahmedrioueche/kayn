import React, { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
  asChild?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#C8A45D] focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

  const variants = {
    primary:
      'bg-[#C8A45D] text-[#111111] hover:bg-[#D4B46E] active:scale-[0.98] shadow-md shadow-[#C8A45D]/10 font-semibold',
    secondary:
      'bg-[#1C2024] text-[#F5F3EF] border border-[#2A2F34] hover:bg-[#2A2F34] hover:border-[#C8A45D]/40 active:scale-[0.98]',
    outline:
      'bg-transparent text-[#F5F3EF] border border-[#2A2F34] hover:border-[#C8A45D] hover:text-[#C8A45D] active:scale-[0.98]',
    ghost:
      'bg-transparent text-[#A8ADB3] hover:text-[#F5F3EF] hover:bg-[#14171A]',
  };

  const sizes = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-4 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5 font-semibold',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
