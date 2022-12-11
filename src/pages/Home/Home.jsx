import React from "react";
import useTitle from "../../hooks/useTitle";
import About from "./About";
import Experiences from "./Experiences";
import Header from "./Header";
import FeaturedProjects from "./FeaturedProjects";

const Home = () => {
  useTitle("Md. Taifuzzaman Bilash - MERN Stack Developer");
  return (
    <>
      <Header />
      <About />
      <Experiences />
      <FeaturedProjects />
    </>
  );
};

export default Home;
