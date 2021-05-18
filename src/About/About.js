import React from "react";
import "./styles/about.css";
import AboutLanding from "./components/AboutLanding/AboutLanding";
import AboutIntroduction from "./components/AboutIntroduction/AboutIntroduction";
import AboutServices from "./components/AboutServices/AboutServices";
import { aboutServicesSections } from "../Utils/Utils";
import DividerBlock from "../Utils/DividerBlock";

export default function About() {
  return (
    <>
      <AboutLanding />
      <AboutIntroduction />
      {
          aboutServicesSections.map((item, id) => {
              return(
                  <>
                    <AboutServices item={item} id={id} />
                    <DividerBlock height={80} />
                  </>
              )
          })
      }
    </>
  );
}
