
import React from 'react';

const Tasks: React.FC = () => {
  const columns = [
    { title: 'To Do', count: 3, tasks: [
      { id: 101, title: 'Define project scope', priority: 'High', date: 'Oct 24' },
      { id: 102, title: 'Research competitors', priority: 'Medium', date: 'Oct 26' },
      { id: 103, title: 'Draft budget', priority: 'Low', date: 'Nov 01' },
    ]},
    { title: 'In Progress', count: 2, tasks: [
      { id: 104, title: 'Design system updates', priority: 'High', date: 'Oct 22' },
      { id: 105, title: 'Landing page copy', priority: 'Medium', date: 'Oct 25' },
    ]},
    { title: 'Review', count: 1, tasks: [
      { id: 106, title: 'Frontend components', priority: 'High', date: 'Oct 20' },
    ]},
    { title: 'Done', count: 12, tasks: [
      { id: 107, title: 'Stakeholder interview', priority: 'Low', date: 'Oct 15' },
    ]},
  ];

  return (
    <div className="h-full flex flex-col space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Tasks</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Visual board for project tracking and management.</p>
        </div>
        <div className="flex gap-3">
          <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
            <button className="px-3 py-1.5 text-xs font-bold bg-white dark:bg-surface-dark shadow-sm rounded-lg">Board</button>
            <button className="px-3 py-1.5 text-xs font-bold text-slate-500">List</button>
            <button className="px-3 py-1.5 text-xs font-bold text-slate-500">Timeline</button>
          </div>
          <button className="px-4 py-2 bg-primary text-white rounded-xl text-sm font-medium shadow-glow flex items-center gap-2">
            <span className="material-icons-round text-sm">add_task</span>
            New Task
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-x-auto pb-4">
        <div className="flex gap-6 h-full min-w-[1000px]">
          {columns.map((col, idx) => (
            <div key={idx} className="flex-1 min-w-[280px] bg-slate-100/50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800/50 flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-sm uppercase tracking-wider">{col.title}</h3>
                  <span className="bg-slate-200 dark:bg-slate-800 text-[10px] font-bold px-2 py-0.5 rounded-full">{col.count}</span>
                </div>
                <button className="p-1 hover:bg-white dark:hover:bg-slate-800 rounded-lg transition-colors">
                  <span className="material-icons-outlined text-sm">more_horiz</span>
                </button>
              </div>

              <div className="space-y-4">
                {col.tasks.map((task) => (
                  <div key={task.id} className="bg-white dark:bg-surface-dark p-4 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all cursor-grab active:cursor-grabbing group">
                    <div className="flex justify-between items-start mb-3">
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded uppercase ${
                        task.priority === 'High' ? 'bg-red-50 text-red-600' :
                        task.priority === 'Medium' ? 'bg-orange-50 text-orange-600' :
                        'bg-blue-50 text-blue-600'
                      }`}>
                        {task.priority}
                      </span>
                      <button className="opacity-0 group-hover:opacity-100 text-slate-300 transition-opacity">
                        <span className="material-icons-outlined text-sm">edit</span>
                      </button>
                    </div>
                    <h4 className="text-sm font-semibold mb-4 leading-tight">{task.title}</h4>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-50 dark:border-slate-800">
                      <div className="flex items-center gap-1 text-slate-400">
                        <span className="material-icons-outlined text-xs">calendar_today</span>
                        <span className="text-[10px] font-medium">{task.date}</span>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-slate-100 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?u=${task.id}`} alt="User" />
                      </div>
                    </div>
                  </div>
                ))}
                <button className="w-full py-2 flex items-center justify-center gap-2 text-xs font-bold text-slate-400 hover:text-primary transition-colors border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl mt-2">
                  <span className="material-icons-round text-sm">add</span>
                  Add Task
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
