
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';

const data = [
  { name: 'Week 1', productivity: 40, errors: 24, quality: 80 },
  { name: 'Week 2', productivity: 60, errors: 13, quality: 85 },
  { name: 'Week 3', productivity: 85, errors: 40, quality: 78 },
  { name: 'Week 4', productivity: 70, errors: 10, quality: 90 },
  { name: 'Week 5', productivity: 95, errors: 5, quality: 95 },
  { name: 'Week 6', productivity: 100, errors: 2, quality: 98 },
];

const Analytics: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Detailed productivity and performance insights.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-medium">Export Report</button>
          <select className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-medium px-4 py-2">
            <option>Last 6 Months</option>
            <option>Last 12 Months</option>
            <option>All Time</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-surface-light dark:bg-surface-dark p-6 rounded-2xl shadow-soft border border-slate-100 dark:border-slate-800">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-bold">Team Productivity Flow</h3>
            <div className="flex gap-4">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
                <span className="text-xs font-semibold text-slate-400">Score</span>
              </div>
            </div>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorProd" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#94a3b8'}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#94a3b8'}} />
                <Tooltip 
                   contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                />
                <Area type="monotone" dataKey="productivity" stroke="#8B5CF6" strokeWidth={3} fillOpacity={1} fill="url(#colorProd)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-2xl shadow-soft border border-slate-100 dark:border-slate-800">
          <h3 className="font-bold mb-8">Quick Statistics</h3>
          <div className="space-y-6">
            {[
              { label: 'Avg Task Velocity', value: '4.2d', change: '+12%', up: true },
              { label: 'Issue Resolution', value: '98%', change: '+5%', up: true },
              { label: 'Meetings / Week', value: '12.4h', change: '-24%', up: true },
              { label: 'Focus Score', value: '82/100', change: '+2%', up: true },
            ].map((stat, i) => (
              <div key={i} className="flex items-center justify-between group">
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
                  <p className="text-xl font-bold mt-1 group-hover:text-primary transition-colors">{stat.value}</p>
                </div>
                <div className={`flex items-center gap-1 text-xs font-bold ${stat.up ? 'text-green-500' : 'text-red-500'}`}>
                  <span className="material-icons-round text-sm">{stat.up ? 'trending_up' : 'trending_down'}</span>
                  {stat.change}
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-3 bg-slate-50 dark:bg-slate-900 rounded-xl text-xs font-bold text-slate-500 hover:text-primary transition-all">
            VIEW DETAILED METRICS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
