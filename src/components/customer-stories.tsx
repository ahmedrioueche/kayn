'use client';

import React, { useState } from 'react';
import { CheckCircle2, MapPin, Clock, Star, Plane, Car, MessageCircle } from 'lucide-react';
import { customerStoriesData, siteConfig } from '@/data/site';
import { useTranslation } from '@/i18n/context';
import { SectionHeader } from './ui/section-header';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { MotionWrapper } from './ui/motion-wrapper';

export function CustomerStories() {
  const { t } = useTranslation();
  const [selectedCityId, setSelectedCityId] = useState<string>('all');

  const filteredStories =
    selectedCityId === 'all'
      ? customerStoriesData
      : customerStoriesData.filter((s) => s.cityId === selectedCityId);

  return (
    <section id="stories" className="py-20 bg-[#0B0D0F] relative overflow-hidden">
      {/* Ambient background lighting */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[300px] bg-[#C8A45D]/5 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="PREUVES SOCIALES & REMISES"
          title={t('stories.sectionTitle')}
          subtitle={t('stories.sectionSubtitle')}
        />

        {/* Station Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          <button
            onClick={() => setSelectedCityId('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
              selectedCityId === 'all'
                ? 'bg-[#C8A45D] text-[#111111] shadow-md shadow-[#C8A45D]/20'
                : 'bg-[#14171A] text-[#A8ADB3] border border-[#2A2F34] hover:text-[#F5F3EF]'
            }`}
          >
            Toutes les stations ({customerStoriesData.length})
          </button>

          <button
            onClick={() => setSelectedCityId('alger')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
              selectedCityId === 'alger'
                ? 'bg-[#C8A45D] text-[#111111] shadow-md shadow-[#C8A45D]/20'
                : 'bg-[#14171A] text-[#A8ADB3] border border-[#2A2F34] hover:text-[#F5F3EF]'
            }`}
          >
            Alger (ALG)
          </button>

          <button
            onClick={() => setSelectedCityId('oran')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
              selectedCityId === 'oran'
                ? 'bg-[#C8A45D] text-[#111111] shadow-md shadow-[#C8A45D]/20'
                : 'bg-[#14171A] text-[#A8ADB3] border border-[#2A2F34] hover:text-[#F5F3EF]'
            }`}
          >
            Oran (ORN)
          </button>

          <button
            onClick={() => setSelectedCityId('constantine')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
              selectedCityId === 'constantine'
                ? 'bg-[#C8A45D] text-[#111111] shadow-md shadow-[#C8A45D]/20'
                : 'bg-[#14171A] text-[#A8ADB3] border border-[#2A2F34] hover:text-[#F5F3EF]'
            }`}
          >
            Constantine (CZL)
          </button>
        </div>

        {/* Story Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredStories.map((story, index) => {
            const whatsappMessage = encodeURIComponent(
              `Bonjour KAYN, je souhaite effectuer une réservation similaire à la remise de ${story.customerName} (${story.vehicleName}). Est-elle disponible ?`
            );

            const whatsappUrl = `${siteConfig.whatsappRawUrl}?text=${whatsappMessage}`;

            return (
              <MotionWrapper key={story.id} direction="up" delay={index * 0.1}>
                <div className="rounded-3xl bg-[#14171A] border border-[#2A2F34] hover:border-[#C8A45D]/40 transition-all duration-300 overflow-hidden shadow-2xl group flex flex-col justify-between h-full">
                  {/* Photo Header */}
                  <div className="relative aspect-16/9 overflow-hidden">
                    <img
                      src={story.image}
                      alt={story.vehicleName}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#14171A] via-[#14171A]/40 to-transparent" />

                    {/* Verified Badge */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge variant="gold" size="sm" className="flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-[#111111]" />
                        {t('stories.verifiedBadge')}
                      </Badge>
                      {story.airportBadgeKey && (
                        <span className="text-[10px] font-mono text-[#F5F3EF] bg-[#0B0D0F]/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#2A2F34] flex items-center gap-1">
                          <Plane className="w-3 h-3 text-[#C8A45D]" />
                          {t(story.airportBadgeKey as any)}
                        </span>
                      )}
                    </div>

                    {/* Timestamp Tag */}
                    <div className="absolute top-4 right-4">
                      <span className="text-[10px] font-mono text-[#A8ADB3] bg-[#0B0D0F]/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#2A2F34] flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#C8A45D]" />
                        {t(story.timeAgoKey as any)}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between space-y-5">
                    <div>
                      {/* Customer & Location Header */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-[#1C2024] border border-[#C8A45D]/40 flex items-center justify-center text-xs font-bold text-[#C8A45D]">
                            {story.customerName.charAt(0)}
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-[#F5F3EF]">
                              {story.customerName}
                            </h4>
                            <span className="text-xs text-[#A8ADB3] font-mono flex items-center gap-1">
                              <MapPin className="w-3 h-3 text-[#C8A45D]" />
                              {t(story.locationKey as any)}
                            </span>
                          </div>
                        </div>

                        {/* Rating Stars */}
                        <div className="flex items-center gap-0.5">
                          {Array.from({ length: story.rating }).map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-[#C8A45D] text-[#C8A45D]" />
                          ))}
                        </div>
                      </div>

                      {/* Quote */}
                      <p className="text-xs sm:text-sm text-[#F5F3EF] italic leading-relaxed bg-[#1C2024]/50 p-3.5 rounded-xl border border-[#2A2F34]">
                        &ldquo;{t(story.quoteKey as any)}&rdquo;
                      </p>
                    </div>

                    {/* Vehicle & Duration Footer */}
                    <div className="pt-3 border-t border-[#2A2F34]/60 flex items-center justify-between gap-3 text-xs">
                      <div className="flex items-center gap-2 text-[#F5F3EF] font-semibold">
                        <Car className="w-4 h-4 text-[#C8A45D]" />
                        <span>{story.vehicleName}</span>
                      </div>

                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0"
                      >
                        <Button variant="secondary" size="sm">
                          <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Réserver</span>
                        </Button>
                      </a>
                    </div>
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
