import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Counter from "../../components/Counter/Counter";
import Line from '../../components/Line/Line';
import Title from "../../components/Title/Title";
import Project from "./Project";

const Projects = () => {
  return (
    <>
      <Navbar />
      <Line />
      <Title value="Projects" />
      <Counter value="02"/>
      <div>
        <Project link="/" name="Rick and Morty"/>
        <Project link="/" name="Magic Trick"/>
        <Project link="/" name="CamerShop"/>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
