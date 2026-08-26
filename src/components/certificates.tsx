"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MoveRight, ChevronDown, ChevronUp } from "lucide-react";
import RunningChocobo from "./runningChocobo";

const certificates = [
  {
    id: "1",
    course_name: "Google IT Automation with Python",
    company: "Google",
    platform: "Coursera",
    href: "#",
    summary:
      "Professional Certificate bundling 6 courses covering Python programming, Git/GitHub, OS interaction, and system administration. Demonstrates expertise in writing code to automate tasks, managing cloud resources, and solving complex IT troubleshooting scenarios.",
  },
  {
    id: "2",
    course_name: "Google Data Analytics",
    company: "Google",
    platform: "Coursera",
    href: "#",
    summary:
      "Professional Certificate bundling 8 courses covering data cleaning, analysis, and visualization using SQL, R programming, Tableau, and spreadsheets. Demonstrates proficiency in transforming raw data into actionable business insights and data-driven decision-making.",
  },
  {
    id: "3",
    course_name: "Google Advanced Data Analytics",
    company: "Google",
    platform: "Coursera",
    href: "#",
    summary:
      "Professional Certificate bundling 7 advanced courses in statistical analysis, predictive modeling, and machine learning using Python. Demonstrates expertise in advanced data science workflows, EDA, regression models, and exploratory data analysis.",
  },
  {
    id: "4",
    course_name: "Google AI Essentials",
    company: "Google",
    platform: "Coursera",
    href: "#",
    summary:
      "Specialization certificate bundling 5 completed Google AI modules: AI Fundamentals, AI for Brainstorming and Planning, AI for Research and Insights, AI for Writing and Communicating, AI for Content Creation, AI for Data Analysis, and AI for App Building. Demonstrates fluency in applying generative AI tools across everyday workflows, content creation, and analysis.",
  },
  // Bạn có thể thêm item thứ 5, 6 vào đây để test nút More
];

export default function Certificate() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Theo dõi kích thước màn hình
  useEffect(() => {
    const checkScreen = () => {
      setIsLargeScreen(window.innerWidth >= 1270);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Xác định giới hạn items: Màn to (>1270px) là 4, màn nhỏ là 2
  const maxItems = isLargeScreen ? 4 : 2;
  const hasMore = certificates.length > maxItems;
  const visibleCertificates = isExpanded
    ? certificates
    : certificates.slice(0, maxItems);

  return (
    <div
      id="certificates"
      className="flex flex-col border-b border-[var(--border-color)] flex justify-center w-full px-4 sm:px-6"
    >
      <div className="border-x border-[var(--border-color)] py-6 sm:py-10 px-4 sm:px-8 w-full flex justify-center">
        <div className="flex flex-col justify-center gap-6 md:gap-8 w-6xl cursor-default">
          <h1 className="font-bungee text-2xl sm:text-3xl font-bold text-[var(--text-hover)]">
            certificates
          </h1>

          <div className="grid grid-cols-1 min-[1270px]:grid-cols-2 gap-4 w-full">
            {visibleCertificates.map((cer, index) => {
              return (
                <div key={cer.id || index} className="flex group">
                  <div className="relative flex flex-col justify-between p-3 border border-[var(--border-color)] bg-[var(--background-color)] rounded-xl cursor-default w-full group-hover:-translate-y-2 transition duration-200">
                    <div className="flex flex-col gap-2 px-3 pt-2">
                      <div className="flex justify-between gap-1 items-center">
                        <h1 className="uppercase text-lg sm:text-xl font-bold tracking-wider text-[var(--text-color)] transition-colors w-full">
                          {cer.course_name}
                        </h1>
                      </div>

                      <div className="flex gap-1 items-end">
                        <span className="h-fit text-[10px] font-semibold opacity-40 uppercase tracking-widest px-2 py-0.5 border border-[var(--border-color)] rounded-md">
                          {cer.company}
                        </span>
                        <span className="h-fit text-[10px] font-semibold opacity-40 uppercase tracking-widest px-2 py-0.5 border border-[var(--border-color)] rounded-md">
                          {cer.platform}
                        </span>
                      </div>
                    </div>

                    <div className="flex h-full flex-wrap items-center gap-3 mt-6 w-full bg-[var(--background-hover)] px-4 py-3.5 rounded-lg">
                      <p className="flex-1 text-sm sm:text-base opacity-85 text-justify leading-relaxed">
                        {cer.summary}
                      </p>
                    </div>

                    <Link href={cer.href} className="group/btn w-fit ml-2">
                      <div className="flex gap-1 mt-3 items-center text-[var(--text-hover)] group-hover/btn:translate-x-2 transition">
                        View certificate
                        <MoveRight className="shrink-0" />
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {hasMore && (
            <div className="flex justify-center mt-2">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-[var(--text-hover)] hover:text-[var(--text-color)] font-medium transition-all duration-200 cursor-pointer active:scale-95"
              >
                {isExpanded ? (
                  <>
                    Show Less <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    Show More ({certificates.length - maxItems}){" "}
                    <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
      <RunningChocobo></RunningChocobo>
    </div>
  );
}
