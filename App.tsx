import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import RoulettePage from './pages/RoulettePage';
import AppBuilderPage from './pages/AppBuilderPage';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-primary-900 z-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-accent-500 mb-4"></div>
          <p className="text-primary-800 dark:text-white text-xl font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-white dark:bg-primary-950 text-primary-800 dark:text-primary-100">
            <Header />
            <main>
              <Hero />
              <Projects />
              <Skills />
              <Experience />
              <Contact />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/project/roulette" element={<RoulettePage />} />
        <Route path="/project/app-builder" element={<AppBuilderPage />} />
      </Routes>
    </Router>
  );
}

export default App;