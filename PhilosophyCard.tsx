import React from 'react';
import { LucideIcon } from 'lucide-react';

type PhilosophyCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const PhilosophyCard: React.FC<PhilosophyCardProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className="bg-[#1E3A7B] rounded-xl p-8 text-center">
      <div className="w-16 h-16 mx-auto bg-[#FF7B00] rounded-full flex items-center justify-center mb-4">
        <Icon className="text-2xl text-white" size={24} />
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-white">
        {description}
      </p>
    </div>
  );
};

export default PhilosophyCard;
