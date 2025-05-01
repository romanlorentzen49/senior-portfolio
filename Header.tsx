import { useState, useEffect } from 'react';
import { Menu, X, Code } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const closeMenu = () => setIsOpen(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-primary-900/90 backdrop-blur-sm shadow-md py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a 
            href="#" 
            className="flex items-center space-x-2 text-primary-800 dark:text-white"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <Code size={28} className="text-accent-500" />
            <span className="text-xl font-bold">Developer</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-primary-700 dark:text-primary-200 hover:text-accent-500 dark:hover:text-accent-500 transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-primary-700 dark:text-primary-200 hover:text-accent-500 dark:hover:text-accent-500 transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('experience')} 
              className="text-primary-700 dark:text-primary-200 hover:text-accent-500 dark:hover:text-accent-500 transition-colors"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-primary-700 dark:text-primary-200 hover:text-accent-500 dark:hover:text-accent-500 transition-colors"
            >
              Contact
            </button>
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-4">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="text-primary-800 dark:text-white"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 bg-white dark:bg-primary-900 z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden flex flex-col items-center justify-center`}
      >
        <nav className="flex flex-col items-center space-y-8 text-xl">
          <button 
            onClick={() => scrollToSection('projects')}
            className="text-primary-700 dark:text-primary-200 hover:text-accent-500 dark:hover:text-accent-500 transition-colors"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('skills')}
            className="text-primary-700 dark:text-primary-200 hover:text-accent-500 dark:hover:text-accent-500 transition-colors"
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection('experience')}
            className="text-primary-700 dark:text-primary-200 hover:text-accent-500 dark:hover:text-accent-500 transition-colors"
          >
            Experience
          </button>
          <button 
            onClick={() => scrollToSection('testimonials')}
            className="text-primary-700 dark:text-primary-200 hover:text-accent-500 dark:hover:text-accent-500 transition-colors"
          >
            Testimonials
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-primary-700 dark:text-primary-200 hover:text-accent-500 dark:hover:text-accent-500 transition-colors"
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;