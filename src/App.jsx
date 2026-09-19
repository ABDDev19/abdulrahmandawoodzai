import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";

import Education from "./Component/Education/Education";
import Hero from "./Component/Hero/Hero";
import Navbar from "./Component/Navbar/Navbar";
import Projects from "./Component/Projects/Projects";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}
