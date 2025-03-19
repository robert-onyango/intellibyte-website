import React from 'react';
import { Linkedin, Twitter, Github } from 'lucide-react';

type SocialLink = {
  platform: 'linkedin' | 'twitter' | 'github';
  url: string;
};

type TeamCardProps = {
  image: string;
  name: string;
  position: string;
  bio: string;
  education: string;
  socialLinks: SocialLink[];
};

const TeamCard: React.FC<TeamCardProps> = ({
  image,
  name,
  position,
  bio,
  education,
  socialLinks,
}) => {
  return (
    <div className="team-card bg-[#F5F7FA] rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:transform hover:translate-y-[-5px] hover:shadow-lg">
      <div 
        className="w-full h-64 bg-center bg-cover" 
        style={{ backgroundImage: `url(${image})` }}
        aria-label={name}
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#0F2A5C] mb-1">{name}</h3>
        <div className="text-[#FF7B00] font-medium mb-3">{position}</div>
        <p className="mb-4 text-[#4A4A4A]">
          {bio}
        </p>
        <p className="text-sm mb-4 text-[#4A4A4A]">
          {education}
        </p>
        <div className="flex space-x-4">
          {socialLinks.map((link, index) => (
            <a 
              key={index}
              href={link.url} 
              className="text-[#0F2A5C] hover:text-[#FF7B00] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.platform === 'linkedin' && <Linkedin className="h-5 w-5" />}
              {link.platform === 'twitter' && <Twitter className="h-5 w-5" />}
              {link.platform === 'github' && <Github className="h-5 w-5" />}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
