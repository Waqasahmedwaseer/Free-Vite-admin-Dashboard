
import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToGemini } from '../services/geminiService';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hello! I'm WAW Pro AI. How can I help you manage your projects today?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const presets = [
    { label: 'Fix Bug', icon: 'bug_report' },
    { label: 'Draft Email', icon: 'email' },
    { label: 'Summarize', icon: 'summarize' },
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async (forcedInput?: string) => {
    const finalInput = forcedInput || input.trim();
    if (!finalInput || isLoading) return;

    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: finalInput }]);
    setIsLoading(true);

    const history = messages.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.text }]
    }));

    const response = await sendMessageToGemini(finalInput, history);
    
    setMessages(prev => [...prev, { role: 'model', text: response || "I'm not sure how to respond to that." }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-3">
      <a
        href="https://waseerhost.com"
        target="_blank"
        rel="noreferrer"
        className="hidden sm:inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 px-3 py-1.5 text-[11px] font-semibold text-slate-600 dark:text-slate-300 shadow-soft backdrop-blur hover:text-primary hover:border-primary/60 transition-colors"
      >
        Hosted on WaseerHost
        <span className="material-icons-outlined text-xs">open_in_new</span>
      </a>
      {isOpen ? (
        <div className="bg-surface-light dark:bg-surface-dark w-80 sm:w-96 h-[550px] rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
          <div className="p-5 bg-gradient-to-r from-primary to-purple-600 text-white flex items-center justify-between shadow-lg">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-xl backdrop-blur-md">
                <span className="material-icons-outlined">auto_awesome</span>
              </div>
              <div>
                <span className="font-bold block leading-tight text-sm">WAW Pro AI</span>
                <span className="text-[10px] font-bold text-white/70 uppercase tracking-widest">Always Thinking</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1.5 rounded-lg transition-colors">
              <span className="material-icons-outlined text-lg">close</span>
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-5 bg-slate-50 dark:bg-slate-900/50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3.5 rounded-2xl text-[13px] leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-primary text-white rounded-tr-none' 
                    : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-none border border-slate-100 dark:border-slate-700'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl rounded-tl-none shadow-sm flex gap-1">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce delay-100"></span>
                  <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce delay-200"></span>
                </div>
              </div>
            )}
          </div>
          
          <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-surface-dark space-y-4">
            <div className="flex gap-2 overflow-x-auto pb-1 hide-scrollbar">
               {presets.map(p => (
                 <button 
                  key={p.label}
                  onClick={() => handleSend(p.label)}
                  className="whitespace-nowrap flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 dark:bg-slate-800 hover:bg-primary hover:text-white dark:hover:bg-primary rounded-full text-[10px] font-bold text-slate-500 transition-all border border-slate-100 dark:border-slate-700"
                 >
                   <span className="material-icons-outlined text-xs">{p.icon}</span>
                   {p.label}
                 </button>
               ))}
            </div>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Ask me anything..." 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                className="w-full pl-5 pr-14 py-3.5 bg-slate-100 dark:bg-slate-800 border-none rounded-2xl text-[13px] focus:ring-4 focus:ring-primary/10 transition-all shadow-inner"
              />
              <button 
                onClick={() => handleSend()}
                disabled={!input.trim() || isLoading}
                className="absolute right-2 top-1.5 p-2 bg-primary text-white rounded-xl shadow-glow hover:bg-primary-hover transition-all disabled:opacity-30 disabled:shadow-none"
              >
                <span className="material-icons-round text-lg">arrow_upward</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-primary hover:bg-primary-hover text-white rounded-2xl p-4 shadow-xl hover:shadow-glow hover:-translate-y-1 transition-all flex items-center gap-3 group z-50 overflow-hidden"
        >
          <span className="material-icons-outlined">auto_awesome</span>
          <span className="max-w-0 group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-bold opacity-0 group-hover:opacity-100 text-sm">
            Ask WAW Pro AI
          </span>
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
