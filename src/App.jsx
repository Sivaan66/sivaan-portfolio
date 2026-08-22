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

export default function App() {
  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      <Navbar />
      <main className="lg:pl-64">
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Certifications />
          <Blog />
          <GitHubStats />
          <Contact />
        </div>
      </main>
      <div className="lg:pl-64">
        <Footer />
      </div>
    </div>
  );
}
