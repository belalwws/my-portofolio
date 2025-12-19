import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Templates from "@/components/Templates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Marquee, { MarqueeFilled } from "@/components/Marquee";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <MarqueeFilled text="FRONTEND DEVELOPER" speed={20} />
      <About />
      <Services />
      <Skills />
      <Marquee
        text="BUILD • SHIP • SCALE • INNOVATE • CREATE • DESIGN • DEVELOP"
        speed={35}
      />
      <Experience />
      <Projects />
      <Templates />
      <MarqueeFilled text="LET'S WORK TOGETHER" speed={25} />
      <Contact />
      <Footer />
    </main>
  );
}
