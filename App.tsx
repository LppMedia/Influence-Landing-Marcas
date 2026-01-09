"use client";

import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
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

// Fix: Removed global JSX shadowing that caused 'Property div does not exist' errors across all files.
// Using a constant for the web component tag instead to maintain type safety and avoid global scope pollution.
const IconifyIcon = 'iconify-icon' as any;

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
    // Detectar móvil específicamente para configuración de físicas
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;

    // 1. Inicializar Lenis Global
    const lenis = new Lenis({
      // OPTIMIZACIÓN MÓVIL (Option A):
      // Usar duration: 0 en móviles desactiva la interpolación y usa el scroll nativo.
      // Esto elimina la sensación de "lag" o pesadez.
      duration: isMobileDevice ? 0 : 1.2,
      
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      
      // OPTIMIZACIÓN DE SENSIBILIDAD:
      // Reducido de 2 a 0.8 en móviles para evitar que la página "vuele" con un toque suave.
      touchMultiplier: isMobileDevice ? 0.8 : 1, 
      
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      lenis.destroy();
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
    }, { threshold: 0.1 });
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen relative bg-brand-dark overflow-x-hidden">
      {/* Navegación - Optimizada con Backdrop Blur solo si es necesario */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <IconifyIcon icon="solar:globus-bold-duotone" class="text-3xl text-brand-magenta"></IconifyIcon>
            <div className="text-xl font-extrabold tracking-tighter text-white">
              LPP MEDIA <span className="text-brand-magenta">INFLUENCE</span>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-300">
            <a href="#servicios" className="hover:text-brand-magenta transition-colors">Servicios</a>
            <a href="#porque" className="hover:text-brand-magenta transition-colors">Proceso</a>
            <a href="#casos" className="hover:text-brand-magenta transition-colors">Casos</a>
            <a href="#precios" className="hover:text-brand-magenta transition-colors">Precios</a>
          </div>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-shiny bg-brand-magenta text-white px-7 py-3 rounded-full text-sm font-black hidden sm:flex">
            Agendar Demo
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block mb-8 px-4 py-1.5 glass text-brand-magenta rounded-full text-[10px] font-bold tracking-widest uppercase border border-brand-magenta/30">
              Influencer Marketing Performance
            </div>
            <h1 className="text-4xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-10 tracking-tight">
              Marketing con influencers que impulsa <span className="text-brand-magenta">ventas reales</span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Conectamos tu marca con creadores verificados y campañas enfocadas 100% en ROI.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-white text-black px-10 py-5 rounded-full font-black text-lg hover:bg-slate-200 transition-all shadow-2xl flex items-center justify-center gap-3 active:scale-95">
                Agendar ahora <Video className="w-6 h-6" />
              </a>
            </div>
            
            <div className="pt-12 border-t border-white/5">
              <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                {TRUST_BRANDS.map(brand => (
                  <div key={brand.name} className="flex items-center gap-2">
                    <IconifyIcon icon={brand.icon} class="text-2xl text-white"></IconifyIcon>
                    <span className="text-[10px] font-black text-white tracking-tighter">{brand.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Optimizada */}
      <div className="relative overflow-hidden py-10 bg-brand-dark">
        <CurvedLoop marqueeText="✦ ROI REAL ✦ CREADORES ✦ VENTAS ✦ VIRALIDAD ✦" speed={1} curveAmount={0} className="marquee-text-style" />
      </div>

      {/* Servicios Section */}
      <section id="servicios" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">¿Por qué LPP Media?</h2>
            <p className="text-slate-500 text-lg">Tecnología propietaria para escalar tu negocio.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUE_PROPS.map((prop, idx) => (
              <TiltedCard key={idx} captionText={prop.title} rotateAmplitude={8} scaleOnHover={1.05}>
                <div className="glass p-8 rounded-2xl border border-white/5 h-full flex flex-col hover:border-brand-magenta/30 transition-colors">
                  <div className="w-12 h-12 bg-brand-magenta/10 rounded-xl flex items-center justify-center mb-6">
                    {prop.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{prop.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{prop.description}</p>
                </div>
              </TiltedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Stats - Muy fluida */}
      <section ref={statsRef} className="py-20 border-y border-white/5 bg-brand-dark/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[{v: counts.creators, l: 'Creadores'}, {v: counts.campaigns, l: 'Campañas'}, {v: counts.time + 'h', l: 'Lanzamiento'}, {v: 'Live', l: 'Reportes'}].map((s, i) => (
              <div key={i}>
                <div className="text-3xl lg:text-5xl font-black text-brand-magenta mb-2">{s.v.toLocaleString()}{typeof s.v === 'number' && i < 2 ? '+' : ''}</div>
                <p className="text-slate-600 font-bold uppercase tracking-widest text-[10px]">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso Section - ScrollStack optimizado */}
      <section id="porque" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4">Nuestro Proceso</h2>
            <p className="text-slate-500 text-lg">Estructura militar para resultados creativos.</p>
          </div>
          <ScrollStack itemDistance={isMobile ? 180 : 350}>
            {PROCESS_STEPS.map((step, idx) => (
              <ScrollStackItem key={idx} itemClassName="max-w-4xl mx-auto w-full">
                <div className="w-full glass p-10 lg:p-20 rounded-[2.5rem] border-white/5 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-6 right-10"><span className="text-6xl lg:text-8xl font-black text-white/5">0{idx + 1}</span></div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">{step.title}</h3>
                  <p className="text-lg lg:text-xl text-slate-500 leading-relaxed">{step.description}</p>
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </section>

      {/* Casos Section */}
      <section id="casos" className="py-24 bg-brand-dark/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div><h2 className="text-3xl font-bold text-white mb-2">Resultados</h2><p className="text-slate-500">Casos de éxito reales.</p></div>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {CASE_STUDIES.map((study, idx) => (
              <div key={idx} className="group glass rounded-3xl overflow-hidden border border-white/5">
                <div className="h-56 overflow-hidden">
                  <img src={study.image} className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-all duration-500" alt={study.industry} />
                </div>
                <div className="p-8">
                  <div className="text-[10px] font-bold text-brand-magenta uppercase mb-2">{study.industry}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{study.goal}</h3>
                  <div className="text-brand-magenta font-black text-lg">{study.result}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA y Footer Simplificados para velocidad */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="glass p-12 lg:p-20 rounded-[3rem] border-white/5">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-10">¿Listo para el siguiente nivel?</h2>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="bg-brand-magenta text-white px-10 py-5 rounded-full font-bold text-xl inline-flex items-center gap-3 hover:scale-105 transition-transform">
              Hablar con un experto <ArrowRight className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      <footer className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-8">
            <IconifyIcon icon="solar:globus-bold-duotone" class="text-2xl text-brand-magenta"></IconifyIcon>
            <div className="text-xl font-extrabold text-white">LPP MEDIA <span className="text-brand-magenta">INFLUENCE</span></div>
          </div>
          <p className="text-slate-700 text-xs font-bold uppercase tracking-widest">© 2025 LPP Media Influence. Made for ROI.</p>
        </div>
      </footer>

      <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default App;