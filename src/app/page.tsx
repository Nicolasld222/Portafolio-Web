import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackgroundScene from "@/components/BackgroundScene";

export default function Home() {
  return (
    <>
      <BackgroundScene />
      <ScrollProgress />
      <Nav />
      <Hero />
      <Projects />
      <Experience />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
