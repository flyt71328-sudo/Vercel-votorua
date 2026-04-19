export default function Banner() {
  return (
    <section className="relative bg-stone-900 py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2940&auto=format&fit=crop" 
          alt="Cozinha local" 
          className="w-full h-full object-cover opacity-25"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-900/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-4">
          Marmitaria <span className="text-red-500">Vitória.</span>
        </h2>
        <p className="text-stone-300 text-base sm:text-lg md:text-xl font-medium max-w-xl mb-8 leading-relaxed">
          Mais que comida, uma tradição. De Campo Novo do Parecis para sua mesa.
        </p>
        
        <a
          href="https://pedir.delivery/app/restaurantevitoria/menu"
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="inline-block bg-red-600 hover:bg-red-700 transition-colors text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg"
        >
          Fazer Meu Pedido
        </a>
      </div>
    </section>
  );
}
