import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react'; // Example icon

interface FeatureHighlightCardProps {
  icon?: React.ElementType; // Allow custom Lucide icon component
  title: string;
  description: string;
  className?: string;
}

const FeatureHighlightCard: React.FC<FeatureHighlightCardProps> = ({
  icon: IconComponent = CheckCircle,
  title,
  description,
  className = '',
}) => {
  console.log("Rendering FeatureHighlightCard with title:", title);
  return (
    <Card className={`text-center p-6 transition-shadow hover:shadow-xl ${className}`}>
      <CardHeader className="flex flex-col items-center space-y-3 pb-4">
        <div className="p-3 bg-indigo-100 rounded-full text-indigo-600">
          <IconComponent className="h-8 w-8" />
        </div>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 text-sm">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureHighlightCard;