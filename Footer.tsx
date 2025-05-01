import { Code, Heart } from 'lucide-react';
import { socialLinks } from '../data/socialLinks';

const Footer = () => {
  const getIconComponent = (iconName: string) => {
    const icons: { [key: string]: JSX.Element } = {
      github: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>,
      instagram: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>,
      mail: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>,
    };
    
    return icons[iconName] || null;
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-primary-950 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="md:col-span-1">
            <a href="#" className="flex items-center space-x-2 text-primary-800 dark:text-white mb-4">
              <Code size={24} className="text-accent-500" />
              <span className="text-xl font-bold">Developer</span>
            </a>
            <p className="text-primary-600 dark:text-primary-400 mb-6">
              Crafting beautiful, user-centric web experiences 
              with clean code and modern technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-primary-600 dark:text-primary-400 hover:text-accent-500 dark:hover:text-accent-500 
                    transition-colors duration-300"
                  aria-label={link.name}
                >
                  {getIconComponent(link.icon)}
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-primary-800 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#projects" className="text-primary-600 dark:text-primary-400 hover:text-accent-500 dark:hover:text-accent-500 transition-colors duration-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-primary-600 dark:text-primary-400 hover:text-accent-500 dark:hover:text-accent-500 transition-colors duration-300">
                  Skills
                </a>
              </li>
              <li>
                <a href="#experience" className="text-primary-600 dark:text-primary-400 hover:text-accent-500 dark:hover:text-accent-500 transition-colors duration-300">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-600 dark:text-primary-400 hover:text-accent-500 dark:hover:text-accent-500 transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-primary-800 dark:text-white mb-4">
              Get In Touch
            </h3>
            <p className="text-primary-600 dark:text-primary-400 mb-2">
              Looking for a developer for your next project?
            </p>
            <a 
              href="mailto:contact@example.com" 
              className="text-accent-500 hover:text-accent-600 transition-colors duration-300"
            >
              romanlorentzen49@gmail.com
            </a>
            <p className="text-primary-600 dark:text-primary-400 mt-4">
              Pasadena, California
            </p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-primary-200 dark:border-primary-800 text-center">
          <p className="text-primary-600 dark:text-primary-400 flex items-center justify-center">
            <span>© {currentYear} Roman Lorentzen. All rights reserved.</span>
            <span className="mx-2">|</span>
            <span className="flex items-center">
              Made with <Heart size={16} className="text-accent-500 mx-1" /> using React & Tailwind
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;