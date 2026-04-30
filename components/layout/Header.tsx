'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/prayers', label: 'Prayers' },
  { href: '/blessings', label: 'Blessings' },
  { href: '/collections', label: 'Collections' },
  { href: '/guides', label: 'Guides' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-soft backdrop-blur-md bg-ivory/97' : 'bg-ivory'}`}
      style={{ borderBottom: '1px solid rgba(201,169,110,0.15)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-[70px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 no-underline group">
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-lg"
              style={{ background: 'linear-gradient(135deg, #C9A96E, #DFC08A)' }}>
              ✦
            </div>
            <div>
              <div className="font-display text-[1.3rem] font-semibold text-charcoal leading-tight">
                Prayers &amp; Blessings
              </div>
              <div className="font-body text-[0.6rem] text-gold uppercase tracking-[0.15em] font-medium">
                Daily Spiritual Devotionals
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}
                className="font-body text-sm font-medium text-charcoal-light px-3.5 py-2 rounded-lg no-underline transition-all duration-200 hover:bg-gold/10 hover:text-gold">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {searchOpen ? (
              <form onSubmit={handleSearch} className="flex items-center gap-1">
                <input type="search" placeholder="Search prayers..."
                  value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="border border-gold/40 rounded-lg px-3 py-1.5 text-sm bg-ivory text-charcoal outline-none w-44 font-body"
                  style={{ fontFamily: 'Manrope, sans-serif' }} />
                <button type="button" onClick={() => setSearchOpen(false)}
                  className="bg-transparent border-none cursor-pointer text-charcoal-muted text-lg px-1">✕</button>
              </form>
            ) : (
              <button onClick={() => setSearchOpen(true)} aria-label="Open search"
                className="border border-gold/30 rounded-lg px-2.5 py-1.5 cursor-pointer text-charcoal-muted bg-transparent text-base transition-all hover:border-gold/60 hover:text-gold">
                🔍
              </button>
            )}
            <Link href="#newsletter"
              className="hidden sm:block font-body text-[0.82rem] font-semibold text-ivory px-4 py-2 rounded-lg no-underline transition-all hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #C9A96E, #DFC08A)' }}>
              Subscribe
            </Link>
            <button onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden bg-transparent border-none cursor-pointer text-2xl text-charcoal" aria-label="Toggle mobile menu">
              {mobileOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden border-t py-3 flex flex-col gap-1 animate-fade-in"
            style={{ borderColor: 'rgba(201,169,110,0.15)' }}>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
                className="font-body text-base font-medium text-charcoal-light px-3 py-2.5 rounded-lg no-underline hover:bg-gold/10 hover:text-gold transition-all">
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
