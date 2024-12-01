import dynamic from 'next/dynamic';

// 动态导入 Player 组件，并禁用 SSR
const Player = dynamic(
  () => import('@lottiefiles/react-lottie-player').then((mod) => mod.Player),
  { ssr: false }
);

type Props = {
  path: any;
  className?: string;
};

const ShowLottie = ({ path, className = '' }: Props) => {
  return (
    <div className={`max-w-sm md:max-w-md ${className}`}>
      <Player autoplay loop src={path} />
    </div>
  );
};

export default ShowLottie;
