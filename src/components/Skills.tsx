import React from 'react';
import { cn } from '@/lib/utils';

// Skill data
const skills = {
  frontend: [
    "HTML",
    "CSS/SCSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Redux",
    "Tailwind CSS"
  ],
  backend: [
    "Python",
    "Node.js",
    "Express",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "RESTful APIs",
    "GraphQL"
  ],
  tools: [
    "Git/GitHub",
    "Docker",
    "AWS",
    "Nginx",
    "Jest",
    "Webpack",
    "Figma"
  ]
};

const SkillBadge = ({ skill }: { skill: string }) => {
  return (
    <div className="group relative">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-teal/50 to-teal/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative px-4 py-2 bg-navy-light rounded-lg border border-slate-dark/30 hover:border-teal/30 transition-colors duration-300">
        <span className="text-sm font-mono text-slate group-hover:text-teal transition-colors duration-300">
          {skill}
        </span>
      </div>
    </div>
  );
};

const SkillCategory = ({ 
  title, 
  skills, 
  delay 
}: { 
  title: string; 
  skills: string[];
  delay: number;
}) => {
  return (
    <div className={`opacity-0 animate-slide-up animate-stagger-delay-${delay}`}>
      <h3 className="text-xl font-medium mb-6 text-foreground border-b border-slate-dark pb-2">
        {title}
      </h3>
      <div className="grid grid-cols-2 gap-3">
        {skills.map((skill, index) => (
          <SkillBadge key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-navy-light">
      <div className="section-container">
        <h2 className="flex items-center gap-2 text-2xl md:text-3xl font-semibold mb-16">
          <span className="text-teal font-mono">03.</span>
          <span>Skills & Technologies</span>
          <span className="flex-grow h-[1px] ml-4 bg-slate-dark"></span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-10">
          <SkillCategory title="Frontend" skills={skills.frontend} delay={1} />
          <SkillCategory title="Backend" skills={skills.backend} delay={2} />
          <SkillCategory title="Tools & Others" skills={skills.tools} delay={3} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
