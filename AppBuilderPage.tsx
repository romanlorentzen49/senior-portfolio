import { motion } from 'framer-motion';
import { ArrowLeft, GitBranch, Smartphone, Layout, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

const AppBuilderPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-primary-950">
      <div className="container mx-auto px-4 py-12">
        <Link 
          to="/" 
          className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-accent-500 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Portfolio
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-primary-800 dark:text-white mb-6">
            AR Furniture Visualization App
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="col-span-2">
              <div className="bg-white dark:bg-primary-900 rounded-xl shadow-lg p-6 mb-8">
                <h2 className="text-2xl font-semibold text-primary-800 dark:text-white mb-4">
                  Problem Statement
                </h2>
                <p className="text-primary-600 dark:text-primary-300 mb-6">
                  Design a mobile-friendly login and signup interface using p5.js to simulate a simple account management system. The challenge was to create an interactive user experience with basic authentication logic, visual layout, and dynamic screen transitions—without using a traditional GUI framework.


                </p>
                
                <h2 className="text-2xl font-semibold text-primary-800 dark:text-white mb-4">
                  Solution Overview
                </h2>
                <p className="text-primary-600 dark:text-primary-300">
                  This p5.js-based project provides a simulated account system featuring sign-up, login, and post-login options within a vertically-scrolling mobile canvas. It uses visual buttons and text input fields for interaction and demonstrates fundamental concepts like conditionals, arrays, event handling, and screen management.
                </p>
              </div>
            </div>

            <div className="col-span-1">
              <div className="bg-white dark:bg-primary-900 rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-semibold text-primary-800 dark:text-white mb-4">
                  Project Status
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center text-warning-500">
                    <span className="w-3 h-3 bg-warning-500 rounded-full mr-2"></span>
                    In Development
                  </div>
                  <a
                    href="https://editor.p5js.org/Kool_Kid/sketches/HFHxbx2gb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-primary-600 dark:text-primary-300 hover:text-accent-500"
                  >
                    <GitBranch className="w-5 h-5 mr-2" />
                    View Prototype
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white dark:bg-primary-900 rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-primary-800 dark:text-white mb-4">
                Planned Features
              </h2>
              <ul className="space-y-3 text-primary-600 dark:text-primary-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-2"></span>
                  Mobile-styled interface using the p5.js library
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-2"></span>
                  Sign-up and login forms with password protection
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-2"></span>
                  Basic account storage and validation logic using an in-memory array
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-2"></span>
                  Dynamic button visibility and screen switching based on user actions
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-2"></span>
                  Interactive category buttons (Furniture, Grills, Lights) after successful login
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-primary-900 rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-primary-800 dark:text-white mb-4">
                Technical Stack
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Smartphone className="w-6 h-6 text-accent-500 mr-3" />
                  <div>
                    <h3 className="font-semibold text-primary-800 dark:text-white">p5.js</h3>
                    <p className="text-primary-600 dark:text-primary-300">
                      Used for rendering canvas elements, UI components (buttons, inputs), and managing interaction logic
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Camera className="w-6 h-6 text-accent-500 mr-3" />
                  <div>
                    <h3 className="font-semibold text-primary-800 dark:text-white">JavaScript</h3>
                    <p className="text-primary-600 dark:text-primary-300">
                      Core scripting language used to handle account logic, UI states, and input management
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AppBuilderPage;