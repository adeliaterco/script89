import { useState, useEffect, useCallback, useRef } from 'react';
import { RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  WhatsAppMessageBubble,
  type WhatsAppMessage,
} from '@/components/upsell/WhatsAppMessageBubble';

const wrongConversation: WhatsAppMessage[] = [
  { id: 1, sender: 'he', text: 'Hola', time: '14:23', status: 'read' },
  { id: 2, sender: 'she', text: 'Hola...', time: '14:25' },
  { id: 3, sender: 'he', text: '¿Cómo has estado?', time: '14:26', status: 'read' },
  { id: 4, sender: 'he', text: 'Te extraño mucho, no puedo dejar de pensar en ti. Por favor, dame otra oportunidad 🥺', time: '14:29', status: 'read', isError: true },
  { id: 5, sender: 'she', text: 'Ocupada. Hablamos otro día.', time: '14:45' },
];

const correctConversation: WhatsAppMessage[] = [
  { id: 1, sender: 'he', text: 'Jaja acabo de ver a un perro igualito al que vimos en el parque aquella vez 😂', time: '14:23', status: 'read' },
  { id: 2, sender: 'she', text: 'Jajaja me acordé de eso también', time: '14:25' },
  { id: 3, sender: 'she', text: '¿Dónde lo viste?', time: '14:26' },
  { id: 4, sender: 'he', text: 'En la cafetería nueva cerca del centro. Deberías verlo, es idéntico 🐕', time: '14:28', status: 'read' },
  { id: 5, sender: 'she', text: '¿Cuál cafetería? No conozco ninguna nueva por ahí', time: '14:30' },
  { id: 6, sender: 'she', text: '¿Vas seguido?', time: '14:31' },
];

