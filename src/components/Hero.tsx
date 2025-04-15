import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';

const Hero = () => {
  const handleResumeClick = () => {
    window.open('https://docs.google.com/document/d/1jaHe7_8I7RyoIq6ixC1bw5oeDGru4KpLRbjTz6DC6HM/edit?usp=sharing', '_blank');
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20">
      <div className="section-container">
        <div className="max-w-3xl">
          <h1 className="opacity-0 animate-fade-in font-mono text-teal text-lg mb-5">
            Hi, my name is
          </h1>
          <h2 className="opacity-0 animate-fade-in animate-stagger-delay-1 text-4xl md:text-7xl font-bold mb-4 text-foreground">
            John Ofem
          </h2>
          <h3 className="opacity-0 animate-fade-in animate-stagger-delay-2 text-3xl md:text-6xl font-bold mb-6 text-slate">
            Software Developer & Project Manager
          </h3>
          <p className="opacity-0 animate-fade-in animate-stagger-delay-3 text-lg text-slate mb-10 max-w-2xl">
            I'm a dynamic software developer and project manager with a unique background in Petroleum Engineering. 
            Currently pursuing my Master's in Information Technology at Kennesaw State University, I specialize in 
            building exceptional web and mobile applications using modern technologies.
          </p>
          <div className="opacity-0 animate-fade-in animate-stagger-delay-4 flex flex-wrap gap-4">
            <a 
              href="mailto:ofemjohn@gmail.com" 
              className="btn btn-primary group"
            >
              Contact Me
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <button 
              onClick={handleResumeClick}
              className="btn btn-outline group"
            >
              View Resume
              <FileText className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
      {/* Background decorative elements */}
      <div className="absolute right-0 top-1/4 -z-10 opacity-20 blur-sm">
        <svg width="400" height="400" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" stroke="#64ffda" strokeWidth="0.5" fill="none" />
          <circle cx="50" cy="50" r="40" stroke="#64ffda" strokeWidth="0.3" fill="none" />
          <circle cx="50" cy="50" r="20" stroke="#64ffda" strokeWidth="0.7" fill="none" />
        </svg>
      </div>
      <div className="absolute left-10 bottom-40 -z-10 opacity-10 blur-sm">
        <svg width="300" height="300" viewBox="0 0 100 100">
          <rect x="20" y="20" width="60" height="60" stroke="#64ffda" strokeWidth="0.5" fill="none" />
          <rect x="30" y="30" width="40" height="40" stroke="#64ffda" strokeWidth="0.3" fill="none" />
          <rect x="40" y="40" width="20" height="20" stroke="#64ffda" strokeWidth="0.7" fill="none" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
