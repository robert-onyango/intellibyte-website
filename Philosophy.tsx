import React from "react";
import PhilosophyCard from "@/components/common/PhilosophyCard";
import { Button } from "@/components/ui/button";
import { RefreshCw, MessageCircle, ArrowLeftRight, Users } from "lucide-react";

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-20 bg-[#0F2A5C] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Synergos Philosophy</h2>
          <p className="text-lg mb-8">
            The term "Synergos" represents our commitment to collaboration and synergy. We believe that the 
            most innovative solutions emerge from harmonious teamwork and a balanced approach to development.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <PhilosophyCard 
            icon={RefreshCw}
            title="Rhythmic Agile Practices"
            description="Ensuring consistent progress through iterative development cycles that maintain momentum and adapt to changing requirements."
          />
          
          <PhilosophyCard 
            icon={MessageCircle}
            title="Psychologically Safe Environment"
            description="Encouraging open communication and the free exchange of ideas in an atmosphere where all team members feel valued."
          />
          
          <PhilosophyCard 
            icon={ArrowLeftRight}
            title="Efficient Information Exchange"
            description="Streamlining processes to enhance collaboration and ensure that knowledge flows freely throughout the project team."
          />
          
          <PhilosophyCard 
            icon={Users}
            title="Role-Specific Contributions"
            description="Leveraging the unique skills of each team member for comprehensive project development and optimal results."
          />
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="accent" size="lg" asChild>
            <a href="#contact">Learn How We Work Together</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
