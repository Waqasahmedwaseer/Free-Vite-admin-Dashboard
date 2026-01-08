
import React from 'react';

const Calendar: React.FC = () => {
  const days = Array.from({ length: 35 }, (_, i) => i - 3); // Mock Oct-Nov transition
  const events = [
    { day: 12, title: 'Product Review', type: 'meeting', color: 'bg-blue-500' },
    { day: 15, title: 'Design Sprint', type: 'task', color: 'bg-purple-500' },
    { day: 22, title: 'Client Call', type: 'meeting', color: 'bg-orange-500' },
    { day: 28, title: 'Launch Day', type: 'event', color: 'bg-green-500' },
  ];

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Schedule</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Plan and coordinate team milestones and deadlines.</p>
        </div>
        <div className="flex gap-3">
          <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
            <button className="px-4 py-1.5 text-xs font-bold bg-white dark:bg-surface-dark shadow-sm rounded-lg">Month</button>
            <button className="px-4 py-1.5 text-xs font-bold text-slate-500">Week</button>
            <button className="px-4 py-1.5 text-xs font-bold text-slate-500">Day</button>
          </div>
          <button className="px-6 py-2 bg-primary text-white rounded-xl text-sm font-medium shadow-glow flex items-center gap-2">
            <span className="material-icons-round text-sm">add</span>
            New Event
          </button>
        </div>
      </div>

      <div className="bg-surface-light dark:bg-surface-dark rounded-3xl border border-slate-100 dark:border-slate-800 shadow-soft overflow-hidden">
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <h2 className="text-xl font-bold">November 2024</h2>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors border border-slate-200 dark:border-slate-700">
              <span className="material-icons-round">chevron_left</span>
            </button>
            <button className="px-4 py-2 text-sm font-bold border border-slate-200 dark:border-slate-700 rounded-lg">Today</button>
            <button className="p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors border border-slate-200 dark:border-slate-700">
              <span className="material-icons-round">chevron_right</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-7 border-b border-slate-100 dark:border-slate-800">
          {weekDays.map(day => (
            <div key={day} className="py-3 text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 dark:bg-slate-900/50">
              {day}
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-7 border-l border-slate-100 dark:border-slate-800">
          {days.map((day, i) => {
            const isCurrentMonth = day > 0 && day <= 30;
            const dayEvents = events.filter(e => e.day === day);
            
            return (
              <div key={i} className={`min-h-[140px] p-2 border-r border-b border-slate-100 dark:border-slate-800 relative transition-colors ${isCurrentMonth ? 'bg-white dark:bg-surface-dark' : 'bg-slate-50/50 dark:bg-slate-900/20 text-slate-300'}`}>
                <span className={`text-sm font-bold ${day === 24 ? 'w-7 h-7 flex items-center justify-center bg-primary text-white rounded-full' : ''}`}>
                  {day > 0 ? (day > 30 ? day - 30 : day) : day + 31}
                </span>
                
                <div className="mt-2 space-y-1">
                  {dayEvents.map((e, j) => (
                    <div key={j} className={`${e.color} text-white p-1.5 rounded-lg text-[10px] font-bold truncate cursor-pointer hover:opacity-90 transition-opacity`}>
                      {e.title}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
