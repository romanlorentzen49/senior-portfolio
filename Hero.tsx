import { useState, useEffect } from 'react';
import { ArrowDown, Github as GitHub, Instagram, Mail } from 'lucide-react';
import { socialLinks } from '../data/socialLinks';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return <GitHub size={20} />;
      case 'instagram':
        return <Instagram size={20} />;
      case 'mail':
        return <Mail size={20} />;
      default:
        return null;
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white dark:from-primary-900 dark:to-primary-950"></div>
        <div className="absolute top-0 -left-4 w-72 h-72 bg-accent-300/30 dark:bg-accent-500/10 rounded-full filter blur-3xl opacity-70"></div>
        <div className="absolute bottom-0 -right-4 w-72 h-72 bg-primary-300/30 dark:bg-primary-700/20 rounded-full filter blur-3xl opacity-70"></div>
      </div>

      <div 
        className={`container mx-auto px-4 sm:px-6 lg:px-8 pt-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-accent-500 font-semibold mb-4 animate-[fadeIn_1s_ease-in-out]">Hello, I'm</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-800 dark:text-orange mb-6 animate-[fadeIn_1.2s_ease-in-out]">
            Roman Lorentzen
          </h1>
          <h2 className="text-xl md:text-2xl text-primary-600 dark:text-primary-300 mb-8 animate-[fadeIn_1.4s_ease-in-out]">
            Senior Frontend Developer specializing in building exceptional digital experiences
          </h2>
          <p className="text-primary-600 dark:text-primary-400 text-lg mb-10 leading-relaxed animate-[fadeIn_1.6s_ease-in-out]">
            I craft high-performance, responsive web applications with 
            modern technologies. Passionate about clean code, intuitive UIs, and creating 
            seamless user experiences that drive business goals.
          </p>

          <div className="flex justify-center space-x-4 mb-12 animate-[fadeIn_1.8s_ease-in-out]">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-primary-600 dark:text-primary-300 hover:text-accent-500 dark:hover:text-accent-500 
                  bg-white dark:bg-primary-800 rounded-full shadow-md hover:shadow-lg 
                  transform hover:-translate-y-1 transition-all duration-300"
                aria-label={link.name}
              >
                {getIconComponent(link.icon)}
              </a>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-[fadeIn_2s_ease-in-out]">
            <a
              href="#contact"
              className="px-6 py-3 bg-accent-500 text-white rounded-full font-semibold 
                shadow-lg hover:shadow-xl hover:bg-accent-600 transform hover:-translate-y-1 
                transition-all duration-300 w-full sm:w-auto"
            >
              Get In Touch
            </a>
            <a
              href="https://docs.google.com/document/d/1nGkcvuSMVPbeZzIcGDFFyIlxIi_PojgnDjZoh8THhew/edit?tab=t.0"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white dark:bg-primary-800 text-primary-700 dark:text-primary-200 
                rounded-full font-semibold border border-primary-200 dark:border-primary-700
                shadow-lg hover:shadow-xl hover:bg-primary-50 dark:hover:bg-primary-700 
                transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
            >
              View Resume
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToProjects}
            className="p-2 rounded-full bg-white dark:bg-primary-800 shadow-md 
              text-primary-500 dark:text-primary-300 hover:text-accent-500 dark:hover:text-accent-500 
              transition-colors duration-300"
            aria-label="Scroll to projects"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;