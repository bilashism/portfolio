import React from "react";
import useTitle from "../../hooks/useTitle";
import About from "./About";
import Header from "./Header";

const Home = () => {
  useTitle("Home");
  return (
    <>
      <Header />
      <About />
    </>
  );
};

export default Home;
