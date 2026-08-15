'use client';

import React from 'react';
import { Sparkles, ShieldCheck, Zap, Plane, Check } from 'lucide-react';
import { useTranslation } from '@/i18n/context';

export function MarqueeTicker() {
  const { t } = useTranslation();

  const items = [
    { textKey: 'ticker.item1' as const, icon: <Sparkles className="w-4 h-4 text-[#C8A45D]" /> },
    { textKey: 'ticker.item2' as const, icon: <Plane className="w-4 h-4 text-[#C8A45D]" /> },
    { textKey: 'ticker.item3' as const, icon: <ShieldCheck className="w-4 h-4 text-[#C8A45D]" /> },
    { textKey: 'ticker.item4' as const, icon: <Zap className="w-4 h-4 text-[#C8A45D]" /> },
    { textKey: 'ticker.item5' as const, icon: <Check className="w-4 h-4 text-[#C8A45D]" /> },
  ];

  return (
    <div className="w-full bg-gradient-to-r from-[#14171A] via-[#1C2024] to-[#14171A] border-y border-[#C8A45D]/30 py-3.5 overflow-hidden relative shadow-inner">
      <div className="flex w-max animate-marquee space-x-8 items-center">
        {/* Render twice for seamless loop */}
        {[...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 shrink-0">
            {item.icon}
            <span className="text-xs font-mono font-bold tracking-widest text-[#F5F3EF] uppercase">
              {t(item.textKey)}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8A45D]/60 ml-4" />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
