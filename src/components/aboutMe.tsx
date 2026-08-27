"use client";

import Link from "next/link";
import { useTranslation } from "next-i18next/pages";

import vivi from "../assets/chars/vivi.png";

const pages = [
  { label: "Github", href: "https://github.com/angchou" },
  { label: "Linkedin", href: "https://www.linkedin.com/in/an-chau-499448393/" },
  {
    label: "Email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=ciigan.chau@gmail.com",
  },
  {
    label: "Resume",
    href: "",
  },
];

const info_lines = [
  "Hellooooo there! Welcome to my personal space! I built this website to give you a visual look into who I am and what I build.",
  "I care about understanding how things actually work under the hood, solving complex problems, and constantly learning new technologies to write clean, efficient code.",
  "Proficient in C++, Java, JavaScript, HTML/CSS, and MySQL, with hands-on experience building scalable full-stack applications using React and Spring Boot.",
];

export default function AboutMe() {
  const { t } = useTranslation("about_me");

  return (
    <div
      id="about"
      className="border-b border-[var(--border-color)] flex justify-center w-full px-4 sm:px-6"
    >
      <div className="border-x border-[var(--border-color)] py-6 sm:py-10 px-4 sm:px-8 w-full flex justify-center">
        <div className="flex flex-col min-[880px]:flex-row gap-6 md:gap-8 max-w-6xl cursor-default">
          <div className="w-full md:w-auto shrink-0">
            <h1 className="font-bungee text-3xl sm:text-4xl lg:text-5xl cursor-pointer tracking-wide">
              {t("title")}
            </h1>
            <div className="mt-4 flex flex-wrap gap-2">
              {pages.map((page, index) => (
                <Link
                  href={page.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  className="py-1 px-3 border border-[var(--border-color)] rounded-full hover:bg-[var(--background-hover)] hover:text-[var(--text-hover)] transition"
                >
                  {t("link." + page.label)}
                </Link>
              ))}
            </div>
            <div className="w-full flex justify-end">
              <img src={vivi.src} alt="Vivi Ortinier" className="h-30" />
            </div>
          </div>

          <div className="w-full md:w-auto md:self-stretch border-b md-[880px]:border-b-0 md:border-l border-[var(--border-color)]"></div>

          <div className="w-full text-justify flex flex-col gap-3">
            {info_lines.map((line, index) => {
              return <p key={index}>{t("info.line" + index)}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
