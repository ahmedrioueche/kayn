'use client';

import React from 'react';
import { X, Check, ShieldCheck, Gauge, Fuel, Users, AlertCircle, MessageCircle, Calendar } from 'lucide-react';
import { Vehicle } from '@/types/site';
import { useTranslation } from '@/i18n/context';
import { siteConfig } from '@/data/site';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { CarIllustration } from './ui/car-illustration';

interface VehicleModalProps {
  vehicle: Vehicle | null;
  onClose: () => void;
}

export function VehicleModal({ vehicle, onClose }: VehicleModalProps) {
  const { t } = useTranslation();

  if (!vehicle) return null;

  const whatsappMessage = encodeURIComponent(
    `Bonjour KAYN, je souhaiterais réserver la ${vehicle.name} (${vehicle.year}) à ${vehicle.specs.pricePerDayDZD} ${t('common.currency')}/jour. Pourriez-vous me confirmer sa disponibilité ?`
  );

  const whatsappUrl = `${siteConfig.whatsappRawUrl}?text=${whatsappMessage}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#14171A] border border-[#2A2F34] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
        {/* Header Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#1C2024] border border-[#2A2F34] text-[#A8ADB3] hover:text-[#F5F3EF] flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Vehicle Render Header */}
        <div className="relative">
          <CarIllustration modelId={vehicle.id} className="rounded-b-none border-b border-[#2A2F34]" />
          <div className="absolute bottom-3 left-4 flex gap-2">
            {vehicle.tagKey && (
              <Badge variant="gold" size="sm">
                {t(vehicle.tagKey as any)}
              </Badge>
            )}
            <Badge variant="surface" size="sm">
              {vehicle.year}
            </Badge>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6">
          {/* Title & Price */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#2A2F34] pb-4">
            <div>
              <h2 className="text-2xl font-extrabold text-[#F5F3EF]">
                {vehicle.name}
              </h2>
              <p className="text-xs text-[#A8ADB3] font-mono mt-0.5">
                {t(vehicle.categoryNameKey as any)} • {vehicle.year} Model
              </p>
            </div>

            <div className="text-left sm:text-right">
              <div className="text-2xl font-extrabold text-[#C8A45D]">
                {vehicle.specs.pricePerDayDZD.toLocaleString('fr-DZ')}{' '}
                <span className="text-xs font-normal text-[#F5F3EF]">
                  {t('common.currency')}
                </span>
              </div>
              <span className="text-xs text-[#A8ADB3]">
                {t('common.perDay')}
              </span>
            </div>
          </div>

          {/* Quick Specs Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 rounded-xl bg-[#1C2024] border border-[#2A2F34] flex items-center gap-3">
              <Gauge className="w-5 h-5 text-[#C8A45D]" />
              <div>
                <span className="text-[10px] text-[#A8ADB3] block">Transmission</span>
                <span className="text-xs font-bold text-[#F5F3EF]">
                  {t(vehicle.specs.transmissionKey)}
                </span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#1C2024] border border-[#2A2F34] flex items-center gap-3">
              <Fuel className="w-5 h-5 text-[#C8A45D]" />
              <div>
                <span className="text-[10px] text-[#A8ADB3] block">Carburant</span>
                <span className="text-xs font-bold text-[#F5F3EF]">
                  {t(vehicle.specs.fuelKey)}
                </span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#1C2024] border border-[#2A2F34] flex items-center gap-3">
              <Users className="w-5 h-5 text-[#C8A45D]" />
              <div>
                <span className="text-[10px] text-[#A8ADB3] block">Capacité</span>
                <span className="text-xs font-bold text-[#F5F3EF]">
                  {vehicle.specs.seats} {t('common.seats')}
                </span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#1C2024] border border-[#2A2F34] flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#C8A45D]" />
              <div>
                <span className="text-[10px] text-[#A8ADB3] block">Kilométrage</span>
                <span className="text-xs font-bold text-emerald-400">Illimité</span>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div>
            <h3 className="text-xs font-mono font-bold text-[#C8A45D] uppercase tracking-wider mb-3">
              Équipements & Options Incluses
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
              {vehicle.featuresKeys.map((featureKey) => (
                <div key={featureKey} className="flex items-center gap-2 text-[#F5F3EF]">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{t(featureKey as any)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Terms & Deposit Info */}
          <div className="p-4 rounded-xl bg-[#1C2024]/60 border border-[#2A2F34] flex items-start gap-3 text-xs text-[#A8ADB3]">
            <AlertCircle className="w-4 h-4 text-[#C8A45D] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-[#F5F3EF]">
                {t('common.deposit')}{' '}
              </span>
              <span>
                {vehicle.specs.depositDZD.toLocaleString('fr-DZ')} {t('common.currency')}{' '}
                (restituée immédiatement au retour du véhicule). Permis de conduire de +2 ans requis.
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button variant="primary" fullWidth size="lg">
                <MessageCircle className="w-5 h-5" />
                {t('vehicles.bookBtn')}
              </Button>
            </a>
            <Button variant="secondary" onClick={onClose} size="lg">
              {t('common.closeBtn')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
