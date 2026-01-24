import { useEffect } from 'react';

declare global {
  interface Window {
    checkoutElements?: {
      init: (type: string) => {
        mount: (selector: string) => void;
      };
    };
  }
}

interface HotmartWidgetProps {
  containerId?: string;
}

const HotmartWidget = ({ containerId = 'hotmart-sales-funnel' }: HotmartWidgetProps) => {
  useEffect(() => {
    // Load Hotmart script dynamically
    const existingScript = document.querySelector('script[src="https://checkout.hotmart.com/lib/hotmart-checkout-elements.js"]');
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://checkout.hotmart.com/lib/hotmart-checkout-elements.js';
      script.async = true;
      script.onload = () => {
        if (window.checkoutElements) {
          window.checkoutElements.init('salesFunnel').mount(`#${containerId}`);
        }
      };
      document.body.appendChild(script);
    } else {
      // Script already exists, just mount
      setTimeout(() => {
        if (window.checkoutElements) {
          window.checkoutElements.init('salesFunnel').mount(`#${containerId}`);
        }
      }, 100);
    }
  }, [containerId]);

  return (
    <div className="w-full max-w-xl mx-auto">
      <div id={containerId} className="min-h-[100px]" />
    </div>
  );
};

export default HotmartWidget;
