import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="section-container">
        <h2 className="flex items-center gap-2 text-2xl md:text-3xl font-semibold mb-16">
          <span className="text-teal font-mono">04.</span>
          <span>About Me</span>
          <span className="flex-grow h-[1px] ml-4 bg-slate-dark"></span>
        </h2>
        
        <div className="grid md:grid-cols-5 gap-12">
          {/* Image */}
          <div className="md:col-span-2 relative group">
            <div className="relative rounded-lg overflow-hidden border-2 border-teal/20 transition-all duration-300 group-hover:border-teal/50">
              <img 
                src="/johnofem.jpeg" 
                alt="John Ofem" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-teal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 h-full w-full border-2 border-teal rounded-lg -z-10 transition-all duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
          </div>
          
          {/* Text content */}
          <div className="md:col-span-3 space-y-4">
            <p>
              Hello! I'm a fullstack software engineer with a unique background in petroleum engineering. My journey into software engineering began during my time in the petroleum industry, where I found myself creating digital tools to solve complex engineering problems.
            </p>
            <p>
              Currently, I'm pursuing a Master's in Information Technology at Kennesaw State University in Georgia, where I'm expanding my knowledge in software architecture, cloud computing, and data engineering.
            </p>
            <p>
              My background in petroleum engineering has given me strong analytical skills and experience working with complex systems, which I now apply to software development challenges. I enjoy bridging the gap between engineering disciplines and creating technology solutions that solve real-world problems.
            </p>
            <p>
              My technical expertise includes:
            </p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 max-w-md">
              <div className="flex items-center gap-2">
                <span className="text-teal">▹</span>
                <span>JavaScript (ES6+)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-teal">▹</span>
                <span>TypeScript</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-teal">▹</span>
                <span>React</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-teal">▹</span>
                <span>Node.js</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-teal">▹</span>
                <span>MongoDB</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-teal">▹</span>
                <span>SQL</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-teal">▹</span>
                <span>Python</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-teal">▹</span>
                <span>AWS</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-teal">▹</span>
                <span>Flask</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-teal">▹</span>
                <span>Django</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-teal">▹</span>
                <span>FastAPI</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-teal">▹</span>
                <span>PostgreSQL</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-teal">▹</span>
                <span>MySQL</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-teal">▹</span>
                <span>Linux</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-teal">▹</span>
                <span>Postman</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-teal">▹</span>
                <span>Canva</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Education timeline */}
        <div className="mt-24">
          <h3 className="text-xl font-semibold mb-10 text-center">Educational Journey</h3>
          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-slate-dark"></div>
            
            {/* Timeline items */}
            <div className="space-y-16">
              {/* Education item 1 */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-4 w-4 h-4 rounded-full bg-teal"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right">
                    <h4 className="text-foreground font-semibold">Master of Science in Information Technology</h4>
                    <p className="text-teal">2022 - Present</p>
                  </div>
                  <div>
                    <p className="text-lg">Kennesaw State University</p>
                    <p className="text-slate">Kennesaw, Georgia, USA</p>
                    <p className="text-slate">Focus on software engineering, cloud computing, and data analytics.</p>
                  </div>
                </div>
              </div>
              
              {/* Education item 2 */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-4 w-4 h-4 rounded-full bg-teal"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right">
                    <h4 className="text-foreground font-semibold">Full Stack Web Development Bootcamp</h4>
                    <p className="text-teal">2021</p>
                  </div>
                  <div>
                    <p className="text-lg">Tech Bootcamp Academy</p>
                    <p className="text-slate">Online (Nairobi, Kenya)</p>
                    <p className="text-slate">Specialized in backend engineering, covering modern web development technologies and practices.</p>
                  </div>
                </div>
              </div>
              
              {/* Education item 3 */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-4 w-4 h-4 rounded-full bg-teal"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right">
                    <h4 className="text-foreground font-semibold">Bachelor of Science in Petroleum Engineering</h4>
                    <p className="text-teal">2015 - 2019</p>
                  </div>
                  <div>
                    <p className="text-lg">Engineering University</p>
                    <p className="text-slate">Tarkwa, Ghana</p>
                    <p className="text-slate">Graduated with honors. Specialized in reservoir engineering and production optimization.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
