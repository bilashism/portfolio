import React from "react";
import useTitle from "../../hooks/useTitle";
import About from "./About";
import Header from "./Header";
import Projects from "./Projects";

const Home = () => {
  useTitle("Home");
  return (
    <>
      <Header />
      <About />
      <Projects />
    </>
  );
};

export default Home;
