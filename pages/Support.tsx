
import React from 'react';

const Support: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in duration-500">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight">Support Center</h1>
        <p className="text-slate-500 dark:text-slate-400">Need help with Waqas's Workspace? We're here for you.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-surface-light dark:bg-surface-dark p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-soft">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span className="material-icons-outlined text-primary">contact_support</span>
            Submit a Ticket
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Subject</label>
              <input type="text" className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-xl text-sm" placeholder="Briefly describe the issue" />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Message</label>
              <textarea rows={4} className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-xl text-sm" placeholder="Provide details..."></textarea>
            </div>
            <button className="w-full py-3 bg-primary text-white font-bold rounded-xl shadow-glow hover:bg-primary-hover transition-all">SEND MESSAGE</button>
          </form>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-bold px-2">Common FAQs</h2>
          {[
            { q: 'How to invite new team members?', a: 'Go to the Members page and click Invite People.' },
            { q: 'Can I connect my GitHub account?', a: 'Yes, head to the Integrations page to link repos.' },
            { q: 'Is there a mobile app?', a: 'WAW Pro is fully responsive and can be installed as a PWA.' },
          ].map((item, i) => (
            <div key={i} className="bg-white dark:bg-surface-dark p-6 rounded-2xl border border-slate-50 dark:border-slate-800 shadow-sm">
              <h4 className="font-bold text-sm text-primary mb-2">Q: {item.q}</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Support;
