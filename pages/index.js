import Head from "next/head";
import ProjectsSection from "../components/ProjectsSection";
import Footer from "../components/Footer";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div>
      <Head>
        <title>Atanda Remilekun's portfolio</title>
        <meta name="theme-color" content="#4831d4" />
      </Head>
      <ProjectsSection />
      <Footer />
    </div>
  );
}
