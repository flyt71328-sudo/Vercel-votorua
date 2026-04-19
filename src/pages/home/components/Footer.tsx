import { Instagram, Facebook, MessageCircle, Utensils } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-100 pt-12 sm:pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-10 border-b border-stone-200">
          <h2 className="text-2xl sm:text-3xl font-black text-stone-900 text-center sm:text-left">
            Sua marmita quentinha está a <span className="text-red-600">um clique.</span>
          </h2>
          <a
            href="https://pedir.delivery/app/restaurantevitoria/menu"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 transition-colors text-white px-6 py-3 rounded-full font-bold text-center whitespace-nowrap"
          >
            Pedir Agora
          </a>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 py-10">
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-stone-900">Cardápio</h4>
            <a href="#marmitas" className="text-stone-600 text-sm hover:text-red-600 transition-colors">Marmitas</a>
            <a href="#fitness" className="text-stone-600 text-sm hover:text-red-600 transition-colors">Fitness</a>
            <a href="#carnes" className="text-stone-600 text-sm hover:text-red-600 transition-colors">Carnes no Kilo</a>
          </div>
          
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-stone-900">Mais</h4>
            <a href="#bebidas" className="text-stone-600 text-sm hover:text-red-600 transition-colors">Bebidas</a>
            <a href="#sobremesas" className="text-stone-600 text-sm hover:text-red-600 transition-colors">Sobremesas</a>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-stone-900">Contato</h4>
            <p className="text-stone-600 text-sm">Av Brasil, 1020 - Centro</p>
            <p className="text-stone-600 text-sm">(65) 99999-9999</p>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-stone-900">Redes</h4>
            <div className="flex items-center gap-2">
              <a href="#" className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-colors border border-stone-200">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-colors border border-stone-200">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-colors border border-stone-200">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-stone-200">
          <div className="flex items-center gap-2 text-stone-900">
            <Utensils className="w-4 h-4 text-red-600" />
            <span className="font-black uppercase text-sm">Vitória</span>
          </div>
          
          <p className="text-stone-500 text-xs text-center">
            {new Date().getFullYear()} Restaurante e Marmitaria Vitória. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
