import {
  About,
  Contact,
  Experience,
  Header,
  Hero,
  Projects,
  Skills,
} from "@/components";

export default function Home() {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 
    scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#fbab0a]/80 "
    >
      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      {/* <section id="experience" className="snap-center">
        <Experience />
      </section> */}

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <Contact />
      </section>
    </div>
  );
}
