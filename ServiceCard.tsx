import React from 'react';
import { LucideIcon } from 'lucide-react';

type Feature = {
  name: string;
};

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  features: Feature[];
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  features,
}) => {
  return (
    <div className="service-card bg-[#F5F7FA] rounded-xl p-8 shadow-md transition-all duration-300 hover:transform hover:translate-y-[-5px] hover:shadow-lg">
      <div className="text-[#FF7B00] text-3xl mb-4">
        <Icon size={36} stroke="#FF7B00" />
      </div>
      <h3 className="text-xl font-bold text-[#0F2A5C] mb-3">{title}</h3>
      <p className="mb-4 text-[#4A4A4A]">
        {description}
      </p>
      <div className="mt-4 text-sm">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center mb-2 last:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#FF7B00] mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>{feature.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
