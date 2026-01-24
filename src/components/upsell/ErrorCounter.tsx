import { useState, useEffect } from 'react';
import { AlertTriangle, HeartCrack } from 'lucide-react';

const ErrorCounter = () => {
  const [fatalErrors, setFatalErrors] = useState(() => Math.floor(Math.random() * 500) + 1000);
  const [lostExes, setLostExes] = useState(() => Math.floor(Math.random() * 100) + 300);
  const [isErrorPulsing, setIsErrorPulsing] = useState(false);
  const [isLostPulsing, setIsLostPulsing] = useState(false);

  useEffect(() => {
    // Increment fatal errors every 3-5 seconds
    const errorInterval = setInterval(() => {
      setFatalErrors(prev => prev + 1);
      setIsErrorPulsing(true);
      setTimeout(() => setIsErrorPulsing(false), 300);
    }, Math.random() * 2000 + 3000);

    // Increment lost exes every 8-12 seconds
    const lostInterval = setInterval(() => {
      setLostExes(prev => prev + 1);
      setIsLostPulsing(true);
      setTimeout(() => setIsLostPulsing(false), 300);
    }, Math.random() * 4000 + 8000);

    return () => {
      clearInterval(errorInterval);
      clearInterval(lostInterval);
    };
  }, []);

  return (
    <div className="w-full bg-gradient-to-r from-danger/20 via-card to-danger/20 border-y border-danger/30 py-3 px-4">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-danger animate-pulse" />
          <span className="text-white/80 text-sm">ERRORES FATALES EN 24H:</span>
          <span 
            className={`text-danger font-bold text-lg tabular-nums ${isErrorPulsing ? 'counter-increment' : ''}`}
          >
            {fatalErrors.toLocaleString()}
          </span>
        </div>
        
        <div className="hidden sm:block w-px h-6 bg-white/20" />
        
        <div className="flex items-center gap-2">
          <HeartCrack className="w-5 h-5 text-danger-light" />
          <span className="text-white/80 text-sm">Perdieron a su ex por 1 mensaje:</span>
          <span 
            className={`text-danger-light font-bold text-lg tabular-nums ${isLostPulsing ? 'counter-increment' : ''}`}
          >
            {lostExes.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ErrorCounter;
