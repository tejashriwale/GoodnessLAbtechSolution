import {
  HeroSection,
  ValuePropositions,
  ServicesOverview,
  TestimonialsSection,
  AccreditationBanner,
  ContactCTA,
} from '@/components/home';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ValuePropositions />
      <ServicesOverview />
      <TestimonialsSection />
      <AccreditationBanner />
      <ContactCTA />
    </div>
  );
}
