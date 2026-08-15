'use client';

import React from 'react';
import { Car, Shield, Compass, Sparkles } from 'lucide-react';
import { categoriesData } from '@/data/site';
import { useTranslation } from '@/i18n/context';
import { SectionHeader } from './ui/section-header';
import { MotionWrapper } from './ui/motion-wrapper';

export function VehicleCategories() {
  const { t } = useTranslation();

  const iconMap: Record<string, React.ReactNode> = {
    Car: <Car className="w-6 h-6 text-[#C8A45D]" />,
    Shield: <Shield className="w-6 h-6 text-[#C8A45D]" />,
    Compass: <Compass className="w-6 h-6 text-[#C8A45D]" />,
    Sparkles: <Sparkles className="w-6 h-6 text-[#C8A45D]" />,
  };

  return (
    <section className="py-20 bg-[#14171A]/50 border-t border-[#2A2F34]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={t('categories.sectionTitle')}
          subtitle={t('categories.sectionSubtitle')}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoriesData.map((category, index) => (
            <MotionWrapper key={category.id} direction="up" delay={index * 0.1}>
              <div className="p-6 rounded-2xl bg-[#14171A] border border-[#2A2F34] hover:border-[#C8A45D]/40 transition-all duration-300 group hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-[#1C2024] border border-[#2A2F34] flex items-center justify-center mb-5 group-hover:bg-[#C8A45D]/10 transition-colors">
                  {iconMap[category.iconName]}
                </div>
                <h3 className="text-lg font-bold text-[#F5F3EF] mb-2 group-hover:text-[#C8A45D] transition-colors">
                  {t(category.nameKey as any)}
                </h3>
                <p className="text-xs sm:text-sm text-[#A8ADB3] leading-relaxed">
                  {t(category.descriptionKey as any)}
                </p>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
