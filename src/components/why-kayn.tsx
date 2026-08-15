'use client';

import React from 'react';
import { Award, Sliders, Receipt, MessageSquare } from 'lucide-react';
import { whyItemsData } from '@/data/site';
import { useTranslation } from '@/i18n/context';
import { SectionHeader } from './ui/section-header';
import { MotionWrapper } from './ui/motion-wrapper';

export function WhyKayn() {
  const { t } = useTranslation();

  const iconMap: Record<string, React.ReactNode> = {
    Award: <Award className="w-6 h-6 text-[#C8A45D]" />,
    Sliders: <Sliders className="w-6 h-6 text-[#C8A45D]" />,
    Receipt: <Receipt className="w-6 h-6 text-[#C8A45D]" />,
    MessageSquare: <MessageSquare className="w-6 h-6 text-[#C8A45D]" />,
  };

  return (
    <section className="py-20 bg-[#0B0D0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={t('why.sectionTitle')}
          subtitle={t('why.sectionSubtitle')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {whyItemsData.map((item, index) => (
            <MotionWrapper key={item.id} direction="up" delay={index * 0.1}>
              <div className="p-6 sm:p-8 rounded-2xl bg-[#14171A] border border-[#2A2F34] hover:border-[#C8A45D]/40 transition-all duration-300 flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-[#1C2024] border border-[#2A2F34] flex items-center justify-center shrink-0">
                  {iconMap[item.iconName]}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#F5F3EF] mb-2">
                    {t(item.titleKey as any)}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A8ADB3] leading-relaxed">
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
