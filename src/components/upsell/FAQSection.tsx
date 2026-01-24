import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string | string[];
}

const faqs: FAQItem[] = [
  {
    question: '¿Los scripts son genéricos o personalizados?',
    answer: 'Son ADAPTABLES. Cada mensaje tiene 2-3 versiones según tu situación (ella con otro, bloqueado, etc.). Eliges la que se ajusta a tu caso.',
  },
  {
    question: '¿No va a sonar robotizado?',
    answer: 'NO. Están en lenguaje natural. Ella pensará que son TUS palabras. Miles los usaron sin que ellas notaran nada.',
  },
  {
    question: 'Ya tengo el Plan. ¿No es suficiente?',
    answer: [
      'El Plan te dice QUÉ hacer y CUÁNDO.',
      'Los Scripts te dicen EXACTAMENTE QUÉ DECIR palabra por palabra.',
      '',
      'Ejemplo:',
      'Plan: "Día 9 - Envía mensaje de reaproximación casual"',
      'Scripts: "Hola [nombre], vi esto y me acordé de ti... [mensaje completo]"',
    ],
  },
  {
    question: '¿Funciona en WhatsApp, Instagram y SMS?',
    answer: 'SÍ. Los scripts funcionan en cualquier plataforma. Incluye adaptaciones para Instagram DM y Facebook.',
  },
  {
    question: '¿Qué pasa si ella no responde como esperado?',
    answer: [
      'El Pack incluye "Scripts de Contingencia" para:',
      '• Si ella responde fríamente',
      '• Si te deja en visto',
      '• Si responde con enojo',
      '• Si no responde nada',
      '',
      'Tienes la respuesta correcta para CADA escenario.',
    ],
  },
  {
    question: '¿Cuándo recibo los scripts?',
    answer: 'ACCESO INMEDIATO tras confirmación. Los recibes en tu email en menos de 2 minutos. Formato PDF + acceso online.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-white text-center mb-6">
        ❓ PREGUNTAS RÁPIDAS
      </h2>

      <div className="space-y-3">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="bg-card border border-border rounded-lg overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition-colors"
            >
              <span className="text-white font-medium pr-4">
                P: {faq.question}
              </span>
              {openIndex === idx ? (
                <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              )}
            </button>

            {openIndex === idx && (
              <div className="px-4 pb-4 fade-in-up">
                <div className="bg-background/50 rounded-lg p-3">
                  {Array.isArray(faq.answer) ? (
                    <div className="space-y-1">
                      {faq.answer.map((line, lineIdx) => (
                        <p key={lineIdx} className="text-white/80 text-sm">
                          {line || <br />}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <p className="text-white/80 text-sm">R: {faq.answer}</p>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
