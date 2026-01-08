
import React from 'react';

const Profile: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Waqas's Profile</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Manage your professional presence and workspace settings.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-2 text-sm font-medium text-white bg-primary rounded-xl shadow-glow hover:bg-primary-hover transition-all flex items-center gap-2">
            <span className="material-icons-outlined text-sm">save</span>
            Save Changes
          </button>
        </div>
      </div>

      <div className="bg-surface-light dark:bg-surface-dark p-8 rounded-2xl shadow-soft border border-slate-100 dark:border-slate-800">
        <h2 className="text-lg font-bold flex items-center gap-2 mb-8">
          <span className="material-icons-outlined text-primary">badge</span>
          Identity Details
        </h2>
        
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="flex flex-col items-center gap-4 w-full md:w-auto">
            <div className="relative group cursor-pointer">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white text-4xl font-bold ring-4 ring-white dark:ring-slate-800 shadow-xl">
                WW
              </div>
              <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="material-icons-outlined text-white text-3xl">camera_alt</span>
              </div>
            </div>
            <div className="text-center">
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] font-bold rounded-full uppercase tracking-widest">
                Verified Expert
              </span>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">Full Name</label>
              <input type="text" defaultValue="Waqas Ahmed Waseer" className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm transition-all" />
            </div>
            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">Country</label>
              <input type="text" defaultValue="Pakistan 🇵🇰" className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm transition-all" />
            </div>
            <div className="space-y-1.5 md:col-span-2">
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">Primary Email</label>
              <input type="email" defaultValue="hi@waqasahmedwaseer.com" className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm transition-all" />
            </div>
            <div className="space-y-1.5 md:col-span-2">
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">About Me</label>
              <textarea rows={3} className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm transition-all resize-none" defaultValue="Senior Project Strategist and Tech Enthusiast from Pakistan. Building scalable workflows and empowering teams through AI." />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-surface-light dark:bg-surface-dark p-8 rounded-2xl shadow-soft border border-slate-100 dark:border-slate-800">
        <h2 className="text-lg font-bold flex items-center gap-2 mb-8">
          <span className="material-icons-outlined text-primary">public</span>
          Social Media Presence
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              label: 'LinkedIn',
              icon: 'link',
              handle: '@waqasahmedwaseer',
              url: 'https://www.linkedin.com/in/waqasahmedwaseer',
              color: 'text-blue-600',
            },
            {
              label: 'YouTube',
              icon: 'play_circle',
              handle: '@waqasahmedwaseer',
              url: 'https://www.youtube.com/@waqasahmedwaseer',
              color: 'text-red-600',
            },
            {
              label: 'Instagram',
              icon: 'camera_alt',
              handle: '@waqasahmedwaseer',
              url: 'https://instagram.com/waqasahmedwaseer',
              color: 'text-pink-600',
            },
            {
              label: 'Facebook',
              icon: 'facebook',
              handle: '@waqasahmedwaseer',
              url: 'https://facebook.com/waqasahmedwaseer',
              color: 'text-blue-700',
            },
          ].map((social, i) => (
            <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 group hover:border-primary transition-all">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-white dark:bg-surface-dark shadow-sm ${social.color}`}>
                <span className="material-icons-outlined">{social.icon}</span>
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{social.label}</p>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold hover:text-primary transition-colors"
                >
                  {social.handle}
                </a>
              </div>
              <a
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label={`Open ${social.label}`}
              >
                <span className="material-icons-outlined text-lg">open_in_new</span>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-red-50 dark:bg-red-900/10 p-8 rounded-2xl border border-red-100 dark:border-red-900/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h3 className="text-red-700 dark:text-red-400 font-bold">Privacy Controls</h3>
          <p className="text-sm text-red-600/70 dark:text-red-400/70">Manage visibility and account data export settings.</p>
        </div>
        <button className="px-6 py-2.5 bg-red-600 text-white rounded-xl text-sm font-semibold shadow-lg shadow-red-500/20 hover:bg-red-700 transition-all">
          Manage Privacy
        </button>
      </div>
    </div>
  );
};

export default Profile;
