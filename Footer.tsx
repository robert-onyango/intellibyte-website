import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/logo";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    const emailSchema = z.string().email("Please enter a valid email address");
    
    try {
      emailSchema.parse(email);
      
      // In a real application, you would send this to the backend
      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      
      setEmail("");
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Invalid email",
          description: error.errors[0].message,
          variant: "destructive",
        });
      }
    }
  };

  return (
    <footer className="bg-[#0F2A5C] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <div className="h-14 w-48 relative flex items-center justify-center bg-[#0F2A5C] rounded p-1 border border-gray-700">
                <Logo className="h-full w-auto" />
              </div>
            </div>
            <p className="mb-6">
              Empowering businesses through innovative software solutions and digital transformation expertise.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FF7B00] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FF7B00] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FF7B00] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FF7B00] transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="hover:text-[#FF7B00] transition-colors">Custom Software Development</a></li>
              <li><a href="#services" className="hover:text-[#FF7B00] transition-colors">Healthcare Solutions</a></li>
              <li><a href="#services" className="hover:text-[#FF7B00] transition-colors">Educational Technology</a></li>
              <li><a href="#services" className="hover:text-[#FF7B00] transition-colors">Agricultural Innovation</a></li>
              <li><a href="#services" className="hover:text-[#FF7B00] transition-colors">Enterprise Resource Planning</a></li>
              <li><a href="#services" className="hover:text-[#FF7B00] transition-colors">Managed IT Services</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="hover:text-[#FF7B00] transition-colors">About Us</a></li>
              <li><a href="#team" className="hover:text-[#FF7B00] transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-[#FF7B00] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[#FF7B00] transition-colors">Blog</a></li>
              <li><a href="#projects" className="hover:text-[#FF7B00] transition-colors">Case Studies</a></li>
              <li><a href="#contact" className="hover:text-[#FF7B00] transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="mb-4">
              Subscribe to our newsletter for the latest updates on technology trends and company news.
            </p>
            <form className="space-y-4" onSubmit={handleNewsletterSubmit}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 rounded-lg text-primary focus:outline-none focus:ring-2 focus:ring-[#FF7B00]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button 
                type="submit" 
                variant="accent"
                className="w-full"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Intellibyte Software Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
