"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function ChangeThemeButton() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    const isDarkMode = savedTheme ? savedTheme === "dark" : systemPrefersDark;

    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextState = !isDark;
    setIsDark(nextState);

    if (nextState) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className={`fixed top-4 right-4 z-50 p-2.5 rounded-full backdrop-blur-xl border transition-all duration-300 shadow-xl cursor-pointer hover:scale-110 active:scale-95 ${
        isDark
          ? "bg-white/80 border-2 border-[var(--background-hover)] hover:border-white/50 hover:bg-white/80"
          : "bg-black/40 border-2 border-black/15 hover:border-black/50 hover:bg-black/60"
      }`}
    >
      {isDark ? (
        <Moon className="h-5 w-5 text-black/70 transition-transform duration-300 -rotate-12 group:hover:rotate-0" />
      ) : (
        <Sun className="h-5 w-5 text-white transition-transform duration-300 rotate-0 group:hover:rotate-45" />
      )}
    </button>
  );
}
