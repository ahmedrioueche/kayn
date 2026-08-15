'use client';

import React, { useState } from 'react';
import { Calculator, X, CheckCircle2, MessageCircle, TrendingDown, Sparkles, Trophy } from 'lucide-react';
import { useTranslation } from '@/i18n/context';
import { siteConfig } from '@/data/site';
import { SectionHeader } from './ui/section-header';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { MotionWrapper } from './ui/motion-wrapper';

export function SavingsEstimator() {
  const { t } = useTranslation();
  const [days, setDays] = useState(5);
  const [tripsPerDay, setTripsPerDay] = useState(4);

  // Financial Math
  const airportTransfersDA = 6000;
  const taxiRideRateDA = 1500;
  const taxiTotal = airportTransfersDA + tripsPerDay * taxiRideRateDA * days;

  const kaynDailyRate = 4000; // Clio 5 / Peugeot 208
  const kaynTotal = kaynDailyRate * days;

  const savingsAmount = taxiTotal - kaynTotal;
  const savingsPercent = Math.round((savingsAmount / taxiTotal) * 100);

  const whatsappMessage = encodeURIComponent(
    `Bonjour KAYN, je viens de comparer les tarifs (Location ${days}j vs Taxi). Je souhaite réserver un véhicule pour ${days} jours et économiser ${savingsAmount.toLocaleString('fr-DZ')} ${t('common.currency')}. Est-il disponible ?`
  );

  const whatsappUrl = `${siteConfig.whatsappRawUrl}?text=${whatsappMessage}`;

  return (
    <section id="savings" className="py-20 bg-[#14171A]/40 border-t border-[#2A2F34] relative overflow-hidden">
      {/* Ambient background lighting */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[300px] bg-[#C8A45D]/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="CALCULATEUR D'ÉCONOMIES"
          title={t('savings.sectionTitle')}
          subtitle={t('savings.sectionSubtitle')}
        />

        {/* Interactive Sliders Box */}
        <div className="bg-[#14171A] border border-[#2A2F34] rounded-3xl p-6 sm:p-8 mb-8 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Days Slider */}
            <div className="p-5 rounded-2xl bg-[#1C2024] border border-[#2A2F34]">
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-semibold text-[#A8ADB3]">
                  {t('savings.daysControl')}
                </label>
                <span className="text-lg font-extrabold font-mono text-[#C8A45D]">
                  {days} {t('calc.daysCount')}
                </span>
              </div>
              <input
                type="range"
                min="3"
                max="14"
                value={days}
                onChange={(e) => setDays(Number(e.target.value))}
                className="w-full h-2 bg-[#0B0D0F] rounded-lg appearance-none cursor-pointer accent-[#C8A45D]"
              />
              <div className="flex justify-between text-[10px] font-mono text-[#A8ADB3] mt-2">
                <span>3 jours</span>
                <span>7 jours</span>
                <span>14 jours</span>
              </div>
            </div>

            {/* Daily Taxi Trips Selector */}
            <div className="p-5 rounded-2xl bg-[#1C2024] border border-[#2A2F34]">
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-semibold text-[#A8ADB3]">
                  {t('savings.tripsControl')}
                </label>
                <span className="text-lg font-extrabold font-mono text-[#C8A45D]">
                  {tripsPerDay} trajets / jour
                </span>
              </div>
              <input
                type="range"
                min="2"
                max="8"
                value={tripsPerDay}
                onChange={(e) => setTripsPerDay(Number(e.target.value))}
                className="w-full h-2 bg-[#0B0D0F] rounded-lg appearance-none cursor-pointer accent-[#C8A45D]"
              />
              <div className="flex justify-between text-[10px] font-mono text-[#A8ADB3] mt-2">
                <span>2 trajets/j</span>
                <span>4 trajets/j</span>
                <span>8 trajets/j</span>
              </div>
            </div>
          </div>
        </div>

        {/* Side-by-Side Comparison Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Left Card: Option Taxi / VTC */}
          <MotionWrapper direction="right">
            <div className="rounded-3xl bg-[#14171A] border border-red-500/20 p-6 sm:p-8 flex flex-col justify-between h-full relative">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                      <X className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-[#F5F3EF]">
                      {t('savings.taxiHeader')}
                    </h3>
                  </div>
                  <Badge variant="outline" size="sm" className="text-red-400 border-red-500/30">
                    Coût Élevé
                  </Badge>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-[#A8ADB3] mb-8">
                  <li className="flex items-center gap-2.5">
                    <X className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{t('savings.taxiItem1')}</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <X className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{t('savings.taxiItem2')}</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <X className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{t('savings.taxiItem3')}</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <X className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{t('savings.taxiItem4')}</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-[#2A2F34] flex items-center justify-between">
                <span className="text-xs text-[#A8ADB3]">{t('savings.estTotalTaxi')}</span>
                <span className="text-xl sm:text-2xl font-extrabold text-red-400 font-mono line-through opacity-80">
                  {taxiTotal.toLocaleString('fr-DZ')} {t('common.currency')}
                </span>
              </div>
            </div>
          </MotionWrapper>

          {/* Right Card: Option KAYN (Winner) */}
          <MotionWrapper direction="left">
            <div className="rounded-3xl bg-gradient-to-br from-[#1C2024] via-[#14171A] to-[#1C2024] border-2 border-[#C8A45D] p-6 sm:p-8 flex flex-col justify-between h-full relative shadow-2xl shadow-[#C8A45D]/10">
              {/* Winner Floating Badge */}
              <div className="absolute -top-3.5 right-6 bg-[#C8A45D] text-[#111111] text-xs font-extrabold px-3 py-1 rounded-full shadow-md flex items-center gap-1 uppercase tracking-wider">
                <Trophy className="w-3.5 h-3.5" />
                <span>Gagnant (-{savingsPercent}%)</span>
              </div>

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-xl bg-[#C8A45D]/15 border border-[#C8A45D]/30 flex items-center justify-center text-[#C8A45D]">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-[#F5F3EF]">
                      {t('savings.kaynHeader')}
                    </h3>
                  </div>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-[#F5F3EF] mb-8">
                  <li className="flex items-center gap-2.5 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{t('savings.kaynItem1')}</span>
                  </li>
                  <li className="flex items-center gap-2.5 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{t('savings.kaynItem2')}</span>
                  </li>
                  <li className="flex items-center gap-2.5 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{t('savings.kaynItem3')}</span>
                  </li>
                  <li className="flex items-center gap-2.5 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{t('savings.kaynItem4')}</span>
                  </li>
                </ul>
              </div>

              {/* Total & Savings Highlight */}
              <div className="space-y-4 pt-4 border-t border-[#2A2F34]">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#A8ADB3]">{t('savings.totalKayn')}</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#C8A45D] font-mono">
                    {kaynTotal.toLocaleString('fr-DZ')} {t('common.currency')}
                  </span>
                </div>

                {/* Savings Badge */}
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-bold flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <TrendingDown className="w-4 h-4" />
                    {t('savings.savedBadge')} :
                  </span>
                  <span className="font-mono text-base">
                    {savingsAmount.toLocaleString('fr-DZ')} {t('common.currency')} (-{savingsPercent}%)
                  </span>
                </div>

                {/* WhatsApp Action Button */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full pt-1"
                >
                  <Button variant="primary" fullWidth size="lg">
                    <MessageCircle className="w-5 h-5" />
                    {t('savings.ctaWhatsapp')}
                  </Button>
                </a>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
