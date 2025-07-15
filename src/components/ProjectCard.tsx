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
  img?: string;
  video?: string;
  videoUrl?: string;
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
  const [domLoaded, setDomLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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
      className="w-full max-w-[380px] h-full"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="group bg-white dark:bg-gray-900 rounded-xl shadow-lg dark:shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] h-full flex flex-col">
        
        {/* Media Section */}
        <div className="relative overflow-hidden bg-gray-100 dark:bg-gray-800">
          {(video || videoUrl) ? (
            video ? (
              <video
                controls
                className="w-full h-48 object-cover"
                poster={img}
              >
                <source src={video} type="video/mp4" />
              </video>
            ) : (
              <div className="relative w-full h-48">
                <iframe
                  className="w-full h-full"
                  src={videoUrl}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )
          ) : (
            img && (
              <div className="relative w-full h-48 overflow-hidden">
                <img
                  src={img}
                  alt={name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            )
          )}
          
          {/* Overlay Year Badge */}
          <div className="absolute top-3 right-3">
            <span className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
              {year}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-accent transition-colors duration-200 capitalize leading-tight">
            {name}
          </h3>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4 flex-1">
            {tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-600 transition-all duration-200 hover:border-accent hover:text-accent hover:bg-accent/5"
              >
                {tag}
              </span>
            ))}
            {tags.length > 4 && (
              <span className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full">
                +{tags.length - 4} more
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-3">
              {repo && (
                <a
                  href={repo}
                  className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-accent transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Icon icon="tabler:brand-github" width={18} height={18} />
                  Code
                </a>
              )}
              {url && (
                <a
                  href={url}
                  className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-accent transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Icon icon="ci:external-link" width={18} height={18} />
                  Live
                </a>
              )}
            </div>
            
            {/* View Project Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (url) window.open(url, '_blank');
              }}
              className="px-4 py-2 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent/90 transition-all duration-200 hover:scale-105 disabled:opacity-50"
              disabled={!url}
            >
              View Project
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  ) : (
    <></>
  );
};

export default ProjectCard;
