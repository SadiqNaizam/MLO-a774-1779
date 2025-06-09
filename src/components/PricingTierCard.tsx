import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

interface PricingTierCardProps {
  tierName: string;
  price: string; // e.g., "$29" or "Contact Us"
  pricePeriod?: string; // e.g., "/month"
  description: string;
  features: string[];
  ctaText: string;
  onCtaClick: () => void;
  isFeatured?: boolean;
  className?: string;
}

const PricingTierCard: React.FC<PricingTierCardProps> = ({
  tierName,
  price,
  pricePeriod = "/month",
  description,
  features,
  ctaText,
  onCtaClick,
  isFeatured = false,
  className = '',
}) => {
  console.log("Rendering PricingTierCard for tier:", tierName);
  return (
    <Card className={`flex flex-col h-full ${isFeatured ? 'border-indigo-500 shadow-2xl relative' : 'border-gray-200'} ${className}`}>
      {isFeatured && (
        <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-bl-md rounded-tr-md">
          Most Popular
        </div>
      )}
      <CardHeader className="pt-8 pb-6">
        <CardTitle className="text-2xl font-bold text-center">{tierName}</CardTitle>
        <div className="text-center mt-4">
          <span className="text-4xl font-extrabold text-gray-900">{price}</span>
          {price !== "Contact Us" && <span className="text-base font-medium text-gray-500">{pricePeriod}</span>}
        </div>
        <CardDescription className="text-center mt-2 text-sm text-gray-600">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-3 px-6 pb-8">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button
          onClick={onCtaClick}
          className="w-full"
          variant={isFeatured ? 'default' : 'outline'}
          size="lg"
        >
          {ctaText}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingTierCard;