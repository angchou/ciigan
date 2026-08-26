"use client";

import { useState, useEffect } from "react";
import { GitHubCalendar } from "react-github-calendar";
import GithubIcon from "./githubIcon";

export default function GithubStats() {
  const [isMounted, setIsMounted] = useState(false);
  const [selectedYear, setSelectedYear] = useState<number | "last">(2026);

  useEffect(() => {
    setIsMounted(true);
    setSelectedYear(new Date().getFullYear());
  }, []);

  const currentYear = isMounted ? new Date().getFullYear() : 2026;
  const startYear = 2025;

  const years = Array.from(
    { length: Math.max(1, currentYear - startYear + 1) },
    (_, i) => currentYear - i,
  );

  const explicitTheme = {
    light: [
      "var(--gh-level-0)",
      "var(--gh-level-1)",
      "var(--gh-level-2)",
      "var(--gh-level-3)",
      "var(--gh-level-4)",
    ],
    dark: [
      "var(--gh-level-0)",
      "var(--gh-level-1)",
      "var(--gh-level-2)",
      "var(--gh-level-3)",
      "var(--gh-level-4)",
    ],
  };

  return (
    <div
      id="github"
      className="border-b border-[var(--border-color)] flex justify-center w-full px-4 sm:px-6"
    >
      <div className="border-x border-[var(--border-color)] py-6 sm:py-10 px-4 sm:px-8 w-full flex justify-center">
        <div className="flex flex-col gap-6 w-full max-w-6xl cursor-default">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <GithubIcon />
              <h1 className="font-bungee text-2xl sm:text-3xl font-bold text-[var(--text-hover)]">
                GitHub Stats
              </h1>
            </div>

            <div className="flex flex-wrap items-center gap-1.5">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-3 py-1 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                    selectedYear === year
                      ? "bg-[var(--background-hover)] border-indigo-500 text-[var(--text-color)]"
                      : "border-[var(--border-color)] bg-[var(--background-hover)] opacity-70 hover:opacity-100 hover:border-indigo-400"
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          <div className="w-full overflow-x-auto py-2 flex justify-center custom-calendar-scroll min-h-[160px]">
            {isMounted ? (
              <GitHubCalendar
                username="angchou"
                year={selectedYear}
                theme={explicitTheme}
                blockSize={16}
                blockMargin={5}
                fontSize={12}
                showWeekdayLabels
              />
            ) : (
              <div className="w-full h-32 flex items-center justify-center text-sm opacity-50">
                Loading contributions...
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
