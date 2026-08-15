'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useTranslation } from '@/i18n/context';
import { siteConfig } from '@/data/site';
import { Button } from './ui/button';
import { MotionWrapper } from './ui/motion-wrapper';

export function FinalCta() {
  const { t } = useTranslation();

  const whatsappUrl = `${siteConfig.whatsappRawUrl}?text=${encodeURIComponent(
    'Bonjour KAYN, je souhaite réserver un véhicule maintenant.'
  )}`;

  return (
    <section className="py-20 bg-[#0B0D0F] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <MotionWrapper direction="up">
          <div className="rounded-3xl bg-gradient-to-r from-[#14171A] via-[#1C2024] to-[#14171A] border border-[#C8A45D]/30 p-8 sm:p-14 text-center shadow-2xl relative overflow-hidden">
            {/* Background accent glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C8A45D]/10 blur-[100px] pointer-events-none rounded-full" />

            <div className="max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F3EF] tracking-tight">
                {t('finalCta.title')}
              </h2>

              <p className="text-base sm:text-lg text-[#A8ADB3] leading-relaxed">
                {t('finalCta.body')}
              </p>

              <div className="pt-4 flex justify-center">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="primary" size="lg">
                    <MessageCircle className="w-5 h-5" />
                    {t('finalCta.button')}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
