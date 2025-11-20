import React from 'react';
import { Database, Lock, Server, ShoppingCart, Users, Zap } from 'lucide-react';

const RoadmapSection: React.FC = () => {
  return (
    <section id="roadmap" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">IT Department Roadmap</h2>
          <p className="text-lg text-slate-600">
            Internal IT aligns tech strategy with business goals; cybersecurity must permeate every decision to protect enterprise value.
          </p>
        </div>

        {/* Why Internal vs Outsourcing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Why Internal vs. Outsourcing?</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-blue-700">Ownership – Set Your Own Thermostat</h4>
                <p className="text-sm text-slate-600">Outsourcing reduces control, agility, and responsiveness. Ownership enables proactive risk management and innovation.</p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700">Control & Responsiveness</h4>
                <ul className="list-disc list-inside text-sm text-slate-600 ml-2">
                  <li>Direct management of sensitive data</li>
                  <li>Quick response to internal demands</li>
                  <li>Strategic agility and customization</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700">Long-term Cost Efficiency</h4>
                <p className="text-sm text-slate-600">Reduced dependence on external contracts and predictable, manageable long-term costs.</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Internal Team + Consultants?</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-white p-3 rounded-lg shadow-sm h-fit"><Users size={20} className="text-blue-600" /></div>
                <div>
                  <h4 className="font-semibold text-slate-900">Knowledge Retention</h4>
                  <p className="text-sm text-slate-600">Ensures continuity and institutional memory stays within the business.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-white p-3 rounded-lg shadow-sm h-fit"><Zap size={20} className="text-blue-600" /></div>
                <div>
                  <h4 className="font-semibold text-slate-900">Strategic Alignment</h4>
                  <p className="text-sm text-slate-600">Objectives and culture are deeply understood by internal staff.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-white p-3 rounded-lg shadow-sm h-fit"><Server size={20} className="text-blue-600" /></div>
                <div>
                  <h4 className="font-semibold text-slate-900">Continuous Improvement</h4>
                  <p className="text-sm text-slate-600">Focus on long-term planning & optimization rather than billable hours.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Core Technology Pillars</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "ERP", desc: "Foundation; data accuracy & integrity; process standardization." },
              { title: "CRM", desc: "Customer insights; pipeline visibility; forecasting." },
              { title: "Data Warehouse", desc: "Single source of truth; real-time analytics/BI; integrates ERP & CRM." },
              { title: "EDI", desc: "Automated partner transactions; error reduction." },
              { title: "Ecommerce", desc: "Revenue growth; personalized digital engagement." },
              { title: "Master Data", desc: "Consistency & governance; cross-platform efficiency." },
            ].map((pillar, i) => (
              <div key={i} className="border border-slate-200 p-6 rounded-xl hover:border-blue-300 transition-colors">
                <h4 className="font-bold text-slate-800 mb-2">{pillar.title}</h4>
                <p className="text-sm text-slate-600">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Framework & Cyber */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-blue-600 text-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Users /> People – Process – Technology</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <span className="block font-bold text-blue-200 border-b border-blue-500 pb-1 mb-2">People</span>
                <p className="text-sm text-blue-100">Skilled & aligned teams focused on delivery.</p>
              </div>
              <div>
                <span className="block font-bold text-blue-200 border-b border-blue-500 pb-1 mb-2">Process</span>
                <p className="text-sm text-blue-100">Defined, efficient, and scalable workflows.</p>
              </div>
              <div>
                <span className="block font-bold text-blue-200 border-b border-blue-500 pb-1 mb-2">Technology</span>
                <p className="text-sm text-blue-100">Robust, integrated, and innovation-supporting.</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Lock /> Cybersecurity</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span> Risk management (identify/mitigate)</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span> Security by design (embed controls)</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span> Continuous training (education)</li>
            </ul>
          </div>
        </div>

        {/* Roles */}
        <div className="mt-16 border-t border-slate-100 pt-10">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Essential Skills and Roles</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "ERP & CRM Specialists",
              "Infrastructure Lead",
              "System Architect",
              "Database & Data Warehouse Specialist"
            ].map((role) => (
              <span key={role} className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 shadow-sm">
                {role}
              </span>
            ))}
          </div>
          <div className="mt-8 bg-slate-50 p-6 rounded-lg text-center border border-slate-100">
            <p className="text-slate-700 italic font-medium">
              "Internal IT provides direct control, better security, and strategic alignment, enabling lasting value, agility, and competitive advantage."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default RoadmapSection;