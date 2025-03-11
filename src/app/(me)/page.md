import Contact from "@/components/section/Contact";
import Experiences from "@/components/section/Experiences";
import Home from "@/components/section/Home";
import Projects from "@/components/section/Projects";
import React from "react";

const page = () => {
  return (
    <div className="container">
      <Home />
      <Experiences />
      <Projects />
      <Contact />
    </div>
  );
};

export default page;
