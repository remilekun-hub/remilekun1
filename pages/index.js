import Head from "next/head";
import ProjectsSection from "../components/ProjectsSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SkillsSection from "../components/SkillsSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div>
      <Head>
        <title>Atanda Remilekun's portfolio</title>
        <meta name="theme-color" content="#000000e6" />
      </Head>
      <Navbar />
      <Hero />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
