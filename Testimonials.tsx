import React from "react";
import Testimonial from "@/components/common/Testimonial";
import { testimonials } from "@/lib/data";

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-[#F5F7FA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#0F2A5C] mb-4">What Our Clients Say</h2>
          <p className="text-lg max-w-3xl mx-auto text-[#4A4A4A]">
            Hear from organizations that have transformed their operations with our solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Testimonial 
            image="https://randomuser.me/api/portraits/women/32.jpg"
            name="Sarah Johnson"
            position="CIO"
            company="Memorial Healthcare"
            quote="Intellibyte's EHR solution transformed our clinical operations. Their team's expertise and commitment to understanding our unique needs resulted in a system that has improved patient care and provider efficiency."
            rating={5}
          />
          
          <Testimonial 
            image="https://randomuser.me/api/portraits/men/43.jpg"
            name="James Wilson"
            position="Director of Technology"
            company="Westlake University"
            quote="The learning management system developed by Intellibyte enabled us to pivot to online education seamlessly. Their agile approach meant we could adapt quickly to changing requirements during a critical transition period."
            rating={5}
          />
          
          <Testimonial 
            image="https://randomuser.me/api/portraits/men/29.jpg"
            name="David Nguyen"
            position="CEO"
            company="GreenHarvest Farms"
            quote="The precision farming platform developed by Intellibyte has revolutionized our agricultural operations. We've seen a 30% increase in yield and significant reduction in water usage since implementation."
            rating={4.5}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