const WhatsAppSimulator = () => {
  const [messages, setMessages] = useState<WhatsAppMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [typingSender, setTypingSender] = useState<'he' | 'she'>('he');
  const [showReset, setShowReset] = useState(false);
  const [isWrongVersion, setIsWrongVersion] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const chatBodyRef = useRef<HTMLDivElement | null>(null);
  const scheduleTimeoutRef = useRef<number | null>(null);
  const typingTimeoutRef = useRef<number | null>(null);

  const currentConversation = isWrongVersion ? wrongConversation : correctConversation;

  const addNextMessage = useCallback(() => {
    if (currentIndex >= currentConversation.length) {
      setIsTyping(false);
      setShowReset(true);
      setIsPlaying(false);
      return;
    }

    const nextMessage = currentConversation[currentIndex];
    setTypingSender(nextMessage.sender);
    setIsTyping(true);

    const typingDuration = nextMessage.sender === 'she' ? 2000 : 1500;

    if (typingTimeoutRef.current) {
      window.clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = window.setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => {
        // Prevent duplicates by checking if message already exists
        if (prev.some(m => m.id === nextMessage.id)) {
          return prev;
        }
        return [...prev, nextMessage];
      });
      setCurrentIndex(prev => prev + 1);

      // When the last message is displayed, show the reset/action UI.
      if (currentIndex === currentConversation.length - 1) {
        setShowReset(true);
        setIsPlaying(false);
      }
    }, typingDuration);
  }, [currentIndex, currentConversation]);

  useEffect(() => {
    if (!isPlaying || currentIndex >= currentConversation.length) return;

    const delay = currentIndex === 0 ? 1000 : 2500;
    if (scheduleTimeoutRef.current) {
      window.clearTimeout(scheduleTimeoutRef.current);
    }
    scheduleTimeoutRef.current = window.setTimeout(addNextMessage, delay);

    return () => {
      if (scheduleTimeoutRef.current) {
        window.clearTimeout(scheduleTimeoutRef.current);
        scheduleTimeoutRef.current = null;
      }
    };
  }, [currentIndex, isPlaying, addNextMessage, currentConversation.length]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (scheduleTimeoutRef.current) window.clearTimeout(scheduleTimeoutRef.current);
      if (typingTimeoutRef.current) window.clearTimeout(typingTimeoutRef.current);
    };
  }, []);

  // Keep the view pinned to the latest bubble on mobile, so the CTA/reset state is always visible.
  useEffect(() => {
    const el = chatBodyRef.current;
    if (!el) return;
    // Only auto-stick when the user is already near the bottom; prevents visible “jumping/pulsing”.
    const bottomThresholdPx = 80;
    const distanceFromBottom = el.scrollHeight - el.scrollTop - el.clientHeight;
    const shouldStickToBottom = distanceFromBottom < bottomThresholdPx;
    if (shouldStickToBottom) {
      el.scrollTo({ top: el.scrollHeight, behavior: 'auto' });
    }
  }, [messages.length, isTyping, showReset, isWrongVersion]);

  const handleReset = () => {
    if (scheduleTimeoutRef.current) {
      window.clearTimeout(scheduleTimeoutRef.current);
      scheduleTimeoutRef.current = null;
    }
    if (typingTimeoutRef.current) {
      window.clearTimeout(typingTimeoutRef.current);
      typingTimeoutRef.current = null;
    }

    if (isWrongVersion) {
      setIsWrongVersion(false);
    } else {
      setIsWrongVersion(true);
    }
    setMessages([]);
    setCurrentIndex(0);
    setShowReset(false);
    setIsPlaying(true);
    setIsTyping(false);
  };

  return (
    <div className="w-full max-w-sm mx-auto">
      {/* Header */}
      <div className="bg-whatsapp-dark rounded-t-xl p-3 flex items-center gap-3 border-b border-white/10">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-white font-bold">
          E
        </div>
        <div className="flex-1">
          <p className="text-white font-medium text-sm">Ella 💕</p>
          {isTyping && typingSender === 'she' && (
            <p className="text-whatsapp-green text-xs">escribiendo<span className="typing-dots"></span></p>
          )}
        </div>
        <div className={`px-2 py-1 rounded text-xs font-bold ${isWrongVersion ? 'bg-danger text-white' : 'bg-success text-white'}`}>
          {isWrongVersion ? '❌ INCORRECTO' : '✅ CORRECTO'}
        </div>
      </div>

      {/* Chat Body */}
      <div
        ref={chatBodyRef}
        className="bg-[#0b141a] min-h-[300px] max-h-[350px] overflow-y-auto p-3"
        style={{ overflowAnchor: 'none' }}
      >
        {messages.map((message) => (
          <WhatsAppMessageBubble key={message.id} message={message} />
        ))}

        {isTyping && (
          <div className={`flex ${typingSender === 'he' ? 'justify-end' : 'justify-start'} mb-2`}>
            <div className={`px-4 py-3 rounded-lg ${typingSender === 'he' ? 'bg-whatsapp-bubble-out' : 'bg-whatsapp-bubble-in'}`}>
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                <span className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                <span className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Result / CTA (outside the scroll area so it always shows on mobile) */}
      {showReset && (
        <div className="bg-[#0b141a] px-3 pb-3">
          {isWrongVersion ? (
            <div className="text-center pt-1 fade-in-up">
              <div className="bg-danger/20 border border-danger/50 rounded-lg p-3 mb-3">
                <p className="text-danger font-bold text-sm">💔 CONVERSACIÓN MUERTA</p>
                <p className="text-white/70 text-xs mt-1">El mensaje desesperado destruyó todo el progreso</p>
              </div>
              <Button onClick={handleReset} className="bg-success hover:bg-success/90 text-white font-bold">
                <RotateCcw className="w-4 h-4 mr-2" />
                Ver cómo hacerlo CORRECTO
              </Button>
            </div>
          ) : (
            <div className="text-center pt-1 fade-in-up">
              <div className="bg-success/20 border border-success/50 rounded-lg p-3 mb-3">
                <p className="text-success font-bold text-sm">✅ CONVERSACIÓN EXITOSA</p>
                <p className="text-white/70 text-xs mt-1">Ella muestra interés genuino y quiere saber más</p>
              </div>
              <Button
                onClick={handleReset}
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Ver de nuevo
              </Button>
            </div>
          )}
        </div>
      )}

      {/* Footer */}
      <div className="bg-whatsapp-dark rounded-b-xl p-3 flex items-center gap-2 border-t border-white/10">
        <div className="flex-1 bg-white/10 rounded-full px-4 py-2">
          <span className="text-white/40 text-sm">Escribe un mensaje...</span>
        </div>
        <div className="w-10 h-10 rounded-full bg-whatsapp-green flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 14.95q-.2 0-.375-.062-.175-.063-.325-.213L7.05 10.4q-.3-.3-.3-.7 0-.4.3-.7.3-.3.713-.3.412 0 .712.3L12 12.525l3.525-3.525q.3-.3.7-.3t.7.3q.3.3.3.712 0 .413-.3.713l-4.25 4.25q-.15.15-.325.213-.175.062-.35.062Z"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppSimulator;
