import React from "react";
import useTitle from "../../hooks/useTitle";
import About from "./About";
import Contact from "./Contact";
import Experiences from "./Experiences";
import Header from "./Header";
import Projects from "./Projects";

const Home = () => {
  useTitle("Md. Taifuzzaman Bilash - MERN Stack Developer");
  return (
    <>
      <Header />
      <About />
      <Experiences />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
