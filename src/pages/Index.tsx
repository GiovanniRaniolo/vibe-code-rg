import {
  Header,
  HeroSection,
  BrowserMockup,
  FeatureCards,
  SectionDivider,
  TransformationSection,
  BenefitsSection,
  StackAndSkillsSection,
  FAQSection,
  PricingSection,
  LocationSection,
  Footer
} from "@/components/sections";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      
      {/* Hero with Browser Mockup */}
      <HeroSection />
      <BrowserMockup />
      
      {/* Feature Cards - Metodologia AI-First */}
      <FeatureCards />
      
      <SectionDivider />
      
      {/* NEW: Transformation Timeline - Percorso 7 settimane */}
      <TransformationSection />
      
      <SectionDivider />
      
      {/* Programma Dettagliato con Accordion */}
      <BenefitsSection />
      
      <SectionDivider />
      
      {/* NEW: Stack Tecnologico e Competenze (merge Learning + Outcomes) */}
      <StackAndSkillsSection />
      
      <SectionDivider />
      
      {/* FAQ con Garanzia */}
      <FAQSection />
      
      {/* Pricing con Countdown e Urgency */}
      <PricingSection />
      
      {/* Location */}
      <LocationSection />
      
      <Footer />
    </div>
  );
};

export default Index;
