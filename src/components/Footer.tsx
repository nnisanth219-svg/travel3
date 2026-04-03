import React from 'react';
import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  return (
    <footer className="border-t border-azure/10 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <AppLogo
          text="Azure"
          size={28}
          className="font-display italic font-light text-pearl/60 tracking-widest"
        />

        <div className="flex items-center gap-8">
          {['Instagram', 'Pinterest', 'WhatsApp']?.map((s) => (
            <a
              key={s}
              href="#"
              className="text-[11px] font-medium uppercase tracking-widest text-pearl/40 hover:text-azure transition-colors duration-300 focus:outline-none focus:text-azure"
            >
              {s}
            </a>
          ))}
        </div>

        <p className="text-[11px] text-pearl/30 font-medium tracking-widest">
          © 2026 Azure · <a href="#" className="hover:text-azure transition-colors">Privacy</a> · <a href="#" className="hover:text-azure transition-colors">Terms</a>
        </p>
      </div>
    </footer>
  );
}