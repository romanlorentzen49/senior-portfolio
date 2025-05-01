import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const getProjectPath = (title: string) => {
    switch (title) {
      case 'Roulette Game':
        return '/project/roulette';
      case 'Start of Building an App':
        return '/project/app-builder';
      default:
        return '';
    }
  };

  const projectPath = getProjectPath(project.title);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative overflow-hidden rounded-xl shadow-lg bg-white dark:bg-primary-800 
        hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-60 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 
            group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent 
          transition-opacity duration-300 ${isHovered ? 'opacity-90' : 'opacity-60'}`}>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 transition-transform duration-300 transform">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          <div className="flex space-x-3">
            {project.repoUrl && (
              <a 
                href={project.repoUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="text-white hover:text-accent-400 transition-colors duration-300"
                aria-label="View repository"
              >
                <Github size={20} />
              </a>
            )}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag, i) => (
            <span 
              key={i} 
              className="px-2 py-1 text-xs font-medium bg-white/20 text-white rounded"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-2 py-1 text-xs font-medium bg-white/20 text-white rounded">
              +{project.tags.length - 4}
            </span>
          )}
        </div>
      </div>

      <div className={`absolute inset-0 p-6 bg-primary-900/95 flex flex-col justify-center transform transition-transform duration-300 
        ${isHovered ? 'translate-y-0' : 'translate-y-full'}`}>
        <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
        <p className="text-primary-200 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <span 
              key={i} 
              className="px-2 py-1 text-xs font-medium bg-primary-700/50 text-primary-100 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="mt-auto flex gap-4">
          {projectPath && (
            <Link 
              to={projectPath}
              className="flex items-center justify-center px-4 py-2 bg-accent-500 text-white rounded-md hover:bg-accent-600 transition-colors"
            >
              <ExternalLink size={16} className="mr-2" />
              View Details
            </Link>
          )}
          {project.repoUrl && (
            <a 
              href={project.repoUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center justify-center px-4 py-2 bg-primary-700 text-white rounded-md hover:bg-primary-600 transition-colors"
            >
              <Github size={16} className="mr-2" />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;