"use client";

import HeroSection from"./components/HeroSection";
import ScrollIcon from "./components/ScrollIcon"
import Navbar from "./components/Navbar";
import AboutSection from"./components/AboutSection";
import ProjectSection from"./components/ProjectSection";
import EmailSection from"./components/EmailSection";
import Footer from"./components/Footer";



export default function Home() {
  return (
    <main className="flex flex-col bg-black overflow-clip">
      <Navbar />
      <div className="container mx-auto mt-15 md:mt-28 px-8 md:px-10 lg:px-20 ">
        <HeroSection />
        <ScrollIcon />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}