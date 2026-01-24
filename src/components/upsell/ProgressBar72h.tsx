import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface ProgressBar72hProps {
  timerMinutes: number;
  timerSeconds: number;
}

const ProgressBar72h = ({ timerMinutes, timerSeconds }: ProgressBar72hProps) => {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSection(prev => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const sections = [
    { label: 'HORA 0-24', subtitle: 'Contacto Cero', status: 'CRÍTICO', color: 'success' },
    { label: 'HORA 24-48', subtitle: 'Reactivación', status: 'URGENTE', color: 'warning' },
    { label: 'HORA 48-72', subtitle: 'Reconquista', status: 'ÚLTIMA CHANCE', color: 'danger' },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto bg-card border border-border rounded-xl p-6">
      <h3 className="text-center text-lg font-bold text-white mb-6">
        ⏱️ VENTANA DE 72 HORAS
      </h3>

      <div className="space-y-3">
        {sections.map((section, idx) => (
          <div
            key={idx}
            className={`relative overflow-hidden rounded-lg transition-all duration-500 ${
              activeSection === idx ? 'ring-2' : ''
            } ${
              section.color === 'success'
                ? 'bg-success/20 ring-success'
                : section.color === 'warning'
                ? 'bg-warning/20 ring-warning'
                : 'bg-danger/20 ring-danger'
            }`}
          >
            <div className="relative z-10 flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <div
                  className={`w-3 h-3 rounded-full ${
                    section.color === 'success'
                      ? 'bg-success'
                      : section.color === 'warning'
                      ? 'bg-warning'
                      : 'bg-danger'
                  } ${activeSection === idx ? 'animate-pulse' : ''}`}
                />
                <div>
                  <p className="text-white font-bold text-sm">{section.label}</p>
                  <p className="text-white/60 text-xs">{section.subtitle}</p>
                </div>
              </div>
              <span
                className={`text-xs font-bold px-2 py-1 rounded ${
                  section.color === 'success'
                    ? 'bg-success/30 text-success'
                    : section.color === 'warning'
                    ? 'bg-warning/30 text-warning'
                    : 'bg-danger/30 text-danger'
                }`}
              >
                {section.status}
              </span>
            </div>

            {/* Progress bar fill */}
            <div
              className={`absolute bottom-0 left-0 h-1 transition-all duration-1000 ${
                section.color === 'success'
                  ? 'bg-success'
                  : section.color === 'warning'
                  ? 'bg-warning'
                  : 'bg-danger'
              }`}
              style={{
                width: activeSection >= idx ? '100%' : '0%',
              }}
            />
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-border">
        <div className="flex items-center justify-center gap-2 text-danger">
          <Clock className="w-5 h-5 animate-pulse" />
          <span className="font-bold">TU VENTANA EXPIRA EN:</span>
          <span className="text-2xl font-mono font-bold">
            {String(timerMinutes).padStart(2, '0')}:{String(timerSeconds).padStart(2, '0')}
          </span>
        </div>
        <p className="text-center text-white/50 text-sm mt-2">
          Cada minuto que pasa sin actuar = más difícil
        </p>
      </div>
    </div>
  );
};

export default ProgressBar72h;
