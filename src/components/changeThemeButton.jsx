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
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, []);

  const toggleTheme = () => {
    const nextState = !isDark;
    setIsDark(nextState);
    document.documentElement.classList.toggle("dark", nextState);
    localStorage.setItem("theme", nextState ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="btn-glass right-2"
    >
      {isDark ? (
        <Moon className="h-5 w-5 transition-transform duration-300 -rotate-12" />
      ) : (
        <Sun className="h-5 w-5 transition-transform duration-300 hover:rotate-45" />
      )}
    </button>
  );
}
