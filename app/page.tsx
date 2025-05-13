import Navbar from "@/components/Navbar";
import { Hero } from "@/components/ui/animated-hero";
import { ProductShowcase } from "@/components/ui/product-showcase";
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects";
import { IntegrationsGrid } from "@/components/ui/integrations-grid-new";
import { OpenSourceSection } from "@/components/OpenSource";
import { HeroPayoff } from "@/components/ui/hero-payoff";
import { PricingSection } from "@/components/ui/pricing-section";
import { FoundersNote } from "@/components/ui/founders-note";
import { Footer } from "@/components/footer";
import { ScrollAnimationWrapper } from "@/components/ui/scroll-animation-wrapper";
import { AnimatedBackground } from "@/components/ui/animated-background";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 relative overflow-hidden">
      {/* Animated background */}
      <AnimatedBackground />
      
      <Navbar />
      
      {/* Hero section - no animation wrapper needed as it has its own animations */}
      <div className="w-full">
        <Hero />
      </div>
      
      {/* Product Showcase with scale animation and parallax */}
      <ScrollAnimationWrapper 
        direction="scale" 
        className="w-full" 
        amount={0.1} 
        parallax={true} 
        parallaxSpeed={0.3}
        intensity="medium"
      >
        <ProductShowcase />
      </ScrollAnimationWrapper>
      
      {/* Features Section with fade left animation and parallax */}
      <ScrollAnimationWrapper 
        direction="left" 
        className="w-full" 
        delay={0.1} 
        amount={0.1}
        parallax={true}
        intensity="medium"
      >
        <FeaturesSectionWithHoverEffects />
      </ScrollAnimationWrapper>
      
      {/* Integrations Grid with fade right animation and stronger effect */}
      <ScrollAnimationWrapper 
        direction="right" 
        className="w-full" 
        delay={0.1} 
        amount={0.1}
        intensity="strong"
      >
        <IntegrationsGrid />
      </ScrollAnimationWrapper>
      
      {/* OpenSource Section with rotate animation */}
      <ScrollAnimationWrapper 
        direction="rotate" 
        className="w-full" 
        delay={0.2} 
        amount={0.1}
        intensity="light"
      >
        <OpenSourceSection />
      </ScrollAnimationWrapper>
      
      {/* Hero Payoff with fade up animation and parallax */}
      <ScrollAnimationWrapper 
        direction="up" 
        className="w-full" 
        delay={0.1} 
        amount={0.1}
        parallax={true}
        parallaxSpeed={0.4}
      >
        <HeroPayoff />
      </ScrollAnimationWrapper>
      
      {/* Pricing Section with scale animation */}
      <ScrollAnimationWrapper 
        direction="scale" 
        className="w-full" 
        delay={0.1} 
        amount={0.1}
        intensity="medium"
      >
        <PricingSection />
      </ScrollAnimationWrapper>
      
      {/* Founders Note with fade left animation */}
      <ScrollAnimationWrapper 
        direction="left" 
        className="w-full" 
        delay={0.2} 
        amount={0.1}
        intensity="medium"
      >
        <FoundersNote />
      </ScrollAnimationWrapper>
      
      {/* Footer with simple fade animation */}
      <ScrollAnimationWrapper 
        direction="up" 
        className="w-full" 
        delay={0.3}
        intensity="light"
      >
        <Footer />
      </ScrollAnimationWrapper>
    </main>
  );
}
