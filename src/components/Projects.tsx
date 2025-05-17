import React from 'react';
import { Github, ExternalLink, Folder } from 'lucide-react';
import { cn } from '@/lib/utils';

// Projects data
const projects = [
  {
    title: "HomesUSA Realty Las Vegas",
    description: "A modern real estate platform for the Las Vegas area, offering comprehensive property listings, community information, and real estate services. Features include property search, detailed neighborhood guides, and real-time market updates for Las Vegas, Henderson, and North Las Vegas areas.",
    technologies: ["React", "Vite", "Tailwind CSS", "Supabase", "Vercel"],
    githubLink: "https://github.com/ofemjohn/HomesUSA-RealtyLasVegasUSA",
    liveLink: "https://homes-usa-realty-las-vegas-usa.vercel.app/",
    featured: true,
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    title: "Queen Naima's Couture",
    description: "An elegant e-commerce platform for a high-end fashion boutique, featuring a sophisticated collection of African and contemporary fashion pieces. The website offers a seamless shopping experience with a modern design, product catalog, and secure checkout system.",
    technologies: ["React", "Vite", "Tailwind CSS", "Stripe", "Vercel", "Supabase"],
    githubLink: "https://github.com/ofemjohn/Queen-Naima-s-Couture",
    liveLink: "https://queen-naima-s-couture.vercel.app/",
    featured: true,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    title: "Ekib Ekure Law LLC",
    description: "A professional legal website for Ekib Ekure Law LLC, offering expert counsel in Business Law, Personal Injury, and Criminal Defense in Atlanta. The site features a modern, professional design with comprehensive information about legal services and client resources.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/ofemjohn/EkibLaw",
    liveLink: "https://www.ekibekurelaw.com/",
    featured: true,
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    title: "BoajArt Gallery",
    description: "A minimalist art gallery showcasing contemporary abstract artworks that explore the intersection of color, form, and emotion. The platform provides an immersive digital experience for art enthusiasts.",
    technologies: ["React", "Firebase", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
    githubLink: "https://github.com/ofemjohn/minimalist-art-display",
    liveLink: "https://boajart-gallery.web.app/",
    featured: true,
    image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    title: "RCCG Scent of Water Parish",
    description: "The official website for The Redeemed Christian Church of God, Scent of Water Parish. This comprehensive platform provides information on services, events, and community outreach programs, featuring a modern design and intuitive navigation.",
    technologies: ["WordPress", "PHP", "HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/ofemjohn/sow",
    liveLink: "https://www.rccgscentofwater.org.ng/",
    featured: true,
    image: "https://images.unsplash.com/photo-1438032005730-c779502df39b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    title: "RCCG JOB HUB",
    description: "A sophisticated web application tailored for the RCCG community, offering a seamless job portal experience. The platform features an intuitive design, advanced job search capabilities, and a user-friendly interface for both employers and job seekers.",
    technologies: ["Flask", "Python", "MySQL", "React", "Redux", "Material UI", "Postman"],
    githubLink: "https://github.com/ofemjohn/JOB-HUB",
    liveLink: "https://youtu.be/eXH5_Y9Y-8o?si=hw0mBKjDX0hjJkta",
    featured: true,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    title: "Charity Food App",
    description: "A platform connecting food donors with charities to reduce food waste and help those in need. Features include real-time food donation tracking, location-based charity search, and secure donation management.",
    technologies: ["React", "Redux", "Material UI", "Flask", "Python", "Google Maps", "MySQL", "Firebase", "Postman"],
    githubLink: "https://github.com/brayohmurithidev/charity-food",
    liveLink: null,
    featured: false,
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    title: "Airbnb Clone",
    description: "A comprehensive Airbnb clone built with a powerful tech stack, allowing users to explore and book unique accommodations worldwide. Features include property listings, user authentication, booking management, and interactive maps.",
    technologies: ["JavaScript", "CSS", "Flask", "Python", "MySQL", "HTML"],
    githubLink: "https://github.com/ofemjohn/AirBnB_clone_v4",
    liveLink: null,
    featured: false,
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  }
];

const ProjectCard = ({ project }: { project: any }) => {
  return (
    <div className="group relative bg-navy-light rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-teal/10">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <Folder className="h-6 w-6 text-teal" />
          <div className="flex gap-4">
            {project.githubLink && (
              <a 
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate hover:text-teal transition-colors"
                aria-label="GitHub Repository"
              >
                <Github className="h-5 w-5" />
              </a>
            )}
            {project.liveLink && (
              <a 
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate hover:text-teal transition-colors"
                aria-label="Live Project"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-teal transition-colors">
          {project.title}
        </h3>
        
        <p className="text-slate mb-4 line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech: string, index: number) => (
            <span 
              key={index}
              className="text-xs font-mono text-teal bg-navy-dark/50 px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <h2 className="flex items-center gap-2 text-2xl md:text-3xl font-semibold mb-16">
          <span className="text-teal font-mono">03.</span>
          <span>Some Things I've Built</span>
          <span className="flex-grow h-[1px] ml-4 bg-slate-dark"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={cn(
                "opacity-0 animate-fade-in",
                `animate-stagger-delay-${(index % 3) + 1}`
              )}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
