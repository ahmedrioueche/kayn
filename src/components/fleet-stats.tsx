'use client';

import React from 'react';
import { Award, Users, Star, Clock } from 'lucide-react';
import { useTranslation } from '@/i18n/context';
import { SectionHeader } from './ui/section-header';
import { MotionWrapper } from './ui/motion-wrapper';

export function FleetStats() {
  const { t } = useTranslation();

  const stats = [
    {
      valKey: 'stats.stat1.val' as const,
      lblKey: 'stats.stat1.lbl' as const,
      icon: <Award className="w-6 h-6 text-[#C8A45D]" />,
    },
    {
      valKey: 'stats.stat2.val' as const,
      lblKey: 'stats.stat2.lbl' as const,
      icon: <Users className="w-6 h-6 text-[#C8A45D]" />,
    },
    {
      valKey: 'stats.stat3.val' as const,
      lblKey: 'stats.stat3.lbl' as const,
      icon: <Star className="w-6 h-6 text-[#C8A45D]" />,
    },
    {
      valKey: 'stats.stat4.val' as const,
      lblKey: 'stats.stat4.lbl' as const,
      icon: <Clock className="w-6 h-6 text-[#C8A45D]" />,
    },
  ];

  return (
    <section className="py-20 bg-[#14171A]/40 border-t border-[#2A2F34] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#C8A45D]/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="QUALITÉ & ENGAGEMENT"
          title={t('stats.title')}
          subtitle={t('stats.subtitle')}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <MotionWrapper key={idxKey(stat.valKey)} direction="up" delay={index * 0.1}>
              <div className="p-6 rounded-2xl bg-[#14171A] border border-[#2A2F34] hover:border-[#C8A45D]/40 transition-all duration-300 hover:shadow-xl hover:shadow-black/50 group text-center flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-2xl bg-[#1C2024] border border-[#2A2F34] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold font-mono text-[#F5F3EF] group-hover:text-[#C8A45D] transition-colors mb-2">
                  {t(stat.valKey)}
                </div>
                <p className="text-xs sm:text-sm text-[#A8ADB3] leading-relaxed">
                  {t(stat.lblKey)}
                </p>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}

function idxKey(str: string) {
  return str;
}
