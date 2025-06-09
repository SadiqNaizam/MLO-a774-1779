import React from 'react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  onCtaClick: () => void;
  imageUrl?: string; // Optional background or side image
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  ctaText,
  onCtaClick,
  imageUrl,
}) => {
  console.log("Rendering HeroSection with title:", title);
  return (
    <section className={`py-12 md:py-24 bg-gradient-to-br from-indigo-50 via-white to-pink-50 ${imageUrl ? 'bg-cover bg-center' : ''}`} style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : {}}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
          {title}
        </h1>
        <p className="max-w-xl mx-auto text-lg sm:text-xl text-gray-600 mb-10">
          {subtitle}
        </p>
        <Button size="lg" onClick={onCtaClick} className="text-lg px-8 py-3">
          {ctaText}
        </Button>
        {/* Optionally, display an image if no background image is used */}
        {!imageUrl && (
            <div className="mt-10">
                {/* Placeholder for an illustration or product screenshot */}
                {/* <img src="/placeholder-hero.svg" alt="Product illustration" className="mx-auto w-full max-w-2xl" /> */}
            </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;