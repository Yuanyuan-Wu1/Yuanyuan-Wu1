import Image from 'next/image';
import { Icon } from '@iconify/react';
import { motion, MotionProps } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ProjectType } from '../types';
import { blurImageURL } from '../utils/config';

interface ProjectCardProps {
  name: string;
  url: string;
  repo: string;
  year: number;
  img?: string;          // 可选的图片
  video?: string;        // 可选的本地视频
  videoUrl?: string;     // 可选的在线视频URL
  tags: string[];
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
  ...rest
}: ProjectCardProps) => {
  // To avoid hydration failed error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <motion.div {...rest} className="w-full max-w-[350px]">
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
              // 本地视频
              <video 
                controls 
                className="w-full rounded-lg shadow-lg"
                poster={img} // 使用图片作为视频封面
              >
                <source src={video} type="video/mp4" />
              </video>
            ) : (
              // YouTube 或其他在线视频
              <iframe
                className="w-full aspect-video rounded-lg shadow-lg"
                src={videoUrl}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )
          ) : (
            // 如果没有视频，显示图片
            img && (
              <img 
                src={img} 
                alt={name} 
                className="w-full rounded-lg shadow-lg"
              />
            )
          )}
        </div>
        <div className="p-4 py-3 space-y-1">
          <div className="flex justify-between items-center">
            <p className="text-xs capitalize font-mono">{tags.join(' | ')}</p>
            <div className="flex items-center space-x-1.5">
              <a
                href={repo}
                className="block hover:text-accent duration-200"
                target="_blank"
              >
                <Icon icon="tabler:brand-github" width={20} height={20} />
              </a>
              <a
                href={url}
                className="block hover:text-accent duration-200"
                target="_blank"
              >
                <Icon icon="ci:external-link" width={22} height={22} />
              </a>
            </div>
          </div>
          <h4 className="flex justify-between group-hover:text-accent capitalize font-medium duration-200">
            <span>{name}</span>
            <span className="mr-1">{year}</span>
          </h4>
        </div>
      </button>
    </motion.div>
  ) : (
    <></>
  );
};

export default ProjectCard;
