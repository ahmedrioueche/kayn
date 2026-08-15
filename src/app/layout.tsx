import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './globals.css';
import { I18nProvider } from '@/i18n/context';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'KAYN — Location de Voitures en Algérie | Premium Car Rental',
  description:
    'Louez une voiture fiable, propre et adaptée à vos besoins à Alger, Oran, Constantine et Blida. Réservation simple et rapide par WhatsApp.',
  keywords: [
    'location voiture algerie',
    'car rental algeria',
    'louer voiture alger',
    'location voiture oran',
    'location voiture constantine',
    'KAYN car rental',
  ],
  authors: [{ name: 'KAYN' }],
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  },
  openGraph: {
    title: 'KAYN — Location de Voitures en Algérie',
    description:
      'Service de location de voitures récentes et fiables en Algérie. Prise en charge rapide à Alger, Oran, Constantine et Blida.',
    type: 'website',
    locale: 'fr_DZ',
    images: [
      {
        url: '/logo.svg',
        width: 512,
        height: 512,
        alt: 'KAYN Algeria Luxury Car Rental Logo',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <body className="bg-[#0B0D0F] text-[#F5F3EF] antialiased selection:bg-[#C8A45D] selection:text-[#111111]">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
