import ProjectCard from './ProjectCard';
import { projects } from '../data/projectsData';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-primary-50 dark:bg-primary-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-primary-600 dark:text-primary-300 max-w-2xl mx-auto">
            A selection of my recent work. These projects showcase my skills in frontend development, 
            backend integration, and creating intuitive user experiences.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;