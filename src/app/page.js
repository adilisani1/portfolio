"use client";

import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Services from "./components/Services";
import SmoothScroll from "./container/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Resume />
      <Portfolio limit={4} />
      <Contact />
    </SmoothScroll>
  );
}
