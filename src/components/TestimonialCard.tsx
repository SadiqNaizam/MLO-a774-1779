import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react'; // For ratings

interface TestimonialCardProps {
  quote: string;
  authorName: string;
  authorTitle?: string;
  avatarSrc?: string;
  companyLogoSrc?: string;
  rating?: number; // e.g., 1-5
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  authorName,
  authorTitle,
  avatarSrc,
  companyLogoSrc,
  rating,
  className = '',
}) => {
  console.log("Rendering TestimonialCard for author:", authorName);
  const authorInitials = authorName
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <Card className={`flex flex-col h-full overflow-hidden ${className}`}>
      <CardHeader className="pb-4">
        {rating && rating > 0 && (
          <div className="flex items-center mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
              />
            ))}
          </div>
        )}
        <p className="text-gray-700 italic">"{quote}"</p>
      </CardHeader>
      <CardContent className="flex-grow" /> {/* Spacer if needed or for additional content */}
      <CardFooter className="mt-auto pt-4 border-t border-gray-100">
        <div className="flex items-center space-x-3">
          <Avatar>
            <AvatarImage src={avatarSrc} alt={authorName} />
            <AvatarFallback>{authorInitials}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-sm text-gray-900">{authorName}</p>
            {authorTitle && <p className="text-xs text-gray-500">{authorTitle}</p>}
          </div>
          {companyLogoSrc && (
            <img src={companyLogoSrc} alt={`${authorName}'s company logo`} className="ml-auto h-8 object-contain"/>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default TestimonialCard;