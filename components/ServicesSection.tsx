import React from 'react';
import { Map, Layers, BarChart3, ShieldCheck, RefreshCw, Users } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: "Technology Strategy & Roadmap",
    iconName: "Map",
    points: ["Prioritized, costed initiatives tied to OKRs", "Quarterly architecture reviews", "Board-ready materials"]
  },
  {
    title: "ERP/CRM Modernization",
    iconName: "Layers",
    points: ["ERP consolidation & data governance", "Sales process design in CRM", "Change management & adoption"]
  },
  {
    title: "Data Platform & Analytics",
    iconName: "BarChart3",
    points: ["Warehousing, modeling, RLS", "Self-service dashboards", "Operational analytics & automation"]
  },
  {
    title: "Cybersecurity & Risk",
    iconName: "ShieldCheck",
    points: ["SOC, endpoint, identity, zero-trust", "Policies, training, incident playbooks", "Vendor risk management"]
  },
  {
    title: "M&A Integration",
    iconName: "RefreshCw",
    points: ["Day-1 readiness & TSA exit", "Playbooks for ERP/CRM & data", "Synergy tracking & reporting"]
  },
  {
    title: "Team & Vendor Leadership",
    iconName: "Users",
    points: ["Org design & recruiting", "Replace MSP sprawl with in-house capability", "SLA metrics, budgets, governance"]
  }
];

const IconMap: Record<string, React.FC<any>> = {
  Map, Layers, BarChart3, ShieldCheck, RefreshCw, Users
};

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="pt-32 pb-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Fractional CIO Services</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Strategic technology leadership delivered with pragmatic, high-velocity execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = IconMap[service.iconName];
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 hover:border-blue-100 hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <Icon className="text-blue-600 group-hover:text-white transition-colors duration-300" size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <ul className="space-y-3">
                  {service.points.map((point, idx) => (
                    <li key={idx} className="flex items-start text-slate-600 text-sm leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 mr-3 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;