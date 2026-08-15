'use client';

import React, { useState } from 'react';
import { Calculator, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { vehiclesData, siteConfig } from '@/data/site';
import { useTranslation } from '@/i18n/context';
import { SectionHeader } from './ui/section-header';
import { Button } from './ui/button';
import { CarIllustration } from './ui/car-illustration';

export function PriceCalculator() {
  const { t } = useTranslation();
  const [selectedVehicleId, setSelectedVehicleId] = useState(vehiclesData[0].id);
  const [days, setDays] = useState(5);

  const vehicle = vehiclesData.find((v) => v.id === selectedVehicleId) || vehiclesData[0];

  // Pricing math: 15% discount for rentals >= 7 days
  const dailyRate = vehicle.specs.pricePerDayDZD;
  const rawTotal = dailyRate * days;
  const isDiscounted = days >= 7;
  const discountAmount = isDiscounted ? Math.round(rawTotal * 0.15) : 0;
  const finalTotal = rawTotal - discountAmount;

  const whatsappMessage = encodeURIComponent(
    `Bonjour KAYN, je souhaite réserver la ${vehicle.name} pour une durée de ${days} jours (Total estimé: ${finalTotal.toLocaleString('fr-DZ')} ${t('common.currency')}). Est-elle disponible ?`
  );

  const whatsappUrl = `${siteConfig.whatsappRawUrl}?text=${whatsappMessage}`;

  return (
    <section id="calculator" className="py-20 bg-[#0B0D0F]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="ESTIMATION TRANSPARENTE"
          title={t('calc.title')}
          subtitle={t('calc.subtitle')}
        />

        <div className="bg-[#14171A] border border-[#2A2F34] hover:border-[#C8A45D]/40 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Background subtle glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C8A45D]/5 blur-[90px] pointer-events-none rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Controls Column (Span 7) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Select Vehicle Radio Cards */}
              <div>
                <label className="block text-xs font-mono font-bold text-[#C8A45D] uppercase mb-3 flex items-center gap-2">
                  <Calculator className="w-4 h-4" />
                  {t('calc.selectCar')}
                </label>

                <div className="grid grid-cols-2 gap-2.5">
                  {vehiclesData.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setSelectedVehicleId(item.id)}
                      className={`p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                        selectedVehicleId === item.id
                          ? 'bg-[#1C2024] border-[#C8A45D] text-[#F5F3EF] shadow-md shadow-[#C8A45D]/10'
                          : 'bg-[#14171A] border-[#2A2F34] text-[#A8ADB3] hover:border-[#2A2F34]/80'
                      }`}
                    >
                      <div className="text-xs sm:text-sm font-bold truncate">{item.name}</div>
                      <div className="text-[11px] font-mono text-[#C8A45D] mt-0.5">
                        {item.specs.pricePerDayDZD.toLocaleString('fr-DZ')} {t('common.currency')}{' '}
                        {t('common.perDay')}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Rental Duration Slider */}
              <div className="p-5 rounded-2xl bg-[#1C2024] border border-[#2A2F34]">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-xs font-medium text-[#A8ADB3]">
                    {t('calc.daysLabel')}
                  </label>
                  <span className="text-lg font-extrabold font-mono text-[#C8A45D]">
                    {days} {t('calc.daysCount')}
                  </span>
                </div>

                <input
                  type="range"
                  min="1"
                  max="14"
                  value={days}
                  onChange={(e) => setDays(Number(e.target.value))}
                  className="w-full h-2 bg-[#0B0D0F] rounded-lg appearance-none cursor-pointer accent-[#C8A45D]"
                />

                <div className="flex justify-between text-[10px] font-mono text-[#A8ADB3] mt-2">
                  <span>1 jour</span>
                  <span>7 jours (-15%)</span>
                  <span>14 jours</span>
                </div>
              </div>

              {/* Price Breakdown Card */}
              <div className="p-4 rounded-xl bg-[#0B0D0F] border border-[#2A2F34] space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between text-[#A8ADB3]">
                  <span>{t('calc.dailyRate')}</span>
                  <span className="font-mono text-[#F5F3EF]">
                    {dailyRate.toLocaleString('fr-DZ')} {t('common.currency')} x {days}d
                  </span>
                </div>

                {isDiscounted && (
                  <div className="flex justify-between text-emerald-400 font-medium">
                    <span className="flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      {t('calc.discountLabel')}
                    </span>
                    <span className="font-mono">
                      -{discountAmount.toLocaleString('fr-DZ')} {t('common.currency')}
                    </span>
                  </div>
                )}

                <div className="pt-2 border-t border-[#2A2F34] flex justify-between items-center">
                  <span className="font-bold text-[#F5F3EF]">{t('calc.totalLabel')}</span>
                  <span className="text-xl sm:text-2xl font-extrabold text-[#C8A45D] font-mono">
                    {finalTotal.toLocaleString('fr-DZ')} {t('common.currency')}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Vehicle Preview & WhatsApp CTA (Span 5) */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-4">
              <CarIllustration modelId={vehicle.id} />

              <div className="p-4 rounded-xl bg-[#1C2024] border border-[#2A2F34] text-xs text-[#A8ADB3] space-y-1.5">
                <div className="flex items-center gap-2 text-[#F5F3EF] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{t('common.unlimitedKmBadge')}</span>
                </div>
                <div className="flex items-center gap-2 text-[#F5F3EF] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{t('common.airportBadge')}</span>
                </div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <Button variant="primary" fullWidth size="lg">
                  <MessageCircle className="w-5 h-5" />
                  {t('calc.bookThisTotal')}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
