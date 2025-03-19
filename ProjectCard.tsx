import React from 'react';
import { ArrowRight } from 'lucide-react';

type ProjectTag = {
  name: string;
};

type ProjectCardProps = {
  image: string;
  category: string;
  title: string;
  description: string;
  tags: ProjectTag[];
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  category,
  title,
  description,
  tags,
}) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md">
      <div 
        className="w-full h-48 bg-center bg-cover" 
        style={{ backgroundImage: `url(${image})` }}
        aria-label={title}
      />
      <div className="p-6">
        <div className="text-sm text-[#FF7B00] font-medium mb-2">{category}</div>
        <h3 className="text-xl font-bold text-[#0F2A5C] mb-3">{title}</h3>
        <p className="mb-4 text-[#4A4A4A]">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-[#F5F7FA] text-[#0F2A5C] text-sm rounded-full">
              {tag.name}
            </span>
          ))}
        </div>
        <a href="#" className="text-[#FF7B00] font-medium hover:underline inline-flex items-center">
          View Case Study <ArrowRight className="ml-1 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
