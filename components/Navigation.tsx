'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-slate-950 via-slate-900 to-transparent backdrop-blur-md border-b border-slate-800/50">
  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
    {/* Logo */}
    <div className="flex items-center gap-3 group cursor-pointer">
      <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.5 1.5H3a1.5 1.5 0 0 0-1.5 1.5v12a1.5 1.5 0 0 0 1.5 1.5h14a1.5 1.5 0 0 0 1.5-1.5V8.5M10.5 1.5v5h5M10.5 1.5L17 8.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div className="hidden sm:block">
        <h1 className="text-lg font-bold text-white tracking-tight">TechBuild</h1>
        <p className="text-xs text-cyan-400/80 font-medium">Workspace</p>
      </div>
    </div>

    {/* Desktop Navigation */}
    <div className="hidden md:flex items-center gap-1">
      <Link href="/" className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 relative group">
        Home
        <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
      </Link>
      
      <a href="#portfolio" className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 relative group">
        Portfolio
        <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
      </a>

      <a href="#features" className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 relative group">
        Features
        <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
      </a>

      <a href="#pricing" className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 relative group">
        Pricing
        <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
      </a>

      <a href="#contact" className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 relative group">
        Contact
        <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
      </a>
    </div>

    {/* CTA Button & Mobile Menu Toggle */}
    <div className="flex items-center gap-3">
      <button className="hidden sm:inline-flex px-6 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 text-sm">
        Get Started
      </button>
      
      <button className="md:hidden p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300" aria-label="Toggle menu">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </div>

  {/* Accent line */}
  <div className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-cyan-500/0 via-cyan-400/50 to-blue-500/0"></div>
</nav>
  );
}