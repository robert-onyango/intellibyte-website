import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Please provide a valid email address"),
  company: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, "Please provide more details"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setIsSubmitting(true);
      
      // Validate form data
      contactFormSchema.parse(formData);
      
      // Send form data to the backend
      await apiRequest("POST", "/api/contact", formData);
      
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
      });
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Form Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: "An error occurred. Please try again later.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-[#0F2A5C] mb-6">Get in Touch</h2>
            <p className="text-lg mb-8 text-[#4A4A4A]">
              Ready to transform your business with innovative software solutions? 
              Contact us today for a consultation with our experts.
            </p>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium text-[#0F2A5C]">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7B00]"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium text-[#0F2A5C]">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7B00]"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block mb-2 font-medium text-[#0F2A5C]">Company</label>
                <input 
                  type="text" 
                  id="company" 
                  name="company"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7B00]"
                  placeholder="Your company name"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block mb-2 font-medium text-[#0F2A5C]">Service of Interest</label>
                <select 
                  id="service" 
                  name="service"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7B00]"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">Select a service</option>
                  <option value="custom_development">Custom Software Development</option>
                  <option value="healthcare">Healthcare Solutions</option>
                  <option value="education">Educational Technology</option>
                  <option value="agriculture">Agricultural Innovation</option>
                  <option value="erp">Enterprise Resource Planning</option>
                  <option value="managed_it">Managed IT Services</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-medium text-[#0F2A5C]">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={5} 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7B00]"
                  placeholder="Tell us about your project or requirements"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <Button 
                type="submit" 
                variant="accent"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          
          <div className="lg:w-1/2">
            <div className="h-full bg-[#F5F7FA] rounded-xl p-8">
              <h3 className="text-2xl font-bold text-[#0F2A5C] mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-[#FF7B00] text-xl mr-4 mt-1">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0F2A5C] mb-1">Our Office</h4>
                    <p className="text-[#4A4A4A]">
                      123 Innovation Way<br />
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-[#FF7B00] text-xl mr-4 mt-1">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0F2A5C] mb-1">Phone</h4>
                    <p className="text-[#4A4A4A]">+254 123 456 789</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-[#FF7B00] text-xl mr-4 mt-1">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0F2A5C] mb-1">Email</h4>
                    <p className="text-[#4A4A4A]">info@intellibytesoftware.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-[#FF7B00] text-xl mr-4 mt-1">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0F2A5C] mb-1">Working Hours</h4>
                    <p className="text-[#4A4A4A]">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-bold text-[#0F2A5C] mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#0F2A5C] rounded-full flex items-center justify-center text-white hover:bg-[#FF7B00] transition-all">
                    <Linkedin size={18} />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#0F2A5C] rounded-full flex items-center justify-center text-white hover:bg-[#FF7B00] transition-all">
                    <Twitter size={18} />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#0F2A5C] rounded-full flex items-center justify-center text-white hover:bg-[#FF7B00] transition-all">
                    <Facebook size={18} />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#0F2A5C] rounded-full flex items-center justify-center text-white hover:bg-[#FF7B00] transition-all">
                    <Instagram size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
