import React from 'react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  const chips = ["MBA", "PMP", "ERP", "Analytics", "Cybersecurity"];

  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center gap-3 flex-wrap mb-8">
          {chips.map((chip) => (
            <span key={chip} className="px-3 py-1 border border-slate-700 rounded-full text-xs font-medium text-slate-300">
              {chip}
            </span>
          ))}
        </div>
        <div className="text-sm">
          &copy; {year} Jim Connolly. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;