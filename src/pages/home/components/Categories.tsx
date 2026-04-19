import { Soup, HeartPulse, Beef, CupSoda, Cake, Pizza } from "lucide-react";

const categories = [
  { id: "marmitas", name: "Marmitas", desc: "Clássica brasileira", icon: Soup, color: "text-red-500" },
  { id: "fitness", name: "Fitness", desc: "Coma sem culpa", icon: HeartPulse, color: "text-green-500" },
  { id: "carnes", name: "Carnes no Kilo", desc: "Churrasco no ponto", icon: Beef, color: "text-amber-600" },
  { id: "bebidas", name: "Bebidas", desc: "Geladas e sucos", icon: CupSoda, color: "text-orange-500" },
  { id: "sobremesas", name: "Sobremesas", desc: "O doce perfeito", icon: Cake, color: "text-pink-500" },
  { id: "pastel", name: "Pastel", desc: "Sequinho e recheado", icon: Pizza, color: "text-yellow-500" },
];

export default function Categories() {
  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-red-600 font-bold uppercase tracking-widest text-xs sm:text-sm mb-3 block">Nosso Cardápio</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 leading-tight">
            Comida caseira com <span className="text-red-600">sabor de verdade</span>
          </h2>
          
          <div className="mt-6 inline-flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-xs sm:text-sm font-medium text-stone-600 bg-stone-100 rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-stone-200">
            <span>Av Brasil, 1020</span>
            <span className="text-stone-300">|</span>
            <span>30-45 min</span>
            <span className="text-stone-300">|</span>
            <span className="text-green-600 font-bold">Frete Grátis +R$50</span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <a
                href={`#${cat.id}`}
                key={cat.id}
                className="group flex flex-col items-center p-4 sm:p-6 rounded-xl bg-stone-50 border border-stone-100 hover:bg-white hover:border-red-100 transition-colors cursor-pointer"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white border border-stone-100 flex items-center justify-center mb-3">
                  <Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${cat.color}`} />
                </div>
                <h3 className="font-bold text-stone-900 group-hover:text-red-600 transition-colors text-center text-sm sm:text-base">{cat.name}</h3>
                <p className="text-xs text-stone-500 text-center mt-1 hidden sm:block">{cat.desc}</p>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  );
}
