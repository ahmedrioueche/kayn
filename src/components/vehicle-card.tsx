'use client';

import React from 'react';
import { Users, Fuel, Gauge, MessageCircle, Info } from 'lucide-react';
import { Vehicle } from '@/types/site';
import { useTranslation } from '@/i18n/context';
import { siteConfig } from '@/data/site';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { CarIllustration } from './ui/car-illustration';

interface VehicleCardProps {
  vehicle: Vehicle;
  onSelectModal?: (vehicle: Vehicle) => void;
}

export function VehicleCard({ vehicle, onSelectModal }: VehicleCardProps) {
  const { t } = useTranslation();

  const whatsappMessage = encodeURIComponent(
    `Bonjour KAYN, je souhaite réserver la ${vehicle.name} (${t(
      vehicle.categoryNameKey as any
    )}) à partir de ${vehicle.specs.pricePerDayDZD} ${t('common.currency')} ${t(
      'common.perDay'
    )}. Pourriez-vous me confirmer sa disponibilité ?`
  );

  const whatsappUrl = `${siteConfig.whatsappRawUrl}?text=${whatsappMessage}`;

  return (
    <div className="bg-[#14171A] border border-[#2A2F34] hover:border-[#C8A45D]/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-black/60 flex flex-col h-full group">
      {/* Top Graphic Illustration Header */}
      <div className="relative overflow-hidden">
        <CarIllustration modelId={vehicle.id} />

        {/* Tag badge */}
        {vehicle.tagKey && (
          <div className="absolute top-3 left-3">
            <Badge variant="gold" size="sm">
              {t(vehicle.tagKey as any)}
            </Badge>
          </div>
        )}

        {/* Category badge */}
        <div className="absolute top-3 right-3">
          <Badge variant="surface" size="sm">
            {t(vehicle.categoryNameKey as any)}
          </Badge>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-5 flex flex-col flex-grow space-y-4">
        {/* Title & Price Header */}
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-lg font-bold text-[#F5F3EF] group-hover:text-[#C8A45D] transition-colors">
              {vehicle.name}
            </h3>
            <span className="text-xs text-[#A8ADB3] font-mono">
              {t('common.startingFrom')}
            </span>
          </div>

          <div className="text-right">
            <div className="text-xl font-extrabold text-[#C8A45D]">
              {vehicle.specs.pricePerDayDZD.toLocaleString('fr-DZ')}{' '}
              <span className="text-xs font-normal text-[#F5F3EF]">
                {t('common.currency')}
              </span>
            </div>
            <span className="text-[10px] text-[#A8ADB3] block">
              {t('common.perDay')}
            </span>
          </div>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-3 gap-2 py-3 px-3 rounded-xl bg-[#1C2024] border border-[#2A2F34]/60 text-xs text-[#A8ADB3]">
          <div className="flex flex-col items-center justify-center text-center gap-1">
            <Gauge className="w-4 h-4 text-[#C8A45D]" />
            <span className="font-medium text-[#F5F3EF] text-[11px]">
              {t(vehicle.specs.transmissionKey)}
            </span>
          </div>

          <div className="flex flex-col items-center justify-center text-center gap-1 border-x border-[#2A2F34]">
            <Fuel className="w-4 h-4 text-[#C8A45D]" />
            <span className="font-medium text-[#F5F3EF] text-[11px]">
              {t(vehicle.specs.fuelKey)}
            </span>
          </div>

          <div className="flex flex-col items-center justify-center text-center gap-1">
            <Users className="w-4 h-4 text-[#C8A45D]" />
            <span className="font-medium text-[#F5F3EF] text-[11px]">
              {vehicle.specs.seats} {t('common.seats')}
            </span>
          </div>
        </div>

        {/* Features preview badges */}
        <div className="flex items-center gap-2 text-[11px] text-[#A8ADB3] font-mono flex-wrap">
          <span className="bg-[#1C2024] px-2 py-0.5 rounded border border-[#2A2F34]">
            {t('common.unlimitedKmBadge')}
          </span>
          <span className="bg-[#1C2024] px-2 py-0.5 rounded border border-[#2A2F34]">
            {t('common.airportBadge')}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 mt-auto space-y-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
          >
            <Button variant="primary" fullWidth size="md">
              <MessageCircle className="w-4 h-4" />
              {t('vehicles.bookBtn')}
            </Button>
          </a>

          {onSelectModal && (
            <Button
              variant="secondary"
              fullWidth
              size="sm"
              onClick={() => onSelectModal(vehicle)}
            >
              <Info className="w-3.5 h-3.5 text-[#C8A45D]" />
              {t('common.detailsBtn')}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
