
import React from 'react';

const Integrations: React.FC = () => {
  const tools = [
    { name: 'Slack', desc: 'Sync channel notifications', icon: 'chat', color: 'text-purple-500', status: 'Connected' },
    { name: 'GitHub', desc: 'Track repo commits and PRs', icon: 'code', color: 'text-slate-900', status: 'Connect' },
    { name: 'Figma', desc: 'Live design preview links', icon: 'draw', color: 'text-pink-500', status: 'Connected' },
    { name: 'Google Drive', desc: 'Cloud file storage sync', icon: 'cloud_queue', color: 'text-blue-500', status: 'Connect' },
    { name: 'Zoom', desc: 'Schedule team calls', icon: 'videocam', color: 'text-blue-600', status: 'Connect' },
    { name: 'Trello', desc: 'Import project cards', icon: 'dashboard', color: 'text-blue-400', status: 'Connect' },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Integrations</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">Connect your workspace with your favorite tools.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((t, i) => (
          <div key={i} className="bg-surface-light dark:bg-surface-dark p-6 rounded-2xl shadow-soft border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-all group">
            <div className="flex justify-between items-start mb-4">
              <div className={`w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center ${t.color}`}>
                <span className="material-icons-outlined text-2xl">{t.icon}</span>
              </div>
              <button className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${t.status === 'Connected' ? 'bg-green-100 text-green-700' : 'bg-primary text-white shadow-glow hover:bg-primary-hover'}`}>
                {t.status}
              </button>
            </div>
            <h3 className="text-lg font-bold">{t.name}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">{t.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Integrations;
