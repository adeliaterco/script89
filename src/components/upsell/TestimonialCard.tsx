import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  age: number;
  country: string;
  timeline: string[];
  quote: string;
  situation?: string;
}

const TestimonialCard = ({ name, age, country, timeline, quote, situation }: TestimonialCardProps) => {
  return (
    <div className="bg-card border border-border rounded-xl p-6 fade-in-up">
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-gold-dark flex items-center justify-center text-primary-foreground font-bold text-lg">
          {name.charAt(0)}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold">{name}, {age} años</span>
            <span className="text-muted-foreground">- {country}</span>
          </div>
          {situation && (
            <p className="text-danger text-sm mt-1">Situación: {situation}</p>
          )}
        </div>
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-primary text-primary" />
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="mb-4 space-y-2">
        <p className="text-muted-foreground text-xs font-medium uppercase tracking-wider">Timeline:</p>
        <div className="bg-background/50 rounded-lg p-3 space-y-1">
          {timeline.map((item, idx) => (
            <p key={idx} className="text-white/80 text-sm flex items-start gap-2">
              <span className="text-primary">→</span>
              {item}
            </p>
          ))}
        </div>
      </div>

      {/* Quote */}
      <blockquote className="border-l-2 border-primary pl-4 italic text-white/90">
        "{quote}"
      </blockquote>
    </div>
  );
};

export default TestimonialCard;
