import React from "react";
import ProjectCard from "@/components/common/ProjectCard";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-[#F5F7FA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#0F2A5C] mb-4">Our Projects</h2>
          <p className="text-lg max-w-3xl mx-auto text-[#4A4A4A]">
            Explore our portfolio of successful projects that have transformed businesses 
            across multiple industries and sectors.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard 
            image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
            category="Healthcare"
            title="Electronic Health Records System"
            description="A comprehensive EHR solution for a network of hospitals that improved patient data management and streamlined clinical workflows."
            tags={[
              { name: "React" },
              { name: "Node.js" },
              { name: "MongoDB" }
            ]}
          />
          
          <ProjectCard 
            image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
            category="Education"
            title="Online Learning Management System"
            description="A scalable LMS that enabled a major university to transition to digital learning during the pandemic, supporting over 20,000 students."
            tags={[
              { name: "Angular" },
              { name: "Java" },
              { name: "PostgreSQL" }
            ]}
          />
          
          <ProjectCard 
            image="https://images.unsplash.com/photo-1569149321789-cce652e9dd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1624&q=80"
            category="Agriculture"
            title="Precision Farming Platform"
            description="An IoT-integrated solution that helped farmers optimize crop yields and reduce resource usage through data-driven insights."
            tags={[
              { name: "IoT" },
              { name: "Python" },
              { name: "TensorFlow" }
            ]}
          />
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="default" size="lg" asChild>
            <a href="#">View All Projects</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
