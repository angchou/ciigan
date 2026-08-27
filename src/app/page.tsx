"use client";

import AboutMe from "../components/aboutMe";
import MyExperiences from "../components/myExperience";
import Projects from "../components/projects";
import Education from "../components/education";
import Stacks from "../components/stacks";
import GithubStats from "../components/githubStats";
import Contacts from "../components/contacts";
import Certificate from "../components/certificates";
import Footer from "../components/foorter";
import Taskbar from "../components/taskbar";
import ChangeThemeButton from "../components/changeThemeButton";
import ChangeLanguageButton from "../components/changeLanguageButton";
import SettingBar from "../components/settingBar";

const Home = () => {
  return (
    <div className="relative">
      <AboutMe />
      <MyExperiences />
      <Projects />
      <Education />
      <Stacks />
      <Certificate />
      <GithubStats />
      <Contacts />
      <Footer />

      <Taskbar />
      <SettingBar />
    </div>
  );
};
export default Home;
