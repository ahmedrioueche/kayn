'use client';

import React, { useState } from 'react';
import { ArrowRight, MessageCircle, Star, ShieldCheck, Zap } from 'lucide-react';
import { useTranslation } from '@/i18n/context';
import { siteConfig } from '@/data/site';
import { Button } from './ui/button';
import { MotionWrapper } from './ui/motion-wrapper';
import { CarIllustration } from './ui/car-illustration';
import { BookingWidget } from './booking-widget';

export function Hero() {
  const { t } = useTranslation();
  const [activeCarId, setActiveCarId] = useState('hero-main');

  const carOptions = [
    { id: 'hero-main', label: 'Fleet Showcase' },
    { id: 'vw-golf-8', label: 'Golf 8 R-Line' },
    { id: 'peugeot-208', label: 'Peugeot 208 GT' },
    { id: 'renault-clio', label: 'Clio 5 Intens' },
  ];

  return (
    <section id="home" className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden bg-[#0B0D0F]">
      {/* Background ambient lighting glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#C8A45D]/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-blue-500/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Text Column (Span 6) */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-left">
            <MotionWrapper direction="up" delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#C8A45D]/10 border border-[#C8A45D]/20 text-[#C8A45D] text-xs font-mono font-semibold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8A45D] animate-pulse" />
                {t('hero.eyebrow')}
              </div>
            </MotionWrapper>

            <MotionWrapper direction="up" delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F5F3EF] leading-[1.1]">
                {t('hero.title')}
              </h1>
            </MotionWrapper>

            <MotionWrapper direction="up" delay={0.3}>
              <p className="text-base sm:text-lg text-[#A8ADB3] leading-relaxed max-w-xl">
                {t('hero.body')}
              </p>
            </MotionWrapper>

            {/* Micro Feature Badges */}
            <MotionWrapper direction="up" delay={0.35}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1 text-xs text-[#A8ADB3]">
                <div className="flex items-center gap-1.5 bg-[#14171A] px-3 py-2 rounded-xl border border-[#2A2F34]">
                  <Star className="w-3.5 h-3.5 fill-[#C8A45D] text-[#C8A45D] shrink-0" />
                  <span className="truncate">{t('hero.badge1')}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-[#14171A] px-3 py-2 rounded-xl border border-[#2A2F34]">
                  <Zap className="w-3.5 h-3.5 text-[#C8A45D] shrink-0" />
                  <span className="truncate">{t('hero.badge2')}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-[#14171A] px-3 py-2 rounded-xl border border-[#2A2F34]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C8A45D] shrink-0" />
                  <span className="truncate">{t('hero.badge3')}</span>
                </div>
              </div>
            </MotionWrapper>

            {/* CTAs */}
            <MotionWrapper direction="up" delay={0.4}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <a href="#vehicles" className="w-full sm:w-auto">
                  <Button variant="primary" size="lg" fullWidth>
                    {t('hero.ctaVehicles')}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
                <a
                  href={`${siteConfig.whatsappRawUrl}?text=${encodeURIComponent(
                    'Bonjour KAYN, je souhaite obtenir des informations pour louer un véhicule.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button variant="secondary" size="lg" fullWidth>
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    {t('hero.ctaWhatsapp')}
                  </Button>
                </a>
              </div>
            </MotionWrapper>
          </div>

          {/* Right Hero Vehicle Visual Column (Span 6) */}
          <div className="lg:col-span-6">
            <MotionWrapper direction="left" delay={0.3}>
              <div className="relative">
                {/* Hero Car Vector Art */}
                <CarIllustration modelId={activeCarId} className="shadow-2xl shadow-black/80" />

                {/* Floating Interactive Model Selector Pills */}
                <div className="flex items-center justify-center gap-1.5 mt-3 flex-wrap">
                  {carOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setActiveCarId(opt.id)}
                      className={`px-3 py-1 rounded-full text-[11px] font-mono transition-all cursor-pointer ${
                        activeCarId === opt.id
                          ? 'bg-[#C8A45D] text-[#111111] font-bold shadow-md shadow-[#C8A45D]/20'
                          : 'bg-[#14171A] text-[#A8ADB3] border border-[#2A2F34] hover:text-[#F5F3EF]'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>

                {/* Floating City Station Badge */}
                <div className="absolute -top-4 -right-4 hidden sm:flex items-center gap-2 bg-[#1C2024]/90 backdrop-blur-md border border-[#C8A45D]/40 px-3.5 py-2 rounded-xl shadow-xl">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-mono text-[#F5F3EF] font-semibold">
                    {siteConfig.city}, {siteConfig.country}
                  </span>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>

        {/* Floating Booking Widget Search Card */}
        <MotionWrapper direction="up" delay={0.5} className="mt-12 sm:mt-16">
          <BookingWidget />
        </MotionWrapper>
      </div>
    </section>
  );
}
