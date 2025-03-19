import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/logo";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Philosophy", href: "#philosophy" },
    { name: "Projects", href: "#projects" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={`sticky top-0 z-50 bg-white ${isScrolled ? 'shadow-md' : ''} transition-shadow`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center h-20">
          {/* Logo */}
          <div className="w-1/4">
            <Link href="/">
              <div className="flex items-center cursor-pointer">
                <div className="h-12 w-12 relative flex items-center justify-center bg-[#0F2A5C] rounded p-1">
                  <Logo className="h-10 w-auto" />
                </div>
                <span className="ml-2 text-lg font-semibold text-[#0F2A5C]">Intellibyte</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Menu - centered in the middle */}
          <div className="hidden md:flex items-center justify-center flex-1">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="nav-link px-4 py-2 text-[#0F2A5C] hover:text-[#FF7B00] text-sm font-medium relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#FF7B00] after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </div>
            
          {/* CTA Button - on the right */}
          <div className="hidden md:block w-1/4 text-right">
            <Button variant="accent" size="sm" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden ml-auto">
            <button 
              className="text-[#0F2A5C]"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden bg-white border-t ${isOpen ? 'block' : 'hidden'}`}>
        <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="py-2 text-[#0F2A5C] hover:text-[#FF7B00]"
              onClick={closeMenu}
            >
              {link.name}
            </a>
          ))}
          <Button variant="accent" className="w-full mt-2" onClick={closeMenu} asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
