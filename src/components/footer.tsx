'use client';

import React from 'react';
import Link from 'next/link';
import { Car, MessageCircle, Instagram, AlertTriangle } from 'lucide-react';
import { useTranslation } from '@/i18n/context';
import { siteConfig, locationsData } from '@/data/site';

export function Footer() {
  const { t } = useTranslation();

  const navLinks = [
    { href: '#home', labelKey: 'nav.home' as const },
    { href: '#vehicles', labelKey: 'nav.vehicles' as const },
    { href: '#process', labelKey: 'nav.howItWorks' as const },
    { href: '#locations', labelKey: 'nav.locations' as const },
    { href: '#reviews', labelKey: 'nav.reviews' as const },
  ];

  return (
    <footer className="bg-[#0B0D0F] border-t border-[#2A2F34] text-[#A8ADB3] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#2A2F34]">
          {/* Brand Info (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="#home" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#C8A45D] to-[#8C6D2D] flex items-center justify-center text-[#111111] font-bold">
                <Car className="w-4 h-4 stroke-[2.5]" />
              </div>
              <span className="text-xl font-extrabold tracking-wider text-[#F5F3EF]">
                {siteConfig.brandName}
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-[#A8ADB3] leading-relaxed max-w-sm">
              {t('footer.description')}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.whatsappRawUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#14171A] border border-[#2A2F34] flex items-center justify-center text-[#A8ADB3] hover:text-[#C8A45D] hover:border-[#C8A45D]/40 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#14171A] border border-[#2A2F34] flex items-center justify-center text-[#A8ADB3] hover:text-[#C8A45D] hover:border-[#C8A45D]/40 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div>
            <h4 className="text-xs font-mono font-bold tracking-widest text-[#F5F3EF] uppercase mb-4">
              {t('footer.navHeader')}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-[#C8A45D] transition-colors"
                  >
                    {t(link.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h4 className="text-xs font-mono font-bold tracking-widest text-[#F5F3EF] uppercase mb-4">
              {t('footer.citiesHeader')}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {locationsData.map((loc) => (
                <li key={loc.id} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8A45D]" />
                  <span>{t(loc.nameKey as any)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-mono font-bold tracking-widest text-[#F5F3EF] uppercase mb-4">
              {t('footer.contactHeader')}
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-[#A8ADB3]">
              <p className="font-mono text-[#F5F3EF]">
                {siteConfig.whatsappNumber}
              </p>
              <p>{siteConfig.city}, {siteConfig.country}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Demo Disclaimer Banner */}
        <div className="pt-8 space-y-6">
          {/* Demo Disclaimer */}
          <div className="p-4 rounded-xl bg-[#14171A] border border-[#2A2F34] flex items-start gap-3 text-xs text-[#A8ADB3]">
            <AlertTriangle className="w-4 h-4 text-[#C8A45D] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-[#F5F3EF]">
                {t('footer.disclaimerTitle')}{' '}
              </span>
              <span>{t('footer.disclaimer')}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-[#A8ADB3]/60 gap-4">
            <p>
              © {new Date().getFullYear()} {siteConfig.brandName}. {t('footer.copyright')}
            </p>
            <p className="font-mono text-[11px]">
              ALGERIA CAR RENTAL • PORTFOLIO DEMO MVP
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
