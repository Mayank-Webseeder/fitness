import React, { useState } from 'react';
import { Mail, Lock, LogIn, LogOut } from 'lucide-react';
import FitnessDashboard from './FitnessDashboard';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  // State to simulate user authentication and navigation
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you'd validate credentials here.
    // We'll simulate a successful login for this example.
    console.log('Login attempt with:', { email, password, rememberMe });
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail('');
    setPassword('');
    setRememberMe(false);
  };

  if (isLoggedIn) {
    return (
      <>
        <FitnessDashboard />
      </>
    );
  }

  return (
    // Main container with a light background
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-[Exo_2]">
      {/* Login card container with a modern, rounded, and elevated design */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 space-y-6 transform transition-all duration-300 hover:scale-105">
        {/* Header section with a professional heading */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">Welcome Back</h1>
          <p className="mt-2 text-gray-500">Log in to your account to continue</p>
        </div>

        {/* Login form with input fields and buttons */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email input field with an icon */}
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 text-gray-900"
              required
            />
          </div>

          {/* Password input field with an icon */}
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 text-gray-900"
              required
            />
          </div>

          {/* Remember me and forgot password section */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
              Forgot password?
            </a>
          </div>

          {/* Login button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200 transform hover:scale-105"
          >
            <LogIn className="mr-2" size={20} />
            Log In
          </button>
        </form>

        {/* Sign up link */}
        <div className="text-center text-sm text-gray-500">
          Don't have an account?{' '}
          <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
