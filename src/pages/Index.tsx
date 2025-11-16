import {
  Header,
  HeroSection,
  BrowserMockup,
  FeatureCards,
  SectionDivider,
  LearningSection,
  OutcomesSection,
  BenefitsSection,
  PricingSection,
  LocationSection,
  FAQSection,
  Footer
} from "@/components/sections";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      
      <HeroSection />
      <BrowserMockup />
      <FeatureCards />
      
      <SectionDivider />
      
      <LearningSection />
      <OutcomesSection />
      <BenefitsSection />
      <PricingSection />
      <LocationSection />
      <FAQSection />
      
      <Footer />
    </div>
  );
};

export default Index;
