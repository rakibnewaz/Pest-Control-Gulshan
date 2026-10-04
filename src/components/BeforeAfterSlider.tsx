import React, { useState } from 'react';
import {
  Sparkles,
  Camera,
  CheckCircle,
  AlertCircle,
  Sliders,
  ShieldCheck,
  Search,
} from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [activeScenario, setActiveScenario] = useState<'kitchen' | 'wardrobe'>('kitchen');

  const scenarios = {
    kitchen: {
      title: 'Apartment Modular Kitchen Cabinet Treatment',
      location: 'Gulshan 2 Apartment Complex, Dhaka',
      pest: 'German Cockroach Nesting & Food Remnants',
      beforeImg:
        'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
      afterImg:
        'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
      beforeLabel: 'Before Treatment (Infestation & Grease Harborage)',
      afterLabel: 'After Treatment (Targeted Gel Baited & Clean Barrier)',
    },
    wardrobe: {
      title: 'Wooden Wardrobe & Baseboard Termite Barrier',
      location: 'Dhanmondi Private Residence, Dhaka',
      pest: 'Subterranean Termite Mud Tubes in Wood Choukats',
      beforeImg:
        'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      afterImg:
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      beforeLabel: 'Before Treatment (Active Wood Hollow & Tube Tracks)',
      afterLabel: 'After Treatment (Treated Wood Surface & Sealed Edge)',
    },
  };

  const current = scenarios[activeScenario];

  return (
    <section id="results" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-2xl bg-emerald-500/20 text-emerald-300 text-xs sm:text-sm font-extrabold uppercase tracking-widest border border-emerald-500/40 shadow-md backdrop-blur-xs">
            <Camera className="w-4 h-4 text-emerald-400 shrink-0" />
            Visual Evidence & Work Quality
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Real Pest Problems. Professional Solutions.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Witness how targeted pest management transforms affected spaces. Slide across the project
            photo below to see the before and after treatment conditions.
          </p>

          {/* Scenario Toggles */}
          <div className="pt-2 flex items-center justify-center gap-3">
            <button
              onClick={() => setActiveScenario('kitchen')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeScenario === 'kitchen'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Kitchen Cabinet Treatment
            </button>
            <button
              onClick={() => setActiveScenario('wardrobe')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeScenario === 'wardrobe'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Woodwork & Termite Defense
            </button>
          </div>
        </div>

        {/* Interactive Before / After Slider Card */}
        <div className="max-w-4xl mx-auto bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
          {/* Header Info Bar */}
          <div className="p-4 sm:p-5 bg-slate-900 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                {current.title}
              </h3>
              <p className="text-xs text-emerald-400 mt-0.5">
                Location: {current.location} • Target: {current.pest}
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Sliders className="w-4 h-4 text-emerald-400" />
              <span>Drag slider below to compare</span>
            </div>
          </div>

          {/* Slider Container */}
          <div className="relative h-[320px] sm:h-[450px] w-full select-none overflow-hidden group">
            {/* After Image (Background) */}
            <img
              src={current.afterImg}
              alt={current.afterLabel}
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            <div className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-lg bg-emerald-600/90 backdrop-blur-md text-white text-xs font-extrabold flex items-center gap-1.5 shadow-lg">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>After Treatment</span>
            </div>

            {/* Before Image (Clipped Overlay) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src={current.beforeImg}
                alt={current.beforeLabel}
                className="absolute inset-0 w-full h-full object-cover max-w-none pointer-events-none"
                style={{ width: '100%', minWidth: '100%' }}
              />
              <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-lg bg-rose-600/90 backdrop-blur-md text-white text-xs font-extrabold flex items-center gap-1.5 shadow-lg">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>Before Treatment</span>
              </div>
            </div>

            {/* Draggable Divider Line */}
            <div
              className="absolute top-0 bottom-0 z-20 w-1 bg-white cursor-ew-resize flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.5)]"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="w-9 h-9 rounded-full bg-white text-slate-900 shadow-xl flex items-center justify-center -ml-0.5 border-2 border-emerald-500 font-bold text-xs">
                ↔
              </div>
            </div>

            {/* Native Slider Range Input for Accessibility & Mobile Touch */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              aria-label="Before and after treatment visual comparison slider"
              className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-30"
            />
          </div>

          {/* Verification Disclaimer */}
          <div className="p-4 bg-slate-950 text-center text-xs text-slate-400 border-t border-slate-800/80">
            <span>
              Real Project Representative Record. Customer-approved photos are logged during post-treatment verification.
            </span>
          </div>
        </div>

        {/* 3 Step Visual Process Highlights */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Search className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">1. Source Harborage Detection</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              We locate moisture pockets, hairline expansion gaps, and false ceiling entries rather than simply spraying visible surfaces.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">2. Low-Odor Targeted Application</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Applying non-staining micro-gel baiting in kitchens and localized subterranean barriers for woodwork protection.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">3. Clear After-Care Advice</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Technicians provide practical structural advice for sealing gaps, managing food storage, and avoiding re-infestations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
