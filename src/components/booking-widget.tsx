'use client';

import React, { useState } from 'react';
import { MapPin, Calendar, Search, Info } from 'lucide-react';
import { useTranslation } from '@/i18n/context';
import { locationsData, siteConfig } from '@/data/site';
import { Button } from './ui/button';

export function BookingWidget() {
  const { t } = useTranslation();
  const [selectedCity, setSelectedCity] = useState('alger');
  const [pickupDate, setPickupDate] = useState('2026-08-20');
  const [returnDate, setReturnDate] = useState('2026-08-25');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Pre-fill WhatsApp message with search details
    const selectedCityObj = locationsData.find((l) => l.id === selectedCity);
    const cityName = selectedCityObj ? t(selectedCityObj.nameKey as any) : 'Alger';
    const message = encodeURIComponent(
      `Bonjour KAYN, je souhaite réserver une voiture à ${cityName} du ${pickupDate} au ${returnDate}. Pourriez-vous me confirmer les modèles disponibles ?`
    );
    window.open(`${siteConfig.whatsappRawUrl}?text=${message}`, '_blank');
  };

  return (
    <div className="w-full bg-[#14171A]/95 border border-[#2A2F34] rounded-2xl p-4 sm:p-6 shadow-2xl backdrop-blur-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xs font-mono font-bold tracking-widest text-[#C8A45D] uppercase flex items-center gap-2">
          <Search className="w-3.5 h-3.5" />
          {t('widget.title')}
        </h3>
        <span className="text-[10px] font-mono text-[#A8ADB3]/70 flex items-center gap-1 bg-[#1C2024] px-2 py-0.5 rounded border border-[#2A2F34]">
          <Info className="w-3 h-3 text-[#C8A45D]" />
          {t('widget.demoNote')}
        </span>
      </div>

      <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 items-end">
        {/* City Select */}
        <div>
          <label className="block text-xs font-medium text-[#A8ADB3] mb-1.5 flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-[#C8A45D]" />
            {t('widget.cityLabel')}
          </label>
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="w-full bg-[#1C2024] border border-[#2A2F34] rounded-lg px-3 py-2.5 text-xs sm:text-sm text-[#F5F3EF] focus:border-[#C8A45D] focus:outline-none transition-colors cursor-pointer"
          >
            {locationsData.map((loc) => (
              <option key={loc.id} value={loc.id} className="bg-[#1C2024] text-[#F5F3EF]">
                {t(loc.nameKey as any)}
              </option>
            ))}
          </select>
        </div>

        {/* Departure Date */}
        <div>
          <label className="block text-xs font-medium text-[#A8ADB3] mb-1.5 flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-[#C8A45D]" />
            {t('widget.departureLabel')}
          </label>
          <input
            type="date"
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
            className="w-full bg-[#1C2024] border border-[#2A2F34] rounded-lg px-3 py-2.5 text-xs sm:text-sm text-[#F5F3EF] focus:border-[#C8A45D] focus:outline-none transition-colors"
          />
        </div>

        {/* Return Date */}
        <div>
          <label className="block text-xs font-medium text-[#A8ADB3] mb-1.5 flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-[#C8A45D]" />
            {t('widget.returnLabel')}
          </label>
          <input
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            className="w-full bg-[#1C2024] border border-[#2A2F34] rounded-lg px-3 py-2.5 text-xs sm:text-sm text-[#F5F3EF] focus:border-[#C8A45D] focus:outline-none transition-colors"
          />
        </div>

        {/* Search Submit CTA */}
        <div className="sm:col-span-3 lg:col-span-1">
          <Button type="submit" variant="primary" fullWidth size="md" className="h-[42px]">
            {t('widget.searchBtn')}
          </Button>
        </div>
      </form>
    </div>
  );
}
