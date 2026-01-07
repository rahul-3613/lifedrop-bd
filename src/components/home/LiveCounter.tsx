import { useEffect, useState } from "react";
import { AlertTriangle, Users, HeartHandshake } from "lucide-react";

interface CounterProps {
  end: number;
  duration?: number;
}

function AnimatedCounter({ end, duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span className="tabular-nums">{count.toLocaleString('bn-BD')}</span>;
}

export function LiveCounter() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('live-counter');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const counters = [
    {
      icon: AlertTriangle,
      value: 127,
      label: "আজ রক্ত প্রয়োজন",
      color: "text-emergency",
      bgColor: "bg-emergency/10",
    },
    {
      icon: Users,
      value: 342,
      label: "আজ সক্রিয় রক্তদাতা",
      color: "text-success",
      bgColor: "bg-success/10",
    },
    {
      icon: HeartHandshake,
      value: 89,
      label: "আজ জীবন বাঁচানো হয়েছে",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ];

  return (
    <section id="live-counter" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-card" />
      
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            🔥 আজ কতজন জীবন ঝুঁকিতে
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            লাইভ লাইফ কাউন্টার
          </h2>
        </div>

        {/* Counters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {counters.map((counter, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 group ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl ${counter.bgColor} flex items-center justify-center mb-6`}>
                <counter.icon className={`w-8 h-8 ${counter.color}`} />
              </div>

              {/* Value */}
              <p className={`text-5xl md:text-6xl font-bold ${counter.color} mb-3`}>
                {isVisible && <AnimatedCounter end={counter.value} />}
              </p>

              {/* Label */}
              <p className="text-lg text-muted-foreground">{counter.label}</p>

              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Update Notice */}
        <p className="text-center text-muted-foreground text-sm mt-12">
          <span className="inline-block w-2 h-2 rounded-full bg-success animate-pulse mr-2" />
          প্রতি মিনিটে আপডেট হচ্ছে
        </p>
      </div>
    </section>
  );
}
