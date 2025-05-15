"use client";

import React, { useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, useInView } from 'framer-motion';

interface PlanFeature {
  text: string;
  isHighlighted?: boolean;
}

interface PricingPlan {
  id: string;
  category: string;
  categoryBadge: string;
  name: string;
  price: string;
  priceSuffix?: string;
  features: PlanFeature[];
  secondaryFeaturesTitle?: string;
  secondaryFeatures: PlanFeature[];
  buttonText: string;
  buttonVariant: 'primary' | 'secondary';
  isFeatured?: boolean;
}

const plansData: PricingPlan[] = [
  {
    id: 'free',
    category: 'Get Started',
    categoryBadge: 'Developer',
    name: 'Free',
    price: 'Free',
    features: [
      { text: 'Up to 100 MAUs' },
      { text: '1 self-hosted runtime' },
    ],
    secondaryFeaturesTitle: '',
    secondaryFeatures: [
      { text: 'Core CopilotKit' },
      { text: 'CoAgents' },
      { text: 'Cloud hosted' },
      { text: 'Discord community support' },
    ],
    buttonText: 'Start for Free',
    buttonVariant: 'primary',
  },
  {
    id: 'pro',
    category: 'Pro',
    categoryBadge: 'Teams',
    name: '$249',
    price: '$249',
    priceSuffix: '/ month',
    features: [
      { text: 'Up to 100 MAUs' },
      { text: '3 self-hosted runtimes' },
    ],
    secondaryFeaturesTitle: 'Everything in Developer plus:',
    secondaryFeatures: [
      { text: 'Team accounts' },
      { text: 'Onboarding consultation, dedicated Slack support and SLA' },
    ],
    buttonText: 'Build With Your Team',
    buttonVariant: 'primary',
    isFeatured: true,
  },
  {
    id: 'enterprise',
    category: 'Enterprise',
    categoryBadge: 'Scale',
    name: 'Contact Us',
    price: 'Contact Us',
    features: [
      { text: 'Custom plans' },
    ],
    secondaryFeaturesTitle: 'Everything in Pro plus:',
    secondaryFeatures: [
      { text: 'SSO' },
      { text: 'On-prem Cloud' },
      { text: 'Internationalization' },
      { text: 'Accessibility support' },
      { text: 'Onboarding consultation, dedicated Slack support and SLA' },
    ],
    buttonText: 'Get a Custom Plan',
    buttonVariant: 'secondary',
  },
];

const PricingCard: React.FC<{ plan: PricingPlan; index: number }> = ({ plan, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={cn(
        'bg-white rounded-2xl p-8 shadow-lg border flex flex-col h-full',
        plan.isFeatured ? 'border-[#7c3aed] ring-2 ring-[#7c3aed] shadow-[#7c3aed]/10' : 'border-gray-200'
      )}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-[#7c3aed]">{plan.category}</h3>
        <span className="px-3 py-1 text-xs font-medium text-[#7c3aed] bg-purple-100 rounded-full">
          {plan.categoryBadge}
        </span>
      </div>

      {plan.priceSuffix ? (
        <div className="mb-6">
          <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
          <span className="text-gray-500">{plan.priceSuffix}</span>
        </div>
      ) : (
        <h2 className="text-4xl font-bold text-gray-900 mb-6">{plan.name}</h2>
      )}
      
      <ul className="space-y-3 mb-6">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-700">
            <CheckCircle2 className="h-5 w-5 text-[#7c3aed] mr-2 flex-shrink-0" />
            <span>{feature.text}</span>
          </li>
        ))}
      </ul>

      {(plan.secondaryFeatures.length > 0) && <hr className="my-6 border-gray-200" />}

      {plan.secondaryFeaturesTitle && (
        <p className="text-sm text-gray-500 mb-3">{plan.secondaryFeaturesTitle}</p>
      )}
      <ul className="space-y-3 mb-8 flex-grow">
        {plan.secondaryFeatures.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-700">
            <CheckCircle2 className="h-5 w-5 text-[#7c3aed] mr-2 flex-shrink-0" />
            <span>{feature.text}</span>
          </li>
        ))}
      </ul>

      <button
        className={cn(
          'w-full py-3 rounded-lg font-semibold text-center transition-all duration-150 mt-auto',
          plan.buttonVariant === 'primary'
            ? 'bg-gradient-to-r from-fuchsia-700 to-purple-700 text-white  shadow-md hover:shadow-lg'
            : 'bg-white text-[#7c3aed] border border-purple-300 hover:bg-purple-50'
        )}
      >
        {plan.buttonText}
      </button>
    </motion.div>
  );
};

export const PricingSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="bg-primary py-24 overflow-hidden">
      <div className="container px-4 mx-auto max-w-6xl relative">
        {/* Decorative elements */}
        <motion.div 
          className="absolute top-20 right-10 w-64 h-64 rounded-full bg-gradient-to-br from-purple-200/20 to-purple-400/10 blur-3xl -z-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.5 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-20 left-10 w-64 h-64 rounded-full bg-gradient-to-tr from-purple-300/10 to-purple-100/20 blur-3xl -z-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.5 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        ></motion.div>

        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-medium tracking-tight text-purple-900 sm:text-4xl md:text-5xl"style={{
        fontFamily: 'BogueItalic, sans-serif',
        fontStyle: 'italic',
        
      }}>Flexible Pricing for All Your Needs</h2>
          <p className="text-purple-600 text-lg">
            Choose the perfect plan that aligns with your growth and operational requirements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plansData.map((plan, index) => (
            <PricingCard key={plan.id} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
