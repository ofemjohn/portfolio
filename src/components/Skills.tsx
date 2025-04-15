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

const SkillItem = ({ skill }: { skill: string }) => {
  return (
    <div className="flex items-center gap-2 text-sm text-slate">
      <span className="text-teal">▹</span>
      <span>{skill}</span>
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
      <div className="grid grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <SkillItem key={index} skill={skill} />
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
