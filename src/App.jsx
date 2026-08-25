import { useEffect, useState } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Certifications from "./components/sections/Certifications";
import Blog from "./components/sections/Blog";
import GitHubStats from "./components/sections/GitHubStats";
import Contact from "./components/sections/Contact";
import AnimatedBackground from "./components/ui/AnimatedBackground";

const VIEWS = {
  hero: Hero,
  about: About,
  skills: Skills,
  projects: Projects,
  experience: Experience,
  certifications: Certifications,
  blog: Blog,
  github: GitHubStats,
  contact: Contact,
};

const getViewFromHash = () => {
  const hash = window.location.hash.replace("#", "");
  return VIEWS[hash] ? hash : "hero";
};

export default function App() {
  const [activeView, setActiveView] = useState(getViewFromHash);
  const [navVisible, setNavVisible] = useState(true);
  const ActiveView = VIEWS[activeView];

  useEffect(() => {
    const handlePopState = () => setActiveView(getViewFromHash());
    window.addEventListener("popstate", handlePopState);
    window.addEventListener("hashchange", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("hashchange", handlePopState);
    };
  }, []);

  const navigateTo = (view) => {
    if (!VIEWS[view]) return;

    if (window.location.hash !== `#${view}`) {
      window.history.pushState({}, "", `#${view}`);
    }

    setNavVisible(true);
    setActiveView(view);
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <AnimatedBackground />
      <Navbar activeId={activeView} onNavigate={navigateTo} onVisibilityChange={setNavVisible} />

      <main className={`min-h-screen transition-[padding] duration-300 ease-out ${navVisible ? "lg:pl-64" : "lg:pl-0"}`}>
        <div className="mx-auto max-w-[1500px] min-h-screen px-4 sm:px-6 lg:px-8 pt-20 pb-6 sm:pb-8 lg:pt-8">
          <div key={activeView} className="animate-fade-up min-h-[calc(100vh-5rem)] lg:min-h-[calc(100vh-4rem)]">
            <ActiveView onNavigate={navigateTo} />
          </div>

          <Footer />
        </div>
      </main>
    </div>
  );
}
