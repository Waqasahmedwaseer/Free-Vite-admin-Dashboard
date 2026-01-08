
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';

const data = [
  { name: 'Mon', value: 400 },
  { name: 'Tue', value: 300 },
  { name: 'Wed', value: 200 },
  { name: 'Thu', value: 278 },
  { name: 'Fri', value: 189 },
  { name: 'Sat', value: 239 },
  { name: 'Sun', value: 349 },
];

const pipelineData = [
  { name: 'Negotiation', value: 45, color: '#8B5CF6' },
  { name: 'Proposal', value: 25, color: '#A78BFA' },
  { name: 'Qualified', value: 15, color: '#C4B5FD' },
  { name: 'Lost', value: 15, color: '#E2E8F0' },
];

const Dashboard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Welcome back, Courtney! Here's your summary for today.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-medium shadow-sm hover:bg-slate-50 transition-all">
            Last 30 Days
          </button>
          <button className="px-4 py-2 bg-primary text-white rounded-xl text-sm font-medium shadow-glow hover:bg-primary-hover transition-all flex items-center gap-2">
            <span className="material-icons-round text-sm">add</span>
            New Project
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Revenue', value: '$45,231.89', change: '+12.5%', icon: 'attach_money', color: 'text-purple-600', bg: 'bg-purple-50' },
          { label: 'Active Projects', value: '12', change: '+8.2%', icon: 'folder_open', color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: 'New Clients', value: '48', change: '-2.4%', icon: 'people', color: 'text-orange-600', bg: 'bg-orange-50' },
          { label: 'Task Completion', value: '94.5%', change: '0.0%', icon: 'check_circle', color: 'text-teal-600', bg: 'bg-teal-50' },
        ].map((stat, i) => (
          <div key={i} className="bg-surface-light dark:bg-surface-dark p-6 rounded-2xl shadow-soft border border-slate-100 dark:border-slate-800 group hover:-translate-y-1 transition-all">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-2 rounded-xl ${stat.bg} ${stat.color}`}>
                <span className="material-icons-outlined text-2xl">{stat.icon}</span>
              </div>
              <span className={`text-xs font-semibold px-2 py-1 rounded-full ${stat.change.startsWith('+') ? 'bg-green-100 text-green-700' : stat.change.startsWith('-') ? 'bg-red-100 text-red-700' : 'bg-slate-100 text-slate-700'}`}>
                {stat.change}
              </span>
            </div>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{stat.label}</p>
            <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-surface-light dark:bg-surface-dark p-6 rounded-2xl shadow-soft border border-slate-100 dark:border-slate-800">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-lg font-bold">Revenue Analytics</h2>
            <button className="p-1 text-slate-400 hover:text-primary transition-colors">
              <span className="material-icons-outlined">more_horiz</span>
            </button>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748B' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748B' }} />
                <Tooltip 
                  cursor={{ fill: 'rgba(139, 92, 246, 0.05)' }} 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                />
                <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={40}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 3 ? '#8B5CF6' : '#C4B5FD'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-2xl shadow-soft border border-slate-100 dark:border-slate-800">
          <h2 className="text-lg font-bold mb-6">Sales Pipeline</h2>
          <div className="h-[200px] flex items-center justify-center relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pipelineData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pipelineData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-2xl font-bold">85%</span>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Goal reached</span>
            </div>
          </div>
          <div className="space-y-4 mt-6">
            {pipelineData.map((item, i) => (
              <div key={i} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></span>
                  <span className="text-slate-500 dark:text-slate-400">{item.name}</span>
                </div>
                <span className="font-semibold">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-12">
        <div className="lg:col-span-2 bg-surface-light dark:bg-surface-dark rounded-2xl shadow-soft border border-slate-100 dark:border-slate-800 overflow-hidden">
          <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
            <h2 className="text-lg font-bold">Recent Activity</h2>
            <button className="text-sm font-semibold text-primary hover:text-primary-hover">View All</button>
          </div>
          <div className="divide-y divide-slate-50 dark:divide-slate-800">
            {[
              { user: 'Courtney Henry', action: 'created a new project', target: 'Marketing Dashboard Redesign', time: '2 mins ago', unread: true },
              { user: 'James Duvall', action: 'uploaded 3 files to', target: 'Brand Guidelines', time: '2 hours ago' },
              { user: 'Annette Cooper', action: 'completed task', target: 'Wireframe Homepage', time: '5 hours ago', unread: true },
              { user: 'Brooklyn Simmons', action: 'joined the team', target: 'Product Launch', time: 'Yesterday' },
            ].map((act, i) => (
              <div key={i} className="p-4 flex items-center gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex-shrink-0 flex items-center justify-center font-bold text-slate-500">
                  {act.user.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm">
                    <span className="font-semibold">{act.user}</span>{' '}
                    <span className="text-slate-500 dark:text-slate-400">{act.action}</span>{' '}
                    <span className="font-medium text-slate-900 dark:text-slate-100">{act.target}</span>
                  </p>
                  <p className="text-xs text-slate-400 mt-1">{act.time}</p>
                </div>
                {act.unread && <span className="w-2 h-2 rounded-full bg-primary ring-4 ring-primary/20"></span>}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary to-purple-700 p-6 rounded-2xl shadow-xl text-white relative overflow-hidden group">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-transform"></div>
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-6">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 p-4 rounded-xl flex items-center gap-3 transition-all transform hover:translate-x-1">
                <span className="material-icons-outlined">add_task</span>
                <span className="font-medium">Create New Task</span>
              </button>
              <button className="w-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 p-4 rounded-xl flex items-center gap-3 transition-all transform hover:translate-x-1">
                <span className="material-icons-outlined">person_add</span>
                <span className="font-medium">Invite Member</span>
              </button>
              <button className="w-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 p-4 rounded-xl flex items-center gap-3 transition-all transform hover:translate-x-1">
                <span className="material-icons-outlined">summarize</span>
                <span className="font-medium">Generate Report</span>
              </button>
            </div>
            <div className="mt-8 p-4 bg-white/10 rounded-xl">
              <p className="text-xs font-medium opacity-80 leading-relaxed italic">
                "Tip: Use the Ask AI button in the corner for automated project status reports."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
