"use client";

import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

// Fix for global Iconify type
const IconifyIcon = 'iconify-icon' as any;

const TermsConditions: React.FC = () => {
  useEffect(() => {
    document.title = "Términos y Condiciones | LPP Media Influence";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-dark text-slate-300 font-sans selection:bg-brand-magenta selection:text-white pb-20">
      {/* Header */}
      <nav className="border-b border-white/5 bg-brand-dark/95 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <IconifyIcon icon="solar:globus-bold-duotone" class="text-2xl text-brand-magenta"></IconifyIcon>
            <span className="font-bold text-white tracking-tight">LPP MEDIA</span>
          </div>
          {/* Volver al home limpiando el hash */}
          <a href="/" className="text-sm font-semibold hover:text-brand-magenta transition-colors flex items-center gap-2 text-white">
            <ArrowLeft className="w-4 h-4" /> Volver al Inicio
          </a>
        </div>
      </nav>

      {/* Contenido Legal */}
      <main className="max-w-3xl mx-auto px-6 py-12 lg:py-20">
        <h1 className="text-3xl lg:text-5xl font-black text-white mb-4 tracking-tight">TÉRMINOS Y CONDICIONES</h1>
        <h2 className="text-xl text-slate-400 font-medium mb-2">LPP Media Influence</h2>
        <div className="inline-block bg-white/5 px-3 py-1 rounded-md mb-12">
           <p className="text-brand-magenta font-mono text-xs uppercase tracking-widest font-bold">Última actualización: 26 de enero de 2026</p>
        </div>

        <div className="space-y-12 text-slate-300 leading-relaxed">
          <section>
            <h3 className="text-lg font-bold text-white mb-3">1. Aceptación</h3>
            <p>
              Al utilizar este sitio web, completar formularios o comunicarse con LPP Media Influence, el usuario acepta estos Términos y Condiciones.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-white mb-3">2. Servicios</h3>
            <p className="mb-4">
              LPP Media Influence ofrece servicios de marketing digital e influencer marketing, incluyendo campañas promocionales, estrategias de contenido y gestión de creadores.
            </p>
            <p>
              Los detalles específicos de cada servicio se establecen mediante propuestas, acuerdos o comunicaciones directas.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-white mb-3">3. Uso del sitio</h3>
            <p className="mb-4">El usuario se compromete a:</p>
            <ul className="list-disc pl-5 space-y-2 marker:text-brand-magenta">
              <li>Proporcionar información real y veraz</li>
              <li>No utilizar el sitio para actividades ilegales</li>
              <li>No intentar acceder de forma no autorizada a sistemas o datos</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-bold text-white mb-3">4. Comunicaciones</h3>
            <p className="mb-4">
              El usuario autoriza a LPP Media Influence a contactarlo por:
            </p>
            <ul className="list-disc pl-5 space-y-2 marker:text-brand-magenta mb-4">
              <li>SMS</li>
              <li>WhatsApp</li>
              <li>Correo electrónico</li>
              <li>Llamadas telefónicas</li>
            </ul>
            <p className="p-4 bg-white/5 rounded-lg">Siempre relacionadas con los servicios ofrecidos.</p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-white mb-3">5. Cancelación de comunicaciones</h3>
            <p>
              El usuario puede dejar de recibir mensajes en cualquier momento solicitándolo o respondiendo STOP a los SMS.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-white mb-3">6. Limitación de responsabilidad</h3>
            <p className="mb-4">
              LPP Media Influence no garantiza resultados específicos en campañas de marketing, salvo que se indique expresamente por escrito.
            </p>
            <p>
              No somos responsables por decisiones tomadas por terceros (plataformas, influencers, algoritmos, redes sociales).
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-white mb-3">7. Propiedad intelectual</h3>
            <p>
              Todo el contenido del sitio web, textos, procesos y materiales pertenece a LPP Media Influence y no puede ser utilizado sin autorización.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-white mb-3">8. Legislación aplicable</h3>
            <p>
              Estos términos se rigen por las leyes del Estado de Florida, Estados Unidos.
            </p>
          </section>

          <section className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <h3 className="text-lg font-bold text-white mb-4">9. Contacto</h3>
            <div className="space-y-1 text-sm">
              <p className="font-bold text-white text-lg mb-2">LPP Media Influence</p>
              <p><span className="text-slate-500">Correo:</span> <a href="mailto:support@lppmediainfluence.com" className="text-brand-magenta hover:underline">support@lppmediainfluence.com</a></p>
            </div>
          </section>
        </div>
      </main>

      <footer className="py-10 border-t border-white/5 text-center px-6">
        <p className="text-slate-600 text-xs font-bold uppercase tracking-widest">© 2026 LPP Media Influence</p>
      </footer>
    </div>
  );
};

export default TermsConditions;