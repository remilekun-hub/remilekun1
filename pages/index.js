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
        <title>Atanda Remilekun - Frontend Engineer</title>
        <meta name="theme-color" content="#000000e6" />
        <meta name="robots" content="all" />
        <meta name="keywords" content="atanda remilekun " />
        {/* Primary Meta Tags */}
        <meta name="title" content="Atanda Remilekun - Frontend Engineer" />
        <meta
          name="description"
          content="I'm a  front-end Engineer passionate about building acessible,
            responsive and aesthetically pleasing web apps / websites that users love. I
            work on the back-end also"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://remilekun.vercel.app/" />
        <meta
          property="og:title"
          content="Atanda Remilekun - Frontend Engineer"
        />
        <meta
          property="og:description"
          content="I'm a  front-end Engineer passionate about building acessible,
            responsive and aesthetically pleasing web apps / websites that users love. I
            work on the back-end also"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/draqmxlg6/image/upload/v1687737448/zojlpy1h7urqzoleyihv.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://remilekun.vercel.app/" />
        <meta
          name="twitter:title"
          content="Atanda Remilekun - Frontend Engineer"
        />
        <meta
          name="twitter:description"
          content="I'm a  front-end Engineer passionate about building acessible,
            responsive and aesthetically pleasing web apps / websites that users love. I
            work on the back-end also"
        />

        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/draqmxlg6/image/upload/v1687737448/zojlpy1h7urqzoleyihv.jpg"
        />
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
