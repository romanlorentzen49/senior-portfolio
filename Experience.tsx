import { experiences } from '../data/experienceData';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-primary-50 dark:bg-primary-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 dark:text-white mb-4">
            Work Experience
          </h2>
          <p className="text-primary-600 dark:text-primary-300 max-w-2xl mx-auto">
            My professional journey, showcasing where I've worked and the impact I've made.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary-200 dark:bg-primary-700">
            </div>

            {/* Timeline Items */}
            {experiences.map((exp, index) => (
              <TimelineItem key={exp.id} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ experience, index }: { experience: any, index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`relative flex flex-col md:flex-row items-center mb-16 ${isEven ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Timeline Circle */}
      <div 
        className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 
          w-6 h-6 bg-accent-500 rounded-full border-4 border-white dark:border-primary-900 z-10 top-0 md:top-1/2"
      ></div>

      {/* Date */}
      <div className={`flex-1 flex ${isEven ? 'md:justify-start' : 'md:justify-end'} mb-4 md:mb-0`}>
        <div className={`relative px-4 py-2 bg-white dark:bg-primary-800 rounded-lg shadow-md 
          ${isEven ? 'md:mr-8' : 'md:ml-8'}`}>
          <div className="flex items-center">
            <Calendar size={16} className="text-accent-500 mr-2" />
            <span className="text-primary-600 dark:text-primary-300 font-medium">
              {experience.startDate} - {experience.endDate}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={`flex-1 ${isEven ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
        <div className="bg-white dark:bg-primary-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center mb-2 space-x-2">
            <Briefcase size={20} className="text-accent-500" />
            <h3 className="text-xl font-bold text-primary-800 dark:text-white">{experience.role}</h3>
          </div>
          <p className="text-primary-600 dark:text-primary-300 font-medium mb-4">
            {experience.company}
          </p>
          <p className="text-primary-600 dark:text-primary-400 mb-4">
            {experience.description}
          </p>
          <ul className="space-y-2">
            {experience.achievements.map((achievement: string, i: number) => (
              <li key={i} className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 bg-accent-500 rounded-full mt-[0.45rem] mr-2"></span>
                <span className="text-primary-600 dark:text-primary-400">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;