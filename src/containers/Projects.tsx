import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button, ProjectCard, Wrapper } from '../components';
import { PROJECTS_INITIALLY } from '../utils/config';
import { sortByYear } from '../utils/helper';
import { projectsSection } from '../utils/portfolio';
import { getSectionAnimation, projectVariants, filterVariants } from '../animations';

const Projects = () => {
  const { projects, title } = projectsSection;
  const [showMore, setShowMore] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Extract unique categories from project tags
  const categories = ['all', ...Array.from(new Set(projects.flatMap(p => p.tags)))];
  const featuredCategories = ['all', 'React', 'Java', 'Python', 'AI', 'CI/CD'];
  
  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(selectedCategory));
  
  const topProjects = filteredProjects.slice(0, PROJECTS_INITIALLY);
  const visibleProjects = showMore ? filteredProjects : topProjects;

  return (
    <Wrapper id="projects" animate={false}>
      <motion.div
        {...getSectionAnimation}
        className="text-center mb-12"
      >
        <h2 className="heading-secondary !mb-8">{title}</h2>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {featuredCategories.map((category, i) => (
            <motion.button
              key={category}
              variants={filterVariants}
              initial="hidden"
              whileInView="show"
              custom={i}
              viewport={{ once: true }}
              onClick={() => {
                setSelectedCategory(category);
                setShowMore(false);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-accent text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-105'
              }`}
            >
              {category === 'all' ? 'All Projects' : category}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center max-w-7xl mx-auto"
        layout
      >
        {sortByYear(visibleProjects).map((project, i) => {
          if (i < PROJECTS_INITIALLY) {
            return (
              <ProjectCard
                {...project}
                key={project.id}
                variants={projectVariants}
                initial="hidden"
                whileInView="show"
                custom={i}
                viewport={{ once: true }}
              />
            );
          }

          return (
            <ProjectCard
              {...project}
              key={project.id}
              variants={projectVariants}
              initial="hidden"
              animate="show"
              custom={i - PROJECTS_INITIALLY}
            />
          );
        })}
      </motion.div>

      {/* Show More/Less Button */}
      {filteredProjects.length > PROJECTS_INITIALLY && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="!mt-8"
            center
            onClick={() => setShowMore((prev) => !prev)}
          >
            {showMore ? 'show less' : `show ${filteredProjects.length - PROJECTS_INITIALLY} more`}
          </Button>
        </motion.div>
      )}

      {/* Projects Count */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-center text-gray-600 dark:text-gray-400 text-sm mt-6"
      >
        Showing {visibleProjects.length} of {filteredProjects.length} projects
        {selectedCategory !== 'all' && ` in ${selectedCategory}`}
      </motion.p>
    </Wrapper>
  );
};

export default Projects;
