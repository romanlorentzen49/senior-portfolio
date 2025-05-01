import { skills } from '../data/skillsData';
import { Code, Server, PenTool } from 'lucide-react';
import { Skill } from '../types';
import { motion } from 'framer-motion';

const Skills = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-primary-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 dark:text-white mb-4">
            Skills &amp; Expertise
          </h2>
          <p className="text-primary-600 dark:text-primary-300 max-w-2xl mx-auto">
            I've worked with a variety of technologies and tools in the web development ecosystem.
            Below are my areas of expertise and proficiency levels.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Skills Grid */}
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {skills.map((skill: Skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ skill }: { skill: Skill }) => {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return <Code size={24} className="text-primary-600 dark:text-primary-400" />;
      case 'server':
        return <Server size={24} className="text-primary-600 dark:text-primary-400" />;
      case 'pen-tool':
        return <PenTool size={24} className="text-primary-600 dark:text-primary-400" />;
      default:
        return <Code size={24} className="text-primary-600 dark:text-primary-400" />;
    }
  };

  return (
    <motion.div
      variants={item}
      className="bg-white dark:bg-primary-800 p-6 rounded-lg shadow-md hover:shadow-xl 
        transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="flex items-center mb-4">
        {getIconComponent(skill.icon)}
        <h3 className="text-lg font-semibold ml-3 text-primary-800 dark:text-white">
          {skill.name}
        </h3>
      </div>

      <div className="mt-2">
        <div className="flex items-center">
          <div className="flex-1 h-2 bg-primary-100 dark:bg-primary-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-accent-500 rounded-full"
              style={{ width: `${(skill.proficiency / 5) * 100}%` }}
            ></div>
          </div>
          <span className="ml-3 text-sm font-medium text-primary-600 dark:text-primary-300">
            {skill.proficiency}/5
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;