import { useState, useEffect } from 'react';
import { CheckCircle, MessageSquare, Gift, Shield, AlertTriangle, Clock, X, Phone, Users, Instagram, Facebook, Zap, Target, ArrowRight } from 'lucide-react';
import ErrorCounter from '@/components/upsell/ErrorCounter';
import WhatsAppSimulator from '@/components/upsell/WhatsAppSimulator';
import MessageQuiz from '@/components/upsell/MessageQuiz';
import ProgressBar72h from '@/components/upsell/ProgressBar72h';
import SocialProofNotification from '@/components/upsell/SocialProofNotification';
import PulsingCTA from '@/components/upsell/PulsingCTA';
import HotmartWidget from '@/components/upsell/HotmartWidget';
import TestimonialCard from '@/components/upsell/TestimonialCard';
import FAQSection from '@/components/upsell/FAQSection';
import ComparisonTable from '@/components/upsell/ComparisonTable';

const Index = () => {
  // Global timer state
  const [timerMinutes, setTimerMinutes] = useState(17);
  const [timerSeconds, setTimerSeconds] = useState(48);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimerSeconds(prev => {
        if (prev === 0) {
          setTimerMinutes(m => (m === 0 ? 17 : m - 1));
          return 59;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Error Counter - Sticky Top */}
      <ErrorCounter />

      {/* Social Proof Notifications */}
      <SocialProofNotification />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">
        
        {/* Header Section */}
        <section className="text-center space-y-4 fade-in-up">
          <div className="inline-flex items-center gap-2 bg-success/20 border border-success/30 rounded-full px-4 py-2">
            <CheckCircle className="w-5 h-5 text-success" />
            <span className="text-success font-bold">¡FELICIDADES! TU PLAN ESTÁ CONFIRMADO</span>
          </div>
          <p className="text-muted-foreground">
            Acceso enviado a tu email en menos de 2 minutos.
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mt-6">
            Ahora viene la parte que <span className="text-gradient-gold">NADIE te cuenta...</span>
          </h1>
        </section>

        {/* Fatal Error Section */}
        <section className="bg-danger/10 border border-danger/30 rounded-xl p-6 space-y-4">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-8 h-8 text-danger" />
            <h2 className="text-xl sm:text-2xl font-bold text-danger">
              EL ERROR FATAL QUE DESTRUYE EL 73% DE LAS RECONQUISTAS
            </h2>
          </div>
          <p className="text-white/80">
            Ya tienes el <strong>PLAN</strong>. Ya sabes <strong>QUÉ</strong> hacer y <strong>CUÁNDO</strong> hacerlo.
          </p>
          <p className="text-white/80">
            Pero hay un problema que arruina todo en las primeras 72 horas:
          </p>
          <div className="bg-danger/20 rounded-lg p-4 text-center">
            <p className="text-danger font-bold text-xl">
              ❌ NO SABER QUÉ DECIR EN EL MOMENTO EXACTO
            </p>
          </div>
        </section>

        {/* What Happens Without Scripts */}
        <section className="space-y-4">
          <h3 className="text-xl font-bold text-white">Lo que pasa sin las palabras correctas:</h3>
          <div className="space-y-3">
            <div className="bg-card border border-border rounded-lg p-4 flex items-start gap-3">
              <span className="text-danger font-bold">Día 7:</span>
              <p className="text-white/80">Ella responde fríamente → No sabes qué contestar → <span className="text-danger">Dices algo que la aleja más</span></p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 flex items-start gap-3">
              <span className="text-warning font-bold">Día 14:</span>
              <p className="text-white/80">Ella muestra interés → Respondes demasiado rápido (error fatal) → <span className="text-danger">Pierdes todo el progreso</span></p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 flex items-start gap-3">
              <span className="text-danger font-bold">Día 21:</span>
              <p className="text-white/80">Momento perfecto para reaproximación → No sabes cómo iniciar → <span className="text-danger">Ella te olvida definitivamente</span></p>
            </div>
          </div>
        </section>

        {/* WhatsApp Simulator */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-center text-white">
            👀 VE LA DIFERENCIA EN ACCIÓN
          </h2>
          <WhatsAppSimulator />
        </section>

        {/* Solution Section */}
        <section className="text-center space-y-4 bg-gradient-to-b from-primary/10 to-transparent rounded-xl p-8 border border-primary/20">
          <MessageSquare className="w-12 h-12 text-primary mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            💬 LA SOLUCIÓN: <span className="text-gradient-gold">SCRIPTS PROBADOS</span>
          </h2>
          <p className="text-xl text-white/80">
            Los mensajes <strong>EXACTOS</strong> que hacen que ella escriba primero (y vuelva a enamorarse)
          </p>
          <p className="text-muted-foreground">
            Probados por <strong className="text-primary">+4.127 hombres</strong>
          </p>
        </section>

        {/* What You Receive */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white text-center">
            ✅ LO QUE RECIBES HOY
          </h2>

          <div className="grid gap-4">
            {/* Pack 1 */}
            <div className="bg-card border border-border rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-success/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-success" />
                </div>
                <div>
                  <h3 className="text-white font-bold">📱 PACK 1: Primeros 7 Días</h3>
                  <p className="text-success text-sm">Contacto Cero Estratégico</p>
                </div>
              </div>
              <ul className="space-y-2 text-white/80 text-sm">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  Qué responder si ella te escribe (3 opciones según tono)
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  Script de llamada de emergencia (2 min que cambian todo)
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  Protocolo si te encuentra en persona
                </li>
              </ul>
            </div>

            {/* Pack 2 */}
            <div className="bg-card border border-border rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-warning/20 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-warning" />
                </div>
                <div>
                  <h3 className="text-white font-bold">📱 PACK 2: Días 8-21</h3>
                  <p className="text-warning text-sm">Reactivación de Atracción</p>
                </div>
              </div>
              <ul className="space-y-2 text-white/80 text-sm">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  Mensaje "Gancho Emocional" (89% de tasa de respuesta)
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  7 conversaciones modelo para generar curiosidad
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  Scripts para redes sociales (Instagram, Facebook)
                </li>
              </ul>
            </div>

            {/* Pack 3 */}
            <div className="bg-card border border-border rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-white font-bold">📱 PACK 3: Días 22-45</h3>
                  <p className="text-primary text-sm">Reconquista Definitiva</p>
                </div>
              </div>
              <ul className="space-y-2 text-white/80 text-sm">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  Mensaje de reaproximación (3 versiones según caso)
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  Cómo proponer verse sin parecer desesperado
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  Guion completo del primer encuentro
                </li>
              </ul>
            </div>

            {/* Pack 4 */}
            <div className="bg-card border border-danger/30 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-danger/20 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-danger" />
                </div>
                <div>
                  <h3 className="text-white font-bold">📱 PACK 4: Situaciones de Emergencia</h3>
                  <p className="text-danger text-sm">Cuando todo parece perdido</p>
                </div>
              </div>
              <ul className="space-y-2 text-white/80 text-sm">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-danger flex-shrink-0 mt-0.5" />
                  Ella está con otro: 5 mensajes que funcionan
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-danger flex-shrink-0 mt-0.5" />
                  Ella dice "no quiero volver": respuesta que cambia todo
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-danger flex-shrink-0 mt-0.5" />
                  Ella te bloqueó: protocolo de recuperación
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Bonuses */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white text-center">
            🎁 BÔNUS EXCLUSIVOS <span className="text-primary">(Solo Hoy)</span>
          </h2>

          <div className="grid gap-3">
            <div className="bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/30 rounded-lg p-4 flex items-center gap-3">
              <Gift className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <p className="text-white font-bold">Analizador de Mensajes</p>
                <p className="text-white/70 text-sm">Copias el mensaje → Te dice si es correcto o error fatal</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/30 rounded-lg p-4 flex items-center gap-3">
              <Gift className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <p className="text-white font-bold">50 Primeras Líneas Irresistibles</p>
                <p className="text-white/70 text-sm">Mensajes con 91% de respuesta</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/30 rounded-lg p-4 flex items-center gap-3">
              <Gift className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <p className="text-white font-bold">Guía de Emojis Estratégicos</p>
                <p className="text-white/70 text-sm">Cuáles usar, cuáles NUNCA usar, y cuándo</p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <ComparisonTable />

        {/* Message Quiz */}
        <MessageQuiz />

        {/* Testimonials */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white text-center">
            💬 CASOS REALES <span className="text-muted-foreground text-lg">(Conversaciones Verificadas)</span>
          </h2>

          <div className="grid gap-6">
            <TestimonialCard
              name="Carlos M."
              age={31}
              country="México"
              timeline={[
                'Día 1: Aplicó Script "Contacto Cero Estratégico"',
                'Día 9: Usó mensaje "Gancho Emocional"',
                'Día 12: Ella escribió primero: "Hola, ¿cómo estás?"',
                'Día 18: Primer encuentro (guion del Pack 3)',
                'Día 24: Volvieron oficialmente',
              ]}
              quote="Los scripts me salvaron. Cada vez que dudaba, tenía la respuesta exacta. Ella nunca notó que seguía un plan. Pensó que era natural."
            />

            <TestimonialCard
              name="Miguel A."
              age={28}
              country="Colombia"
              situation="Ella estaba con otro tipo"
              timeline={[
                'Día 1: Aplicó Pack 4 (Emergencia)',
                'Día 15: Usó "Los 5 mensajes que funcionan"',
                'Día 21: Ella terminó con el otro',
                'Día 29: Volvieron más fuertes',
              ]}
              quote="Pensé que era imposible. Pero los scripts del Pack 4 cambiaron todo. Son mensajes que generan duda en ella sobre el nuevo tipo. Funcionó exactamente como decía."
            />
          </div>
        </section>

        {/* Pricing Section */}
        <section className="bg-card border border-primary/30 rounded-2xl p-6 sm:p-8 space-y-6">
          <h2 className="text-2xl font-bold text-white text-center">
            💰 INVERSIÓN <span className="text-danger">(Solo Por Los Próximos {timerMinutes}:{String(timerSeconds).padStart(2, '0')})</span>
          </h2>

          <div className="space-y-3 text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="text-muted-foreground line-through">Valor de cada script personalizado:</span>
              <span className="text-white">$47</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <span className="text-muted-foreground line-through">4 packs completos:</span>
              <span className="text-white">$188</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <span className="text-muted-foreground line-through">3 bônus exclusivos:</span>
              <span className="text-white">$67</span>
            </div>
            <div className="flex items-center justify-center gap-3 pt-2 border-t border-border">
              <span className="text-muted-foreground line-through">VALOR TOTAL:</span>
              <span className="text-white font-bold">$255</span>
            </div>
          </div>

          <div className="text-center space-y-2">
            <p className="text-success">Como acabas de adquirir el Plan Personalizado:</p>
            <div className="flex items-center justify-center gap-2">
              <span className="text-muted-foreground text-lg">SOLO</span>
              <span className="text-5xl font-bold text-gradient-gold">$17</span>
            </div>
            <p className="text-white/60 text-sm">
              Pago único • Acceso inmediato • Disponible en cualquier dispositivo
            </p>
          </div>

          <HotmartWidget />
        </section>

        {/* Progress Bar */}
        <ProgressBar72h timerMinutes={timerMinutes} timerSeconds={timerSeconds} />

        {/* Urgency Section */}
        <section className="bg-danger/10 border border-danger/30 rounded-xl p-6 space-y-4">
          <h2 className="text-xl font-bold text-white text-center">
            🎯 POR QUÉ NECESITAS ESTO AHORA <span className="text-danger">(NO MAÑANA)</span>
          </h2>

          <div className="bg-danger/20 rounded-lg p-4 text-center">
            <p className="text-danger font-bold">⚠️ La Ventana de 72 Horas YA EMPEZÓ.</p>
            <p className="text-white/80 text-sm mt-1">
              Cada mensaje en los próximos días puede ACERCARTE o ALEJARTE de ella.
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-white/80 flex items-center gap-2">
              <X className="w-4 h-4 text-danger" />
              <span><strong className="text-danger">UN ERROR</strong> en el Día 7 = 3 semanas perdidas</span>
            </p>
            <p className="text-white/80 flex items-center gap-2">
              <X className="w-4 h-4 text-danger" />
              <span><strong className="text-danger">UNA PALABRA</strong> equivocada = ella se aleja definitivamente</span>
            </p>
            <p className="text-white/80 flex items-center gap-2">
              <X className="w-4 h-4 text-danger" />
              <span><strong className="text-danger">UN EMOJI</strong> mal usado = pareces desesperado</span>
            </p>
          </div>

          <div className="space-y-2 pt-4 border-t border-danger/30">
            <p className="text-white/80 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              <span>Con los scripts: <strong className="text-success">CERO margen de error</strong></span>
            </p>
            <p className="text-white/80 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              <span>Cada palabra calculada para generar atracción</span>
            </p>
            <p className="text-white/80 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              <span>Cada respuesta probada por +4.127 hombres</span>
            </p>
          </div>
        </section>

        {/* Real Urgency */}
        <section className="bg-card border border-border rounded-xl p-6 space-y-4">
          <div className="flex items-center gap-2 justify-center">
            <Clock className="w-6 h-6 text-danger animate-pulse" />
            <h3 className="text-xl font-bold text-white">URGENCIA REAL</h3>
          </div>

          <p className="text-white/80 text-center">
            Este precio de <strong className="text-primary">$17</strong> es EXCLUSIVO para quien acaba de adquirir el Plan.
          </p>

          <div className="bg-danger/10 rounded-lg p-4 space-y-2">
            <p className="text-white font-medium">Si sales de esta página:</p>
            <p className="text-white/80 flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-danger" />
              Precio vuelve a <span className="text-danger font-bold">$97</span>
            </p>
            <p className="text-white/80 flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-danger" />
              Pierdes los 3 bônus exclusivos
            </p>
            <p className="text-white/80 flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-danger" />
              Pierdes el descuento del 93%
            </p>
          </div>

          <div className="text-center space-y-1">
            <div className="flex items-center justify-center gap-2 text-danger">
              <Clock className="w-5 h-5" />
              <span className="font-bold">Expira en:</span>
              <span className="text-2xl font-mono font-bold">
                {String(timerMinutes).padStart(2, '0')}:{String(timerSeconds).padStart(2, '0')}
              </span>
            </div>
            <p className="text-warning text-sm">🔥 Solo 8 vacantes disponibles hoy</p>
          </div>
        </section>

        {/* Guarantee */}
        <section className="bg-gradient-to-br from-success/10 to-success/5 border border-success/30 rounded-xl p-6 space-y-4">
          <div className="flex items-center gap-3 justify-center">
            <Shield className="w-8 h-8 text-success" />
            <h2 className="text-xl font-bold text-white">
              🛡️ GARANTÍA "ELLA RESPONDE O REEMBOLSO"
            </h2>
          </div>

          <p className="text-white/80 text-center">
            Si usas los scripts según indicado y:
          </p>

          <div className="space-y-2">
            <p className="text-white/80 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              Ella NO responde tus mensajes
            </p>
            <p className="text-white/80 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              NO notas mejora en las conversaciones
            </p>
            <p className="text-white/80 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              NO ves señales de interés en 30 días
            </p>
          </div>

          <div className="bg-success/20 rounded-lg p-4 text-center">
            <p className="text-success font-bold text-lg">
              → Devolvemos 100% de tu dinero + $10 por tu tiempo
            </p>
          </div>

          <p className="text-white/60 text-sm text-center">
            Sin preguntas. Sin burocracia. En 24-48 horas.
          </p>

          <p className="text-white/80 text-center italic">
            ¿Por qué hacemos esto? Porque estos scripts tienen <strong className="text-success">89% de tasa de respuesta</strong>. Sabemos que funcionan.
          </p>
        </section>

        {/* Second CTA */}
        <PulsingCTA timerMinutes={timerMinutes} timerSeconds={timerSeconds} />

        {/* FAQ */}
        <FAQSection />

        {/* Final Decision */}
        <section className="bg-card border border-border rounded-xl p-6 space-y-6">
          <h2 className="text-2xl font-bold text-white text-center">
            🔥 DECISIÓN FINAL
          </h2>

          <p className="text-white/80 text-center">
            Tienes 2 opciones ahora:
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-danger/10 border border-danger/30 rounded-xl p-5 space-y-3">
              <p className="text-danger font-bold text-lg">❌ OPCIÓN 1: Solo el Plan</p>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>→ Sabes QUÉ hacer, pero no QUÉ DECIR</li>
                <li>→ Improvisas cada mensaje (alto riesgo)</li>
                <li>→ Cometes errores que no puedes deshacer</li>
                <li className="text-danger font-bold">→ Probabilidad de éxito: 54%</li>
              </ul>
            </div>

            <div className="bg-success/10 border border-success/30 rounded-xl p-5 space-y-3">
              <p className="text-success font-bold text-lg">✅ OPCIÓN 2: Plan + Scripts Completos</p>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>→ Sabes QUÉ hacer Y QUÉ DECIR exactamente</li>
                <li>→ Cero improvisación, cero errores</li>
                <li>→ Cada palabra calculada para generar atracción</li>
                <li className="text-success font-bold">→ Probabilidad de éxito: 89%</li>
              </ul>
            </div>
          </div>

          <div className="text-center space-y-2">
            <p className="text-white font-medium">
              La diferencia entre recuperarla o perderla para siempre puede estar en <span className="text-danger">UN MENSAJE</span>.
            </p>
            <p className="text-white/80">¿Vas a arriesgarte a improvisar?</p>
            <p className="text-primary font-bold">¿O prefieres tener las palabras exactas que funcionan?</p>
          </div>
        </section>

        {/* Final CTA */}
        <PulsingCTA timerMinutes={timerMinutes} timerSeconds={timerSeconds} />

        {/* Skip Link */}
        <div className="text-center">
          <a 
            href="/downsell"
            className="text-muted-foreground text-sm hover:text-danger transition-colors inline-block"
          >
            ❌ No, prefiero arriesgarme e improvisar los mensajes
          </a>
          <p className="text-muted-foreground/60 text-xs mt-1">
            (Continuar sin los scripts - precio vuelve a $97)
          </p>
        </div>

        {/* Footer */}
        <footer className="text-center space-y-2 pt-8 border-t border-border">
          <div className="flex items-center justify-center gap-4 text-muted-foreground text-sm">
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

export default Index;
