'use client';

import React from 'react';
import { Compass, MapPin, Navigation, Car, MessageCircle, Calendar } from 'lucide-react';
import { scenicRoutesData, siteConfig } from '@/data/site';
import { useTranslation } from '@/i18n/context';
import { SectionHeader } from './ui/section-header';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { MotionWrapper } from './ui/motion-wrapper';

export function ScenicRoutes() {
  const { t } = useTranslation();

  return (
    <section id="routes" className="py-20 bg-[#14171A]/50 border-t border-[#2A2F34] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[300px] bg-[#C8A45D]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="ESCAPADES & ROAD TRIPS"
          title={t('routes.sectionTitle')}
          subtitle={t('routes.sectionSubtitle')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {scenicRoutesData.map((route, index) => {
            const whatsappMessage = encodeURIComponent(
              `Bonjour KAYN, je souhaite planifier le road-trip "${t(
                route.titleKey as any
              )}" avec la ${route.recommendedVehicleName}. Pourriez-vous me conseiller sur les dates et la disponibilité ?`
            );

            const whatsappUrl = `${siteConfig.whatsappRawUrl}?text=${whatsappMessage}`;

            return (
              <MotionWrapper key={route.id} direction="up" delay={index * 0.1}>
                <div className="rounded-3xl bg-[#14171A] border border-[#2A2F34] hover:border-[#C8A45D]/40 transition-all duration-500 overflow-hidden shadow-2xl group flex flex-col h-full">
                  {/* Scenic Route Landscape Photo Banner */}
                  <div className="relative aspect-16/9 overflow-hidden">
                    <img
                      src={route.image}
                      alt={t(route.titleKey as any)}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Dark gradient overlay for text legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#14171A] via-[#14171A]/40 to-transparent" />

                    {/* Tag badge top left */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge variant="gold" size="sm">
                        {t(route.tagKey as any)}
                      </Badge>
                      <span className="text-[10px] font-mono text-[#F5F3EF] bg-[#0B0D0F]/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#2A2F34] flex items-center gap-1">
                        <Navigation className="w-3 h-3 text-[#C8A45D]" />
                        {route.distanceKm} km
                      </span>
                    </div>

                    {/* Duration badge top right */}
                    <div className="absolute top-4 right-4">
                      <span className="text-[10px] font-mono text-[#F5F3EF] bg-[#0B0D0F]/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#2A2F34] flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-emerald-400" />
                        {t(route.durationDaysKey as any)}
                      </span>
                    </div>
                  </div>

                  {/* Route Content Details */}
                  <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between space-y-6">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-[#F5F3EF] mb-2 group-hover:text-[#C8A45D] transition-colors">
                        {t(route.titleKey as any)}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#A8ADB3] leading-relaxed">
                        {t(route.subtitleKey as any)}
                      </p>
                    </div>

                    {/* Recommended Vehicle Box */}
                    <div className="p-3.5 rounded-xl bg-[#1C2024] border border-[#2A2F34] flex items-center justify-between gap-3 text-xs">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-[#0B0D0F] border border-[#2A2F34] flex items-center justify-center text-[#C8A45D]">
                          <Car className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[10px] text-[#A8ADB3] block">
                            {t('routes.recommendedCar')}
                          </span>
                          <span className="font-bold text-[#F5F3EF]">
                            {route.recommendedVehicleName}
                          </span>
                        </div>
                      </div>

                      <Badge variant="surface" size="sm">
                        Kilométrage illimité
                      </Badge>
                    </div>

                    {/* Action Button */}
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full pt-1"
                    >
                      <Button variant="primary" fullWidth size="md">
                        <MessageCircle className="w-4 h-4" />
                        {t('routes.planTripCta')}
                      </Button>
                    </a>
                  </div>
                </div>
              </MotionWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
