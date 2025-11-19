import React from 'react';
import { HistoryItem } from '../types';

const history: HistoryItem[] = [
  {
    company: "LBB Specialties",
    role: "VP of IT",
    bullets: [
      "Built 10-person org; consolidated 7 ERPs to Epicor P21; normalized master data.",
      "Data warehouse + Power BI with RLS → real-time reporting.",
      "Cut FP&A by 26 hrs/wk; Dynamics CRM for 90+ sellers; REST API integration.",
      "Cloud migration + budget-neutral SOC with next-gen endpoint."
    ]
  },
  {
    company: "Concord Foods",
    role: "Director of IT / Operations",
    bullets: [
      "Replaced ERP with Sage X3; networks rebuilt; forecasting to AWS with automation.",
      "Cloud inventory analytics & Power BI; RedZone MES → higher OEE (7 lines).",
      "Real-time shop floor & warehouse reporting; R&D to Azure; scaled with virtual team.",
      "Scheduling & warehouse labor models → seven-figure ROI."
    ]
  },
  {
    company: "Earlier Experience",
    role: "Founder / Sales / Management",
    bullets: [
      "Founder & President, Warehouse Products Testing — 1,500+ retail tests; EDI analytics.",
      "IBM Client Representative — 60% YoY sales growth; multiple awards.",
      "MBA (Boston College), BS CS (Villanova); PMP; Dale Carnegie trainer; Lean certificate."
    ]
  }
];

const stack = [
  "Epicor P21", "Dynamics 365 CRM", "Power BI", "SQL Server", "Azure", "ADF", "Tableau", "SSIS", "Workato", "EDI"
];

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">About & Experience</h2>
          <p className="text-lg text-slate-600">A career arc defined by technical hands-on leadership and operational results.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {history.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-blue-600 mb-1">{item.company}</h3>
              <div className="text-sm font-semibold text-slate-900 mb-4 uppercase tracking-wide">{item.role}</div>
              <ul className="space-y-2">
                {item.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="text-slate-600 text-sm leading-relaxed flex items-start">
                    <span className="mr-2 mt-1.5 w-1 h-1 bg-slate-400 rounded-full flex-shrink-0"></span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-6">Focus & Tooling</h3>
          <div className="flex flex-wrap gap-3">
            {stack.map((tool) => (
              <span key={tool} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors cursor-default">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;