import React from "react";
import Header from "../Header";
import Hero from "./Hero"
import HistorySection from "./History"
import TeamSection from "./Team"
import ValuesSection from "./Values";
import Testimonials from "../HomePage/Testimionals"
import Clients from "../HomePage/Clients/client"
import Contact from "../HomePage/Contact/contact"
import Footer from "../Footer/footer"

const AboutUs = () => {
  return (
    <div>
      <Header />
      <Hero />
      <HistorySection />
      <TeamSection />
      <ValuesSection />
      {/* <Testimonials /> */}
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
};

export default AboutUs;