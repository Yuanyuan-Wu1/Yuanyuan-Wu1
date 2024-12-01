import { useEffect, useState } from 'react';
import { HeroImage, ListItem, Wrapper, Link } from '../components';
import { getSectionAnimation } from '../animations';
import { aboutSection, author } from '../utils/portfolio';
import { getId } from '../utils/helper';
import { motion } from 'framer-motion';

const About = () => {
  const { title, img, list } = aboutSection;
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
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Hi, I'm Yuanyuan Wu, a passionate full-stack developer currently pursuing my Master's degree 
            in Computer Science at{' '}
            <Link
              href="https://www.northeastern.edu/"
              target="_blank"
              className="text-accent"
            >
              Northeastern University
            </Link>
            .
          </motion.p>
          <p>
            I've recently completed an exciting project -{' '}
            <Link
              href="http://167.234.209.20:8080/voyage"
              target="_blank"
              className="text-accent"
            >
              Seattle Airbnb Web Application
            </Link>
            , which showcases my abilities in full-stack development. Additionally, I'm working on a{' '}
            <Link
              href="https://github.com/CS6510-SEA-F24/t5-project"
              target="_blank"
              className="text-accent"
            >
              CI/CD Pipeline Visualization Tool
            </Link>
            {' '}that demonstrates my expertise in Python and DevOps practices.
          </p>
          <p>
            I'm actively seeking full-stack development opportunities where I can contribute my skills 
            in Java, Python, and JavaScript ecosystems while continuing to grow as a developer.
          </p>

          {list && (
            <>
              <p>{list.title}</p>
              <ul className="text-sm gap-1 grid grid-cols-2 w-2/3">
                {list.items.map((item) => (
                  <ListItem 
                    key={getId()} 
                    className="hover:scale-105 hover:text-accent transition-all duration-300"
                  >
                    {item}
                  </ListItem>
                ))}
              </ul>
            </>
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
