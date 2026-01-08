
import React, { useState } from 'react';
import { User } from '../types';

const INITIAL_MEMBERS: User[] = [
  { id: '1', firstName: 'Courtney', lastName: 'Henry', email: 'courtney.henry@prodify.app', avatar: '', role: 'Admin', status: 'Active', lastActive: 'Just now' },
  { id: '2', firstName: 'Arlene', lastName: 'McCoy', email: 'arlene.mccoy@example.com', avatar: '', role: 'Editor', status: 'Active', lastActive: '2 hours ago' },
  { id: '3', firstName: 'Theresa', lastName: 'Webb', email: 'theresa.webb@example.com', avatar: '', role: 'Viewer', status: 'Pending', lastActive: '1 day ago' },
  { id: '4', firstName: 'Darrell', lastName: 'Steward', email: 'darrell.steward@example.com', avatar: '', role: 'Editor', status: 'Active', lastActive: '3 days ago' },
  { id: '5', firstName: 'Jerome', lastName: 'Bell', email: 'jerome.bell@example.com', avatar: '', role: 'Viewer', status: 'Inactive', lastActive: '2 weeks ago' },
];

const Team: React.FC = () => {
  const [search, setSearch] = useState('');
  const [members] = useState<User[]>(INITIAL_MEMBERS);

  const filtered = members.filter(m => 
    `${m.firstName} ${m.lastName}`.toLowerCase().includes(search.toLowerCase()) ||
    m.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Team Members</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Manage who has access to this workspace and assign roles.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 text-sm font-medium bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-50 transition-all flex items-center gap-2">
            <span className="material-icons-outlined text-sm">file_download</span>
            Export
          </button>
          <button className="px-6 py-2 text-sm font-medium text-white bg-primary rounded-xl shadow-glow hover:bg-primary-hover transition-all flex items-center gap-2">
            <span className="material-icons-outlined text-sm">person_add</span>
            Invite People
          </button>
        </div>
      </div>

      <div className="bg-surface-light dark:bg-surface-dark rounded-2xl shadow-soft border border-slate-100 dark:border-slate-800 overflow-hidden">
        <div className="p-4 flex flex-col sm:flex-row gap-4 items-center justify-between border-b border-slate-100 dark:border-slate-800">
          <div className="relative w-full sm:w-80">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
              <span className="material-icons-outlined text-lg">search</span>
            </span>
            <input 
              type="text" 
              placeholder="Search members..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 dark:bg-slate-900 border-slate-100 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>
          <div className="flex items-center gap-3">
            <select className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-800 rounded-xl text-sm px-4 py-2 focus:ring-2 focus:ring-primary/20">
              <option>All Roles</option>
              <option>Admin</option>
              <option>Editor</option>
              <option>Viewer</option>
            </select>
            <button className="p-2 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-xl transition-all">
              <span className="material-icons-outlined">filter_list</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50">
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">Member</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">Role</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">Status</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">Last Active</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-400 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {filtered.map((m) => (
                <tr key={m.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors group">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary-light/30 text-primary flex items-center justify-center font-bold text-sm">
                        {m.firstName.charAt(0)}{m.lastName.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{m.firstName} {m.lastName}</p>
                        <p className="text-xs text-slate-400">{m.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium">{m.role}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${
                      m.status === 'Active' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                      m.status === 'Pending' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
                      'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        m.status === 'Active' ? 'bg-green-500' : m.status === 'Pending' ? 'bg-yellow-500' : 'bg-slate-400'
                      }`}></span>
                      {m.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-slate-500 dark:text-slate-400">{m.lastActive}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/5 rounded-lg transition-all">
                        <span className="material-icons-outlined text-lg">edit</span>
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all">
                        <span className="material-icons-outlined text-lg">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <p className="text-xs text-slate-400 font-medium">
            Showing <span className="text-slate-900 dark:text-white">1</span> to <span className="text-slate-900 dark:text-white">{filtered.length}</span> of <span className="text-slate-900 dark:text-white">48</span> results
          </p>
          <div className="flex gap-2">
            <button className="px-4 py-1.5 text-xs font-bold border border-slate-200 dark:border-slate-800 rounded-lg hover:bg-slate-50 transition-all disabled:opacity-50" disabled>
              Previous
            </button>
            <button className="px-4 py-1.5 text-xs font-bold border border-slate-200 dark:border-slate-800 rounded-lg hover:bg-slate-50 transition-all">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
