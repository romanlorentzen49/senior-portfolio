import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // Check for user preference on initial load
    const isDarkMode = localStorage.getItem('darkMode') === 'true' || 
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    setDarkMode(isDarkMode);
    
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    localStorage.setItem('darkMode', String(newDarkMode));
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-primary-100 dark:bg-primary-800 text-primary-800 dark:text-primary-100 
        transition-all duration-200 hover:ring-2 hover:ring-primary-300 dark:hover:ring-primary-700"
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {darkMode ? (
        <Sun size={20} className="animate-[spin_500ms_ease-in-out]" />
      ) : (
        <Moon size={20} className="animate-[spin_500ms_ease-in-out]" />
      )}
    </button>
  );
};

export default ThemeToggle;