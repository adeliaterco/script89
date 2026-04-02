import { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

interface Notification {
  id: number;
  name: string;
  country: string;
  timeAgo: string;
}

// Nomes típicos por país
const namesByCountry: Record<string, string[]> = {
  'Argentina': ['Martín G.', 'Santiago R.', 'Nicolás F.', 'Facundo L.', 'Matías P.', 'Leandro M.', 'Gonzalo V.'],
  'México': ['Carlos M.', 'José Luis H.', 'Juan Pablo R.', 'Eduardo S.', 'Miguel Ángel T.', 'Roberto C.', 'Alejandro G.'],
  'Colombia': ['Andrés F.', 'Sebastián M.', 'Camilo R.', 'David A.', 'Santiago C.', 'Juan David P.', 'Felipe G.'],
  'Chile': ['Sebastián V.', 'Matías R.', 'Nicolás C.', 'Felipe M.', 'Diego S.', 'Cristián A.', 'Pablo F.'],
  'Perú': ['Luis M.', 'Carlos A.', 'José R.', 'Diego F.', 'Fernando C.', 'Alberto P.', 'Ricardo L.'],
};


const SocialProofNotification = () => {
  const [notification, setNotification] = useState<Notification | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const generateNotification = (): Notification => {
    const country = countries[Math.floor(Math.random() * countries.length)];
    const countryNames = namesByCountry[country];
    const name = countryNames[Math.floor(Math.random() * countryNames.length)];
    const minutes = Math.floor(Math.random() * 5) + 1;
    
    return {
      id: Date.now(),
      name,
      country,
      timeAgo: minutes === 1 ? 'Hace 1 minuto' : `Hace ${minutes} minutos`,
    };
  };

  useEffect(() => {
    // Primeira notificação após 12 segundos
    const initialTimer = setTimeout(() => {
      setNotification(generateNotification());
      setIsVisible(true);
    }, 12000);

    // Notificações subsequentes a cada 45-75 segundos (menos frequente)
    const interval = setInterval(() => {
      setNotification(generateNotification());
      setIsVisible(true);
    }, Math.random() * 30000 + 45000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  // Auto-hide notification after 6 seconds
  useEffect(() => {
    if (!notification || !isVisible) return;

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, [notification, isVisible]);

  if (!notification || !isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 pointer-events-none">
      <div
        key={notification.id}
        className="slide-in-right bg-card border border-success/30 rounded-lg p-4 shadow-lg shadow-success/10 max-w-xs pointer-events-auto"
      >
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-success/20 flex items-center justify-center">
            <CheckCircle className="w-5 h-5 text-success" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white font-medium text-sm">
              {notification.name} ({notification.country})
            </p>
            <p className="text-success text-xs">
              acaba de acceder a los Scripts
            </p>
            <p className="text-white/50 text-xs mt-1">
              {notification.timeAgo}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProofNotification;
