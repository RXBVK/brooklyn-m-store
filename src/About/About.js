import React from "react";
import "./styles/about.css";
import AboutLanding from "./components/AboutLanding/AboutLanding";
import AboutIntroduction from "./components/AboutIntroduction/AboutIntroduction";
import AboutServices from "./components/AboutServices/AboutServices";

export default function About() {
  return (
    <>
      <AboutLanding />
      <AboutIntroduction />
      <AboutServices />
    </>
  );
}
