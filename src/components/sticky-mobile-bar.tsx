'use client';

import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { useTranslation } from '@/i18n/context';
import { siteConfig } from '@/data/site';

export function StickyMobileBar() {
  const { t } = useTranslation();

  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-[#0B0D0F]/95 backdrop-blur-lg border-t border-[#2A2F34] shadow-2xl">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={`tel:${siteConfig.whatsappNumber.replace(/\s+/g, '')}`}
          className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#1C2024] border border-[#2A2F34] text-[#F5F3EF] text-xs font-semibold hover:bg-[#2A2F34] transition-colors"
        >
          <Phone className="w-4 h-4 text-[#C8A45D]" />
          <span>{t('nav.callUs')}</span>
        </a>

        <a
          href={`${siteConfig.whatsappRawUrl}?text=${encodeURIComponent(
            'Bonjour KAYN, je souhaite effectuer une réservation de véhicule.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#C8A45D] text-[#111111] text-xs font-bold shadow-md shadow-[#C8A45D]/20 active:scale-95 transition-transform"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
