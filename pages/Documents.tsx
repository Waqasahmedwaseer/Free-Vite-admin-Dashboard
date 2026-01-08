
import React from 'react';

const Documents: React.FC = () => {
  const folders = [
    { name: 'Brand Assets', items: 12, color: 'text-blue-500' },
    { name: 'Marketing Plans', items: 4, color: 'text-purple-500' },
    { name: 'Financials', items: 8, color: 'text-green-500' },
    { name: 'Team Manuals', items: 15, color: 'text-orange-500' },
  ];

  const files = [
    { name: 'Logo_Final.svg', size: '1.2 MB', date: '2h ago', type: 'image' },
    { name: 'Q4_Strategy.pdf', size: '4.5 MB', date: 'Yesterday', type: 'pdf' },
    { name: 'Budget_2025.xlsx', size: '320 KB', date: '3 days ago', type: 'sheet' },
    { name: 'Landing_Mockup.fig', size: '12 MB', date: 'Oct 15', type: 'design' },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Documents</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Manage and collaborate on project assets and files.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">New Folder</button>
          <button className="px-6 py-2 bg-primary text-white rounded-xl text-sm font-medium shadow-glow flex items-center gap-2">
            <span className="material-icons-round text-sm">upload</span>
            Upload File
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {folders.map((f, i) => (
          <div key={i} className="bg-surface-light dark:bg-surface-dark p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-soft hover:shadow-lg transition-all group cursor-pointer">
            <div className={`w-12 h-12 rounded-xl bg-opacity-10 mb-4 flex items-center justify-center ${f.color.replace('text-', 'bg-')}`}>
              <span className={`material-icons-round text-2xl ${f.color}`}>folder</span>
            </div>
            <h3 className="font-bold">{f.name}</h3>
            <p className="text-xs text-slate-400 mt-1">{f.items} items</p>
          </div>
        ))}
      </div>

      <div className="bg-surface-light dark:bg-surface-dark rounded-3xl border border-slate-100 dark:border-slate-800 shadow-soft overflow-hidden">
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <h2 className="text-lg font-bold">Recent Files</h2>
          <button className="text-sm font-bold text-primary hover:underline">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50">
                <th className="px-6 py-4 text-[10px] font-bold uppercase text-slate-400">Name</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase text-slate-400">Size</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase text-slate-400">Last Modified</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase text-slate-400 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
              {files.map((file, i) => (
                <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors group">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                        <span className="material-icons-outlined text-lg text-slate-500">
                          {file.type === 'pdf' ? 'picture_as_pdf' : 
                           file.type === 'image' ? 'image' : 
                           file.type === 'sheet' ? 'table_view' : 'description'}
                        </span>
                      </div>
                      <span className="text-sm font-medium">{file.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs font-bold text-slate-500">{file.size}</td>
                  <td className="px-6 py-4 text-xs font-bold text-slate-500">{file.date}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-slate-300 hover:text-primary transition-colors">
                      <span className="material-icons-outlined">more_horiz</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Documents;
