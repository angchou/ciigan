"use client";

import React from "react";
import i18n from "i18next";
import { initReactI18next, I18nextProvider } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en_about_me from "./en/about-me.json";
import vi_about_me from "./vi/about-me.json";
import en_experience from "./en/experience.json";
import vi_experience from "./vi/experience.json";
import en_projects from "./en/projects.json";
import vi_projects from "./vi/projects.json";
import en_education from "./en/education.json";
import vi_education from "./vi/education.json";
import en_stacks from "./en/stacks.json";
import vi_stacks from "./vi/stacks.json";
import en_certificates from "./en/certificates.json";
import vi_certificates from "./vi/certificates.json";
import en_contacts from "./en/contacts.json";
import vi_contacts from "./vi/contacts.json";
import en_taskbar from "./en/taskbar.json";
import vi_taskbar from "./vi/taskbar.json";

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      debug: true,
      resources: {
        en: {
          about_me: en_about_me,
          experience: en_experience,
          projects: en_projects,
          education: en_education,
          stacks: en_stacks,
          certificates: en_certificates,
          contacts: en_contacts,
          taskbar: en_taskbar,
        },
        vi: {
          about_me: vi_about_me,
          experience: vi_experience,
          projects: vi_projects,
          education: vi_education,
          stacks: vi_stacks,
          certificates: vi_certificates,
          contacts: vi_contacts,
          taskbar: vi_taskbar,
        },
      },
      fallbackLng: "en",
      detection: {
        order: ["localStorage", "navigator"],
        caches: ["localStorage"],
      },
      react: {
        useSuspense: false,
      },
    });
}

export default function I18nProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
