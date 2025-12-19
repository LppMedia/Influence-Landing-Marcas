
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Check, 
  Plus, 
  Minus,
  Mail,
  X,
  CheckCircle2
} from 'lucide-react';
import { 
  VALUE_PROPS, 
  PROCESS_STEPS, 
  CASE_STUDIES, 
  TESTIMONIALS, 
  PLANS, 
  FAQ_ITEMS 
} from './constants';
import LeadModal from './components/LeadModal';
import DarkVeil from './components/DarkVeil';
import ColorBends from './components/ColorBends';
import CurvedLoop from './components/CurvedLoop';
import ScrollStack, { ScrollStackItem } from './components/ScrollStack';
import TiltedCard from './components/TiltedCard';

const BOOKING_URL = "https://api.leadconnectorhq.com/widget/booking/hMkdMnrM8W8Oyn24jf2B";

const TRUST_BRANDS = [
  { name: 'Cyzone', icon: 'solar:magic-stick-3-bold-duotone', label: 'CYZONE' },
  { name: 'Warner Music', icon: 'simple-icons:warnermusicgroup', label: 'WARNER MUSIC' },
  { name: 'Boy Wonder', icon: 'solar:crown-minimalistic-bold-duotone', label: 'BOY WONDER' },
  { name: 'Dryworld', icon: 'solar:fire-bold-duotone', label: 'DRYWORLD' },
  { name: 'TikTok', icon: 'simple-icons:tiktok', label: 'TIKTOK' },
  { name: 'Instagram', icon: 'simple-icons:instagram', label: 'INSTAGRAM' }
];

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [counts, setCounts] = useState({ creators: 0, campaigns: 0, time: 0 });
  const statsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const duration = 2000;
        const startTime = performance.now();
        
        const animate = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          setCounts({
            creators: Math.floor(progress * 30000),
            campaigns: Math.floor(progress * 1000),
            time: Math.floor(progress * 72)
          });
          
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
        observer.disconnect();
      }
    }, { threshold: 0.5 });

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-brand-dark">
      {/* Contenedor Global de Fondo - Asegurado contra cortes */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
        style={{ 
          width: '100vw', 
          height: '100vh', 
          transform: 'translateZ(0)', 
          top: 0, 
          left: 0,
          position: 'fixed'
        }}
      >
        <DarkVeil />
        <ColorBends 
          colors={['#0e061e', '#a11cc4', '#d018fd', '#5a12a5']}
          speed={0.1}
          scale={0.9}
          warpStrength={1.0}
          noise={0.03}
          parallax={0.5}
          transparent={true}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-dark/20 to-brand-dark"></div>
      </div>

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass py-3 shadow-2xl' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <iconify-icon 
              icon="solar:globus-bold-duotone" 
              class="text-3xl text-brand-magenta group-hover:rotate-180 transition-transform duration-700"
            ></iconify-icon>
            <div className="text-xl font-extrabold tracking-tighter text-white">
              LPP MEDIA <span className="text-brand-magenta">INFLUENCE</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-300">
            <a href="#servicios" className="hover:text-brand-magenta transition-colors">Servicios</a>
            <a href="#porque" className="hover:text-brand-magenta transition-colors">Proceso</a>
            <a href="#casos" className="hover:text-brand-magenta transition-colors">Casos</a>
            <a href="#testimonios" className="hover:text-brand-magenta transition-colors">Testimonios</a>
            <a href="#precios" className="hover:text-brand-magenta transition-colors">Precios</a>
            <a href="#faq" className="hover:text-brand-magenta transition-colors">FAQ</a>
          </div>

          <a 
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-purple text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-brand-magenta transition-all shadow-lg shadow-brand-purple/20 active:scale-95 inline-block"
          >
            Agendar demostración
          </a>
        </div>
      </nav>

      <div className="relative z-10">
        <section className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 overflow-hidden bg-transparent">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block mb-4 px-4 py-1.5 glass text-brand-magenta rounded-full text-xs font-bold tracking-widest uppercase border border-brand-magenta/30">
                Influencer Marketing Performance
              </div>
              <h1 className="text-5xl lg:text-8xl font-extrabold text-white leading-[1] mb-8 tracking-tight">
                Marketing con influencers que impulsa <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-magenta">ventas reales</span>.
              </h1>
              <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Conectamos tu marca con creadores verificados y campañas enfocadas en performance, con reportes transparentes y ROI garantizado.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <a 
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-brand-magenta text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-magenta/80 transition-all shadow-xl shadow-brand-magenta/20 flex items-center justify-center gap-2 group"
                >
                  Agendar demostración 
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <div className="pt-8 border-t border-white/10">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-8">Marcas que confían en nosotros</p>
                <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                  {TRUST_BRANDS.map(brand => (
                    <div key={brand.name} className="flex items-center gap-2 group cursor-default">
                      <iconify-icon icon={brand.icon} class="text-3xl text-white group-hover:text-brand-magenta transition-colors"></iconify-icon>
                      <span className="text-sm font-black text-white tracking-tighter group-hover:text-brand-magenta transition-colors">{brand.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-transparent text-white border-y border-white/5 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 relative">
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2"></div>
              
              <div className="space-y-12">
                <div className="space-y-6">
                  <div className="inline-block px-3 py-1 bg-red-500/10 text-red-500 rounded-md text-[10px] font-black uppercase tracking-widest border border-red-500/20">
                    El Problema
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white">
                    La mayoría de campañas con influencers fallan por razones predecibles.
                  </h2>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
                  {[
                    "Seguidores falsos y bots",
                    "Poco engagement real",
                    "Sin tracking de conversión real",
                    "Bajo ROI y desperdicio de budget",
                    "Mala ejecución y briefs vagos",
                    "Reportes confusos o inexistentes"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 group">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <X className="w-5 h-5 text-red-500" />
                      </div>
                      <span className="text-slate-200 font-medium leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-8 lg:pl-12">
                <div className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-500 rounded-md text-[10px] font-black uppercase tracking-widest border border-emerald-500/20">
                  La Transformación
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                  La nueva era: <br/>
                  <span className="text-brand-magenta">Viralidad Programada</span>
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed">
                  En LPP Media no dejamos nada a la suerte. Inyectamos tu marca en conversaciones reales a través de cientos de micro-influencers simultáneamente.
                </p>
                
                <div className="space-y-6 pt-4">
                  <ul className="space-y-6">
                    <li className="flex items-center gap-4 group">
                      <div className="w-6 h-6 rounded-full border border-emerald-500/30 flex items-center justify-center group-hover:bg-emerald-500/10 transition-colors">
                        <Check className="w-4 h-4 text-emerald-500" />
                      </div>
                      <span className="text-slate-200 font-medium">Alcance masivo en días, no años.</span>
                    </li>
                    <li className="flex items-center gap-4 group">
                      <div className="w-6 h-6 rounded-full border border-emerald-500/30 flex items-center justify-center group-hover:bg-emerald-500/10 transition-colors">
                        <Check className="w-4 h-4 text-emerald-500" />
                      </div>
                      <span className="text-slate-200 font-medium">Contenido generado por usuarios (UGC) auténtico.</span>
                    </li>
                    <li className="flex items-center gap-4 group">
                      <div className="w-6 h-6 rounded-full border border-emerald-500/30 flex items-center justify-center group-hover:bg-emerald-500/10 transition-colors">
                        <Check className="w-4 h-4 text-emerald-500" />
                      </div>
                      <span className="text-slate-200 font-medium">Efecto 'bola de nieve' en algoritmos.</span>
                    </li>
                    <li className="flex items-center gap-4 group">
                      <div className="w-6 h-6 rounded-full border border-emerald-500/30 flex items-center justify-center group-hover:bg-emerald-500/10 transition-colors">
                        <Check className="w-4 h-4 text-emerald-500" />
                      </div>
                      <span className="text-slate-200 font-medium">Comunidad real que interactúa y compra.</span>
                    </li>
                  </ul>
                </div>
                
                <div className="pt-8">
                  <a 
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 glass-light border-emerald-500/30 text-emerald-400 font-bold rounded-lg hover:bg-emerald-500/10 transition-all flex items-center gap-2 inline-block"
                  >
                    Agendar demostración <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="relative overflow-hidden pt-16 pb-8 bg-transparent">
          <CurvedLoop 
            marqueeText="Influencer ✦ Marketing ✦ mas ventas ✦ vistas ✦ Marca ✦"
            speed={1.2}
            curveAmount={0}
            className="marquee-text-style"
          />
        </div>

        <section id="servicios" className="py-32 bg-transparent">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">¿Por qué elegir LPP Media Influence?</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">Tecnología y experiencia humana para escalar tu marca.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {VALUE_PROPS.map((prop, idx) => (
                <TiltedCard key={idx} captionText={prop.title} rotateAmplitude={14} scaleOnHover={1.1}>
                  <div 
                    className="glass p-8 rounded-2xl border border-white/10 shadow-sm h-full flex flex-col group cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-brand-purple/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-purple transition-colors">
                      <div className="group-hover:text-white transition-colors">
                        {prop.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-magenta transition-colors">{prop.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{prop.description}</p>
                  </div>
                </TiltedCard>
              ))}
            </div>
          </div>
        </section>

        <section ref={statsRef} className="py-24 border-y border-white/5 bg-transparent backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
              <div>
                <div className="text-4xl lg:text-5xl font-black text-brand-magenta mb-2">{counts.creators.toLocaleString()}+</div>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Creadores en red</p>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-black text-brand-magenta mb-2">{counts.campaigns.toLocaleString()}+</div>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Campañas ejecutadas</p>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-black text-brand-magenta mb-2">{counts.time}h</div>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Tiempo de lanzamiento</p>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-black text-brand-magenta mb-2 flex items-center justify-center">
                  Live
                  <span className="flex h-3 w-3 relative ml-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-magenta opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-magenta"></span>
                  </span>
                </div>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Reportes en tiempo real</p>
              </div>
            </div>
          </div>
        </section>

        <section id="porque" className="py-32 bg-transparent">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-32">
              <div className="inline-block mb-4 px-4 py-1 bg-brand-magenta/10 text-brand-magenta rounded-full text-[10px] font-black uppercase tracking-widest border border-brand-magenta/20">
                Nuestro Proceso
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4 tracking-tight">Nuestro Proceso de Performance</h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">De la idea al ROI en 5 pasos estructurados y apilables.</p>
            </div>
            
            <ScrollStack 
              useWindowScroll={true} 
              itemDistance={400} 
              baseScale={0.9} 
              itemScale={0.02} 
              itemStackDistance={20}
              blurAmount={2}
            >
              {PROCESS_STEPS.map((step, idx) => (
                <ScrollStackItem key={idx} itemClassName="max-w-4xl mx-auto w-full">
                  <div className="w-full glass p-12 lg:p-20 rounded-[3rem] border-brand-purple/20 shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8">
                      <span className="text-8xl font-black text-white/5 group-hover:text-brand-magenta/10 transition-colors">0{idx + 1}</span>
                    </div>
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-brand-magenta/10 rounded-2xl flex items-center justify-center mb-8 border border-brand-magenta/20">
                        <span className="text-2xl font-black text-brand-magenta">{idx + 1}</span>
                      </div>
                      <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">{step.title}</h3>
                      <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">{step.description}</p>
                      
                      <div className="mt-12 flex items-center gap-4">
                        <div className="h-[1px] w-12 bg-brand-magenta/50"></div>
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Etapa de ejecución</span>
                      </div>
                    </div>
                  </div>
                </ScrollStackItem>
              ))}
            </ScrollStack>
          </div>
        </section>

        <section id="casos" className="py-32 bg-transparent">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Resultados que hablan por sí solos</h2>
                <p className="text-slate-400">Marcas que escalaron su facturación mediante nuestra red de creadores.</p>
              </div>
              <a 
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-magenta font-bold flex items-center gap-2 hover:gap-4 transition-all whitespace-nowrap"
              >
                Solicitar casos completos <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {CASE_STUDIES.map((study, idx) => (
                <div key={idx} className="group glass rounded-2xl overflow-hidden border border-white/10 shadow-sm hover:shadow-brand-purple/20 transition-all">
                  <div className="h-64 overflow-hidden">
                    <img src={study.image} alt={study.industry} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
                  </div>
                  <div className="p-8">
                    <div className="text-xs font-bold text-brand-magenta uppercase mb-2">{study.industry}</div>
                    <h3 className="text-2xl font-bold text-white mb-6">{study.goal}</h3>
                    <div className="space-y-3 mb-8">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Enfoque</span>
                        <span className="text-white font-semibold">{study.focus}</span>
                      </div>
                      <div className="flex justify-between text-sm py-2 border-t border-white/10">
                        <span className="text-slate-400">Resultado</span>
                        <span className="text-brand-magenta font-black">{study.result}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonios" className="py-32 bg-transparent">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Qué dicen nuestros clientes</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">LPP es el socio de crecimiento para marcas DTC y SaaS.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t, idx) => (
                <div key={idx} className="glass p-8 rounded-2xl hover:bg-white/5 transition-all border border-white/10">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => <Check key={i} className="w-4 h-4 text-brand-magenta" />)}
                  </div>
                  <p className="text-slate-300 text-lg mb-8 italic">"{t.text}"</p>
                  <div>
                    <div className="font-bold text-white">{t.name}</div>
                    <div className="text-brand-magenta text-sm">{t.role} @ <span className="font-bold">{t.brand}</span></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="precios" className="py-32 bg-transparent">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Inversión Flexible</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">Planes adaptados al tamaño y ambición de tu marca.</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {PLANS.map((plan, idx) => (
                <div 
                  key={idx} 
                  className={`relative glass p-10 rounded-3xl border transition-all ${plan.popular ? 'border-brand-magenta shadow-2xl scale-105 z-10' : 'border-white/10 shadow-sm'}`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-magenta text-white px-4 py-1 rounded-full text-xs font-bold uppercase">
                      Más popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-black text-brand-magenta mb-8">{plan.price}</div>
                  <ul className="space-y-4 mb-10">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-brand-magenta" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-4 rounded-xl font-bold transition-all text-center block ${plan.popular ? 'bg-brand-magenta text-white hover:bg-brand-magenta/80 shadow-lg shadow-brand-magenta/20' : 'glass-light text-white hover:bg-white/10'}`}
                  >
                    Hablar con ventas
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="py-32 bg-transparent">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Preguntas Frecuentes</h2>
              <p className="text-slate-400">Todo lo que necesitas saber antes de empezar.</p>
            </div>

            <div className="space-y-4">
              {FAQ_ITEMS.map((item, idx) => (
                <div key={idx} className="glass rounded-2xl overflow-hidden transition-all border border-white/10">
                  <button 
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                  >
                    <span className="font-bold text-white">{item.question}</span>
                    {openFaq === idx ? <Minus className="w-5 h-5 text-brand-magenta" /> : <Plus className="w-5 h-5 text-slate-500" />}
                  </button>
                  {openFaq === idx && (
                    <div className="px-8 pb-8 text-slate-400 leading-relaxed animate-in slide-in-from-top-4 duration-300">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 bg-transparent">
          <div className="max-w-7xl mx-auto px-6">
            <div className="glass rounded-[3rem] p-12 lg:p-24 text-center relative overflow-hidden border border-brand-purple/20">
              <div className="relative z-10">
                <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-8 tracking-tight leading-tight">
                  ¿Listo para escalar con influencers que sí funcionan?
                </h2>
                <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
                  Abrimos cupos limitados cada mes para mantener la excelencia en performance y calidad para cada partner.
                </p>
                <a 
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-magenta text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-brand-magenta/80 transition-all shadow-2xl shadow-brand-magenta/40 active:scale-95 flex items-center justify-center gap-3 mx-auto inline-flex"
                >
                  Agendar mi demostración ahora
                  <ArrowRight className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-20 border-t border-white/10 bg-transparent backdrop-blur-lg">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
              <div className="lg:col-span-1">
                <div className="flex items-center gap-2 mb-6">
                  <iconify-icon icon="solar:globus-bold-duotone" class="text-2xl text-brand-magenta"></iconify-icon>
                  <div className="text-xl font-extrabold tracking-tighter text-white">
                    LPP MEDIA <span className="text-brand-magenta">INFLUENCE</span>
                  </div>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  La agencia de influencer marketing líder enfocada 100% en ROI para marcas modernas.
                </p>
              </div>
              
              <div>
                <h5 className="font-bold text-white mb-6">Compañía</h5>
                <ul className="space-y-4 text-sm text-slate-400">
                  <li><a href="#" className="hover:text-brand-magenta transition-colors">Nosotros</a></li>
                  <li><a href="#" className="hover:text-brand-magenta transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-brand-magenta transition-colors">Carreras</a></li>
                  <li><a href="#" className="hover:text-brand-magenta transition-colors">Contacto</a></li>
                </ul>
              </div>

              <div>
                <h5 className="font-bold text-white mb-6">Legal</h5>
                <ul className="space-y-4 text-sm text-slate-400">
                  <li><a href="#" className="hover:text-brand-magenta transition-colors">Privacidad</a></li>
                  <li><a href="#" className="hover:text-brand-magenta transition-colors">Términos</a></li>
                  <li><a href="#" className="hover:text-brand-magenta transition-colors">Cookies</a></li>
                </ul>
              </div>

              <div>
                <h5 className="font-bold text-white mb-6">Conecta</h5>
                <div className="flex gap-4 mb-6">
                  <a href="#" className="p-2 glass rounded-lg text-slate-400 hover:text-brand-magenta transition-colors shadow-sm flex items-center justify-center">
                    <iconify-icon icon="simple-icons:instagram" class="text-xl"></iconify-icon>
                  </a>
                  <a href="#" className="p-2 glass rounded-lg text-slate-400 hover:text-brand-magenta transition-colors shadow-sm flex items-center justify-center">
                    <iconify-icon icon="simple-icons:linkedin" class="text-xl"></iconify-icon>
                  </a>
                  <a href="#" className="p-2 glass rounded-lg text-slate-400 hover:text-brand-magenta transition-colors shadow-sm flex items-center justify-center">
                    <iconify-icon icon="simple-icons:youtube" class="text-xl"></iconify-icon>
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-400">
                  <Mail className="w-4 h-4 text-brand-magenta" />
                  <span>brands@lppmedia.com</span>
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600 font-bold tracking-widest uppercase">
              <span>© 2024 LPP Media Influence. Todos los derechos reservados.</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-brand-magenta rounded-full animate-pulse"></div>
                <span className="text-slate-500">Sistemas operativos y listos para escalar</span>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default App;
