import { Check, CheckCheck } from "lucide-react";

export interface WhatsAppMessage {
  id: number;
  sender: "he" | "she";
  text: string;
  time: string;
  status?: "sent" | "delivered" | "read";
  isError?: boolean;
}

export function WhatsAppMessageBubble({
  message,
}: {
  message: WhatsAppMessage;
}) {
  const isHe = message.sender === "he";

  return (
    <div className={`flex ${isHe ? "justify-end" : "justify-start"} mb-2 fade-in-up`}>
      <div
        className={`max-w-[80%] px-3 py-2 rounded-lg relative ${
          isHe
            ? message.isError
              ? "bg-danger/30 border border-danger/50"
              : "bg-whatsapp-bubble-out"
            : "bg-whatsapp-bubble-in"
        }`}
      >
        {message.isError && (
          <span className="absolute -top-2 -left-2 text-xs bg-danger text-white px-1 rounded">
            ❌ ERROR
          </span>
        )}
        <p className="text-sm text-white">{message.text}</p>
        <div className="flex items-center justify-end gap-1 mt-1">
          <span className="text-[10px] text-white/60">{message.time}</span>
          {isHe && message.status && (
            <span className="text-whatsapp-green">
              {message.status === "read" ? (
                <CheckCheck className="w-3 h-3" />
              ) : (
                <Check className="w-3 h-3" />
              )}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
