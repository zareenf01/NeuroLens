import React from 'react';
import { Mail } from 'lucide-react';

const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container developer-card">
        <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-display)' }}>Zareen Fatima</h2>
        <p className="text-muted" style={{ margin: '1rem 0' }}>
          Full stack developer with 5 years experience building production-grade web and mobile applications. 
          Specializes in React, AI-integrated frontend systems, and LLM API orchestration. 
          Based in Bengaluru, India.
        </p>
        
        <div className="developer-links">
          <a href="https://github.com/ZareenFatima" target="_blank" rel="noreferrer" className="social-link">
            <GithubIcon /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/zareen-fatima-476110244/?skipRedirect=true" target="_blank" rel="noreferrer" className="social-link">
            <LinkedinIcon /> LinkedIn
          </a>
          <a href="mailto:zareenfatima78678@gmail.com" className="social-link">
            <Mail size={20} /> Contact
          </a>
        </div>
        
        <div style={{ marginTop: '4rem', fontSize: '0.875rem', color: 'rgba(255,255,255,0.3)' }}>
          © 2026 Zareen Fatima. Prepared for Adobe Fund for Design Application.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
