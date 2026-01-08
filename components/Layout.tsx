
import React, { useState, useRef, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
  onLogout: () => void;
}

const NotificationDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const notifications = [
    { id: 1, title: 'Project Success', desc: 'Pakistan Node deployment successful', time: '2m ago', icon: 'check_circle', color: 'text-green-500', bg: 'bg-green-50' },
    { id: 2, title: 'Social Integration', desc: 'YouTube API connected to @waqasahmedwaseer', time: '1h ago', icon: 'sync', color: 'text-blue-500', bg: 'bg-blue-50' },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors relative">
        <span className="material-icons-outlined text-xl">notifications</span>
        <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-surface-light dark:border-surface-dark"></span>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-3 w-80 bg-white dark:bg-surface-dark rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
            <h3 className="font-bold">Alert Center</h3>
            <button className="text-xs text-primary font-semibold hover:underline">Clear all</button>
          </div>
          <div className="max-h-96 overflow-y-auto">
            {notifications.map((n) => (
              <div key={n.id} className="p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors flex gap-3 cursor-pointer">
                <div className={`p-2 rounded-lg ${n.bg} ${n.color} h-fit`}><span className="material-icons-outlined text-lg">{n.icon}</span></div>
                <div><p className="text-sm font-semibold">{n.title}</p><p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">{n.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const SidebarContent: React.FC<{ onLogout: () => void; closeMobile?: () => void }> = ({ onLogout, closeMobile }) => {
  const NavItem = ({ to, icon, label, badge }: any) => (
    <NavLink to={to} onClick={closeMobile} className={({ isActive }) => `flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-xl transition-all ${isActive ? 'bg-primary/10 text-primary shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'}`}>
      <span className="material-icons-outlined text-xl">{icon}</span>
      <span className="flex-1">{label}</span>
      {badge && <span className="bg-primary/10 text-primary text-[10px] font-bold px-1.5 py-0.5 rounded-full">{badge}</span>}
    </NavLink>
  );

  return (
    <div className="flex flex-col h-full">
      <div className="p-6 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white shadow-glow">
            <span className="material-icons-round text-2xl">auto_awesome</span>
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">WAW Pro</h1>
            <p className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">Waqas Ahmed Waseer</p>
          </div>
        </div>
      </div>
      <nav className="flex-1 px-4 py-6 space-y-6 overflow-y-auto">
        <div className="space-y-1">
          <p className="px-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Workspace</p>
          <NavItem to="/" icon="dashboard" label="Home" />
          <NavItem to="/projects" icon="folder" label="Projects" />
          <NavItem to="/tasks" icon="task_alt" label="Tasks" />
          <NavItem to="/calendar" icon="calendar_today" label="Calendar" />
          <NavItem to="/messages" icon="chat" label="Team Chat" />
          <NavItem to="/documents" icon="description" label="Files" />
        </div>
        <div className="space-y-1">
          <p className="px-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Systems</p>
          <NavItem to="/ai-workspace" icon="auto_awesome" label="AI Hub" />
          <NavItem to="/integrations" icon="hub" label="Integrations" />
          <NavItem to="/activity" icon="history" label="Activity Logs" />
          <NavItem to="/analytics" icon="insights" label="Insights" />
        </div>
        <div className="space-y-1">
          <p className="px-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Admin</p>
          <NavItem to="/team" icon="group" label="Members" />
          <NavItem to="/billing" icon="payments" label="Billing" />
          <NavItem to="/support" icon="help_outline" label="Support" />
          <NavItem to="/profile" icon="settings" label="Settings" />
        </div>
      </nav>
      <div className="p-4 border-t border-slate-100 dark:border-slate-800">
        <button onClick={onLogout} className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-xl transition-all">
          <span className="material-icons-outlined text-xl">logout</span> Sign Out
        </button>
      </div>
    </div>
  );
};

const Header: React.FC<{ onToggleSidebar: () => void }> = ({ onToggleSidebar }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => { document.documentElement.classList.toggle('dark'); setIsDarkMode(!isDarkMode); };

  return (
    <header className="h-16 flex items-center justify-between px-6 border-b border-slate-200 dark:border-slate-800 bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-md sticky top-0 z-20">
      <div className="flex items-center gap-4">
        <button onClick={onToggleSidebar} className="md:hidden p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"><span className="material-icons-outlined">menu</span></button>
        <div className="relative hidden sm:block"><span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400"><span className="material-icons-outlined text-lg">search</span></span><input type="text" placeholder="Search Waqas's Workspace..." className="w-80 pl-10 pr-4 py-1.5 text-sm bg-slate-100/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white" /></div>
      </div>
      <div className="flex items-center gap-3">
        <button onClick={toggleDarkMode} className="p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full"><span className="material-icons-outlined">{isDarkMode ? 'light_mode' : 'dark_mode'}</span></button>
        <NotificationDropdown />
        <NavLink to="/profile" className="flex items-center gap-2 pl-2 group">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-[10px] font-bold text-white border border-slate-200 dark:border-slate-700">WW</div>
        </NavLink>
      </div>
    </header>
  );
};

const Layout: React.FC<LayoutProps> = ({ children, onLogout }) => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark transition-colors duration-300">
      <aside className="w-64 flex-shrink-0 bg-surface-light dark:bg-surface-dark border-r border-slate-200 dark:border-slate-800 flex flex-col h-full hidden md:flex z-30 transition-colors"><SidebarContent onLogout={onLogout} /></aside>
      {isMobileSidebarOpen && <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[40] md:hidden" onClick={() => setIsMobileSidebarOpen(false)} />}
      <aside className={`fixed inset-y-0 left-0 w-72 bg-surface-light dark:bg-surface-dark z-[50] md:hidden transform transition-transform duration-300 ease-in-out flex flex-col ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}><SidebarContent onLogout={onLogout} closeMobile={() => setIsMobileSidebarOpen(false)} /></aside>
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        <div className="absolute inset-0 bg-grid pointer-events-none opacity-40"></div>
        <Header onToggleSidebar={() => setIsMobileSidebarOpen(true)} />
        <main className="flex-1 overflow-y-auto relative z-10 p-4 md:p-8 lg:p-10">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
