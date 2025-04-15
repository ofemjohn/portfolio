import React from 'react';
import { Mail, Github, Linkedin, Twitter, Youtube } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-teal font-mono text-lg mb-3">05. What's Next?</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Get In Touch</h3>
          <p className="text-slate mb-10">
            I'm currently looking for new opportunities and my inbox is always open. 
            Whether you have a question or just want to say hello, I'll do my best to get back to you!
          </p>
          
          <a 
            href="mailto:ofemjohn@gmail.com" 
            className="btn btn-outline px-8 py-4 text-lg inline-flex items-center"
          >
            Say Hello
            <Mail className="ml-2 h-5 w-5" />
          </a>
          
          <div className="mt-16">
            <p className="text-sm text-slate mb-4">Or find me on these platforms</p>
            <div className="flex justify-center gap-6">
              <a 
                href="https://github.com/ofemjohn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate hover:text-teal transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate hover:text-teal transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://twitter.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate hover:text-teal transition-colors"
                aria-label="Twitter Profile"
              >
                <Twitter size={24} />
              </a>
              <a 
                href="https://www.youtube.com/@ofemjohn9324" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate hover:text-teal transition-colors"
                aria-label="YouTube Channel"
              >
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
