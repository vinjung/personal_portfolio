"use client";
import { useState, useEffect } from "react";

const navItems = [
  { id: "who",      label: "Who am I?" },
  { id: "project1", label: "AI 주식 서비스 '떡상'" },
  { id: "project2", label: "인플루언서 플랫폼 셀레드" },
  { id: "project3", label: "IMC 마케팅" },
];

export default function Navbar() {
  const [active, setActive]   = useState("who");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      const offsets = navItems.map((item) => {
        const el = document.getElementById(item.id);
        return { id: item.id, top: el ? el.getBoundingClientRect().top : Infinity };
      });
      const current = offsets.filter((o) => o.top <= 120).pop();
      if (current) setActive(current.id);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0a0f1e]/90 backdrop-blur-md border-b border-white/5 shadow-xl" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-white font-bold text-xl tracking-tight">Jung Inho</span>
          <span className="text-gray-500 text-sm hidden sm:block">inho426@naver.com</span>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-sm font-medium transition-all duration-200 relative ${
                active === item.id
                  ? "text-blue-400"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item.label}
              {active === item.id && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400 rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-400 hover:text-white"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0d1829] border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-sm font-medium text-left transition-colors ${
                active === item.id ? "text-blue-400" : "text-gray-300"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
