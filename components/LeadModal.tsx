
"use client";

import React, { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeadModal: React.FC<LeadModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-dark/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-lg bg-brand-dark rounded-2xl shadow-2xl overflow-hidden border border-white/10 glass">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8">
          {!submitted ? (
            <>
              <h2 className="text-2xl font-bold text-white mb-2">Agendar Demostración Estratégica</h2>
              <p className="text-slate-400 mb-6 text-sm">Completa el formulario y uno de nuestros expertos se pondrá en contacto en menos de 24h.</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">Nombre Completo</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-brand-magenta focus:border-transparent outline-none transition-all placeholder:text-slate-600" placeholder="Juan Perez" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">Email Corporativo</label>
                  <input required type="email" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-brand-magenta focus:border-transparent outline-none transition-all placeholder:text-slate-600" placeholder="juan@tuempresa.com" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">Nombre de la Marca</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-brand-magenta focus:border-transparent outline-none transition-all placeholder:text-slate-600" placeholder="Tu Marca S.A." />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">Presupuesto</label>
                    <select required className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-brand-magenta focus:border-transparent outline-none transition-all appearance-none cursor-pointer">
                      <option value="" className="bg-brand-dark">Seleccionar...</option>
                      <option value="1k-5k" className="bg-brand-dark">$1,000 - $5,000</option>
                      <option value="5k-15k" className="bg-brand-dark">$5,000 - $15,000</option>
                      <option value="15k+" className="bg-brand-dark">$15,000+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">Objetivo</label>
                    <select required className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-brand-magenta focus:border-transparent outline-none transition-all appearance-none cursor-pointer">
                      <option value="" className="bg-brand-dark">Seleccionar...</option>
                      <option value="sales" className="bg-brand-dark">Ventas</option>
                      <option value="leads" className="bg-brand-dark">Leads</option>
                      <option value="awareness" className="bg-brand-dark">Awareness</option>
                    </select>
                  </div>
                </div>
                <button 
                  disabled={loading}
                  type="submit" 
                  className="w-full bg-brand-magenta hover:bg-brand-magenta/80 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-brand-magenta/20 flex items-center justify-center gap-2 mt-4"
                >
                  {loading ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : "Confirmar Cita"}
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-12 animate-in zoom-in duration-500">
              <div className="w-20 h-20 bg-brand-magenta/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-brand-magenta" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">¡Solicitud Enviada!</h2>
              <p className="text-slate-400 mb-8">Gracias por confiar en LPP Media Influence. Un especialista se pondrá en contacto contigo muy pronto.</p>
              <button 
                onClick={onClose}
                className="bg-white text-brand-dark px-8 py-3 rounded-xl font-bold hover:bg-slate-200 transition-colors"
              >
                Cerrar
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeadModal;
