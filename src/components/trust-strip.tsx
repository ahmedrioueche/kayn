'use client';

import React from 'react';
import { CheckCircle2, Tag, Zap, Headphones } from 'lucide-react';
import { useTranslation } from '@/i18n/context';
import { trustPointsData } from '@/data/site';
import { MotionWrapper } from './ui/motion-wrapper';

export function TrustStrip() {
  const { t } = useTranslation();

  const iconMap: Record<string, React.ReactNode> = {
    CheckCircle2: <CheckCircle2 className="w-5 h-5 text-[#C8A45D]" />,
    Tag: <Tag className="w-5 h-5 text-[#C8A45D]" />,
    Zap: <Zap className="w-5 h-5 text-[#C8A45D]" />,
    Headphones: <Headphones className="w-5 h-5 text-[#C8A45D]" />,
  };

  return (
    <section className="py-12 bg-[#14171A] border-y border-[#2A2F34]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trustPointsData.map((item, index) => (
            <MotionWrapper key={item.id} direction="up" delay={index * 0.1}>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#1C2024]/60 border border-[#2A2F34]/80 hover:border-[#C8A45D]/30 transition-colors">
                <div className="p-2.5 rounded-lg bg-[#0B0D0F] border border-[#2A2F34] shrink-0">
                  {iconMap[item.iconName]}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#F5F3EF]">
                    {t(item.titleKey as any)}
                  </h3>
                  <p className="text-xs text-[#A8ADB3] mt-1 leading-relaxed">
                    {t(item.descriptionKey as any)}
                  </p>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
