import dynamic from 'next/dynamic';
import Navbar from "@/components/Navbar";
import { Hero } from "@/components/ui/animated-hero";
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects";
import { ScrollAnimationWrapper } from "@/components/ui/scroll-animation-wrapper";
import { AnimatedBackground } from "@/components/ui/animated-background";

// Dynamically import heavier components to improve initial load time
const ProductShowcase = dynamic(() => import('@/components/ui/product-showcase').then(mod => ({ default: mod.ProductShowcase })), { ssr: true });
const IntegrationsGrid = dynamic(() => import('@/components/ui/integrations-grid-new').then(mod => ({ default: mod.IntegrationsGrid })), { ssr: true });
const OpenSourceSection = dynamic(() => import('@/components/OpenSource').then(mod => ({ default: mod.OpenSourceSection })), { ssr: true });
const HeroPayoff = dynamic(() => import('@/components/ui/hero-payoff').then(mod => ({ default: mod.HeroPayoff })), { ssr: true });
const PricingSection = dynamic(() => import('@/components/ui/pricing-section').then(mod => ({ default: mod.PricingSection })), { ssr: true });
const FoundersNote = dynamic(() => import('@/components/ui/founders-note').then(mod => ({ default: mod.FoundersNote })), { ssr: true });
const Footer = dynamic(() => import('@/components/footer').then(mod => ({ default: mod.Footer })), { ssr: true });

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
      
      {/* Product Showcase with simplified animation */}
      <ScrollAnimationWrapper 
        direction="scale" 
        className="w-full" 
        amount={0.05} 
        parallax={false} 
        intensity="light"
      >
        <ProductShowcase />
      </ScrollAnimationWrapper>
      
      {/* Features Section with simplified animation */}
      <ScrollAnimationWrapper 
        direction="left" 
        className="w-full" 
        delay={0.1} 
        amount={0.05}
        parallax={false}
        intensity="light"
      >
        <FeaturesSectionWithHoverEffects />
      </ScrollAnimationWrapper>
      
      {/* Only enable parallax and stronger effects on desktop */}
      <div className="hidden md:block w-full">
        <ScrollAnimationWrapper 
          direction="right" 
          className="w-full" 
          delay={0.1} 
          amount={0.1}
          intensity="medium"
        >
          <IntegrationsGrid />
        </ScrollAnimationWrapper>
      </div>
      
      {/* Mobile optimized version without parallax */}
      <div className="md:hidden w-full">
        <ScrollAnimationWrapper 
          direction="up" 
          className="w-full" 
          intensity="light"
        >
          <IntegrationsGrid />
        </ScrollAnimationWrapper>
      </div>
      
      {/* OpenSource Section with simplified animation */}
      <ScrollAnimationWrapper 
        direction="up" 
        className="w-full" 
        intensity="light"
      >
        <OpenSourceSection />
      </ScrollAnimationWrapper>
      
      {/* Hero Payoff with different animations for mobile/desktop */}
      <div className="hidden md:block w-full">
        <ScrollAnimationWrapper 
          direction="up" 
          className="w-full" 
          delay={0.1} 
          amount={0.1}
          parallax={true}
          parallaxSpeed={0.2}
        >
          <HeroPayoff />
        </ScrollAnimationWrapper>
      </div>
      
      <div className="md:hidden w-full">
        <ScrollAnimationWrapper 
          direction="up" 
          className="w-full" 
          intensity="light"
        >
          <HeroPayoff />
        </ScrollAnimationWrapper>
      </div>
      
      {/* Pricing Section with simplified animation */}
      <ScrollAnimationWrapper 
        direction="scale" 
        className="w-full" 
        intensity="light"
      >
        <PricingSection />
      </ScrollAnimationWrapper>
      
      {/* Founders Note with simplified animation */}
      <ScrollAnimationWrapper 
        direction="up" 
        className="w-full" 
        intensity="light"
      >
        <FoundersNote />
      </ScrollAnimationWrapper>
      
      {/* Footer with simple fade animation */}
      <ScrollAnimationWrapper 
        direction="up" 
        className="w-full" 
        intensity="light"
      >
        <Footer />
      </ScrollAnimationWrapper>
    </main>
  );
}
