'use client';

import React from 'react';
import { MapPin, Navigation, Plane } from 'lucide-react';
import { locationsData } from '@/data/site';
import { useTranslation } from '@/i18n/context';
import { SectionHeader } from './ui/section-header';
import { Badge } from './ui/badge';
import { MotionWrapper } from './ui/motion-wrapper';

export function Locations() {
  const { t } = useTranslation();

  return (
    <section id="locations" className="py-20 bg-[#14171A]/40 border-t border-[#2A2F34]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={t('locations.sectionTitle')}
          subtitle={t('locations.sectionSubtitle')}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {locationsData.map((loc, index) => (
            <MotionWrapper key={loc.id} direction="up" delay={index * 0.1}>
              <div className="p-6 rounded-2xl bg-[#14171A] border border-[#2A2F34] hover:border-[#C8A45D]/40 transition-all duration-300 group flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#1C2024] border border-[#2A2F34] flex items-center justify-center text-[#C8A45D]">
                      <MapPin className="w-5 h-5" />
                    </div>
                    {loc.popular && (
                      <Badge variant="gold" size="sm">
                        HUB
                      </Badge>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-[#F5F3EF] mb-1 group-hover:text-[#C8A45D] transition-colors">
                    {t(loc.nameKey as any)}
                  </h3>

                  <p className="text-xs text-[#A8ADB3] font-mono mb-3">
                    {t(loc.regionKey as any)}
                  </p>

                  {/* Airport station line */}
                  <div className="flex items-center gap-1.5 text-xs text-[#F5F3EF] bg-[#1C2024] p-2.5 rounded-xl border border-[#2A2F34] mb-4">
                    <Plane className="w-4 h-4 text-[#C8A45D] shrink-0" />
                    <span className="truncate">{t(loc.airportKey as any)}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium pt-3 border-t border-[#2A2F34]/50">
                  <Navigation className="w-3 h-3" />
                  <span>{t('locations.availableLabel')}</span>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
