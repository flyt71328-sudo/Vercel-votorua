import { CheckCircle2, Truck, ListCollapse } from "lucide-react";

const benefits = [
  {
    id: "qualidade",
    title: "Qualidade na mesa",
    desc: "Ingredientes frescos todos os dias, selecionados a dedo.",
    icon: CheckCircle2,
  },
  {
    id: "entrega",
    title: "Entrega express",
    desc: "30-45 min em toda a cidade, comida sempre quentinha.",
    icon: Truck,
  },
  {
    id: "variedade",
    title: "Cardápio variado",
    desc: "Mais de 30 pratos diferentes para você não enjoar.",
    icon: ListCollapse,
  }
];

export default function Benefits() {
  return (
    <section className="bg-stone-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-red-600 font-bold uppercase tracking-widest text-xs sm:text-sm mb-3 block">Por que escolher o Vitória</span>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900">Três razões para pedir</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.id}
                className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-red-100 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-black text-stone-900 mb-2">{benefit.title}</h3>
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed">{benefit.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
