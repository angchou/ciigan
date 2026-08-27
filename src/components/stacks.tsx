import cplusplus from "../assets/cplusplus.png";
import java from "../assets/java.png";
import javascript from "../assets/javascript.png";
import mysql from "../assets/mysql.png";
import node from "../assets/node.png";
import react from "../assets/react.png";
import vue from "../assets/vue.png";
import tailwind from "../assets/tailwind.png";
import python from "../assets/python.png";
import spring from "../assets/springboot.png";
import jwt from "../assets/jwt.png";
import oauth2 from "../assets/oauth2.png";

const tech_stacks = [
  {
    name: "front-end",
    type: "technology",
    list: [
      { key: "react", label: "React", src: react },
      { key: "vue", label: "Vue.js", src: vue },
      { key: "tailwind", label: "Tailwind CSS", src: tailwind },
    ],
  },
  {
    name: "back-end",
    type: "technology",
    list: [
      { key: "java", label: "Java", src: java },
      { key: "node", label: "Node.js", src: node },
      { key: "python", label: "Python", src: python },
      { key: "cplusplus", label: "C++", src: cplusplus },
      { key: "spring", label: "Spring Boot", src: spring },
    ],
  },
  {
    name: "database",
    type: "management",
    list: [{ key: "mysql", label: "MySQL", src: mysql }],
  },
  {
    name: "security",
    type: "tools",
    list: [
      { key: "jwt", label: "JSON Web Token", src: jwt },
      { key: "oauth2", label: "OAuth 2.0", src: oauth2 },
    ],
  },
];

export default function Stacks() {
  return (
    <div
      id="stacks"
      className="border-b border-[var(--border-color)] flex justify-center w-full px-4 sm:px-6"
    >
      <div className="border-x border-[var(--border-color)] py-6 sm:py-10 px-4 sm:px-8 w-full flex justify-center">
        <div className="flex w-full flex-col gap-6 md:gap-8 max-w-6xl cursor-default">
          <h1 className="font-bungee text-2xl sm:text-3xl font-bold text-[var(--text-hover)]">
            Stacks
          </h1>

          <div className="grid grid-cols-1 min-[1270px]:grid-cols-2 gap-4 w-full">
            {tech_stacks.map((stack, index) => {
              return (
                <div
                  key={index}
                  className="relative flex flex-col justify-between py-5 px-6 border border-[var(--border-color)] bg-[var(--background-color)] rounded-xl cursor-default w-full"
                >
                  <div className="flex items-center justify-between">
                    <h1 className="uppercase text-lg sm:text-xl font-bold tracking-wider text-[var(--text-color)] transition-colors">
                      {stack.name}
                    </h1>
                    <span className="text-[10px] font-semibold opacity-40 uppercase tracking-widest px-2 py-0.5 border border-[var(--border-color)] rounded-md">
                      {stack.type}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 mt-6 w-full bg-[var(--background-hover)] px-4 py-3.5 rounded-lg">
                    {Object.entries(stack.list).map(([key, item], imgIndex) => (
                      <div
                        key={imgIndex}
                        className="relative group/icon flex items-center justify-center p-1.5 rounded-md"
                      >
                        <img
                          src={item.src.src}
                          alt={key}
                          className="h-8 sm:h-9 w-auto object-contain transition-transform duration-200 group-hover/icon:scale-110"
                        />

                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/icon:opacity-100 transition-opacity text-sm duration-200 bg-black/80 text-white font-semibold px-2 py-0.5 rounded pointer-events-none capitalize whitespace-nowrap z-10 border border-white/10">
                          {item.label}
                        </span>
                      </div>
                    ))}
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
