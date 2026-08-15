'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface CarIllustrationProps {
  modelId: string;
  className?: string;
  alt?: string;
}

export function CarIllustration({ modelId, className = '', alt }: CarIllustrationProps) {
  const [imageError, setImageError] = useState(false);

  // High-resolution studio automotive photography for each model
  const carImages: Record<
    string,
    {
      src: string;
      badge: string;
      subtitle: string;
      accentColor: string;
    }
  > = {
    'hero-main': {
      src: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80',
      badge: 'KAYN LUXURY FLEET',
      subtitle: 'FLOTTE ALGÉRIE 2024',
      accentColor: '#C8A45D',
    },
    'peugeot-208': {
      src: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=80',
      badge: 'PEUGEOT 208 GT LINE',
      subtitle: '2024 • AUTOMATIQUE',
      accentColor: '#3B82F6',
    },
    'renault-clio': {
      src: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
      badge: 'RENAULT CLIO 5 INTENS',
      subtitle: '2024 • DIESEL',
      accentColor: '#EF4444',
    },
    'vw-golf-8': {
      src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
      badge: 'GOLF 8 R-LINE',
      subtitle: '2024 • AUTOMATIQUE DSG',
      accentColor: '#C8A45D',
    },
    'toyota-yaris': {
      src: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=1200&q=80',
      badge: 'TOYOTA YARIS SEDAN',
      subtitle: '2024 • ESSENCE',
      accentColor: '#10B981',
    },
  };

  const item = carImages[modelId] || carImages['hero-main'];

  return (
    <div
      className={`relative w-full aspect-16/9 rounded-xl overflow-hidden bg-[#14171A] border border-[#2A2F34] group ${className}`}
    >
      {/* Real Car Photograph */}
      {!imageError ? (
        <img
          src={item.src}
          alt={alt || item.badge}
          onError={() => setImageError(true)}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      ) : (
        /* Fallback dark metallic background if network image fails */
        <div className="w-full h-full bg-gradient-to-br from-[#1C2024] to-[#0B0D0F] flex items-center justify-center">
          <span className="text-xs font-mono text-[#C8A45D]">{item.badge}</span>
        </div>
      )}

      {/* Dark editorial gradient overlay for typography readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0F] via-[#0B0D0F]/30 to-transparent opacity-80 group-hover:opacity-65 transition-opacity duration-300 pointer-events-none" />

      {/* Subtle brand badge overlay */}
      <div className="absolute bottom-3 left-4 flex flex-col pointer-events-none">
        <span className="text-xs font-mono font-bold tracking-widest text-[#F5F3EF] uppercase drop-shadow-md">
          {item.badge}
        </span>
        <span className="text-[10px] font-mono tracking-wider text-[#C8A45D] font-semibold drop-shadow">
          {item.subtitle}
        </span>
      </div>

      {/* KAYN stamp top right */}
      <div className="absolute top-3 right-3 text-[10px] font-mono font-semibold text-[#F5F3EF] tracking-wider px-2 py-0.5 rounded bg-[#0B0D0F]/80 backdrop-blur-md border border-[#2A2F34] pointer-events-none">
        KAYN • ALGÉRIE
      </div>
    </div>
  );
}
