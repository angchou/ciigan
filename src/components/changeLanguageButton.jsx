"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

export default function ChangeLanguageButton() {
  const { i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleLanguage = () => {
    const currentLang = i18n.language?.slice(0, 2) || "en";
    i18n.changeLanguage(currentLang === "en" ? "vi" : "en");
  };

  if (!mounted) return null;

  const currentLang = (i18n.language?.slice(0, 2) || "en").toUpperCase();

  return (
    <button
      onClick={toggleLanguage}
      aria-label="Toggle Language"
      className="btn-glass right-16"
    >
      <Globe className="h-5 w-5 transition-transform duration-300 hover:rotate-45" />
      <span className="w-4 text-center">{currentLang}</span>
    </button>
  );
}
