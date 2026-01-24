import { useState, useEffect } from 'react';
import { Rocket, Clock, Flame, ShieldCheck } from 'lucide-react';

interface PulsingCTAProps {
  timerMinutes: number;
  timerSeconds: number;
}

const PulsingCTA = ({ timerMinutes, timerSeconds }: PulsingCTAProps) => {
  const [vacancies, setVacancies] = useState(8);

  useEffect(() => {
    // Decrease vacancies every 2-3 minutes (simulated faster for demo)
    const interval = setInterval(() => {
      setVacancies(prev => Math.max(3, prev - 1));
    }, 120000); // 2 minutes

    return () => clearInterval(interval);
  }, []);

  const checkoutUrl = "https://pay.hotmart.com/D100233207O?off=r4cz8pgu";

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="relative">
        {/* Glow effect behind button */}
        <div className="absolute inset-0 bg-gradient-gold opacity-30 blur-xl rounded-2xl" />

        {/* Main CTA button */}
        <a 
          href={checkoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block w-full bg-gradient-gold text-primary-foreground font-bold py-5 px-8 rounded-xl pulse-cta shadow-gold transition-transform hover:scale-[1.02] active:scale-[0.98] text-center no-underline"
        >
          <div className="flex items-center justify-center gap-3">
            <Rocket className="w-6 h-6" />
            <span className="text-lg sm:text-xl">SÍ, QUIERO LOS SCRIPTS POR $17</span>
          </div>

          {/* Timer and vacancies */}
          <div className="flex items-center justify-center gap-4 mt-3 text-sm opacity-90">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>Expira en: {String(timerMinutes).padStart(2, '0')}:{String(timerSeconds).padStart(2, '0')}</span>
            </div>
            <div className="flex items-center gap-1">
              <Flame className="w-4 h-4" />
              <span>Vacantes: {vacancies}/50</span>
            </div>
          </div>
        </a>
      </div>

      {/* Sub-info */}
      <div className="flex items-center justify-center gap-2 mt-4 text-muted-foreground text-sm">
        <ShieldCheck className="w-4 h-4" />
        <span>Acceso inmediato + 3 bônus + Garantía total</span>
      </div>

      {/* Discount badge */}
      <div className="flex justify-center mt-4">
        <div className="bg-danger/20 border border-danger/30 rounded-full px-4 py-1">
          <span className="text-danger font-bold text-sm">🔥 93% DE DESCUENTO</span>
        </div>
      </div>
    </div>
  );
};

export default PulsingCTA;
