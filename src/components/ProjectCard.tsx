import Image from 'next/image';
import { Icon } from '@iconify/react';
import { motion, MotionProps, Variants } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ProjectType } from '../types';
import { blurImageURL } from '../utils/config';

interface ProjectCardProps extends MotionProps {
  name: string;
  url: string;
  repo: string;
  year: number;
  img?: string;          // 可选的图片
  video?: string;        // 可选的本地视频
  videoUrl?: string;     // 可选的在线视频URL
  tags: string[];
  variants?: Variants;
  initial?: string;
  whileInView?: string;
  custom?: number;
}

const ProjectCard = ({
  name,
  url,
  repo,
  year,
  img,
  video,
  videoUrl,
  tags,
  variants,
  initial,
  whileInView,
  custom,
  ...rest
}: ProjectCardProps) => {
  // To avoid hydration failed error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <motion.div 
      {...rest} 
      variants={variants}
      initial={initial}
      whileInView={whileInView}
      custom={custom}
      className="w-full max-w-[350px]"
    >
      <button
        onClick={(e) => {
          // Don't run this if the clicked target is an anchor element
          if ((e.target as HTMLElement).closest('a')) return;
          window.open(url);
        }}
        className="group bg-bg-secondary block w-full shadow-xl dark:shadow-2xl rounded-md overflow-hidden transition-all duration-200"
      >
        <div className="media-container">
          {(video || videoUrl) ? (
            video ? (
              <video controls className="w-full rounded-lg shadow-lg" poster={img}>
                <source src={video} type="video/mp4" />
              </video>
            ) : (
              <iframe
                className="w-full aspect-video rounded-lg shadow-lg"
                src={videoUrl?.replace('watch?v=', 'embed/')}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )
          ) : (
            img && (
              <img 
                src={img} 
                alt={name} 
                className="w-full rounded-lg shadow-lg"
              />
            )
          )}
        </div>
        <div className="p-6 space-y-4">
          <h4 className="flex justify-between group-hover:text-accent capitalize font-medium text-xl duration-200">
            <span>{name}</span>
            <span className="text-accent">{year}</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm rounded-full 
                         bg-accent/10 text-accent 
                         hover:bg-accent/20 transition-colors
                         dark:bg-accent/20 dark:hover:bg-accent/30"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center space-x-3 pt-2">
            <a
              href={repo}
              className="flex items-center space-x-2 hover:text-accent duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="tabler:brand-github" width={20} height={20} />
              <span>Repository</span>
            </a>
            <a
              href={url}
              className="flex items-center space-x-2 hover:text-accent duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="ci:external-link" width={22} height={22} />
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      </button>
    </motion.div>
  ) : (
    <></>
  );
};

export default ProjectCard;
