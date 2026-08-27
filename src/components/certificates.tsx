"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MoveRight, ChevronDown, ChevronUp } from "lucide-react";
import RunningChocobo from "./runningChocobo";

import { useTranslation } from "react-i18next";

const certificates = [
  {
    id: "1",
    href: "#",
  },
  {
    id: "2",
    href: "#",
  },
  {
    id: "3",
    href: "#",
  },
  {
    id: "4",
    href: "#",
  },
];

export default function Certificate() {
  const { t } = useTranslation("certificates");

  const [isExpanded, setIsExpanded] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsLargeScreen(window.innerWidth >= 1270);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

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
            {t("title")}
          </h1>

          <div className="grid grid-cols-1 min-[1270px]:grid-cols-2 gap-4 w-full">
            {visibleCertificates.map((cer) => {
              return (
                <div key={cer.id} className="flex group">
                  <div className="relative overflow-hidden shine-card flex flex-col justify-between p-3 border border-[var(--border-color)] bg-[var(--background-color)]/80 cursor-default w-full group-hover:-translate-y-2 transition duration-200">
                    <div className="flex flex-col gap-2 px-3 pt-2">
                      <div className="flex justify-between gap-1 items-center">
                        <h1 className="uppercase text-lg sm:text-xl font-bold tracking-wider text-[var(--text-color)] transition-colors w-full">
                          {t("items." + cer.id + ".course_name")}
                        </h1>
                      </div>

                      <div className="flex gap-1 items-end">
                        <span className="h-fit text-[10px] font-semibold opacity-40 uppercase tracking-widest px-2 py-0.5 border border-[var(--border-color)] rounded-md">
                          {t("items." + cer.id + ".company")}
                        </span>
                        <span className="h-fit text-[10px] font-semibold opacity-40 uppercase tracking-widest px-2 py-0.5 border border-[var(--border-color)] rounded-md">
                          {t("items." + cer.id + ".platform")}
                        </span>
                      </div>
                    </div>

                    <div className="flex h-full flex-wrap items-center gap-3 mt-6 w-full bg-[var(--background-hover)]/60 px-4 py-3.5 rounded-lg">
                      <p className="flex-1 text-sm sm:text-base opacity-85 text-justify leading-relaxed">
                        {t("items." + cer.id + ".summary")}
                      </p>
                    </div>

                    <Link href={cer.href} className="group/btn w-fit ml-2">
                      <div className="flex gap-1 mt-3 items-center text-[var(--text-hover)] group-hover/btn:translate-x-2 transition">
                        {t("more")}
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
                    {t("show.less")} <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    {t("show.more")} ({certificates.length - maxItems}){" "}
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
