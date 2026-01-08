
import React from 'react';

const Billing: React.FC = () => {
  const plans = [
    { name: 'Starter', price: '$0', features: ['Up to 3 projects', 'Basic AI', 'Community Support'], current: false },
    { name: 'Professional', price: '$24', features: ['Unlimited projects', 'Advanced AI', 'Priority Support', 'Custom Branding'], current: true },
    { name: 'Enterprise', price: 'Custom', features: ['Dedicated Manager', 'API Access', '24/7 Phone Support', 'SLA Guarantee'], current: false },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-12 animate-in fade-in duration-500">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight">Billing & Plans</h1>
        <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">Transparent pricing for teams of all sizes. Manage your subscription and payment methods here.</p>
      </div>

      <div className="bg-surface-light dark:bg-surface-dark rounded-2xl border border-slate-100 dark:border-slate-800 shadow-soft overflow-hidden">
        <div className="p-8 border-b border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-icons-round text-3xl">workspace_premium</span>
            </div>
            <div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Current Plan</p>
              <h2 className="text-2xl font-extrabold">Professional Monthly</h2>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-3xl font-bold">$24.00<span className="text-sm text-slate-400 font-medium">/mo</span></p>
            <p className="text-xs text-slate-400 font-medium mt-1">Next billing date: Nov 12, 2024</p>
          </div>
        </div>
        <div className="p-8 bg-slate-50 dark:bg-slate-900/50 grid grid-cols-1 md:grid-cols-3 gap-8">
           <div>
             <h4 className="font-bold mb-4">Payment Method</h4>
             <div className="flex items-center gap-3 bg-white dark:bg-surface-dark p-3 rounded-xl border border-slate-100 dark:border-slate-800">
               <span className="material-icons-outlined text-slate-400">credit_card</span>
               <span className="text-sm font-medium">Visa •••• 4242</span>
               <button className="ml-auto text-xs text-primary font-bold">Edit</button>
             </div>
           </div>
           <div>
             <h4 className="font-bold mb-4">Account Usage</h4>
             <div className="space-y-3">
               <div className="flex justify-between text-xs font-semibold">
                 <span className="text-slate-400">Team Seats</span>
                 <span>8 / 10</span>
               </div>
               <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                 <div className="h-full bg-primary w-[80%]"></div>
               </div>
             </div>
           </div>
           <div className="flex items-center justify-end">
             <button className="px-4 py-2 border border-red-200 text-red-600 rounded-xl text-xs font-bold hover:bg-red-50 transition-all">CANCEL PLAN</button>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12">
        {plans.map((plan, i) => (
          <div key={i} className={`p-8 rounded-3xl border-2 transition-all ${plan.current ? 'border-primary shadow-glow bg-white dark:bg-surface-dark scale-105 relative z-10' : 'border-slate-100 dark:border-slate-800 opacity-80 hover:opacity-100'}`}>
            {plan.current && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Active Plan</span>}
            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
            <p className="text-3xl font-extrabold mb-6">{plan.price}<span className="text-sm font-medium text-slate-400">/mo</span></p>
            <div className="space-y-4 mb-8">
              {plan.features.map((f, j) => (
                <div key={j} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <span className="material-icons-round text-green-500 text-lg">check_circle</span>
                  {f}
                </div>
              ))}
            </div>
            <button className={`w-full py-3 rounded-xl font-bold text-sm transition-all ${plan.current ? 'bg-primary text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-slate-200'}`}>
              {plan.current ? 'Manage Plan' : `Upgrade to ${plan.name}`}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Billing;
