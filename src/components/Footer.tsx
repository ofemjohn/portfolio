import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 text-center text-slate-dark text-sm font-mono">
      <p>Designed & Built with 💻 by John Ofem</p>
      <p className="mt-2">© {new Date().getFullYear()} All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
