
import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    { id: 1, name: 'Brand Redesign', client: 'Acme Corp', status: 'In Progress', progress: 65, color: 'bg-blue-500', members: 4 },
    { id: 2, name: 'Mobile App Launch', client: 'Global Tech', status: 'Completed', progress: 100, color: 'bg-green-500', members: 6 },
    { id: 3, name: 'AI Integration', client: 'Internal', status: 'Planning', progress: 15, color: 'bg-purple-500', members: 3 },
    { id: 4, name: 'Cloud Migration', client: 'Finance Ltd', status: 'Delayed', progress: 40, color: 'bg-red-500', members: 5 },
    { id: 5, name: 'Website SEO', client: 'Startup X', status: 'In Progress', progress: 80, color: 'bg-blue-500', members: 2 },
    { id: 6, name: 'E-commerce v2', client: 'Shopify Partners', status: 'In Progress', progress: 25, color: 'bg-blue-500', members: 8 },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Manage and track your active workspace projects.</p>
        </div>
        <button className="px-6 py-2 bg-primary text-white rounded-xl text-sm font-medium shadow-glow hover:bg-primary-hover transition-all flex items-center gap-2">
          <span className="material-icons-round text-sm">add</span>
          Create New Project
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div key={p.id} className="bg-surface-light dark:bg-surface-dark p-6 rounded-2xl shadow-soft border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-all group">
            <div className="flex justify-between items-start mb-6">
              <div className={`w-12 h-12 rounded-xl ${p.color} bg-opacity-10 flex items-center justify-center`}>
                <span className={`material-icons-outlined ${p.color.replace('bg-', 'text-')}`}>folder</span>
              </div>
              <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider ${
                p.status === 'Completed' ? 'bg-green-100 text-green-700' : 
                p.status === 'Delayed' ? 'bg-red-100 text-red-700' : 
                p.status === 'Planning' ? 'bg-purple-100 text-purple-700' :
                'bg-blue-100 text-blue-700'
              }`}>
                {p.status}
              </span>
            </div>
            
            <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{p.name}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">{p.client}</p>
            
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-slate-400 uppercase tracking-tighter">Progress</span>
                <span>{p.progress}%</span>
              </div>
              <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className={`h-full ${p.color} transition-all duration-1000`} style={{ width: `${p.progress}%` }}></div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex -space-x-2">
                {[...Array(Math.min(p.members, 3))].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-surface-light dark:border-surface-dark bg-slate-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${p.id + i}`} alt="User" />
                  </div>
                ))}
                {p.members > 3 && (
                  <div className="w-8 h-8 rounded-full border-2 border-surface-light dark:border-surface-dark bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-500">
                    +{p.members - 3}
                  </div>
                )}
              </div>
              <button className="text-slate-400 hover:text-primary transition-colors">
                <span className="material-icons-outlined">more_horiz</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
