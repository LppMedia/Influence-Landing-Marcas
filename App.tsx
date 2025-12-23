"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Check, 
  Plus, 
  Minus,
  Mail,
  X,
  CheckCircle2,
  Video
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
import CurvedLoop from './components/CurvedLoop';
import ScrollStack, { ScrollStackItem } from './components/ScrollStack';
import TiltedCard from './components/TiltedCard';

// Fix: Expanded JSX IntrinsicElements support for iconify-icon to handle both global and React-specific namespaces
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'iconify-icon': any;
    }
  }
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        'iconify-icon': any;
      }
    }
  }
}

const BOOKING_URL = "https://api.leadconnectorhq.com/widget/booking/hMkdMnrM8W8Oyn24jf2B";

const TRUST_BRANDS = [
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
  const [isMobile, setIsMobile] = useState(false);
  const [counts, setCounts] = useState({ creators: 0, campaigns: 0, time: 0 });
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
    <div className="min-h-screen relative bg-brand-dark">
      {/* Navegación */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass py-3 shadow-2xl' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <iconify-icon icon="solar:globus-bold-duotone" class="text-3xl text-brand-magenta group-hover:rotate-180 transition-transform duration-700"></iconify-icon>
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
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-shiny bg-brand-magenta text-white px-7 py-3 rounded-full text-sm font-black hover:brightness-110 transition-all shadow-[0_0_20px_rgba(208,24,253,0.3)] hover:shadow-[0_0_30px_rgba(208,24,253,0.5)] active:scale-95 flex items-center justify-center min-w-[200px] text-center">
            Agendar Demostración
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 overflow-hidden min-h-[95vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block mb-8 px-4 py-1.5 glass text-brand-magenta rounded-full text-xs font-bold tracking-widest uppercase border border-brand-magenta/30">
              Influencer Marketing Performance
            </div>
            <h1 className="text-5xl lg:text-8xl font-extrabold text-white leading-[1.05] mb-10 tracking-tight">
              Marketing con influencers que impulsa <br/> ventas reales
            </h1>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Conectamos tu marca con <span className="text-brand-magenta font-bold">creadores verificados</span> y campañas enfocadas en performance.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-white text-black px-10 py-5 rounded-full font-black text-lg hover:bg-slate-200 transition-all shadow-2xl flex items-center justify-center gap-3 group active:scale-95">
                Agendar demostración
                <Video className="w-6 h-6" />
              </a>
            </div>
            <div className="pt-12 border-t border-white/5">
              <p className="text-[10px] font-black text-slate-600 uppercase tracking-[0.2em] mb-10">Trusted by global powerhouses</p>
              <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                {TRUST_BRANDS.map(brand => (
                  <div key={brand.name} className="flex items-center gap-2 group cursor-default">
                    <iconify-icon icon={brand.icon} class="text-3xl text-white group-hover:text-brand-magenta transition-colors"></iconify-icon>
                    <span className="text-xs font-black text-white tracking-tighter group-hover:text-brand-magenta transition-colors">{brand.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-brand-dark text-white border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/5 -translate-x-1/2"></div>
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="inline-block px-3 py-1 bg-red-500/10 text-red-500 rounded-md text-[10px] font-black uppercase tracking-widest border border-red-500/20">El Problema</div>
                <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white">
                  La mayoría de campañas fallan por razones predecibles.
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
                {["Seguidores falsos", "Poco engagement real", "Sin tracking", "Bajo ROI", "Mala ejecución", "Reportes confusos"].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500/5 border border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <X className="w-5 h-5 text-red-500" />
                    </div>
                    <span className="text-slate-400 font-medium leading-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-8 lg:pl-12">
              <div className="inline-block px-3 py-1 bg-brand-magenta/10 text-brand-magenta rounded-md text-[10px] font-black uppercase tracking-widest border border-brand-magenta/20">La Transformación</div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight">La nueva era: <br/><span className="text-brand-magenta">Viralidad Programada</span></h2>
              <p className="text-slate-500 text-lg leading-relaxed">Inyectamos tu marca en conversaciones reales mediante nuestra red verificada.</p>
              <ul className="space-y-6 pt-4">
                {["Alcance masivo en días.", "UGC auténtico.", "Efecto bola de nieve.", "Comunidad real."].map((text, idx) => (
                  <li key={idx} className="flex items-center gap-4 group">
                    <div className="w-6 h-6 rounded-full border border-brand-magenta/20 flex items-center justify-center group-hover:bg-brand-magenta/10 transition-colors">
                      <Check className="w-4 h-4 text-brand-magenta" />
                    </div>
                    <span className="text-slate-300 font-medium">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="relative overflow-hidden pt-16 pb-8">
        <CurvedLoop marqueeText="Influencer ✦ Marketing ✦ ventas ✦ vistas ✦" speed={1.2} curveAmount={0} className="marquee-text-style" />
      </div>

      {/* Servicios Section */}
      <section id="servicios" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">¿Por qué LPP Media?</h2>
            <p className="text-slate-500">Tecnología y experiencia para escalar.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUE_PROPS.map((prop, idx) => (
              <TiltedCard key={idx} captionText={prop.title} rotateAmplitude={14} scaleOnHover={1.1}>
                <div className="glass p-8 rounded-2xl border border-white/10 shadow-sm h-full flex flex-col group cursor-pointer">
                  <div className="w-12 h-12 bg-brand-magenta/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-magenta transition-colors">
                    {prop.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-magenta transition-colors">{prop.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{prop.description}</p>
                </div>
              </TiltedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-24 border-y border-white/5 bg-brand-dark/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-black text-brand-magenta mb-2">{counts.creators.toLocaleString()}+</div>
              <p className="text-slate-600 font-bold uppercase tracking-widest text-xs">Creadores</p>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-black text-brand-magenta mb-2">{counts.campaigns.toLocaleString()}+</div>
              <p className="text-slate-600 font-bold uppercase tracking-widest text-xs">Campañas</p>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-black text-brand-magenta mb-2">{counts.time}h</div>
              <p className="text-slate-600 font-bold uppercase tracking-widest text-xs">Lanzamiento</p>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-black text-brand-magenta mb-2 flex items-center justify-center">Live <span className="flex h-3 w-3 relative ml-3"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-magenta opacity-75"></span><span className="relative inline-flex rounded-full h-3 w-3 bg-brand-magenta"></span></span></div>
              <p className="text-slate-600 font-bold uppercase tracking-widest text-xs">Reportes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso Section */}
      <section id="porque" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-32">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4">Nuestro Proceso</h2>
            <p className="text-slate-500">De la idea al ROI en 5 pasos.</p>
          </div>
          <ScrollStack itemDistance={isMobile ? 250 : 400} blurAmount={2}>
            {PROCESS_STEPS.map((step, idx) => (
              <ScrollStackItem key={idx} itemClassName="max-w-4xl mx-auto w-full">
                <div className="w-full glass p-12 lg:p-20 rounded-[3rem] border-white/5 shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8"><span className="text-8xl font-black text-white/5">0{idx + 1}</span></div>
                  <h3 className="text-4xl font-bold text-white mb-6">{step.title}</h3>
                  <p className="text-xl text-slate-500">{step.description}</p>
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </section>

      {/* Casos Section */}
      <section id="casos" className="py-32 bg-brand-dark/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl"><h2 className="text-3xl font-bold text-white mb-4">Resultados</h2><p className="text-slate-500">Marcas que escalaron con nosotros.</p></div>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="text-brand-magenta font-bold flex items-center gap-2">Ver casos <ArrowRight className="w-5 h-5" /></a>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {CASE_STUDIES.map((study, idx) => (
              <div key={idx} className="group glass rounded-2xl overflow-hidden border border-white/10">
                <div className="h-64 overflow-hidden"><img src={study.image} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all" alt={study.industry} /></div>
                <div className="p-8">
                  <div className="text-xs font-bold text-brand-magenta uppercase mb-2">{study.industry}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{study.goal}</h3>
                  <div className="text-brand-magenta font-black">{study.result}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios Section */}
      <section id="testimonios" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20"><h2 className="text-3xl font-bold text-white mb-4">Clientes</h2></div>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="glass p-8 rounded-2xl border border-white/5">
                <p className="text-slate-400 mb-8 italic">"{t.text}"</p>
                <div className="font-bold text-white">{t.name}</div>
                <div className="text-brand-magenta text-sm">{t.brand}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Precios Section */}
      <section id="precios" className="py-32 bg-brand-dark/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20"><h2 className="text-3xl font-bold text-white mb-4">Planes</h2></div>
          <div className="grid lg:grid-cols-3 gap-8">
            {PLANS.map((plan, idx) => (
              <div key={idx} className={`relative glass p-10 rounded-3xl border ${plan.popular ? 'border-brand-magenta scale-105' : 'border-white/5'}`}>
                <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feat, i) => (<li key={i} className="flex items-center gap-3 text-slate-400 text-sm"><CheckCircle2 className="w-4 h-4 text-brand-magenta" />{feat}</li>))}
                </ul>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className={`w-full py-4 rounded-xl font-bold text-center block ${plan.popular ? 'bg-brand-magenta text-white' : 'glass-light text-white'}`}>Hablar con ventas</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16"><h2 className="text-3xl font-bold text-white mb-4">FAQ</h2></div>
          <div className="space-y-4">
            {FAQ_ITEMS.map((item, idx) => (
              <div key={idx} className="glass rounded-2xl border border-white/5">
                <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full px-8 py-6 flex items-center justify-between text-left">
                  <span className="font-bold text-white">{item.question}</span>
                  {openFaq === idx ? <Minus className="w-5 h-5 text-brand-magenta" /> : <Plus className="w-5 h-5 text-slate-700" />}
                </button>
                {openFaq === idx && <div className="px-8 pb-8 text-slate-500">{item.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass rounded-[3rem] p-12 lg:p-24 text-center border border-white/5">
            <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-8 tracking-tight">¿Listo para escalar?</h2>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="bg-brand-magenta text-white px-10 py-5 rounded-full font-bold text-xl flex items-center gap-3 mx-auto inline-flex">Agendar mi demostración <ArrowRight className="w-6 h-6" /></a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 bg-brand-dark/80 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <iconify-icon icon="solar:globus-bold-duotone" class="text-2xl text-brand-magenta"></iconify-icon>
                <div className="text-xl font-extrabold text-white">LPP MEDIA <span className="text-brand-magenta">INFLUENCE</span></div>
              </div>
              <p className="text-slate-600 text-sm">Marketing de influencers enfocado 100% en ROI.</p>
            </div>
            <div>
              <h5 className="font-bold text-white mb-6">Empresa</h5>
              <ul className="space-y-4 text-sm text-slate-600"><li><a href="#">Nosotros</a></li><li><a href="#">Contacto</a></li></ul>
            </div>
            <div>
              <h5 className="font-bold text-white mb-6">Legal</h5>
              <ul className="space-y-4 text-sm text-slate-600"><li><a href="#">Privacidad</a></li><li><a href="#">Términos</a></li></ul>
            </div>
            <div>
              <h5 className="font-bold text-white mb-6">Conecta</h5>
              <div className="flex gap-4 mb-6">
                <a href="https://www.instagram.com/lpp.media/" className="p-2 glass rounded-lg text-slate-500 hover:text-brand-magenta transition-colors"><iconify-icon icon="simple-icons:instagram" class="text-xl"></iconify-icon></a>
                <a href="https://www.linkedin.com/company/lpp-media-influence/" className="p-2 glass rounded-lg text-slate-500 hover:text-brand-magenta transition-colors"><iconify-icon icon="simple-icons:linkedin" class="text-xl"></iconify-icon></a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 text-xs text-slate-700 font-bold uppercase text-center">
            © 2025 LPP Media Influence. Todos los derechos reservados.
          </div>
        </div>
      </footer>

      <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default App;