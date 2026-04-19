import { ArrowRight } from "lucide-react";

const menuItems = [
  {
    id: "marmita-p",
    category: "Marmitas",
    name: "Marmita P",
    desc: "Arroz, feijão, 1 carne à escolha, macarronada, e salada separada. Ideal para o dia a dia.",
    price: "R$ 20,00",
    tag: "Mais Vendida",
    image: "https://images.unsplash.com/photo-1627308595229-7830f5c90683?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "marmita-m",
    category: "Marmitas",
    name: "Marmita M",
    desc: "A queridinha da galera. Porção generosa com 2 misturas à sua escolha.",
    price: "R$ 28,00",
    tag: "Favorita",
    image: "https://images.unsplash.com/photo-1548943487-a2e4142f132e?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "marmita-g",
    category: "Marmitas",
    name: "Marmita G",
    desc: "Para quem tem muita fome. 3 opções de carnes e acompanhamentos caprichados.",
    price: "R$ 35,00",
    tag: "Tamanho Família",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "marmita-fit",
    category: "Fitness",
    name: "Marmita Fitness",
    desc: "Arroz integral/purê de batata doce, filé de frango grelhado e mix de legumes no vapor.",
    price: "R$ 32,00",
    tag: "Saudável",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "carnes-kilo",
    category: "Carnes no Kilo",
    name: "Churrasco em Kilo",
    desc: "Picanha, maminha, linguiça toscana e frango assado. Escolha sua carne favorita no peso.",
    price: "a partir R$ 45/kg",
    tag: "Fim de Semana",
    image: "https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "sobremesas",
    category: "Sobremesas",
    name: "Doces Caseiros",
    desc: "Pudim de leite condensado, mousse de maracujá e bombom na travessa.",
    price: "a partir R$ 8,00",
    tag: "Para fechar bem",
    image: "https://images.unsplash.com/photo-1563805042-7684c8a9e9cb?q=80&w=2000&auto=format&fit=crop",
  },
];

export default function FeaturedMenu() {
  return (
    <section className="bg-white py-24" id="marmitas">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="text-red-600 font-bold uppercase tracking-widest text-sm mb-4 block">Nossos Pratos</span>
          <h2 className="text-4xl md:text-5xl font-black text-stone-900">Cardápio</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, i) => (
            <div
              key={item.id}
              className="relative bg-stone-50 rounded-2xl overflow-hidden border border-stone-100"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-red-500 font-bold">{(i + 1).toString().padStart(2, '0')}</span>
                  <span className="h-[1px] w-8 bg-red-200" />
                  <span className="text-stone-500 font-bold text-sm tracking-wider uppercase">{item.category}</span>
                </div>
                
                <h3 className="text-2xl font-black text-stone-900 mb-3">{item.name}</h3>
                
                <p className="text-stone-600 text-base mb-4 leading-relaxed">
                  {item.desc}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xl font-black text-red-600">{item.price}</span>
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">{item.tag}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://pedir.delivery/app/restaurantevitoria/menu"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center gap-2 bg-stone-900 hover:bg-red-600 transition-colors duration-300 text-white px-8 py-4 rounded-full font-bold text-lg"
          >
            Ver Cardápio Completo
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
