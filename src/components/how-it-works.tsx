'use client';

import React from 'react';
import { processStepsData } from '@/data/site';
import { useTranslation } from '@/i18n/context';
import { SectionHeader } from './ui/section-header';
import { MotionWrapper } from './ui/motion-wrapper';

export function HowItWorks() {
  const { t } = useTranslation();

  return (
    <section id="process" className="py-20 bg-[#0B0D0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={t('process.sectionTitle')}
          subtitle={t('process.sectionSubtitle')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {processStepsData.map((step, index) => (
            <MotionWrapper key={step.number} direction="up" delay={index * 0.15}>
              <div className="relative p-6 rounded-2xl bg-[#14171A] border border-[#2A2F34] hover:border-[#C8A45D]/40 transition-all duration-300 h-full flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-extrabold font-mono text-[#C8A45D]/40 group-hover:text-[#C8A45D] transition-colors">
                      {step.number}
                    </span>
                    <div className="w-2 h-2 rounded-full bg-[#C8A45D]" />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#F5F3EF] mb-2">
                    {t(step.titleKey as any)}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A8ADB3] leading-relaxed">
                    {t(step.descriptionKey as any)}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#2A2F34]/50 flex items-center gap-2">
                  <span className="text-[10px] font-mono text-[#C8A45D] uppercase tracking-wider">
                    {t('brand.name')} • STEP {step.number}
                  </span>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
