"use client";

import { useState } from "react";
import blackmage_gif from "../assets/chars/blackmage.gif";
import blackmage from "../assets/chars/blackmage.png";

import { X, Dot } from "lucide-react";

const educationData = [
  {
    from: "2021",
    to: "2024",
    title: "High School Academic",
    subtitle: "Binh Hung Hoa High School",
    description: "Awarded 3rd Prize in the City-Level Mathematics Competition.",
    highlight: "3rd Prize Math",
  },
  {
    from: "2024",
    to: "",
    title: "National Exam",
    subtitle: "Score: 27.4 / 30",
    description:
      "Graduation & University Entrance Exam (Math: 9.4 | Physics: 9.0 | English: 9.0)",
    highlight: "26.4 Score",
  },
  {
    from: "2024",
    to: "2028",
    title: "University Education",
    subtitle: "UIT - VNU-HCM",
    description: "Bachelor's Degree in Information Systems.",
    highlight: "UIT Student",
  },
];

export default function Education() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      id="education"
      className="border-b border-[var(--border-color)] flex justify-center w-full px-4 sm:px-6"
    >
      <div className="border-x border-[var(--border-color)] pt-14 2xl:pt-28 pb-28 px-4 w-full flex justify-center">
        <div className="flex flex-col w-6xl cursor-default gap-6 md:gap-8">
          <h1 className="font-bungee mb-3 text-2xl sm:text-3xl font-bold text-[var(--text-hover)]">
            Education
          </h1>

          <div className="relative w-full m-auto">
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-[var(--border-color)] -translate-y-1/2" />

            <div className="absolute top-1/2 left-0 -translate-y-1 w-full z-30 pointer-events-none">
              <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                  animationPlayState: isHovered ? "paused" : "running",
                }}
                className="relative w-12 h-12 -top-12 sm:w-16 sm:h-16 sm:-top-16 2xl:w-20 2xl:h-20 2xl:-top-20 animate-walk pointer-events-auto cursor-pointer"
              >
                {isHovered && (
                  <div className="-scale-x-100 absolute -top-10 left-1/2 -translate-x-1/2 transition-all duration-200 pointer-events-none z-40">
                    <div className="relative bg-white text-black font-bold text-xs px-2.5 py-1 rounded-lg shadow-lg whitespace-nowrap border border-black/10 animate-bounce">
                      H-Hello . . .
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-white" />
                    </div>
                  </div>
                )}
                {isHovered ? (
                  <img
                    src={blackmage.src}
                    alt="Walking animation"
                    className={`object-contain w-full h-full`}
                  />
                ) : (
                  <img
                    src={blackmage_gif.src}
                    alt="Walking animation"
                    className={`object-contain w-full h-full`}
                  />
                )}
              </div>
            </div>

            <div className="relative z-20 flex justify-between items-center w-full px-5">
              {educationData.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center group relative max-2xl:cursor-pointer"
                  onClick={() => setSelectedItem(index)}
                >
                  <div
                    className={`w-4 h-4 2xl:w-5 2xl:h-5 rounded-full bg-white border-2 border-[var(--border-color)] shadow-md transition-transform duration-300 max-2xl:group-hover:scale-110 ${
                      selectedItem === index
                        ? "max-2xl:scale-125 max-2xl:ring-2 max-2xl:ring-amber-300"
                        : ""
                    }`}
                  />

                  <div className="hidden 2xl:flex absolute top-8 flex-col items-center text-center w-64">
                    <span className="text-sm font-semibold opacity-60">
                      {item.from} {item.to ? " - " : ""} {item.to}
                    </span>

                    <h3 className="font-bold text-[var(--text-color)]">
                      {item.title}
                    </h3>
                    <p className="text-sm font-semibold text-[var(--text-noticed)] mt-0.5">
                      {item.subtitle}
                    </p>
                    <p className="text-xs opacity-75 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex 2xl:hidden absolute top-6 flex-col items-center text-center w-28">
                    <span className="sm:hidden text-sm font-semibold opacity-60 flex flex-col items-center">
                      <span>{item.from}</span>
                      {item.to ? <Dot className="size-5"></Dot> : ""}
                      <span>{item.to}</span>{" "}
                    </span>
                    <span className="max-sm:hidden text-sm font-semibold opacity-60">
                      {item.from} {item.to ? " - " : ""} {item.to}
                    </span>
                    <h3 className="max-sm:hidden text-xs font-bold text-[var(--text-color)] leading-tight mt-0.5">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {selectedItem !== null && (
            <div
              className="2xl:hidden fixed inset-0 z-200 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setSelectedItem(null)}
            >
              <div
                className="w-full max-w-xl p-5 border border-[var(--border-color)] rounded-2xl bg-[var(--background-hover)] shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-3 right-3 w-7 h-7 rounded-full bg-[var(--background-hover)] border border-[var(--border-color)] flex items-center cursor-pointer justify-center text-xs opacity-70 hover:rotate-15 hover:opacity-100"
                >
                  <X className="shrink-0 size-5" />
                </button>

                <div className="flex flex-col items-start gap-2 pt-1">
                  <span className="text-sm font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full border border-[var(--border-color)] bg-[var(--background-hover)]">
                    {educationData[selectedItem].from}{" "}
                    {educationData[selectedItem].to ? " - " : ""}
                    {educationData[selectedItem].to}
                  </span>

                  <h3 className="text-base font-bold text-[var(--text-color)] mt-1">
                    {educationData[selectedItem].title}
                  </h3>

                  <p className="text-sm font-semibold text-[var(--text-noticed)]">
                    {educationData[selectedItem].subtitle}
                  </p>

                  <div className="w-full h-[1px] bg-[var(--border-color)] my-1" />

                  <p className="opacity-80 leading-relaxed">
                    {educationData[selectedItem].description}
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="hidden 2xl:block h-32" />
        </div>
      </div>
    </div>
  );
}
