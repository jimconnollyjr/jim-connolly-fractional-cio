import React from 'react';
import { Mail, Phone, Linkedin, Calendar } from 'lucide-react';
import { EngagementType } from '../types';

const engagements: EngagementType[] = [
  {
    title: "Advisory",
    commitment: "4–8 hrs/wk",
    description: "Steady-state guidance, roadmap, vendor mgmt, KPI reviews."
  },
  {
    title: "Transformation",
    commitment: "1–3 days/wk",
    description: "Program leadership for ERP/CRM, data, cloud, security."
  },
  {
    title: "Interim Leadership",
    commitment: "FT, short-term",
    description: "Stabilize, recruit, and deliver near-term outcomes."
  }
];

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Get in Touch</h2>
            <p className="text-lg text-slate-600 mb-8">
              Ready to align your technology with your business goals? Let's discuss your current landscape and where you want to go.
            </p>

            <div className="space-y-6">
              <a href="mailto:jimconnollyjr1@gmail.com" className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-md transition-all group">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-sm text-slate-500">Email</div>
                  <div className="font-medium text-slate-900">jimconnollyjr1@gmail.com</div>
                </div>
              </a>

              <a href="tel:+16175125010" className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-md transition-all group">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-sm text-slate-500">Phone</div>
                  <div className="font-medium text-slate-900">+1 (617) 512-5010</div>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/jimconnollyjr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-md transition-all group">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Linkedin size={24} />
                </div>
                <div>
                  <div className="text-sm text-slate-500">LinkedIn</div>
                  <div className="font-medium text-slate-900">linkedin.com/in/jimconnollyjr</div>
                </div>
              </a>
            </div>
          </div>

          {/* Typical Engagements */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="text-blue-600" size={28} />
              <h3 className="text-xl font-bold text-slate-900">Typical Engagements</h3>
            </div>
            
            <div className="space-y-6">
              {engagements.map((item, idx) => (
                <div key={idx} className="border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-bold text-slate-800">{item.title}</h4>
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-md">
                      {item.commitment}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-slate-100">
              <a 
                href="mailto:jimconnollyjr1@gmail.com" 
                className="block w-full py-3 bg-blue-600 text-white font-bold text-center rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
              >
                Book a Discovery Call
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;