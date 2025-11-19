import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const highlights = [
  "Integrated 7 companies into one ERP (Epicor P21) in 18 months.",
  "Built/led a 10-person IT team; replaced 4 MSPs.",
  "Reduced FP&A weekly book build from 28 hrs to < 2 (Power BI with RLS).",
  "Rolled out Microsoft Dynamics CRM for 90 sellers; ERP/CRM integrated via REST APIs.",
  "Implemented SOC & next-gen endpoint; led cloud migration."
];

const BioSection: React.FC = () => {
  return (
    <section id="bio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          
          {/* Left: Headshot */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              {/* Gradient Ring Container */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 via-cyan-400 to-blue-500 p-1.5 shadow-2xl">
                 <div className="w-full h-full rounded-full border-[4px] border-white overflow-hidden bg-slate-100">
                    <img 
                      src="https://picsum.photos/400/400?grayscale" 
                      alt="Jim Connolly" 
                      className="w-full h-full object-cover"
                    />
                 </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-2/3">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Jim Connolly</h2>
            <div className="text-xl text-blue-600 font-medium mb-6">Fractional CIO • MBA, PMP</div>
            
            <div className="prose prose-lg text-slate-600 mb-8">
              <p className="mb-4">
                Partner to CEOs, CFOs, and Operators delivering measurable business value. I specialize in multi-ERP consolidations, building modern data stacks, and replacing MSP sprawl with capable in-house teams.
              </p>
              <p className="mb-4">
                With finance and operations fluency, I drive pragmatic, high-velocity delivery. My background spans leadership across distribution and manufacturing, covering ERP, CRM, data warehousing, OEE, and cloud infrastructure.
              </p>
              <p>
                The fractional model allows me to provide transformation leadership without the weight of permanent executive headcount.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Career Highlights</h3>
              <ul className="space-y-3">
                {highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BioSection;