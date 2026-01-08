
import React from 'react';
import { NavLink } from 'react-router-dom';

interface SignupProps {
  onSignup: () => void;
}

const Signup: React.FC<SignupProps> = ({ onSignup }) => {
  return (
    <div className="min-h-screen flex items-center justify-center relative p-6 bg-slate-50 dark:bg-slate-950">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none"></div>
      
      <div className="flex flex-col md:flex-row max-w-5xl w-full gap-12 items-center relative z-10">
        <div className="hidden md:flex flex-col flex-1 space-y-8 pr-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-glow">
                <span className="material-icons-round text-2xl">auto_awesome</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tight">WAW Pro</h1>
            </div>
            <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400 leading-tight">
              Manage projects with confidence.
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-md">
              Join thousands of teams who use WAW Pro to streamline their workflow, automate tasks with AI, and collaborate seamlessly.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm p-4 rounded-xl border border-white dark:border-slate-800 shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-3">
                <span className="material-icons-round text-lg">psychology</span>
              </div>
              <h3 className="font-semibold text-sm mb-1">AI-Powered Insights</h3>
              <p className="text-xs text-slate-500">Automate repetitive tasks and get smart suggestions.</p>
            </div>
            <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm p-4 rounded-xl border border-white dark:border-slate-800 shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-green-100 text-green-600 flex items-center justify-center mb-3">
                <span className="material-icons-round text-lg">task_alt</span>
              </div>
              <h3 className="font-semibold text-sm mb-1">Task Management</h3>
              <p className="text-xs text-slate-500">Keep track of every detail with intuitive lists and boards.</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 overflow-hidden">
                  <img src={`https://picsum.photos/seed/${i + 10}/100/100`} alt="Avatar" />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-primary text-white flex items-center justify-center text-xs font-bold">
                +2k
              </div>
            </div>
            <p className="text-sm font-medium text-slate-500">Trusted by forward-thinking teams.</p>
          </div>
        </div>

        <div className="w-full max-w-md bg-surface-light dark:bg-surface-dark p-8 rounded-2xl shadow-xl border border-white dark:border-slate-800 backdrop-blur-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-purple-400"></div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold">Create your account</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Start your 14-day free trial. No credit card required.</p>
          </div>
          
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onSignup(); }}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400">First Name</label>
                <input type="text" required placeholder="Jane" className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-primary/20 text-sm" />
              </div>
              <div className="space-y-1">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400">Last Name</label>
                <input type="text" required placeholder="Doe" className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-primary/20 text-sm" />
              </div>
            </div>
            
            <div className="space-y-1">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400">Work Email</label>
              <input type="email" required placeholder="jane@company.com" className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-primary/20 text-sm" />
            </div>
            
            <div className="space-y-1">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400">Password</label>
              <input type="password" required placeholder="••••••••" className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-primary/20 text-sm" />
              <p className="text-[10px] text-slate-400">Must be at least 8 characters.</p>
            </div>
            
            <div className="flex items-start">
              <input id="terms" type="checkbox" required className="mt-1 w-4 h-4 text-primary bg-slate-100 border-slate-300 rounded focus:ring-primary/20" />
              <label htmlFor="terms" className="ml-2 block text-xs text-slate-500">
                I agree to the <a href="#" className="text-primary font-semibold hover:underline">Terms of Service</a> and <a href="#" className="text-primary font-semibold hover:underline">Privacy Policy</a>
              </label>
            </div>

            <button type="submit" className="w-full py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:bg-primary-hover transition-all mt-4">
              Create Account
            </button>
          </form>

          <div className="mt-6 text-center text-sm">
            <p className="text-slate-500">Already have an account? <NavLink to="/login" className="font-bold text-primary hover:underline">Sign in</NavLink></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
