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
  FAQSection,
  Footer
} from "@/components/sections";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <HeroSection />
      <BrowserMockup />
      <FeatureCards />
      
      <SectionDivider />
      
      <LearningSection />
      <OutcomesSection />
      <BenefitsSection />
      <PricingSection />
      <FAQSection />
      
      <Footer />
    </div>
  );
};

export default Index;
