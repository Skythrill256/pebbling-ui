import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Built for developers",
      description:
        "Built for engineers, developers, dreamers, thinkers and doers.",
      icon: <IconTerminal2 className="w-6 h-6" />,
    },
    {
      title: "Ease of use",
      description:
        "It's as easy as using an Apple, and as expensive as buying one.",
      icon: <IconEaseInOut className="w-6 h-6" />,
    },
    {
      title: "Pricing like no other",
      description:
        "Our prices are best in the market. No cap, no lock, no credit card required.",
      icon: <IconCurrencyDollar className="w-6 h-6" />,
    },
    {
      title: "100% Uptime guarantee",
      description: "We just cannot be taken down by anyone.",
      icon: <IconCloud className="w-6 h-6" />,
    },
    {
      title: "Multi-tenant Architecture",
      description: "You can simply share passwords instead of buying new seats",
      icon: <IconRouteAltLeft className="w-6 h-6" />,
    },
    {
      title: "24/7 Customer Support",
      description:
        "We are available a 100% of the time. Atleast our AI Agents are.",
      icon: <IconHelp className="w-6 h-6" />,
    },
    {
      title: "Money back guarantee",
      description:
        "If you donot like EveryAI, we will convince you to like us.",
      icon: <IconAdjustmentsBolt className="w-6 h-6" />,
    },
    {
      title: "And everything else",
      description: "I just ran out of copy ideas. Accept my sincere apologies",
      icon: <IconHeart className="w-6 h-6" />,
    },
  ];
  return (
    <div className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 bg-gradient-to-b from-white to-purple-50/30 rounded-xl">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#7c3aed] tracking-tighter">Our Features</h2>
        <p className="mt-3 text-base md:text-lg text-[#7c3aed]/80 max-w-2xl mx-auto leading-relaxed tracking-tight">
          Everything you need to build amazing products, all in one place.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative z-10 py-6 md:py-10 mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-6 md:py-8 relative group/feature border-purple-100 hover:shadow-lg hover:shadow-[#7c3aed]/10 transition-all duration-200 rounded-lg m-2",
        (index === 0 || index === 4) && "lg:border-l border-purple-100",
        index < 4 && "lg:border-b border-purple-100"
      )}
    >
      {/* Simplified gradients - only visible on hover and using CSS where possible */}
      <div 
        className={cn(
          "opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full pointer-events-none",
          index < 4 ? "bg-gradient-to-t from-purple-50 to-transparent" : "bg-gradient-to-b from-purple-50 to-transparent"
        )}
      />
      <div className="mb-3 md:mb-4 relative z-10 px-6 md:px-8 text-[#7c3aed]">
        {icon}
      </div>
      <div className="text-base md:text-lg font-bold mb-2 relative z-10 px-6 md:px-8">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-7 w-1 rounded-tr-full rounded-br-full bg-purple-200 group-hover/feature:bg-[#7c3aed] transition-all duration-150 origin-center" />
        <span className="group-hover/feature:translate-x-1 transition duration-150 inline-block text-gray-800 group-hover/feature:text-[#7c3aed]">
          {title}
        </span>
      </div>
      <p className="text-xs md:text-sm text-gray-600 max-w-xs relative z-10 px-6 md:px-8 group-hover/feature:text-gray-800">
        {description}
      </p>
    </div>
  );
};
