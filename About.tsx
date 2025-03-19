import React from "react";

const About: React.FC = () => {
  return (
    <section className="py-20 bg-[#F5F7FA]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-[#0F2A5C] mb-6">About Intellibyte Software Solutions</h2>
            <p className="text-lg mb-4 text-[#4A4A4A]">
              We are a pioneering consulting firm specializing in software solutions with a mission to empower businesses 
              through innovation and technology. Our expertise lies in developing custom software to improve business capabilities.
            </p>
            <p className="text-lg mb-6 text-[#4A4A4A]">
              We focus on crafting bespoke solutions using lean and agile methodologies, ensuring efficiency and adaptability. 
              Our elite balanced teams, composed of multidisciplinary experts, deliver rapid and effective solutions.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-[#FF7B00] mb-2">20+</div>
                <div className="text-center text-[#4A4A4A]">Years of Experience</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-[#FF7B00] mb-2">100+</div>
                <div className="text-center text-[#4A4A4A]">Successful Projects</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-[#FF7B00] mb-2">50+</div>
                <div className="text-center text-[#4A4A4A]">Expert Team Members</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-[#FF7B00] mb-2">95%</div>
                <div className="text-center text-[#4A4A4A]">Client Satisfaction</div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" 
              alt="Team collaboration" 
              className="w-full h-auto rounded-xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
