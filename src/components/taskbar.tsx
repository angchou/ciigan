"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  UserRound,
  BriefcaseBusiness,
  Folder,
  BookOpenText,
  BicepsFlexed,
  ShieldCheck,
  Phone,
} from "lucide-react";
import GithubIcon from "./githubIcon";

const iconSize = "h-4 w-4 sm:h-5 sm:w-5 text-[var(--background-reversed)]";

const navItems = [
  { id: "about", icon: <UserRound className={iconSize} /> },
  {
    id: "experiences",
    icon: <BriefcaseBusiness className={iconSize} />,
  },
  { name: "Projects", id: "projects", icon: <Folder className={iconSize} /> },
  {
    id: "education",
    icon: <BookOpenText className={iconSize} />,
  },
  { id: "stacks", icon: <BicepsFlexed className={iconSize} /> },
  {
    id: "certificates",
    icon: <ShieldCheck className={iconSize} />,
  },
  { id: "github", icon: <GithubIcon h={iconSize} /> },
  { id: "contact", icon: <Phone className={iconSize} /> },
];

export default function Taskbar() {
  const { t } = useTranslation("taskbar");
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 },
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <nav className="fixed bottom-3 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1.5 p-1 sm:p-2 rounded-full bg-[var(--background)]/20 backdrop-blur-xl border border-[var(--border-color)]/60 shadow-2xl">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;

          return (
            <div key={item.id} className="group relative">
              <a
                href={`#${item.id}`}
                onClick={(e) => handleScroll(e, item.id)}
                className={`relative flex items-center justify-center p-2.5 rounded-full transition-all text-white/80 hover:text-white hover:bg-[var(--background-secondary)]/15 group-hover:-translate-y-1 border border-transparent group-hover:border-[var(--border-color)]
                    `}
              >
                {item.icon}

                <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-all duration-150 origin-bottom px-2.5 py-1 text-[11px] font-medium text-[var(--background-reversed)] bg-[var(--background)]/90 border border-[var(--border-color)]/10 rounded-md shadow-lg whitespace-nowrap pointer-events-none z-50">
                  {t(item.id + ".name")}
                </span>
              </a>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
