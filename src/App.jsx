import React from "react";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Features from "./sections/Features.jsx";
import Faq from "./sections/Faq.jsx";
import Pricing from "./sections/Pricing.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Download from "./sections/Download.jsx";
import About from "./sections/About.jsx";
import Footer from "./sections/Footer.jsx";

const App = () => {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <Faq />
      <Pricing />
      <Testimonials />
      <Download />
      <About />
      <Footer />
    </main>
  );
};
export default App;
