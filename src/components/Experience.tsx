import React, { useState } from 'react';
import { cn } from '@/lib/utils';

// Experience data
const experiences = [
  {
    title: "Independent Freelancer",
    company: "Self-employed",
    date: "2019 - Present",
    description: [
      "Develop and maintain web applications for various clients",
      "Provide technical consulting and solutions for businesses",
      "Collaborate with clients to understand their needs and deliver customized solutions",
      "Manage project timelines and deliverables"
    ],
    skills: ["Web Development", "Technical Consulting", "Project Management", "Client Relations"]
  },
  {
    title: "IT Support Specialist (Remote)",
    company: "Cactus Serenity Behavioral Health Services",
    date: "2024",
    description: [
      "Provide comprehensive IT support and maintenance services for cactusserenityhealth.com",
      "Manage and maintain IT infrastructure and systems for a behavioral health services provider",
      "Implement and troubleshoot various IT solutions to ensure business continuity",
      "Provide technical assistance and support for all IT-related issues",
      "Ensure security and optimal performance of IT systems for healthcare operations"
    ],
    skills: ["IT Support", "System Maintenance", "Remote Support", "Technical Troubleshooting", "IT Infrastructure", "System Security", "Healthcare IT"]
  },
  {
    title: "Social Media Manager",
    company: "RCCG City of David",
    date: "2024 - Present",
    description: [
      "Manage and optimize social media pages",
      "Create engaging content and maintain consistent posting schedule",
      "Monitor and respond to community engagement",
      "Analyze social media metrics and implement growth strategies"
    ],
    skills: ["Social Media Management", "Content Creation", "Community Engagement", "Analytics"]
  },
  {
    title: "Project Manager",
    company: "Ediferm Farms",
    date: "January 2019 - December 2023",
    description: [
      "Led the development and implementation of farm management systems",
      "Oversaw the installation and maintenance of mechanical and electrical palm oil milling equipment and systems",
      "Managed a team of technicians and farm workers",
      "Implemented quality control measures and safety protocols",
      "Coordinated with suppliers and maintained inventory systems"
    ],
    skills: ["Project Management", "Team Leadership", "Equipment Installation", "Mechanical Systems", "Electrical Systems", "Quality Control", "Inventory Management"]
  },
  {
    title: "NYSC Corps Member",
    company: "Akees Toothpick and Pencil Factory",
    date: "2016 - 2017",
    description: [
      "Assisted in production planning and quality control",
      "Maintained production records and documentation",
      "Participated in safety training and implementation"
    ],
    skills: ["Production Planning", "Quality Control", "Documentation", "Safety Compliance"]
  },
  {
    title: "Intern",
    company: "Tema Tank Farm Limited",
    date: "2015",
    description: [
      "Assisted in daily operations and maintenance of storage facilities",
      "Participated in safety inspections and compliance checks",
      "Maintained operational logs and documentation"
    ],
    skills: ["Operations", "Maintenance", "Safety Compliance", "Documentation"]
  }
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="py-20">
      <div className="section-container">
        <h2 className="flex items-center gap-2 text-2xl md:text-3xl font-semibold mb-16">
          <span className="text-teal font-mono">02.</span>
          <span>Professional Experience</span>
          <span className="flex-grow h-[1px] ml-4 bg-slate-dark"></span>
        </h2>
        
        <div className="flex flex-col md:flex-row gap-4 md:gap-10 max-w-4xl mx-auto">
          {/* Tabs */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-slate-dark">
            {experiences.map((exp, index) => (
              <button
                key={index}
                className={cn(
                  "px-4 py-3 text-sm font-mono text-left whitespace-nowrap transition-all duration-200 hover:text-teal hover:bg-navy-light",
                  activeTab === index 
                    ? "text-teal border-teal md:border-l-2 border-b-2 md:border-b-0" 
                    : "text-slate border-transparent md:border-l-2 border-b-2 md:border-b-0"
                )}
                onClick={() => setActiveTab(index)}
              >
                {exp.company}
              </button>
            ))}
          </div>
          
          {/* Tab content */}
          <div className="py-6 md:p-6 animate-fade-in">
            <h3 className="text-xl font-medium text-foreground mb-1">
              {experiences[activeTab].title} <span className="text-teal">@ {experiences[activeTab].company}</span>
            </h3>
            <p className="text-sm font-mono text-slate mb-4">
              {experiences[activeTab].date}
            </p>
            <ul className="space-y-3">
              {experiences[activeTab].description.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-teal flex-shrink-0 pt-1">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {experiences[activeTab].skills.map((skill, i) => (
                <span key={i} className="text-xs font-mono py-1 px-2 rounded bg-navy-light text-teal">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({ experience }: { experience: typeof experiences[0] }) => {
  return (
    <div className="bg-slate-dark/50 p-6 rounded-lg border border-slate-dark/30 hover:border-teal/30 transition-colors duration-300">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
        <div>
          <h3 className="text-xl font-semibold text-foreground">{experience.title}</h3>
          <p className="text-teal">{experience.company}</p>
        </div>
        <p className="text-slate">{experience.date}</p>
      </div>
      <ul className="space-y-2 mb-4">
        {experience.description.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-teal mt-1">▹</span>
            <span className="text-slate">{item}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {experience.skills.map((skill, index) => (
          <span key={index} className="px-3 py-1 bg-slate-dark/50 text-teal rounded-full text-sm">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Experience;
