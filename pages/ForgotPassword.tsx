
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const ForgotPassword: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center relative p-6 bg-slate-50 dark:bg-slate-950">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none"></div>
      
      <div className="w-full max-w-md relative z-10 animate-in fade-in duration-500">
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white shadow-lg">
              <span className="material-icons-round text-2xl">auto_awesome</span>
            </div>
            <span className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">WAW Pro</span>
          </div>
        </div>
        
        <div className="bg-surface-light dark:bg-surface-dark p-8 sm:p-10 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 relative overflow-hidden">
          {!submitted ? (
            <>
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  <span className="material-icons-round text-3xl">lock_reset</span>
                </div>
                <h1 className="text-2xl font-bold mb-2">Forgot password?</h1>
                <p className="text-slate-500 dark:text-slate-400 text-sm">No worries, we'll send you reset instructions.</p>
              </div>
              
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                <div className="space-y-1.5">
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">Email address</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                      <span className="material-icons-outlined text-xl">mail_outline</span>
                    </span>
                    <input type="email" required placeholder="Enter your email" className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-primary/20 transition-all text-sm" />
                  </div>
                </div>
                
                <button type="submit" className="w-full py-3.5 bg-gradient-to-r from-primary to-purple-600 text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:opacity-90 transition-all">
                  Send reset link
                </button>
              </form>
            </>
          ) : (
            <div className="text-center animate-in fade-in slide-in-from-bottom-2">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
                <span className="material-icons-round text-3xl">check_circle</span>
              </div>
              <h1 className="text-2xl font-bold mb-2">Check your email</h1>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-8">We've sent a password reset link to your email address.</p>
              <button onClick={() => setSubmitted(false)} className="text-sm font-bold text-primary hover:underline">Resend email</button>
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 text-center">
            <NavLink to="/login" className="font-semibold text-primary hover:underline inline-flex items-center gap-1 group">
              Back to login
              <span className="material-icons-round text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </NavLink>
          </div>
        </div>
        
        <div className="text-center mt-6">
          <a href="#" className="text-sm text-slate-500 hover:text-primary transition-colors">Need help? Contact Support</a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
