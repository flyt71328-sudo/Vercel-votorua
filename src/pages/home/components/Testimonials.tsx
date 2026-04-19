import { useState, useEffect } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Moro sozinho e a Marmitaria Vitória salvou a minha vida. O tempero é maravilhoso, lembra comida de mãe!",
    name: "Carlos Eduardo",
    role: "Cliente fiel há 1 ano",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=256&auto=format&fit=crop"
  },
  {
    text: "O churrasco no kilo no fim de semana é de lei aqui em casa. Melhor custo-benefício de Campo Novo.",
    name: "Mariana Silva",
    role: "Pede todo final de semana",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&auto=format&fit=crop"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[activeIndex];

  return (
    <section className="relative py-16 sm:py-24 bg-stone-900 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2000&auto=format&fit=crop" 
          alt="Restaurante" 
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <Quote className="w-12 h-12 sm:w-16 sm:h-16 text-red-600 opacity-50 mx-auto mb-6" />
        
        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-relaxed mb-8">
          "{current.text}"
        </p>
        
        <div className="flex items-center justify-center gap-4">
          <img 
            src={current.avatar} 
            alt={current.name}
            className="w-12 h-12 rounded-full object-cover border-2 border-red-600"
          />
          <div className="text-left">
            <h4 className="text-white font-bold">{current.name}</h4>
            <p className="text-red-400 text-sm">{current.role}</p>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === i ? "bg-red-600 w-8" : "bg-white/30 w-2"
              }`}
              aria-label={`Ir para depoimento ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
