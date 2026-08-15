import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { MarqueeTicker } from '@/components/marquee-ticker';
import { TrustStrip } from '@/components/trust-strip';
import { FeaturedVehicles } from '@/components/featured-vehicles';
import { CustomerStories } from '@/components/customer-stories';
import { ScenicRoutes } from '@/components/scenic-routes';
import { PriceCalculator } from '@/components/price-calculator';
import { SavingsEstimator } from '@/components/savings-estimator';
import { VehicleCategories } from '@/components/vehicle-categories';
import { HowItWorks } from '@/components/how-it-works';
import { Locations } from '@/components/locations';
import { FleetStats } from '@/components/fleet-stats';
import { WhyKayn } from '@/components/why-kayn';
import { Faq } from '@/components/faq';
import { Testimonials } from '@/components/testimonials';
import { FinalCta } from '@/components/final-cta';
import { Footer } from '@/components/footer';
import { StickyMobileBar } from '@/components/sticky-mobile-bar';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0D0F] text-[#F5F3EF] pb-16 sm:pb-0">
      <Navbar />
      <Hero />
      <MarqueeTicker />
      <TrustStrip />
      <FeaturedVehicles />
      <CustomerStories />
      <ScenicRoutes />
      <PriceCalculator />
      <SavingsEstimator />
      <VehicleCategories />
      <HowItWorks />
      <Locations />
      <FleetStats />
      <WhyKayn />
      <Faq />
      <Testimonials />
      <FinalCta />
      <Footer />
      <StickyMobileBar />
    </main>
  );
}
