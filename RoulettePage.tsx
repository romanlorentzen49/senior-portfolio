import { motion } from 'framer-motion';
import { ArrowLeft, GitBranch, PlayCircle, Code, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const RoulettePage = () => {
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
            Roulette Game Project
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="col-span-2">
              <div className="bg-white dark:bg-primary-900 rounded-xl shadow-lg p-6 mb-8">
                <h2 className="text-2xl font-semibold text-primary-800 dark:text-white mb-4">
                  Problem Statement
                </h2>
                <p className="text-primary-600 dark:text-primary-300 mb-6">
                  Design a terminal-based roulette game in Python that mimics the casino experience, while gently encouraging the player—someone struggling with gambling—to reflect on risk and money management.
                </p>
                
                <h2 className="text-2xl font-semibold text-primary-800 dark:text-white mb-4">
                  Solution Overview
                </h2>
                <p className="text-primary-600 dark:text-primary-300">
                  This game simulates roulette using text-based interaction. Players start with $50 and face realistic odds that highlight the volatility of gambling. As the game progresses, messages and mechanics are designed to make the player increasingly aware of their decisions, nudging them toward stepping away with their balance intact.
                </p>
              </div>
            </div>

            <div className="col-span-1">
              <div className="bg-white dark:bg-primary-900 rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-semibold text-primary-800 dark:text-white mb-4">
                  Quick Links
                </h2>
                <div className="space-y-4">
                  <a
                    href="https://github.com/InfernoHK/APSCP-CT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-primary-600 dark:text-primary-300 hover:text-accent-500"
                  >
                    <GitBranch className="w-5 h-5 mr-2" />
                    View Source Code
                  </a>
                  <a
                    href="https://replit.com/@InfernoHK/APSCP-CT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-primary-600 dark:text-primary-300 hover:text-accent-500"
                  >
                  
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white dark:bg-primary-900 rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-primary-800 dark:text-white mb-4">
                Key Features
              </h2>
              <ul className="space-y-3 text-primary-600 dark:text-primary-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-2"></span>
                  Clear prompts and betting options that mirror real-world risks
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-2"></span>
                  Two wager types: color only (safer) or number & color (riskier)
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-2"></span>
                  Realistic odds and payouts that favor the house
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-2"></span>
                  Recursive game loop to simulate addiction patterns and encourage exit
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-2"></span>
                  Displays running total and ending balance for awareness
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-primary-900 rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-primary-800 dark:text-white mb-4">
                Technical Stack
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Code className="w-6 h-6 text-accent-500 mr-3" />
                  <div>
                    <h3 className="font-semibold text-primary-800 dark:text-white">Python</h3>
                    <p className="text-primary-600 dark:text-primary-300">
                      Handles game logic, inputs, and console flowinter
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Database className="w-6 h-6 text-accent-500 mr-3" />
                  <div>
                    <h3 className="font-semibold text-primary-800 dark:text-white">Math</h3>
                    <p className="text-primary-600 dark:text-primary-300">
                      Calculates fair (but challenging) payouts
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

export default RoulettePage;