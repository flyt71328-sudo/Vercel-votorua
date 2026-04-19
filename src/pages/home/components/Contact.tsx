import { useState } from "react";
import { CheckCircle2, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");
    
    setTimeout(() => {
      setFormStatus("success");
      setTimeout(() => setFormStatus("idle"), 5000);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section className="bg-stone-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-red-600 font-bold uppercase tracking-widest text-xs sm:text-sm mb-3 block">Fale Conosco</span>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 mb-4">Dúvidas ou encomendas?</h2>
          <p className="text-stone-600 max-w-xl mx-auto">
            Seja para o almoço da empresa, um evento especial ou tirar dúvidas, estamos aqui.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Info */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-stone-200">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <p className="text-stone-900 font-bold text-sm">Av Brasil, 1020</p>
                <p className="text-stone-500 text-xs">Centro, Campo Novo do Parecis</p>
              </div>
            </div>
            
            <a
              href="https://pedir.delivery/app/restaurantevitoria/menu"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 transition-colors text-white px-6 py-3 rounded-full font-bold"
            >
              <Phone className="w-5 h-5" />
              WhatsApp
            </a>
          </div>

          {/* Form */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200">
              {formStatus === "success" ? (
                <div className="flex flex-col items-center justify-center text-center py-8">
                  <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                  <h3 className="text-2xl font-black text-stone-900 mb-2">Mensagem Enviada!</h3>
                  <p className="text-stone-600">Retornaremos o contato em breve.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-sm font-bold text-stone-900">Nome</label>
                      <input 
                        type="text" 
                        id="name" 
                        required
                        placeholder="João da Silva"
                        className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-2.5 text-stone-900 focus:outline-none focus:border-red-500 transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="text-sm font-bold text-stone-900">Telefone</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        required
                        placeholder="(65) 99999-9999"
                        className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-2.5 text-stone-900 focus:outline-none focus:border-red-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-sm font-bold text-stone-900">Mensagem</label>
                    <textarea 
                      id="message" 
                      required
                      rows={4}
                      placeholder="Como podemos te ajudar?"
                      className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-2.5 text-stone-900 focus:outline-none focus:border-red-500 transition-colors resize-none"
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="w-full bg-stone-900 hover:bg-stone-800 transition-colors text-white font-bold py-3 rounded-lg disabled:opacity-70"
                  >
                    {formStatus === "submitting" ? "Enviando..." : "Enviar Mensagem"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
