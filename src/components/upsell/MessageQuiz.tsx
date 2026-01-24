import { useState } from 'react';
import { Search, AlertCircle, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const negativePatterns = [
  { pattern: /te extraño/i, issue: 'Lenguaje desesperado' },
  { pattern: /perdona/i, issue: 'Suplicando perdón' },
  { pattern: /por favor/i, issue: 'Tono suplicante' },
  { pattern: /no puedo vivir/i, issue: 'Dependencia emocional' },
  { pattern: /sin ti/i, issue: 'Dependencia emocional' },
  { pattern: /dame otra/i, issue: 'Presionando' },
  { pattern: /oportunidad/i, issue: 'Presionando' },
  { pattern: /lo siento/i, issue: 'Disculpas excesivas' },
  { pattern: /te amo/i, issue: 'Declaración prematura' },
  { pattern: /vuelve/i, issue: 'Presionando retorno' },
  { pattern: /🥺|😢|😭|💔|😞|😔/i, issue: 'Emojis negativos' },
  { pattern: /!!!|¿¿¿|\?\?\?/i, issue: 'Puntuación excesiva' },
  { pattern: /hola.*como estas/i, issue: 'Mensaje genérico' },
  { pattern: /podemos hablar/i, issue: 'Presionando conversación' },
  { pattern: /necesito/i, issue: 'Lenguaje de necesidad' },
];

const MessageQuiz = () => {
  const [message, setMessage] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<{
    issues: string[];
    desperateWords: number;
    badEmojis: number;
    probability: number;
  } | null>(null);

  const analyzeMessage = () => {
    if (!message.trim()) return;

    setIsAnalyzing(true);

    setTimeout(() => {
      const issues: string[] = [];
      let desperateWords = 0;
      let badEmojis = 0;

      negativePatterns.forEach(({ pattern, issue }) => {
        if (pattern.test(message)) {
          if (!issues.includes(issue)) {
            issues.push(issue);
          }
          if (issue === 'Emojis negativos') {
            badEmojis++;
          } else {
            desperateWords++;
          }
        }
      });

      // Check message length
      if (message.length > 100) {
        issues.push('Mensaje muy largo');
      }

      // Check for multiple question marks
      if ((message.match(/\?/g) || []).length > 2) {
        issues.push('Demasiadas preguntas');
      }

      const probability = Math.max(5, Math.min(95, 90 - (issues.length * 15) - (desperateWords * 8) - (badEmojis * 5)));

      setResult({
        issues,
        desperateWords,
        badEmojis,
        probability: issues.length === 0 ? 75 : probability,
      });
      setIsAnalyzing(false);
    }, 1500);
  };

  const hasErrors = result && result.issues.length > 0;

  return (
    <div className="w-full max-w-xl mx-auto bg-card border border-border rounded-xl p-6">
      <div className="text-center mb-4">
        <h3 className="text-xl font-bold text-white mb-2">
          💬 TESTE TU PRÓXIMO MENSAJE
        </h3>
        <p className="text-muted-foreground text-sm">
          Escribe lo que le enviarías y descubre si es un error fatal
        </p>
      </div>

      <div className="space-y-4">
        <div className="relative">
          <textarea
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              setResult(null);
            }}
            placeholder="Escribe qué le dirías a ella..."
            className="w-full h-24 bg-input border border-border rounded-lg px-4 py-3 text-white placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary"
            maxLength={200}
          />
          <span className="absolute bottom-2 right-2 text-xs text-muted-foreground">
            {message.length}/200
          </span>
        </div>

        <Button
          onClick={analyzeMessage}
          disabled={!message.trim() || isAnalyzing}
          className="w-full bg-gradient-gold text-primary-foreground font-bold py-3 hover:opacity-90"
        >
          {isAnalyzing ? (
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
              Analizando...
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Search className="w-5 h-5" />
              ANALIZAR MENSAJE
            </div>
          )}
        </Button>

        {result && (
          <div className={`fade-in-up border rounded-lg p-4 ${hasErrors ? 'bg-danger/10 border-danger/30' : 'bg-success/10 border-success/30'}`}>
            <div className="flex items-center gap-2 mb-3">
              {hasErrors ? (
                <>
                  <AlertCircle className="w-6 h-6 text-danger" />
                  <span className="text-danger font-bold">❌ ERRORES FATALES DETECTADOS</span>
                </>
              ) : (
                <>
                  <CheckCircle className="w-6 h-6 text-success" />
                  <span className="text-success font-bold">✅ MENSAJE ACEPTABLE</span>
                </>
              )}
            </div>

            {hasErrors && (
              <div className="space-y-2 mb-4">
                {result.desperateWords > 0 && (
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-danger">→</span>
                    <span className="text-white/80">Lenguaje desesperado ({result.desperateWords} palabras)</span>
                  </div>
                )}
                {result.badEmojis > 0 && (
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-danger">→</span>
                    <span className="text-white/80">Emojis negativos ({result.badEmojis})</span>
                  </div>
                )}
                {result.issues.filter(i => i !== 'Emojis negativos' && !i.includes('desesperado')).map((issue, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <span className="text-danger">→</span>
                    <span className="text-white/80">{issue}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="flex items-center justify-between bg-black/20 rounded-lg p-3">
              <span className="text-white/80 text-sm">Probabilidad de respuesta:</span>
              <span className={`font-bold text-lg ${result.probability > 50 ? 'text-success' : 'text-danger'}`}>
                {result.probability}%
              </span>
            </div>

            {hasErrors && (
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 text-success mb-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-bold text-sm">CON LOS SCRIPTS:</span>
                </div>
                <div className="space-y-1 text-sm text-white/80">
                  <p>→ Mensaje optimizado para tu situación</p>
                  <p>→ Timing perfecto calculado</p>
                  <p>→ Probabilidad de respuesta: <span className="text-success font-bold">89%</span></p>
                </div>
              </div>
            )}
          </div>
        )}

        {result && hasErrors && (
          <Button 
            className="w-full bg-gradient-gold text-primary-foreground font-bold py-4 pulse-cta"
            onClick={() => {
              const widget = document.getElementById('hotmart-sales-funnel');
              if (widget) {
                widget.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
            }}
          >
            <span>ACCEDER A LOS SCRIPTS POR $17</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default MessageQuiz;
