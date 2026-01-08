
import React from 'react';

const Messages: React.FC = () => {
  const channels = ['#marketing', '#product-launch', '#design-ops', '#general'];
  const contacts = [
    { name: 'Arlene McCoy', status: 'online', avatar: '1' },
    { name: 'Theresa Webb', status: 'offline', avatar: '2' },
    { name: 'Jerome Bell', status: 'online', avatar: '3' },
  ];

  return (
    <div className="h-full flex gap-8 animate-in fade-in duration-500">
      <div className="w-64 shrink-0 flex flex-col space-y-8 h-full hidden lg:flex">
        <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-soft flex-1 overflow-y-auto">
          <div className="space-y-6">
            <div>
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4 px-2">Channels</h4>
              <div className="space-y-1">
                {channels.map(c => (
                  <button key={c} className="w-full flex items-center px-2 py-1.5 text-sm font-semibold text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-all group">
                    <span className="opacity-40 mr-2 group-hover:opacity-100">#</span>
                    {c.replace('#', '')}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4 px-2">Direct Messages</h4>
              <div className="space-y-1">
                {contacts.map(c => (
                  <button key={c.name} className="w-full flex items-center gap-3 px-2 py-1.5 text-sm font-semibold text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-all">
                    <div className="relative">
                      <div className="w-6 h-6 rounded-full bg-slate-200 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?u=${c.avatar}`} alt={c.name} />
                      </div>
                      <span className={`absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full border-2 border-white dark:border-slate-800 ${c.status === 'online' ? 'bg-green-500' : 'bg-slate-300'}`}></span>
                    </div>
                    {c.name.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 bg-surface-light dark:bg-surface-dark rounded-3xl border border-slate-100 dark:border-slate-800 shadow-soft overflow-hidden flex flex-col">
        <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-4">
             <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
               <span className="material-icons-round">tag</span>
             </div>
             <div>
               <h3 className="font-bold">#marketing</h3>
               <p className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">Channel History</p>
             </div>
          </div>
          <div className="flex gap-2">
            <button className="p-2 text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors">
              <span className="material-icons-outlined">search</span>
            </button>
            <button className="p-2 text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors">
              <span className="material-icons-outlined">group_add</span>
            </button>
          </div>
        </div>

        <div className="flex-1 p-6 overflow-y-auto space-y-6">
          <div className="flex gap-4">
             <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden shrink-0">
               <img src="https://i.pravatar.cc/100?u=1" alt="User" />
             </div>
             <div>
               <div className="flex items-center gap-2 mb-1">
                 <span className="font-bold text-sm">Arlene McCoy</span>
                 <span className="text-[10px] font-bold text-slate-400 uppercase">10:45 AM</span>
               </div>
               <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl rounded-tl-none border border-slate-100 dark:border-slate-800 max-w-xl">
                 <p className="text-sm leading-relaxed">Hey team! I've uploaded the new brand guidelines to the <strong>Brand Assets</strong> folder. Let me know what you think!</p>
               </div>
             </div>
          </div>

          <div className="flex gap-4">
             <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden shrink-0">
               <img src="https://i.pravatar.cc/100?u=me" alt="User" />
             </div>
             <div>
               <div className="flex items-center gap-2 mb-1">
                 <span className="font-bold text-sm text-primary">You</span>
                 <span className="text-[10px] font-bold text-slate-400 uppercase">10:48 AM</span>
               </div>
               <div className="bg-primary p-4 rounded-2xl rounded-tl-none text-white max-w-xl shadow-lg shadow-primary/10">
                 <p className="text-sm leading-relaxed">Awesome Arlene! Checking them out now.</p>
               </div>
             </div>
          </div>
        </div>

        <div className="p-4 bg-slate-50 dark:bg-slate-900/30 border-t border-slate-100 dark:border-slate-800">
           <div className="relative">
             <input type="text" placeholder="Message #marketing..." className="w-full pl-4 pr-32 py-3.5 bg-white dark:bg-surface-dark border-2 border-slate-100 dark:border-slate-800 rounded-2xl text-sm focus:ring-4 focus:ring-primary/10 transition-all shadow-sm" />
             <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2">
               <button className="p-2 text-slate-400 hover:text-primary transition-colors"><span className="material-icons-outlined">sentiment_satisfied</span></button>
               <button className="p-2 text-slate-400 hover:text-primary transition-colors"><span className="material-icons-outlined">attach_file</span></button>
               <button className="bg-primary text-white p-2 px-4 rounded-xl shadow-glow hover:bg-primary-hover transition-all">
                 <span className="material-icons-round text-sm">send</span>
               </button>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
