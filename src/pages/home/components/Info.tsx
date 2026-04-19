import { MapPin, Clock, Truck, DollarSign, Store, ShoppingBag, Banknote, CreditCard, QrCode, Ticket } from "lucide-react";

const infoCards = [
  { icon: MapPin, label: "Endereço", value: "Av Brasil, 1020 - Centro" },
  { icon: Clock, label: "Horário", value: "Seg-Sáb, 10h às 14h30" },
  { icon: Truck, label: "Entrega", value: "Toda a cidade" },
  { icon: DollarSign, label: "Frete", value: "Grátis acima de R$50" },
  { icon: Store, label: "Retirada", value: "No balcão, sem taxa" },
  { icon: ShoppingBag, label: "Pedidos", value: "App, WhatsApp ou Presencial" },
];

const payments = [
  { icon: Banknote, label: "Dinheiro" },
  { icon: CreditCard, label: "Cartão" },
  { icon: QrCode, label: "PIX" },
  { icon: Ticket, label: "VR" },
];

export default function Info() {
  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-red-600 font-bold uppercase tracking-widest text-xs sm:text-sm mb-3 block">Informações Úteis</span>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900">Como funcionamos</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-12">
          {infoCards.map((info, i) => {
            const Icon = info.icon;
            return (
              <div
                key={i}
                className="bg-stone-50 border border-stone-100 p-4 sm:p-6 rounded-xl flex flex-col items-start gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h4 className="text-stone-500 font-bold text-xs uppercase mb-1">{info.label}</h4>
                  <p className="text-stone-900 font-bold text-sm sm:text-base">{info.value}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="bg-stone-900 rounded-2xl p-6 sm:p-10 text-center">
          <span className="text-red-500 font-bold uppercase tracking-widest text-xs sm:text-sm mb-3 block">Facilidade na hora de pagar</span>
          <h3 className="text-xl sm:text-2xl font-black text-white mb-6">Formas de Pagamento</h3>
          
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {payments.map((pay, i) => {
              const Icon = pay.icon;
              return (
                <div key={i} className="flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-2 sm:px-5 sm:py-3">
                   <Icon className="w-5 h-5 text-white" />
                   <span className="text-white font-medium text-sm">{pay.label}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
