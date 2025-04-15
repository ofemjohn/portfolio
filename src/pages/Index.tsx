
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      toast({
        title: "👋 Welcome to my portfolio!",
        description: "Feel free to explore my work and get in touch."
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, [toast]);

  return (
    <div className="min-h-screen bg-navy">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
