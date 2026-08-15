'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqData } from '@/data/site';
import { useTranslation } from '@/i18n/context';
import { SectionHeader } from './ui/section-header';
import { MotionWrapper } from './ui/motion-wrapper';

export function Faq() {
  const { t } = useTranslation();
  const [openId, setOpenId] = useState<string | null>('documents');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-[#0B0D0F]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="INFORMATIONS PRATIQUES"
          title={t('faq.sectionTitle')}
          subtitle={t('faq.sectionSubtitle')}
        />

        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openId === item.id;
            return (
              <MotionWrapper key={item.id} direction="up" delay={index * 0.08}>
                <div className="rounded-2xl bg-[#14171A] border border-[#2A2F34] hover:border-[#C8A45D]/30 transition-colors overflow-hidden">
                  <button
                    onClick={() => toggleFaq(item.id)}
                    className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-[#C8A45D] shrink-0" />
                      <h3 className="text-base sm:text-lg font-bold text-[#F5F3EF]">
                        {t(item.questionKey as any)}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-[#A8ADB3] transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 text-[#C8A45D]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm text-[#A8ADB3] leading-relaxed border-t border-[#2A2F34]/50 animate-in fade-in duration-200">
                      {t(item.answerKey as any)}
                    </div>
                  )}
                </div>
              </MotionWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
