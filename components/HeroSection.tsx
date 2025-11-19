import React from 'react';
import { MetricItem } from '../types';

const metrics: MetricItem[] = [
  { label: "ERP integrations", value: "7 merged" },
  { label: "Sales team enabled", value: "90+ reps" },
  { label: "FP&A prep time", value: "−26 hrs/wk" },
  { label: "Team leadership", value: "10+ staff" },
];

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left: Copy */}
          <div className="flex-1 space-y-8 text-center md:text-left">
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {['M&A Integration', 'ERP/CRM Modernization', 'Data & Analytics', 'Cybersecurity'].map((pill) => (
                <span key={pill} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full uppercase tracking-wide">
                  {pill}
                </span>
              ))}
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              High-performing IT orgs aligned to <span className="text-blue-600">revenue, margin, and risk.</span>
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#contact" className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-600/40 transform hover:-translate-y-1 text-center">
                Start a conversation
              </a>
              <a href="#services" className="px-8 py-4 bg-white text-slate-700 border border-slate-200 font-semibold rounded-xl hover:bg-slate-50 transition-all hover:border-slate-300 text-center">
                See services
              </a>
            </div>
          </div>

          {/* Right: Metrics */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((metric, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center">
                  <div className="text-3xl font-bold text-slate-900 mb-1">{metric.value}</div>
                  <div className="text-sm text-slate-500 font-medium uppercase tracking-wide">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;