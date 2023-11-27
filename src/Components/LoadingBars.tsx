import { FC } from "react";

interface LoadingBarsProps {
  className?: string;
}

const LoadingBars: FC<LoadingBarsProps> = ({ className }) => {
  return (
    <>
      <div className={`flex items-center justify-center h-[60vh] ${className}`}>
        <span className="loading loading-bars loading-md"></span>
      </div>
    </>
  );
};

export default LoadingBars;