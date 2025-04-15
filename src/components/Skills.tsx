import React from 'react';
import { cn } from '@/lib/utils';

// Skill data with proficiency levels
const skills = {
  frontend: [
    { name: "HTML", level: 95 },
    { name: "CSS/SCSS", level: 90 },
    { name: "JavaScript", level: 92 },
    { name: "TypeScript", level: 85 },
    { name: "React", level: 90 },
    { name: "Redux", level: 80 },
    { name: "Tailwind CSS", level: 88 },
  ],
  backend: [
    { name: "Python", level: 95 },
    { name: "Node.js", level: 85 },
    { name: "Express", level: 82 },
    { name: "MongoDB", level: 78 },
    { name: "MySQL", level: 85 },
    { name: "PostgreSQL", level: 75 },
    { name: "RESTful APIs", level: 88 },
    { name: "GraphQL", level: 70 },
  ],
  tools: [
    { name: "Git/GitHub", level: 92 },
    { name: "Docker", level: 75 },
    { name: "AWS", level: 68 },
    { name: "Nginx", level: 80 },
    { name: "Jest", level: 80 },
    { name: "Webpack", level: 72 },
    { name: "Figma", level: 65 },
  ]
};

const SkillBar = ({ skill }: { skill: { name: string; level: number } }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
        <span className="text-xs font-mono text-slate-light">{skill.level}%</span>
      </div>
      <div className="h-2 bg-navy-light rounded-full overflow-hidden">
        <div 
          className="h-full bg-teal rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%`, opacity: skill.level / 100 }}
        ></div>
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
  skills: { name: string; level: number }[];
  delay: number;
}) => {
  return (
    <div className={`opacity-0 animate-slide-up animate-stagger-delay-${delay}`}>
      <h3 className="text-xl font-medium mb-6 text-foreground border-b border-slate-dark pb-2">
        {title}
      </h3>
      <div className="space-y-5">
        {skills.map((skill, index) => (
          <SkillBar key={index} skill={skill} />
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
