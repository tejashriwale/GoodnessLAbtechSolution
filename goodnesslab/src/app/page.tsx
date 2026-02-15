import {
  HeroSection,
  ValuePropositions,
  ServicesOverview,
  EquipmentSection,
  TestimonialsSection,
  WriteReviewSection,
  AccreditationBanner,
  ContactCTA,
} from '@/components/home';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ValuePropositions />
      <ServicesOverview />
      <EquipmentSection />
      <TestimonialsSection />
      <WriteReviewSection />
      <AccreditationBanner />
      <ContactCTA />
    </div>
  );
}
