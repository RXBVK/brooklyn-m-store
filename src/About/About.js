import React from "react";
import "./styles/about.css";
import AboutLanding from "./components/AboutLanding/AboutLanding";
import AboutIntroduction from "./components/AboutIntroduction/AboutIntroduction";
import AboutServices from "./components/AboutServices/AboutServices";
import AboutReviews from "./components/AboutReviews/AboutReviews";
import AboutFooter from "./components/AboutFooter/AboutFooter";
import { aboutServicesSections } from "../Utils/Utils";
import DividerBlock from "../Utils/DividerBlock";

export default function About() {
  return (
    <>
      <AboutLanding />
      <AboutIntroduction />
      {aboutServicesSections.map((item, id) => {
        return (
          <React.Fragment>
            <AboutServices item={item} id={id} />
            <DividerBlock height={80} />
          </React.Fragment>
        );
      })}
      <AboutReviews />
      <AboutFooter />
    </>
  );
}
