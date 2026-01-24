import { useState, useEffect } from 'react';
import { AlertTriangle, Clock, Gift, Shield, X, ArrowRight, MessageSquare, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import HotmartWidget from '@/components/upsell/HotmartWidget';

const Downsell = () => {
  const navigate = useNavigate();
  const [timerMinutes, setTimerMinutes] = useState(4);
  const [timerSeconds, setTimerSeconds] = useState(59);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimerSeconds(prev => {
        if (prev === 0) {
          if (timerMinutes === 0) {
            // Timer ended - redirect to app
            window.location.href = 'https://prpapp.vercel.app/';
            return 0;
          }
          setTimerMinutes(m => m - 1);
          return 59;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [timerMinutes]);

  const handleFinalReject = () => {
    window.location.href = 'https://prpapp.vercel.app/';
  };

  const checkoutUrl = 'https://pay.hotmart.com/D100233207O?off=jehejcui';

  return (
    <div className="min-h-screen bg-background">
      {/* Urgency Header */}
      <div className="bg-danger/20 border-b border-danger/30 py-3 px-4 text-center">
        <p className="text-danger font-bold text-sm sm:text-base flex items-center justify-center gap-2">
          <AlertTriangle className="w-4 h-4" />
          ¡ESPERA! Última Oportunidad - Oferta Expira en{' '}
          <span className="bg-danger text-white px-2 py-0.5 rounded font-mono">
            {timerMinutes}:{String(timerSeconds).padStart(2, '0')}
          </span>
        </p>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <section className="text-center space-y-4 fade-in-up">
          <div className="inline-flex items-center gap-2 bg-warning/20 border border-warning/30 rounded-full px-4 py-2">
            <Clock className="w-5 h-5 text-warning" />
            <span className="text-warning font-bold text-sm">ANTES DE IRTE...</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-white">
            Entiendo que <span className="text-gradient-gold">$17 puede parecer mucho</span> ahora mismo...
          </h1>

          <p className="text-white/80">
            Por eso tengo una <strong className="text-success">última propuesta</strong> para ti:
          </p>
        </section>

        {/* Special Offer Box */}
        <section className="bg-gradient-to-b from-success/20 to-success/5 border-2 border-success rounded-2xl p-6 space-y-4">
          <div className="text-center space-y-2">
            <p className="text-success font-bold text-lg">🎁 OFERTA DE ÚLTIMA OPORTUNIDAD</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Scripts Esenciales por solo
            </h2>
            <div className="flex items-center justify-center gap-3">
              <span className="text-muted-foreground line-through text-2xl">$17</span>
              <span className="text-5xl font-bold text-gradient-gold">$12</span>
            </div>
            <p className="text-success text-sm font-medium">
              ¡Ahorro adicional de $5 - Solo por los próximos minutos!
            </p>
          </div>
        </section>

        {/* What's Included */}
        <section className="space-y-4">
          <h3 className="text-xl font-bold text-white text-center">
            📱 Lo que recibes por $12:
          </h3>

          <div className="space-y-3">
            <div className="bg-card border border-border rounded-lg p-4 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-medium">Pack 1: Primeros 7 Días</p>
                <p className="text-white/60 text-sm">Scripts de Contacto Cero Estratégico</p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-4 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-medium">Pack 2: Reactivación (Días 8-21)</p>
                <p className="text-white/60 text-sm">Mensaje "Gancho Emocional" con 89% de respuesta</p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-4 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-medium">Bônus: 50 Primeras Líneas</p>
                <p className="text-white/60 text-sm">Mensajes probados con alta tasa de respuesta</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why This Matters */}
        <section className="bg-danger/10 border border-danger/30 rounded-xl p-5 space-y-3">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-danger" />
            <h3 className="text-lg font-bold text-danger">La Realidad:</h3>
          </div>
          <p className="text-white/80 text-sm">
            El 73% de los hombres que intentan reconquistar <strong>sin scripts</strong> cometen errores fatales en los primeros 7 días.
          </p>
          <p className="text-white/80 text-sm">
            <strong className="text-danger">Un solo mensaje mal escrito</strong> puede hacer que ella te bloquee para siempre.
          </p>
          <p className="text-success text-sm font-medium">
            Por solo $12, tienes las palabras exactas que funcionan.
          </p>
        </section>

        {/* Hotmart Widget */}
        <section id="hotmart-downsell" className="space-y-4">
          <div className="bg-card border border-primary/30 rounded-2xl p-6">
            <div className="text-center mb-4">
              <p className="text-white font-bold">💳 Compra Segura - Un Solo Clic</p>
              <p className="text-white/60 text-sm">Acceso inmediato después del pago</p>
            </div>
            <HotmartWidget containerId="hotmart-downsell-widget" />
          </div>
        </section>

        {/* Manual CTA Button */}
        <section className="space-y-3">
          <a
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-gradient-gold text-background font-bold text-lg py-4 px-6 rounded-xl text-center hover:opacity-90 transition-opacity shadow-gold pulse-cta"
          >
            <span className="flex items-center justify-center gap-2">
              <Gift className="w-5 h-5" />
              SÍ, QUIERO LOS SCRIPTS POR SOLO $12
              <ArrowRight className="w-5 h-5" />
            </span>
          </a>
          <p className="text-center text-white/60 text-xs">
            🔒 Pago seguro • Tarjeta, débito, PayPal y más opciones
          </p>
        </section>

        {/* Guarantee */}
        <section className="bg-card border border-border rounded-xl p-5 text-center space-y-2">
          <Shield className="w-8 h-8 text-success mx-auto" />
          <p className="text-white font-bold">Garantía de 30 Días</p>
          <p className="text-white/70 text-sm">
            Si no funcionan, te devuelvo el 100% de tu dinero. Sin preguntas.
          </p>
        </section>

        {/* Final Decision */}
        <section className="text-center space-y-4">
          <div className="bg-card border border-border rounded-xl p-5 space-y-3">
            <p className="text-white font-medium">
              Piénsalo: <span className="text-gradient-gold">$12</span> es menos que una pizza...
            </p>
            <p className="text-white/80 text-sm">
              Pero puede ser la diferencia entre <span className="text-danger">perderla para siempre</span> o <span className="text-success">recuperarla en semanas</span>.
            </p>
          </div>
        </section>

        {/* Reject Button */}
        <div className="text-center pt-4">
          <button
            onClick={handleFinalReject}
            className="text-muted-foreground text-sm hover:text-danger transition-colors underline"
          >
            ❌ No gracias, prefiero improvisar y arriesgarme
          </button>
          <p className="text-muted-foreground/60 text-xs mt-2">
            (Serás redirigido al aplicativo)
          </p>
        </div>

        {/* Footer */}
        <footer className="text-center space-y-2 pt-6 border-t border-border">
          <div className="flex items-center justify-center gap-4 text-muted-foreground text-xs sm:text-sm flex-wrap">
            <span className="flex items-center gap-1">
              <Shield className="w-4 h-4" />
              Compra 100% segura
            </span>
            <span>•</span>
            <span>Acceso instantáneo</span>
            <span>•</span>
            <span>30 días de garantía</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Downsell;
