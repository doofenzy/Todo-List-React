import { useEffect, useState } from 'react';
import { Progress } from '../components/ui/progress'; // adjust import path

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (progress < 100) {
      interval = setInterval(() => {
        setProgress((prev) => Math.min(prev + Math.random() * 90, 100));
      }, 300);
    }

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div className="flex items-center justify-center h-screen">
      <Progress value={progress} className="w-1/2" />
    </div>
  );
};

export default LoadingScreen;
