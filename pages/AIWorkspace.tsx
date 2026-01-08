
import React, { useState } from 'react';

const AIWorkspace: React.FC = () => {
  const [prompt, setPrompt] = useState('');

  const suggestions = [
    "Summarize my Pakistan Node status",
    "Identify team bottlenecks",
    "Social media performance check",
    "Analyze project velocity",
  ];

  return (
    <div className="h-full flex flex-col space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-glow">
            <span className="material-icons-round text-3xl">auto_awesome</span>
          </div>
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">AI Command Center</h1>
            <p className="text-slate-500 dark:text-slate-400 mt-1">Hello, Waqas. System is ready for your commands.</p>
          </div>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 flex flex-col bg-white dark:bg-surface-dark rounded-3xl border border-slate-100 dark:border-slate-800 shadow-soft overflow-hidden">
          <div className="flex-1 p-8 overflow-y-auto space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shrink-0">
                <span className="material-icons-round">auto_awesome</span>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-3xl rounded-tl-none border border-slate-100 dark:border-slate-800 max-w-[85%]">
                <p className="text-sm font-medium leading-relaxed">
                  Welcome back, Waqas Ahmed Waseer. All your social integrations are active. I noticed a 15% increase in your YouTube reach this week. Would you like a detailed analytics report or shall we plan next week's content schedule?
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                   {suggestions.map((s, i) => (
                     <button key={i} className="px-3 py-1.5 bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-bold text-slate-500 hover:text-primary transition-all">
                       {s}
                     </button>
                   ))}
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-slate-50 dark:bg-slate-900/30 border-t border-slate-100 dark:border-slate-800">
            <div className="relative group">
               <input 
                 type="text" 
                 placeholder="Ask anything, Waqas..." 
                 value={prompt}
                 onChange={(e) => setPrompt(e.target.value)}
                 className="w-full bg-white dark:bg-surface-dark border-2 border-slate-100 dark:border-slate-800 rounded-2xl px-6 py-4 pr-32 focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all shadow-sm"
               />
               <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2">
                 <button className="bg-primary text-white p-2 px-4 rounded-xl shadow-glow hover:bg-primary-hover transition-all">
                   <span className="material-icons-round">send</span>
                 </button>
               </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-soft">
            <h3 className="font-bold mb-4">Waqas's Digital Assets</h3>
            <div className="space-y-4">
              {['LinkedIn - Active', 'YouTube - Active', 'Instagram - Active', 'Facebook - Active'].map((cap, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="text-sm font-medium">{cap.split(' - ')[0]}</span>
                  <span className="text-[10px] font-bold text-green-500 uppercase">Live</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIWorkspace;
