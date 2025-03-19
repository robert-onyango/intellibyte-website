import React from "react";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative bg-[#0F2A5C] text-white"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F2A5C] to-[#1E3A7B] opacity-90"></div>
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Empowering Businesses Through Innovation
          </h1>
          <p className="text-xl mb-8">
            Intellibyte Software Solutions is a pioneering consulting firm specializing in custom software solutions
            that drive digital transformation and business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="accent" size="lg" asChild>
              <a href="#services">Explore Our Services</a>
            </Button>
            <Button variant="outlineWhite" size="lg" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#F5F7FA] to-transparent"></div>
    </section>
  );
};

export default Hero;
