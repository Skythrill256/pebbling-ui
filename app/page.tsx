import Navbar from "@/components/Navbar";
import  Hero  from "@/components/Hero";
import { ProductShowcase } from "@/components/ui/product-showcase";
import FeatureSection from "@/components/FeatureSection";
import { IntegrationsGrid } from "@/components/ui/integrations-grid-new";
import { OpenSourceSection } from "@/components/OpenSource";
import { Registrypreview} from "@/components/ui/registrypreview";
import { PricingSection } from "@/components/ui/pricing-section";
import { FoundersNote } from "@/components/ui/founders-note";
import { Footer } from "@/components/footer";
import { ScrollAnimationWrapper } from "@/components/ui/scroll-animation-wrapper";
import { AnimatedBackground } from "@/components/ui/animated-background";
import FaqPage from "@/components/FAQ";
import {Build} from "@/components/Build";
import Timeline from "@/components/Timeline";
import { HeroPayoff } from "@/components/Heropayoff";
import FAQPage from "@/components/FAQ";
import Matrices from "@/components/matrices";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-primary relative overflow-hidden">
      {/* Animated background */}
      {/* <AnimatedBackground /> */}
      
      <Navbar />
      
      {/* Hero section - no animation wrapper needed as it has its own animations */}
      <div className="w-full">
        <Hero />
      </div>
      <Matrices/>
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
      {/*Registry Preview*/}
      <ScrollAnimationWrapper 
        direction="up" 
        className="w-full" 
        delay={0.1} 
        amount={0.1}
        parallax={true}
        parallaxSpeed={0.4}
      >
        <Registrypreview />
      </ScrollAnimationWrapper>
      {/* Features Section with fade left animation and parallax */}
      <ScrollAnimationWrapper 
        direction="left" 
        className="w-full " 
        delay={0.1} 
        amount={0.1}
        parallax={true}
        intensity="medium"
      >
        <FeatureSection/>
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
      {/*Built for scale*/}
      <ScrollAnimationWrapper 
        direction="right" 
        className="w-full" 
        delay={0.1} 
        amount={0.1}
        intensity="strong"
      >
        <Build/>

      </ScrollAnimationWrapper>
      {/*Changelog*/}
      <ScrollAnimationWrapper 
        direction="up" 
        className="w-full" 
        delay={0.1} 
        amount={0.1}
        intensity="strong">
          <Timeline/>
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
      {/* FAQ Section with fade left animation */}
      <ScrollAnimationWrapper 
        direction="left" 
        className="w-full" 
        delay={0.2} 
        amount={0.1}
        intensity="medium"
      >
       <FAQPage/>
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
