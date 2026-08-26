"use client";

import { useState } from "react";
import Link from "next/link";

import { Copy, SquareArrowOutUpRight, Check } from "lucide-react";

const social_links = [
  {
    label: "Github",
    copy: false,
    href: "https://github.com/angchou",
    name: "angchou (angc_)",
  },
  {
    label: "Linkedin",
    copy: false,
    href: "https://www.linkedin.com/in/an-chau-499448393",
    name: "An Chau",
  },
  {
    label: "Gmail",
    copy: true,
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=ciigan.chau@gmail.com",
    name: "ciigan.chau@gmail.com",
  },
  {
    label: "Phone Number",
    copy: true,
    href: "",
    name: "0705071067",
  },
  {
    label: "Facebook",
    copy: false,
    href: "https://www.facebook.com/angchouuu/",
    name: "Châu Gia An",
  },
];

export default function Contacts() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: any,
    index: number,
  ) => {
    if (item.copy) {
      e.preventDefault();

      navigator.clipboard.writeText(item.name);

      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 1500);
    }
  };

  return (
    <div
      id="contact"
      className="border-b border-[var(--border-color)] flex justify-center w-full px-4 sm:px-6"
    >
      <div className="border-x border-[var(--border-color)] py-6 sm:py-10 px-4 sm:px-8 w-full flex justify-center">
        <div className="flex flex-col gap-6 md:gap-8 w-6xl cursor-default">
          <h1 className="font-bungee text-2xl w-full sm:text-3xl font-bold text-[var(--text-hover)]">
            Contact me!
          </h1>

          <div className="grid grid-cols-1 min-[800px]:grid-cols-2 min-[1270px]:grid-cols-3 gap-4 w-full">
            {social_links.map((item, index) => {
              const isCopied = copiedIndex === index;
              return (
                <Link
                  key={index}
                  className={`group relative border border-transparent hover:border-[var(--border-color)] transition overflow-hidden rounded-lg cursor-pointer select-none`}
                  href={item.copy ? "#" : item.href}
                  target={item.copy ? "_self" : "_blank"}
                  rel={item.copy ? undefined : "noopener noreferrer"}
                  onClick={(e) => handleLinkClick(e, item, index)}
                >
                  <div className="w-full bg-[var(--background-hover)] p-3 flex items-center justify-between">
                    <span className="font-bold">{item.label}</span>
                    <span className="opacity-0 pr-12 xl:pr-0">{item.name}</span>
                  </div>

                  <div
                    className={`italic absolute right-0 top-0 bottom-0 flex items-center justify-center gap-2 bg-[#444073c8] text-white font-medium px-4 md:px-6 py-2 transition-all duration-300 ease-in-out ${
                      isCopied
                        ? "translate-x-full opacity-0"
                        : "translate-x-0 opacity-100 xl:translate-x-full xl:opacity-0 xl:group-hover:translate-x-0 xl:group-hover:opacity-100"
                    }`}
                    style={{
                      clipPath:
                        "polygon(15px 0%, 100% 0%, 100% 100%, 15px 100%, 0% 50%)",
                    }}
                  >
                    <span>{item.name}</span>
                    {item.copy ? (
                      <Copy className="w-4 h-4 shrink-0" />
                    ) : (
                      <SquareArrowOutUpRight className="w-4 h-4 shrink-0" />
                    )}
                  </div>

                  <div
                    className={`absolute right-0 top-0 bottom-0 flex items-center justify-center gap-1.5 bg-[var(--text-positive)] text-white font-semibold px-4 md:px-6 py-2 transition-all duration-300 ease-in-out ${
                      isCopied
                        ? "translate-x-0 opacity-100 scale-100 z-10"
                        : "translate-x-full opacity-0 scale-95 pointer-events-none"
                    }`}
                    style={{
                      clipPath:
                        "polygon(15px 0%, 100% 0%, 100% 100%, 15px 100%, 0% 50%)",
                    }}
                  >
                    <Check className="w-4 h-4 shrink-0" />
                    <span>Copied</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
