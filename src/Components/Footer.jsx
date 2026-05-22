import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-color-border pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <a href="#" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-2 block">
              SE.
            </a>
            <p className="text-text-muted text-sm max-w-sm">
              Architecting the future, one line of code at a time. Building scalable solutions for modern problems.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-4">
              <a href="#" className="text-text-muted hover:text-primary transition-colors" aria-label="GitHub">
                <FaGithub size={24} />
              </a>
              <a href="#" className="text-text-muted hover:text-primary transition-colors" aria-label="LinkedIn">
                <FaLinkedin size={24} />
              </a>
              <a href="mailto:hello@example.com" className="text-text-muted hover:text-primary transition-colors" aria-label="Email">
                <Mail size={24} />
              </a>
            </div>
            <p className="text-text-muted text-sm">
              &copy; {new Date().getFullYear()} Software Engineer. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
