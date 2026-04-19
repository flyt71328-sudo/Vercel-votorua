import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const slides = [
  "https://images.unsplash.com/photo-1593504049359-715560c5a5e3?q=80&w=2938&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544025162-836e520ea5cd?q=80&w=3012&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1526367790999-0150786686a2?q=80&w=2942&auto=format&fit=crop",
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen min-h-[500px] max-h-[800px] bg-stone-900">
      {/* Slideshow */}
      {slides.map((slide, index) => (
        <div
          key={slide}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide}
            alt="Restaurante Vitória"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pt-16 px-4 sm:px-6 text-center">
        <span className="bg-red-600 text-white text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full mb-4 sm:mb-6">
          Restaurante & Marmitaria
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-4 sm:mb-6">
          Sabor de <span className="text-red-500">Casa.</span>
        </h1>
        <p className="text-base sm:text-lg text-stone-200 font-medium max-w-xl mb-6 sm:mb-8 px-4">
          A verdadeira comida caseira em Campo Novo do Parecis. Montada com carinho e entregue quentinha na sua porta.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 items-center w-full max-w-md px-4">
          <a
            href="https://pedir.delivery/app/restaurantevitoria/menu"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="w-full sm:w-auto bg-red-600 hover:bg-red-700 transition-colors text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-base flex items-center justify-center gap-2"
          >
            Fazer Pedido
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#marmitas"
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-md border border-white/20 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-base text-center"
          >
            Ver Cardápio
          </a>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === currentSlide ? "w-8 bg-red-500" : "w-2 bg-white/40"
            }`}
            aria-label={`Ir para slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
