"use client";

import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import SmoothScroll from "./container/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </SmoothScroll>
  );
}
