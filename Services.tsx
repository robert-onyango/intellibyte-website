import React from "react";
import ServiceCard from "@/components/common/ServiceCard";
import { Code, Heart, GraduationCap, Sprout, Building, ShieldCheck } from "lucide-react";
import { services } from "@/lib/data";

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#0F2A5C] mb-4">Our Services</h2>
          <p className="text-lg max-w-3xl mx-auto text-[#4A4A4A]">
            We deliver cutting-edge software solutions and managed IT services to help businesses 
            across various verticals achieve their digital transformation goals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            icon={Code}
            title="Custom Software Development"
            description="Bespoke software solutions designed to address your specific business challenges and opportunities."
            features={[
              { name: "Requirements Analysis" },
              { name: "Agile Development" },
              { name: "Continuous Integration" }
            ]}
          />
          
          <ServiceCard 
            icon={Heart}
            title="Healthcare Solutions"
            description="Specialized software for healthcare providers that improve patient care and operational efficiency."
            features={[
              { name: "Electronic Health Records" },
              { name: "Telemedicine Platforms" },
              { name: "Patient Engagement" }
            ]}
          />
          
          <ServiceCard 
            icon={GraduationCap}
            title="Educational Technology"
            description="Digital learning solutions that enhance educational experiences and outcomes for students and educators."
            features={[
              { name: "Learning Management Systems" },
              { name: "Virtual Classrooms" },
              { name: "Analytics & Assessment" }
            ]}
          />
          
          <ServiceCard 
            icon={Sprout}
            title="Agricultural Innovation"
            description="Digital tools for modern farming that optimize yield, reduce waste, and promote sustainable practices."
            features={[
              { name: "Precision Farming" },
              { name: "Supply Chain Management" },
              { name: "IoT Integration" }
            ]}
          />
          
          <ServiceCard 
            icon={Building}
            title="Enterprise Resource Planning"
            description="Comprehensive ERP solutions that streamline business processes and improve operational efficiency."
            features={[
              { name: "Financial Management" },
              { name: "Supply Chain Optimization" },
              { name: "Human Resources" }
            ]}
          />
          
          <ServiceCard 
            icon={ShieldCheck}
            title="Managed IT Services"
            description="End-to-end IT management solutions that ensure your technology infrastructure is secure and reliable."
            features={[
              { name: "Cybersecurity" },
              { name: "Cloud Services" },
              { name: "24/7 Support" }
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
