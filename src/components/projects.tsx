import Link from "next/link";

import cactuar from "../assets/chars/catuar.png";

const projects = [
  {
    name: "Coffee POS",
    type: "School project",
    role: "Fullstack developer",
    desc: "Developed a scalable POS system, modernizing manual store management. Reduced cashier checkout times by 50%, guaranteed 100% real-time inventory precision, and delivered actionable revenue insights via interactive analytics dashboards",
    website: "https://angchou.github.io/IS208Q21-web/#/home",
    frontend_github_href: "https://github.com/angchou/coffee_pos_client",
    backend_github_href: "https://github.com/angchou/coffee_pos_server",
  },
  {
    name: "Edupath",
    type: "School project",
    role: "Fullstack developer",
    desc: "Developed a scalable course registration and management platform empowering instructors to publish content and students to seamlessly enroll and track learning progress. Built high-performance REST APIs with Spring Boot, responsive UI using React, and modeled efficient database schemas with Oracle.",
    website: "",
    frontend_github_href: "https://github.com/angchou/edupath_frontend",
    backend_github_href: "https://github.com/angchou/edupath_server",
  },
];

export default function Projects() {
  return (
    <div className="border-b border-[var(--border-color)] flex justify-center w-full px-4 sm:px-6">
      <div className="border-x border-[var(--border-color)] py-6 sm:py-10 px-4 sm:px-8 w-full flex justify-center">
        <div className="flex flex-col gap-6 md:gap-8 w-full max-w-6xl cursor-default">
          <h1 className="text-2xl font-bungee sm:text-3xl font-bold text-[var(--text-hover)]">
            Projects
          </h1>
          <div className="grid grid-cols-1 min-[1270px]:grid-cols-2 gap-4 w-full">
            {projects.map((project, index) => {
              return (
                <div
                  key={index}
                  className="relative flex flex-col py-4 px-6 border border-[var(--border-color)] rounded-br-xl rounded-tl-xl cursor-default group transition-colors duration-300"
                >
                  <img
                    src={cactuar.src}
                    alt=""
                    className="absolute h-15 right-0 bottom-0 translate-y-2 translate-x-4 rotate-25 -scale-x-100 group-hover:scale-x-100 group-hover:-rotate-25 transition duration-450"
                  />

                  <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-color)] group-hover:text-[var(--text-noticed)] transition-colors">
                    {project.name}
                  </h1>

                  <div className="flex flex-wrap gap-2 mt-2 mb-3">
                    <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full border border-[var(--border-color)] bg-[var(--background-hover)] opacity-80">
                      {project.type}
                    </span>
                    <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full border border-[var(--border-color)] opacity-60">
                      {project.role}
                    </span>
                  </div>

                  <p className="flex-1 text-sm sm:text-base leading-relaxed opacity-85 text-justify">
                    {project.desc}
                  </p>

                  <div className="flex gap-2.5 mt-5">
                    {project.frontend_github_href && (
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project.frontend_github_href}
                        className="text-xs font-medium tracking-wide py-1.5 px-3.5 border border-[var(--border-color)] rounded-full hover:bg-[var(--background-hover)] hover:text-[var(--text-hover)] transition-all flex items-center gap-1"
                      >
                        <span>Frontend</span>
                      </Link>
                    )}
                    {project.backend_github_href && (
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project.backend_github_href}
                        className="text-xs font-medium tracking-wide py-1.5 px-3.5 border border-[var(--border-color)] rounded-full hover:bg-[var(--background-hover)] hover:text-[var(--text-hover)] transition-all flex items-center gap-1"
                      >
                        <span>Backend</span>
                      </Link>
                    )}
                    {project.website && (
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project.website}
                        className="text-xs font-medium tracking-wide py-1.5 px-3.5 border border-[var(--border-color)] rounded-full hover:bg-[var(--background-hover)] hover:text-[var(--text-hover)] transition-all flex items-center gap-1"
                      >
                        <span>Website</span>
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
