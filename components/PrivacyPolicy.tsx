"use client";

import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

// Fix for global Iconify type
const IconifyIcon = 'iconify-icon' as any;

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    document.title = "Política de Privacidad | LPP Media Influence";
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
          <a href="/" className="text-sm font-semibold hover:text-brand-magenta transition-colors flex items-center gap-2 text-white">
            <ArrowLeft className="w-4 h-4" /> Volver al Inicio
          </a>
        </div>
      </nav>

      {/* Contenido Legal */}
      <main className="max-w-3xl mx-auto px-6 py-12 lg:py-20">
        <h1 className="text-3xl lg:text-5xl font-black text-white mb-4 tracking-tight">POLÍTICA DE PRIVACIDAD</h1>
        <h2 className="text-xl text-slate-400 font-medium mb-2">LPP Media Influence</h2>
        <div className="inline-block bg-white/5 px-3 py-1 rounded-md mb-12">
           <p className="text-brand-magenta font-mono text-xs uppercase tracking-widest font-bold">Última actualización: 26 de enero de 2026</p>
        </div>

        <div className="space-y-12 text-slate-300 leading-relaxed">
          <section>
            <h3 className="text-lg font-bold text-white mb-3">1. Información general</h3>
            <p>
              LPP Media Influence (“LPP”, “nosotros”) respeta y protege la privacidad de las personas que visitan nuestro sitio web, completan formularios, se registran en nuestras plataformas o se comunican con nosotros por SMS, WhatsApp, correo electrónico o llamadas telefónicas.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-white mb-3">2. Información que recopilamos</h3>
            <p className="mb-4">Podemos recopilar la siguiente información:</p>
            <ul className="list-disc pl-5 space-y-2 marker:text-brand-magenta">
              <li>Nombre y apellido</li>
              <li>Número de teléfono</li>
              <li>Correo electrónico</li>
              <li>Nombre de empresa, marca o artista</li>
              <li>Redes sociales (si el usuario las proporciona)</li>
              <li>Información relacionada con campañas o servicios solicitados</li>
              <li>Dirección IP, navegador y datos técnicos básicos</li>
              <li>Historial de comunicación (SMS, WhatsApp, correos o llamadas)</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-bold text-white mb-3">3. Uso de la información</h3>
            <p className="mb-4">La información recopilada se utiliza exclusivamente para:</p>
            <ul className="list-disc pl-5 space-y-2 marker:text-brand-magenta mb-4">
              <li>Contactar al usuario sobre nuestros servicios</li>
              <li>Brindar información solicitada</li>
              <li>Enviar mensajes informativos, operativos o comerciales relacionados con nuestros servicios</li>
              <li>Gestionar campañas de marketing con influencers</li>
              <li>Mejorar nuestros procesos internos y atención al cliente</li>
              <li>Cumplir con requisitos legales y regulatorios</li>
            </ul>
            <p className="p-4 bg-white/5 rounded-lg border-l-2 border-brand-magenta">
              No utilizamos la información para fines ilegales ni no autorizados.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-white mb-3">4. SMS y comunicaciones</h3>
            <p className="mb-4">
              Al proporcionar su número de teléfono, el usuario acepta recibir mensajes SMS o WhatsApp de LPP Media Influence relacionados con:
            </p>
            <ul className="list-disc pl-5 space-y-2 marker:text-brand-magenta mb-4">
              <li>Información sobre servicios</li>
              <li>Confirmaciones</li>
              <li>Seguimiento de solicitudes</li>
              <li>Comunicaciones comerciales</li>
            </ul>
            <p className="font-medium text-white">
              El usuario puede cancelar la recepción de mensajes en cualquier momento respondiendo STOP o solicitándolo por cualquier medio de contacto.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-white mb-3">5. Protección de la información</h3>
            <p className="mb-4">
              Implementamos medidas de seguridad administrativas, técnicas y organizativas para proteger la información personal contra accesos no autorizados, uso indebido, pérdida o divulgación.
            </p>
            <p>
              No vendemos, alquilamos ni compartimos la información personal con terceros, salvo cuando sea necesario para operar nuestros servicios o cuando la ley lo exija.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-white mb-3">6. Compartición de datos</h3>
            <p className="mb-4">Podemos compartir información únicamente con:</p>
            <ul className="list-disc pl-5 space-y-2 marker:text-brand-magenta">
              <li>Plataformas tecnológicas necesarias para operar (CRM, SMS, WhatsApp, email, pagos)</li>
              <li>Proveedores de servicios bajo acuerdos de confidencialidad</li>
              <li>Autoridades legales si es requerido por ley</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-bold text-white mb-3">7. Derechos del usuario</h3>
            <p className="mb-4">El usuario puede solicitar en cualquier momento:</p>
            <ul className="list-disc pl-5 space-y-2 marker:text-brand-magenta">
              <li>Acceso a su información</li>
              <li>Corrección de datos</li>
              <li>Eliminación de su información</li>
              <li>Cancelación de comunicaciones</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-bold text-white mb-3">8. Cambios en la política</h3>
            <p>
              Nos reservamos el derecho de actualizar esta Política de Privacidad. Cualquier cambio será publicado en esta página.
            </p>
          </section>

          <section className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <h3 className="text-lg font-bold text-white mb-4">9. Contacto</h3>
            <div className="space-y-1 text-sm">
              <p className="font-bold text-white text-lg mb-2">LPP Media Influence</p>
              <p><span className="text-slate-500">Correo:</span> <a href="mailto:support@lppmediainfluence.com" className="text-brand-magenta hover:underline">support@lppmediainfluence.com</a></p>
              <p><span className="text-slate-500">Sitio web:</span> <a href="https://www.lppmediainfluence.com" className="text-brand-magenta hover:underline">https://www.lppmediainfluence.com</a></p>
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

export default PrivacyPolicy;