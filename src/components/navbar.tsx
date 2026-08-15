'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Car, Globe, Phone } from 'lucide-react';
import { useTranslation } from '@/i18n/context';
import { siteConfig } from '@/data/site';
import { Button } from './ui/button';

export function Navbar() {
  const { t, locale, setLocale } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', labelKey: 'nav.home' as const },
    { href: '#vehicles', labelKey: 'nav.vehicles' as const },
    { href: '#stories', labelKey: 'nav.stories' as const },
    { href: '#routes', labelKey: 'nav.routes' as const },
    { href: '#savings', labelKey: 'nav.savings' as const },
    { href: '#calculator', labelKey: 'nav.calculator' as const },
    { href: '#locations', labelKey: 'nav.locations' as const },
    { href: '#faq', labelKey: 'nav.faq' as const },
    { href: '#reviews', labelKey: 'nav.reviews' as const },
  ];

  const toggleLanguage = () => {
    setLocale(locale === 'fr' ? 'en' : 'fr');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B0D0F]/90 backdrop-blur-md border-[#2A2F34] py-3 shadow-lg shadow-black/40'
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark */}
          <Link
            href="#home"
            className="flex items-center gap-2.5 group focus-visible:outline-2 focus-visible:outline-[#C8A45D]"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#C8A45D] to-[#8C6D2D] flex items-center justify-center text-[#111111] font-bold shadow-md shadow-[#C8A45D]/20 group-hover:scale-105 transition-transform duration-200">
              <Car className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-wider text-[#F5F3EF] leading-none">
                {siteConfig.brandName}
              </span>
              <span className="text-[9px] font-mono tracking-widest text-[#C8A45D] uppercase mt-0.5">
                ALGERIA
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium text-[#A8ADB3] hover:text-[#F5F3EF] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#C8A45D] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
              >
                {t(link.labelKey)}
              </a>
            ))}
          </nav>

          {/* Right Action Bar */}
          <div className="flex items-center gap-3">
            {/* Phone Display */}
            <a
              href={`tel:${siteConfig.whatsappNumber.replace(/\s+/g, '')}`}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono text-[#F5F3EF] bg-[#14171A] border border-[#2A2F34] hover:border-[#C8A45D]/40 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C8A45D]" />
              <span>{siteConfig.phoneDisplay}</span>
            </a>

            {/* Language Switcher Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-mono text-[#A8ADB3] hover:text-[#F5F3EF] bg-[#14171A] border border-[#2A2F34] hover:border-[#C8A45D]/40 transition-colors cursor-pointer"
              title="Switch language / Changer de langue"
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5 text-[#C8A45D]" />
              <span className="uppercase font-semibold">{locale}</span>
            </button>

            {/* Primary CTA */}
            <a href="#vehicles" className="hidden sm:inline-flex">
              <Button variant="primary" size="sm">
                {t('nav.bookCta')}
              </Button>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-[#14171A] border border-[#2A2F34] text-[#F5F3EF] hover:text-[#C8A45D] transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#14171A] border-b border-[#2A2F34] px-4 pt-4 pb-6 mt-3 space-y-3 animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-[#A8ADB3] hover:text-[#F5F3EF] hover:bg-[#1C2024] px-3 py-2 rounded-md transition-colors"
            >
              {t(link.labelKey)}
            </a>
          ))}
          <div className="pt-2 border-t border-[#2A2F34]">
            <a href="#vehicles" onClick={() => setMobileMenuOpen(false)} className="block w-full">
              <Button variant="primary" fullWidth size="md">
                {t('nav.bookCta')}
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
