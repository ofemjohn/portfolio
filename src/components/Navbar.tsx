import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const NavItem = ({ 
  children, 
  href, 
  delay 
}: { 
  children: React.ReactNode; 
  href: string; 
  delay: number;
}) => {
  return (
    <li className={`opacity-0 animate-fade-in animate-stagger-delay-${delay}`}>
      <a 
        href={href} 
        className="nav-link"
      >
        <span className="inline-block mr-1 text-teal font-mono text-xs">0{delay}.</span>
        {children}
      </a>
    </li>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleResumeClick = () => {
    window.open('https://drive.google.com/file/d/1UODW17o3ZGtNfGoVdA28nFNYgKuExFEu/view?usp=sharing', '_blank');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "py-3 backdrop-blur-lg bg-navy/80 shadow-md" : "py-5 bg-transparent"
      )}
    >
      <div className="section-container">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#hero" 
            className="text-teal font-mono font-medium text-xl cursor-pointer opacity-0 animate-fade-in"
          >
            JohnTeacher
          </a>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-6">
            <NavItem href="#experience" delay={1}>Experience</NavItem>
            <NavItem href="#projects" delay={2}>Projects</NavItem>
            <NavItem href="#about" delay={3}>About</NavItem>
            <NavItem href="#contact" delay={4}>Contact</NavItem>
            <li className="opacity-0 animate-fade-in animate-stagger-delay-5">
              <button 
                onClick={handleResumeClick}
                className="btn btn-outline"
              >
                Resume
              </button>
            </li>
          </ul>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-slate-light hover:text-teal"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-navy-dark z-40 flex flex-col items-center justify-center transition-transform duration-300 md:hidden",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col items-center space-y-8">
          <a 
            href="#experience" 
            className="nav-link text-lg"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="text-teal font-mono">01.</span> Experience
          </a>
          <a 
            href="#projects" 
            className="nav-link text-lg"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="text-teal font-mono">02.</span> Projects
          </a>
          <a 
            href="#about" 
            className="nav-link text-lg"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="text-teal font-mono">03.</span> About
          </a>
          <a 
            href="#contact" 
            className="nav-link text-lg"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="text-teal font-mono">04.</span> Contact
          </a>
          <button 
            onClick={() => {
              handleResumeClick();
              setMobileMenuOpen(false);
            }}
            className="btn btn-outline text-lg px-6 py-3"
          >
            Resume
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
