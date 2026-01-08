
import React from 'react';
import { NavLink } from 'react-router-dom';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  return (
    <div className="min-h-screen flex items-center justify-center relative p-6 bg-slate-50 dark:bg-slate-950">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none"></div>
      
      <div className="w-full max-w-md relative z-10 animate-in fade-in zoom-in duration-500">
        <div className="bg-surface-light dark:bg-surface-dark p-8 sm:p-10 rounded-2xl shadow-xl border border-white dark:border-slate-800 backdrop-blur-xl">
          <div className="flex flex-col items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-purple-600 rounded-xl flex items-center justify-center text-white shadow-glow mb-4">
              <span className="material-icons-round text-2xl">auto_awesome</span>
            </div>
            <h1 className="text-2xl font-bold tracking-tight">Welcome back</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Log in to manage your projects</p>
          </div>
          
          <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">Email address</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                  <span className="material-icons-outlined text-lg">mail_outline</span>
                </span>
                <input 
                  type="email" 
                  required 
                  placeholder="courtney@prodify.app" 
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                />
              </div>
            </div>
            
            <div className="space-y-1.5">
              <div className="flex justify-between">
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">Password</label>
                <NavLink to="/forgot-password" size="sm" className="text-sm font-semibold text-primary hover:underline underline-offset-4">Forgot password?</NavLink>
              </div>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                  <span className="material-icons-outlined text-lg">lock_outline</span>
                </span>
                <input 
                  type="password" 
                  required 
                  placeholder="••••••••" 
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input id="remember" type="checkbox" className="w-4 h-4 text-primary bg-slate-100 border-slate-300 rounded focus:ring-primary/20" />
              <label htmlFor="remember" className="ml-2 block text-sm text-slate-600 dark:text-slate-400">Remember me</label>
            </div>

            <button 
              type="submit" 
              className="w-full py-3.5 bg-gradient-to-r from-primary to-purple-600 text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              Sign in
            </button>
          </form>

          <div className="relative mt-8 mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase font-bold tracking-widest text-slate-400">
              <span className="px-3 bg-surface-light dark:bg-surface-dark">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 py-3 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all font-semibold text-sm">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQJUreU1vQ04wQ1FGrEn1AHZR-LByH0uMgI_Qbs0-AoU8Ngjh6CgAyw4iUiVpcpKKKToAygLXVzgO7dxevFHrX_UQVPmGM4oQiNA3kIK5c7WpQYW1rnZOMRGchjQTy7e8IudAiVxEAiQto3ug3eATVSjIIU2nUWN86QZdsjTJAE3cp6f-wMXN_f_7Ku6-nwlZE8mgPMIm8wkrk7tjC_z7ssKtzQ4IRPF-Y_ZEPw2TfSmXUzoTLYHZ1Rtm0oXT5hIkO-g811_4qA58" className="w-5 h-5" alt="Google" />
              Google
            </button>
            <button className="flex items-center justify-center gap-2 py-3 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all font-semibold text-sm">
               <span className="material-icons-round text-lg">apple</span>
               Apple
            </button>
          </div>

          <p className="mt-8 text-center text-sm text-slate-500">
            Don't have an account?{' '}
            <NavLink to="/signup" className="font-bold text-primary hover:underline underline-offset-4">Sign up for free</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
