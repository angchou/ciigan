import AboutMe from "../components/aboutMe";
import MyExperiences from "../components/myExperience";
import Projects from "../components/projects";
import Education from "../components/education";
import Stacks from "../components/stacks";
import Contributions from "../components/contribution";
import Contacts from "../components/contacts";
import Footer from "../components/foorter";

export default function Home() {
  return (
    <div>
      <AboutMe />
      <MyExperiences />
      <Projects />
      <Education />
      <Stacks />
      <Contributions />
      <Contacts />
      <Footer />
    </div>
  );
}
