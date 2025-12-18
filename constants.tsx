
import React from 'react';
import { 
  Users, 
  Target, 
  Zap, 
  BarChart3
} from 'lucide-react';
import { CaseStudy, Testimonial, Plan, FaqItem } from './types';

export const VALUE_PROPS = [
  {
    title: "Creadores verificados",
    description: "Acceso exclusivo a creadores con audiencias reales y engagement auditado meticulosamente.",
    icon: <Users className="w-6 h-6 text-brand-magenta" />
  },
  {
    title: "Estrategia enfocada en ROI",
    description: "No buscamos 'likes', buscamos conversiones. Planificamos cada peso invertido para generar retorno.",
    icon: <Target className="w-6 h-6 text-brand-magenta" />
  },
  {
    title: "Ejecución rápida y controlada",
    description: "Lanzamos tus campañas en tiempo récord sin perder el control sobre la calidad del contenido.",
    icon: <Zap className="w-6 h-6 text-brand-magenta" />
  },
  {
    title: "Reportes claros y accionables",
    description: "Dashboards en tiempo real con los KPIs que realmente le importan a tu negocio.",
    icon: <BarChart3 className="w-6 h-6 text-brand-magenta" />
  }
];

export const PROCESS_STEPS = [
  { title: "Diagnóstico", description: "Analizamos tu marca y objetivos de performance." },
  { title: "Selección", description: "Curamos el pool de creadores ideal para tu nicho." },
  { title: "Briefing", description: "Creamos guías creativas enfocadas en conversión." },
  { title: "Lanzamiento", description: "Activamos y optimizamos la campaña en vivo." },
  { title: "Escalamiento", description: "Analizamos resultados y repetimos lo que funciona." }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    industry: "E-commerce Tech",
    goal: "Ventas Directas",
    focus: "Influencers de Productividad",
    result: "4.2x ROAS en 30 días",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600"
  },
  {
    industry: "App Fitness",
    goal: "Suscripciones",
    focus: "UGC & TikTok Ads",
    result: "+15k Registros verificados",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=600"
  },
  {
    industry: "Beauty & Care",
    goal: "Brand Awareness",
    focus: "Micro-influencers especializados",
    result: "2M+ Impresiones orgánicas",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=600"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  { name: "Carlos Ruiz", role: "Marketing Director", brand: "TechFlow", text: "LPP cambió nuestra forma de ver el influencer marketing. Por fin vemos ventas reales." },
  { name: "Ana Maria", role: "CEO", brand: "GlowSkin", text: "La verificación de creadores es impecable. Cero bots, puro engagement real." },
  { name: "Santi Perez", role: "Growth Lead", brand: "NeoBank", text: "Campañas lanzadas en 48 horas. La velocidad de ejecución es su mayor ventaja." },
  { name: "Lucía Mendez", role: "Founder", brand: "EcoWear", text: "Los reportes son tan claros que podemos tomar decisiones de presupuesto al instante." },
  { name: "Jorge Blanco", role: "Digital Manager", brand: "FitApp", text: "Superaron nuestros KPIs de captación en la primera semana. Increíble servicio." },
  { name: "Elena Sanz", role: "Brand Manager", brand: "HomeSweet", text: "Profesionalismo de principio a fin. Entienden lo que una marca necesita." }
];

export const PLANS: Plan[] = [
  {
    name: "Starter",
    price: "Custom",
    features: [
      "Hasta 5 creadores",
      "Estrategia básica",
      "Gestión de contratos",
      "Reporte final de campaña",
      "Soporte vía Email"
    ]
  },
  {
    name: "Growth",
    price: "Custom",
    popular: true,
    features: [
      "Hasta 15 creadores",
      "Estrategia de Performance",
      "Gestión total de contenido",
      "Dashboard en tiempo real",
      "Soporte prioritario 24/7"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Creadores ilimitados",
      "Estrategia Multi-canal",
      "White-label reporting",
      "Director de cuenta dedicado",
      "Integración con CRM"
    ]
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "¿Cómo verifican a los creadores?",
    answer: "Utilizamos herramientas de auditoría avanzada que analizan el histórico de seguidores, la tasa de engagement y la demografía real de la audiencia para descartar bots y métricas infladas."
  },
  {
    question: "¿Con qué plataformas trabajan?",
    answer: "Nos especializamos en TikTok, Instagram (Reels/Stories) y YouTube (Shorts/Largo formato), adaptando la estrategia a donde esté tu cliente ideal."
  },
  {
    question: "¿Cuánto tarda en lanzarse una campaña?",
    answer: "Nuestro promedio es de 72 horas desde la aprobación de los perfiles hasta el primer post en vivo."
  },
  {
    question: "¿Qué resultados puedo esperar?",
    answer: "Depende del nicho y producto, pero nuestro enfoque es siempre el ROI. Antes de empezar, realizamos un benchmark de lo que podemos alcanzar para tu marca."
  },
  {
    question: "¿Cómo entregan los reportes?",
    answer: "Tendrás acceso a un dashboard personalizado que se actualiza automáticamente con las APIs de las redes sociales."
  },
  {
    question: "¿Manejan pagos y contratos?",
    answer: "Sí, nos encargamos de toda la carga legal y administrativa. Tú solo recibes una factura consolidada."
  },
  {
    question: "¿Hay un mínimo de inversión?",
    answer: "Trabajamos con presupuestos escalables, pero recomendamos un mínimo para asegurar que la muestra de datos sea estadísticamente significativa para optimizar."
  },
  {
    question: "¿Qué pasa si un creador no cumple?",
    answer: "Nuestros contratos incluyen cláusulas de cumplimiento estricto. Si un creador falla, tenemos protocolos de reemplazo inmediato o reembolso de crédito."
  }
];
