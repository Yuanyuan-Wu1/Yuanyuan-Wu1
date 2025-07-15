import { useEffect, useState } from 'react';
import { HeroImage, ListItem, Wrapper, Link } from '../components';
import { getSectionAnimation } from '../animations';
import { aboutSection, author } from '../utils/portfolio';
import { getId } from '../utils/helper';
import { motion } from 'framer-motion';

const About = () => {
  const { title, img, list, description } = aboutSection;
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="about" {...getSectionAnimation}>
      <h2 className="heading-secondary">{title}</h2>
      <main className="flex gap-16 items-center lg:items-start flex-col lg:flex-row">
        <div className="space-y-4 lg:w-3/5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {description.split('\n\n').map((paragraph, pIndex) => (
              <p key={pIndex} className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {paragraph.split(/(\*.*?\*)/g).map((part, partIndex) => {
                  if (part.startsWith('*') && part.endsWith('*')) {
                    return (
                      <span key={partIndex} className="text-accent font-bold">
                        {part.slice(1, -1)}
                      </span>
                    );
                  }
                  return <span key={partIndex}>{part}</span>;
                })}
              </p>
            ))}
          </motion.div>

          {list && (
            <div className="mt-8">
              <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-6">{list.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                {list.items.map((item) => (
                  <motion.div
                    key={getId()}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true }}
                    className="group p-5 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-900/50 shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                  >
                    <h4 className="font-semibold text-accent mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      {item.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-sm bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full px-3 py-1.5 font-medium border border-gray-200 dark:border-gray-600 transition-all duration-200 hover:border-accent hover:text-accent"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
        <HeroImage src={img} alt={author.name} />
      </main>
    </Wrapper>
  ) : (
    <></>
  );
};

export default About;
