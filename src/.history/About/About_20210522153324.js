import React from "react";
import "./styles/about.css";
import AboutLanding from "./components/AboutLanding/AboutLanding";
import AboutIntroduction from "./components/AboutIntroduction/AboutIntroduction";
import AboutServices from "./components/AboutServices/AboutServices";
import AboutReviews from "./components/AboutReviews/AboutReviews";
import { aboutServicesSections } from "../Utils/Utils";
import DividerBlock from "../Utils/DividerBlock";
import Footer from "../Utils/Footer/Footer";

export default function About() {
  return (
    <>
      <AboutLanding />
      <AboutIntroduction />
      {aboutServicesSections.map((item, id) => {
        return (
          <React.Fragment key={id}>
            <AboutServices item={item} id={id} />
            <DividerBlock height={80} />
          </React.Fragment>
        );
      })}
      <AboutReviews />
      <Footer />
    </>
  );
}
