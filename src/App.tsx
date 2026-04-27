/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  BarChart3, 
  Zap, 
  Clock, 
  ChevronDown,
  Building2,
  FileText,
  Settings,
  Rocket,
  Plus,
  Minus,
  HelpCircle,
  MessageSquare,
  ShieldAlert,
  Monitor
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left group"
      >
        <span className="text-lg font-bold text-slate-800 group-hover:text-brand-primary transition-colors">{question}</span>
        <div className={`p-1 rounded-full transition-all duration-300 ${isOpen ? 'bg-brand-primary text-white rotate-180' : 'bg-slate-100 text-slate-400'}`}>
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="mt-4 text-slate-600 leading-relaxed italic">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col">
      {/* 1. Hero Section */}
      <nav className="fixed top-0 w-full z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-brand-primary rounded flex items-center justify-center text-white font-bold">A7</div>
              <span className="font-bold text-xl tracking-tight uppercase">Alpha7</span>
            </div>
            <div className="h-6 w-px bg-slate-300"></div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold">N</div>
              <span className="font-semibold text-lg text-slate-600">Nexxera</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <span className="text-xs font-bold text-slate-400 tracking-widest uppercase">Parceria Estratégica</span>
            <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold border border-blue-100">
              Exclusivo Clientes Alpha7
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeIn}>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-4 tracking-tighter">
              Controle total sobre as <span className="text-brand-primary italic">vendas em maquininhas</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-8 font-medium">
              Centralize e automatize suas vendas e tenha mais controle do seu caixa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-brand-accent hover:bg-emerald-400 text-white px-8 py-4 rounded-xl font-bold transition shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-2 group active:scale-95">
                Falar com especialista
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200 relative aspect-[4/3] group lg:block hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&q=80&w=1200" 
              alt="Farmacêutica usando sistema de conciliação" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-[10px] font-black uppercase tracking-widest">Tecnologia Alpha7 & Nexxera</span>
              </div>
              <p className="text-xs font-bold opacity-80 uppercase tracking-tighter italic">Transformando o financeiro de farmácias</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Prova Social */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center">
            <h2 className="text-xl font-black text-slate-400 uppercase tracking-[0.2em]">
              Junte-se a mais de <span className="text-slate-900">400</span> farmácias e drogarias
            </h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale mt-8">
            <span className="text-3xl font-black tracking-tighter italic">DROGASIL</span>
            <span className="text-3xl font-black tracking-tighter italic">PAGUE.MENOS</span>
            <span className="text-3xl font-black tracking-tighter italic">ULTRAFARMA</span>
            <span className="text-3xl font-black tracking-tighter italic">DROGARIA.SP</span>
          </div>
        </div>
      </section>

      {/* 3. O Problema vs. A Solução */}
      <section className="py-24 max-w-7xl mx-auto px-8 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black mb-2 italic uppercase tracking-tight">Gerencie vendas, taxas e cobranças</h2>
          <p className="text-slate-500 font-medium">Deixe o trabalho braçal para a automação.</p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="grid grid-cols-2 bg-slate-50 border-b border-slate-200">
            <div className="p-4 text-xs font-black uppercase text-slate-500 tracking-wider text-center">Sem conciliação</div>
            <div className="p-4 text-xs font-black uppercase text-brand-primary tracking-wider text-center">Com Nexxera + Alpha7</div>
          </div>
          <div className="divide-y divide-slate-100">
            {[
              { before: "Informações desencontradas e visualização descentralizada;", after: "Visão centralizada das vendas realizadas diretamente no ERP Alpha7;" },
              { before: "Conferência manual de taxas e recebíveis;", after: "Conciliação das vendas realizadas em cartão de crédito, débito, benefícios, carteira digital e Pix;" },
              { before: "Gestão complexa de chargebacks, cancelamentos e vendas parceladas;", after: "Auditoria automática de taxas de crédito, débito e Pix;" },
              { before: "Dificuldade em auditar taxas aplicadas;", after: "Gestão facilitada de exceções com destaques inteligentes." }
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-2">
                <div className="p-6 text-sm text-slate-500 border-r border-slate-100">{row.before}</div>
                <div className="p-6 text-sm font-bold text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  {row.after}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Jornada */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-black mb-12 italic uppercase tracking-tight">O caminho para sua farmácia vender mais e melhor</h2>
            <div className="space-y-10 relative">
              <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-slate-100"></div>
              {[
                { title: "Solicitação da adesão", desc: "Sinalize o interesse ao comercial Alpha7" },
                { title: "Contato Nexxera", desc: "A Nexxera entrará em contato para alinhamento e fechamento do contrato" },
                { title: "Abertura de Relacionamentos", desc: "Chegou a hora de solicitar e autorizar o tráfego de dados entre bancos e adquirentes para o seu ERP através da Nexxera" },
                { title: "Integração do conciliador finalizada", desc: "Processo ativado. Dados fluindo direto para o seu ERP." }
              ].map((step, i) => (
                <div key={i} className="flex space-x-6 relative">
                  <div className="w-6 h-6 rounded-full bg-brand-primary text-white flex items-center justify-center text-[10px] font-black shrink-0 z-10">{i + 1}</div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 italic uppercase tracking-tighter">{step.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed max-w-lg">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 relative group aspect-video lg:aspect-auto self-stretch min-h-[400px]">
            <img 
              src="https://images.unsplash.com/photo-1559832333-e690040e3639?auto=format&fit=crop&q=80&w=1200" 
              alt="Gestão Farmacêutica Profissional" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
          </div>
        </div>
      </section>

      {/* 5. Custo */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="bg-white rounded-3xl p-4 shadow-xl border border-slate-200 overflow-hidden">
               <div className="bg-slate-100 rounded-2xl aspect-[16/10] flex items-center justify-center relative overflow-hidden">
                  <Monitor className="w-16 h-16 text-slate-300 absolute z-0" />
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
                    alt="Plataforma Alpha7" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover relative z-10 opacity-90 mix-blend-multiply"
                  />
                  <div className="absolute top-4 left-4 flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400/50"></div>
                  </div>
               </div>
            </div>
            <p className="mt-6 text-center text-xs font-bold text-slate-400 uppercase tracking-widest italic">Visão centralizada da conciliação Alpha7</p>
          </div>
          
          <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
            <motion.div 
              {...fadeIn}
              className="bg-gradient-to-br from-slate-800 to-slate-950 rounded-2xl p-8 text-white shadow-2xl relative overflow-hidden ring-1 ring-white/10"
            >
              <div className="relative z-10">
                <span className="text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">Investimento Mensal</span>
                <div className="mt-4 flex items-baseline space-x-1">
                  <span className="text-2xl font-medium opacity-60 italic">R$</span>
                  <span className="text-6xl font-black tracking-tighter">297,00</span>
                  <span className="text-slate-400 text-sm font-bold">/mês</span>
                </div>
                <p className="mt-6 text-sm text-slate-300 opacity-80 leading-relaxed font-medium">
                  Condição especial para farmácias e drogarias que já utilizam o ecossistema Alpha7.
                </p>
                <button className="mt-8 w-full bg-brand-accent hover:bg-emerald-400 text-white font-black py-5 rounded-xl transition shadow-xl shadow-emerald-500/20 active:scale-95">
                  Quero conciliar minhas vendas
                </button>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white opacity-[0.03] rounded-full"></div>
            </motion.div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
               <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 italic text-center">Incluso na solução</h4>
               <ul className="space-y-4">
                 {[
                   "Principais adquirentes do mercado",
                   "Conciliação automática 100% digital",
                   "Visualização centralizada das vendas por maquininhas",
                   "Auditoria de taxas, chargebacks e parcelamentos"
                 ].map((item, i) => (
                   <li key={i} className="flex gap-3 text-sm font-bold text-slate-700 items-start">
                     <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                     <span className="italic uppercase tracking-tighter leading-tight">{item}</span>
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-2 italic uppercase tracking-tight">FAQ</h2>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 divide-y divide-slate-100 shadow-sm overflow-hidden">
            <FAQItem 
              question="O sistema concilia transações em PIX e Carteiras Digitais?" 
              answer="Sim, toda transação processada pelas maquininhas/adquirentes homologadas é capturada e espelhada no ERP Alpha7."
            />
            <FAQItem 
              question="E se eu tiver divergências de centavos ou dias?" 
              answer="O ERP Alpha7 já possui configurações de 'Tolerância' (ex: 3 dias para entregas, tolerância de centavos em arredondamentos) que trabalham perfeitamente com os dados importados pela Nexxera, garantindo que as vendas de delivery, por exemplo, também sejam conciliadas."
            />
            <FAQItem 
              question="Qual o trabalho do meu financeiro a partir da implantação?" 
              answer="Apenas gerenciar as exceções! Em vez de baixar e cruzar planilhas, seu financeiro focará em resolver pendências, analisar chargebacks e garantir o fluxo de caixa na aba de pendências do Alpha7."
            />
          </div>

          <div className="mt-16 bg-slate-50 rounded-2xl p-8 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-full border border-slate-200 flex items-center justify-center text-brand-primary shadow-sm">
                <HelpCircle className="w-6 h-6" />
              </div>
              <div>
                <p className="text-lg font-bold text-slate-900 italic uppercase tracking-tighter">Ainda tem dúvidas?</p>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Fale com nossos especialistas agora mesmo</p>
              </div>
            </div>
            <button className="bg-white hover:bg-slate-50 text-brand-primary border border-slate-200 px-8 py-3 rounded-xl font-black text-sm uppercase tracking-widest transition shadow-sm active:scale-95">
              Chamar no WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* 8. Footer */}
      <footer className="bg-slate-900 text-slate-400 p-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center space-x-12">
             <div className="flex flex-col gap-1">
                <span className="text-2xl font-black italic tracking-tighter text-white">NEXXERA</span>
                <span className="text-[8px] font-bold uppercase tracking-[0.5em] text-slate-500">Tecnologia Bancária</span>
             </div>
             <div className="w-px h-12 bg-slate-800"></div>
             <div className="flex flex-col gap-1 grayscale opacity-50">
                <span className="text-xl font-bold tracking-tighter text-white">ALPHA7</span>
                <span className="text-[8px] font-bold uppercase tracking-[0.5em] text-slate-500">Sistemas ERP</span>
             </div>
          </div>
          <div className="text-[10px] font-bold text-slate-600 tracking-widest uppercase text-center md:text-right">
            © 2026 Nexxera & Alpha7 – Tecnologia que conecta mercados.
          </div>
        </div>
      </footer>
    </div>
  );
}

