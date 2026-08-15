'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonialsData } from '@/data/site';
import { useTranslation } from '@/i18n/context';
import { SectionHeader } from './ui/section-header';
import { Badge } from './ui/badge';
import { MotionWrapper } from './ui/motion-wrapper';

export function Testimonials() {
  const { t } = useTranslation();

  return (
    <section id="reviews" className="py-20 bg-[#14171A]/60 border-t border-[#2A2F34]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={t('testimonials.sectionTitle')}
          subtitle={t('testimonials.sectionSubtitle')}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonialsData.map((item, index) => (
            <MotionWrapper key={item.id} direction="up" delay={index * 0.1}>
              <div className="p-6 sm:p-8 rounded-2xl bg-[#14171A] border border-[#2A2F34] hover:border-[#C8A45D]/40 transition-all duration-300 flex flex-col justify-between h-full relative group">
                <Quote className="w-8 h-8 text-[#C8A45D]/20 absolute top-6 right-6" />

                <div>
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C8A45D] text-[#C8A45D]" />
                    ))}
                  </div>

                  <p className="text-sm sm:text-base text-[#F5F3EF] italic leading-relaxed mb-6">
                    &ldquo;{t(item.contentKey as any)}&rdquo;
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[#2A2F34]/60">
                  <div>
                    <h4 className="text-sm font-bold text-[#F5F3EF]">
                      {item.author}
                    </h4>
                    <span className="text-xs text-[#A8ADB3] font-mono">
                      {t(item.cityKey as any)}
                    </span>
                  </div>

                  <Badge variant="surface" size="sm">
                    {t('testimonials.demoBadge')}
                  </Badge>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
