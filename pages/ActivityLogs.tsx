
import React from 'react';

const ActivityLogs: React.FC = () => {
  const logs = [
    { event: 'Login Successful', user: 'Waqas Ahmed Waseer', ip: '182.180.12.33', time: 'Just now', type: 'security' },
    { event: 'Project Created', user: 'Waqas Ahmed Waseer', ip: '182.180.12.33', time: '2h ago', type: 'action' },
    { event: 'Billing Updated', user: 'Waqas Ahmed Waseer', ip: '182.180.12.33', time: 'Yesterday', type: 'billing' },
    { event: 'Member Invited', user: 'Waqas Ahmed Waseer', ip: '182.180.12.33', time: '3 days ago', type: 'action' },
    { event: 'Password Reset Request', user: 'Waqas Ahmed Waseer', ip: '182.180.12.33', time: 'Oct 20', type: 'security' },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">System Activity</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">Audit logs and security events for Waqas's workspace.</p>
      </div>

      <div className="bg-surface-light dark:bg-surface-dark rounded-3xl border border-slate-100 dark:border-slate-800 shadow-soft overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50">
                <th className="px-6 py-4 text-[10px] font-bold uppercase text-slate-400">Event</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase text-slate-400">User Agent</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase text-slate-400">IP Address</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase text-slate-400">Timestamp</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
              {logs.map((log, i) => (
                <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <span className={`w-2 h-2 rounded-full ${log.type === 'security' ? 'bg-red-500' : log.type === 'billing' ? 'bg-blue-500' : 'bg-green-500'}`}></span>
                      <span className="text-sm font-semibold">{log.event}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs font-medium text-slate-500">{log.user}</td>
                  <td className="px-6 py-4 text-xs font-bold text-slate-400">{log.ip}</td>
                  <td className="px-6 py-4 text-xs font-bold text-slate-500">{log.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ActivityLogs;
