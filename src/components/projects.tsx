"use client";

import Link from "next/link";
import cactuar from "../assets/chars/catuar.png";

import { useTranslation } from "next-i18next/pages";

const projects = [
  {
    id: "coffee_pos",
    website: "https://angchou.github.io/IS208Q21-web/#/home",
    frontend_github_href: "https://github.com/angchou/coffee_pos_client",
    backend_github_href: "https://github.com/angchou/coffee_pos_server",
  },
  {
    id: "edupath",
    website: "",
    frontend_github_href: "https://github.com/angchou/edupath_frontend",
    backend_github_href: "https://github.com/angchou/edupath_server",
  },
];

export default function Projects() {
  const { t } = useTranslation("projects");

  return (
    <div
      id="projects"
      className="border-b border-[var(--border-color)] flex justify-center w-full px-4 sm:px-6"
    >
      <div className="border-x border-[var(--border-color)] py-6 sm:py-10 px-4 sm:px-8 w-full flex justify-center">
        <div className="flex flex-col gap-6 md:gap-8 w-full max-w-6xl cursor-default">
          <h1 className="text-2xl font-bungee sm:text-3xl font-bold text-[var(--text-hover)]">
            {t("title")}
          </h1>
          <div className="grid grid-cols-1 min-[1270px]:grid-cols-2 gap-4 w-full">
            {projects.map((project) => {
              return (
                <div
                  key={project.id}
                  className="relative flex flex-col py-4 px-6 border border-[var(--border-color)] rounded-br-xl rounded-tl-xl cursor-default group transition-colors duration-300"
                >
                  <img
                    src={cactuar.src}
                    alt=""
                    className="absolute h-15 right-0 bottom-0 translate-y-2 translate-x-4 rotate-25 -scale-x-100 group-hover:scale-x-100 group-hover:-rotate-25 transition duration-450"
                  />

                  <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-noticed)] lg:text-[var(--text-color)] group-hover:text-[var(--text-noticed)] transition-colors">
                    {t(project.id + ".name")}
                  </h1>

                  <div className="flex flex-wrap gap-2 mt-2 mb-3">
                    <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full border border-[var(--border-color)] bg-[var(--background-hover)] opacity-80">
                      {t(project.id + ".type")}
                    </span>
                    <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full border border-[var(--border-color)] opacity-60">
                      {t(project.id + ".role")}
                    </span>
                  </div>

                  <p className="flex-1 text-sm sm:text-base leading-relaxed opacity-85 text-justify">
                    {t(project.id + ".desc")}
                  </p>

                  <div className="flex gap-1 sm:gap-2.5 mt-5">
                    {project.frontend_github_href && (
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project.frontend_github_href}
                        className="text-xs font-medium tracking-wide py-1.5 px-3.5 border border-[var(--border-color)] rounded-full hover:bg-[var(--background-hover)] hover:text-[var(--text-hover)] transition-all flex items-center gap-1"
                      >
                        <span>{t("tag.frontend")}</span>
                      </Link>
                    )}
                    {project.backend_github_href && (
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project.backend_github_href}
                        className="text-xs font-medium tracking-wide py-1.5 px-3.5 border border-[var(--border-color)] rounded-full hover:bg-[var(--background-hover)] hover:text-[var(--text-hover)] transition-all flex items-center gap-1"
                      >
                        <span>{t("tag.backend")}</span>
                      </Link>
                    )}
                    {project.website && (
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project.website}
                        className="text-xs font-medium tracking-wide py-1.5 px-3.5 border border-[var(--border-color)] rounded-full hover:bg-[var(--background-hover)] hover:text-[var(--text-hover)] transition-all flex items-center gap-1"
                      >
                        <span>{t("tag.website")}</span>
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
