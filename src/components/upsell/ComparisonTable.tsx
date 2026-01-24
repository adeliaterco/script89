import { X, Check } from 'lucide-react';

const ComparisonTable = () => {
  const comparisons = [
    { without: 'Improvisas cada mensaje (alto riesgo)', with: 'Sabes EXACTAMENTE qué decir' },
    { without: 'Dudas 2 horas antes de responder', with: 'Respondes con confianza' },
    { without: 'Dices lo primero que sientes (fatal)', with: 'Cada palabra calculada' },
    { without: 'Cometes errores irreversibles', with: 'Cero errores, cero arrepentimientos' },
    { without: 'Ella te ve desesperado', with: 'Ella te ve como hombre de alto valor' },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-white text-center mb-6">
        🔴 SIN LOS SCRIPTS vs 🟢 CON LOS SCRIPTS
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Without Scripts */}
        <div className="bg-danger/10 border border-danger/30 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <X className="w-6 h-6 text-danger" />
            <span className="text-danger font-bold text-lg">Sin Scripts</span>
          </div>
          <div className="space-y-3">
            {comparisons.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <X className="w-4 h-4 text-danger flex-shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm">{item.without}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-danger/30">
            <p className="text-center text-danger font-bold">
              Probabilidad de éxito: 54%
            </p>
          </div>
        </div>

        {/* With Scripts */}
        <div className="bg-success/10 border border-success/30 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <Check className="w-6 h-6 text-success" />
            <span className="text-success font-bold text-lg">Con Scripts</span>
          </div>
          <div className="space-y-3">
            {comparisons.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <Check className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm">{item.with}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-success/30">
            <p className="text-center text-success font-bold">
              Probabilidad de éxito: 89%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;
