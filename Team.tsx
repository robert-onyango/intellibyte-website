import React from "react";
import TeamCard from "@/components/common/TeamCard";
import { teamMembers } from "@/lib/data";

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#0F2A5C] mb-4">Leadership Team</h2>
          <p className="text-lg max-w-3xl mx-auto text-[#4A4A4A]">
            Meet the visionaries who lead Intellibyte Software Solutions with expertise, 
            innovation, and a commitment to excellence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <TeamCard 
            image="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
            name="Robert Onyango"
            position="Founder & CEO"
            bio="Robert brings over 20 years of experience in software development and project management. His leadership and vision have been instrumental in shaping Intellibyte's commitment to innovation and excellence."
            education="B.S. in Computer Engineering, University of Maryland, College Park"
            socialLinks={[
              { platform: "linkedin", url: "https://www.linkedin.com/in/robertonyango/" },
              { platform: "twitter", url: "https://twitter.com" }
            ]}
          />
          
          <TeamCard 
            image="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
            name="Evans Ochieng"
            position="CTO & Co-Founder"
            bio="Evans is a technology visionary with extensive experience in enterprise architecture and software development. He leads our technical teams and ensures we stay at the cutting edge of technology."
            education="M.S. in Computer Science, Stanford University"
            socialLinks={[
              { platform: "linkedin", url: "https://www.linkedin.com" },
              { platform: "github", url: "https://github.com" }
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Team;
