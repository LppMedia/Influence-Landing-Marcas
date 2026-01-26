"use client";

import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

// Fix for global Iconify type
const IconifyIcon = 'iconify-icon' as any;

const TermsConditions: React.FC = () => {
  useEffect(() => {
    document.title = "Términos y Condiciones | LPP Media Influence";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Términos y Condiciones de uso de LPP Media Influence.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-brand-dark text-slate-300 font-sans selection:bg-brand-magenta selection:text-white">
      {/* Header Simple */}
      <nav className="border-b border-white/5 bg-brand-dark/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <IconifyIcon icon="solar:globus-bold-duotone" class="text-2xl text-brand-magenta"></IconifyIcon>
            <span className="font-bold text-white tracking-tight">LPP MEDIA</span>
          </div>
          <a href="#" className="text-sm font-semibold hover:text-brand-magenta transition-colors flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Volver al Inicio
          </a>
        </div>
      </nav>

      {/* Contenido Legal */}
      <main className="max-w-4xl mx-auto px-6 py-16 lg:py-24">
        <h1 className="text-3xl lg:text-5xl font-black text-white mb-4">Términos y Condiciones</h1>
        <p className="text-brand-magenta font-mono text-sm mb-12 uppercase tracking-widest">Última actualización: 26 de enero de 2026</p>

        <div className="space-y-12">
          <section>
            <h2 className="text-xl font-bold text-white mb-4">1. Aceptación</h2>
            <p className="leading-relaxed">
              Al utilizar este sitio web, completar formularios o comunicarse con LPP Media Influence, el usuario acepta estos Términos y Condiciones.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">2. Servicios</h2>
            <p className="leading-relaxed mb-4">
              LPP Media Influence ofrece servicios de marketing digital e influencer marketing, incluyendo campañas promocionales, estrategias de contenido y gestión de creadores.
            </p>
            <p className="leading-relaxed">
              Los detalles específicos de cada servicio se establecen mediante propuestas, acuerdos o comunicaciones directas.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. Uso del sitio</h2>
            <p className="leading-relaxed mb-4">El usuario se compromete a:</p>
            <ul className="list-disc pl-5 space-y-2 marker:text-brand-magenta">
              <li>Proporcionar información real y veraz</li>
              <li>No utilizar el sitio para actividades ilegales</li>
              <li>No intentar acceder de forma no autorizada a sistemas o datos</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">4. Comunicaciones</h2>
            <p className="leading-relaxed mb-4">
              El usuario autoriza a LPP Media Influence a contactarlo por:
            </p>
            <ul className="list-disc pl-5 space-y-2 marker:text-brand-magenta mb-4">
              <li>SMS</li>
              <li>WhatsApp</li>
              <li>Correo electrónico</li>
              <li>Llamadas telefónicas</li>
            </ul>
            <p className="leading-relaxed">Siempre relacionadas con los servicios ofrecidos.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">5. Cancelación de comunicaciones</h2>
            <p className="leading-relaxed">
              El usuario puede dejar de recibir mensajes en cualquier momento solicitándolo o respondiendo STOP a los SMS.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">6. Limitación de responsabilidad</h2>
            <p className="leading-relaxed mb-4">
              LPP Media Influence no garantiza resultados específicos en campañas de marketing, salvo que se indique expresamente por escrito.
            </p>
            <p className="leading-relaxed">
              No somos responsables por decisiones tomadas por terceros (plataformas, influencers, algoritmos, redes sociales).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">7. Propiedad intelectual</h2>
            <p className="leading-relaxed">
              Todo el contenido del sitio web, textos, procesos y materiales pertenece a LPP Media Influence y no puede ser utilizado sin autorización.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">8. Legislación aplicable</h2>
            <p className="leading-relaxed">
              Estos términos se rigen por las leyes del Estado de Florida, Estados Unidos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">9. Contacto</h2>
            <div className="glass p-6 rounded-xl border-white/5 inline-block pr-12">
              <p className="font-bold text-white mb-1">LPP Media Influence</p>
              <p className="text-slate-400">Correo: support@lppmediainfluence.com</p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer Simple */}
      <footer className="py-10 border-t border-white/5 text-center">
        <p className="text-slate-600 text-xs font-bold uppercase tracking-widest">© 2026 LPP Media Influence</p>
      </footer>
    </div>
  );
};

export default TermsConditions;