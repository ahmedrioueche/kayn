'use client';

import React, { useState } from 'react';
import { vehiclesData, categoriesData } from '@/data/site';
import { CategoryId, Vehicle } from '@/types/site';
import { useTranslation } from '@/i18n/context';
import { SectionHeader } from './ui/section-header';
import { VehicleCard } from './vehicle-card';
import { VehicleModal } from './vehicle-modal';
import { MotionWrapper } from './ui/motion-wrapper';

export function FeaturedVehicles() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');
  const [selectedModalVehicle, setSelectedModalVehicle] = useState<Vehicle | null>(null);

  const filteredVehicles =
    activeCategory === 'all'
      ? vehiclesData
      : vehiclesData.filter((v) => v.categoryId === activeCategory);

  return (
    <section id="vehicles" className="py-20 bg-[#0B0D0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={t('hero.eyebrow')}
          title={t('vehicles.sectionTitle')}
          subtitle={t('vehicles.sectionSubtitle')}
        />

        {/* Filter Category Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-[#C8A45D] text-[#111111] font-semibold shadow-md shadow-[#C8A45D]/20'
                : 'bg-[#14171A] text-[#A8ADB3] border border-[#2A2F34] hover:text-[#F5F3EF] hover:border-[#C8A45D]/40'
            }`}
          >
            {t('vehicles.filterAll')} ({vehiclesData.length})
          </button>

          {categoriesData.map((cat) => {
            const count = vehiclesData.filter((v) => v.categoryId === cat.id).length;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#C8A45D] text-[#111111] font-semibold shadow-md shadow-[#C8A45D]/20'
                    : 'bg-[#14171A] text-[#A8ADB3] border border-[#2A2F34] hover:text-[#F5F3EF] hover:border-[#C8A45D]/40'
                }`}
              >
                {t(cat.nameKey as any)} {count > 0 ? `(${count})` : ''}
              </button>
            );
          })}
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredVehicles.map((vehicle, index) => (
            <MotionWrapper key={vehicle.id} direction="up" delay={index * 0.1}>
              <VehicleCard
                vehicle={vehicle}
                onSelectModal={(v) => setSelectedModalVehicle(v)}
              />
            </MotionWrapper>
          ))}
        </div>
      </div>

      {/* Modal Drawer */}
      <VehicleModal
        vehicle={selectedModalVehicle}
        onClose={() => setSelectedModalVehicle(null)}
      />
    </section>
  );
}
