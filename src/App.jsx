import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Certification from "./components/Certification";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import BackToTopButton from "./components/BackToTopButton";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* Background gradient and color layers */}
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      {/* Main content container */}
      <div className="relative container mx-auto px-4 sm:px-8 min-h-screen">
        <Navbar />
        <div id="hero">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="technologies">
          <Technologies />
        </div>
        <div id="certification">
          <Certification />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <BackToTopButton />
      </div>
    </div>
  );
};

export default App;
