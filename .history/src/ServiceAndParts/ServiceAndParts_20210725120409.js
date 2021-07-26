import React from "react";
import ServiceAndPartsLanding from "./components/ServiceAndPartsLanding/ServiceAndPartsLanding";
import ServiceAndPartsContent from "./components/ServiceAndPartsContent/ServiceAndPartsContent";
import Footer from "../Utils/Footer/Footer";

export default function ServiceAndParts() {
  return (
    <>
      <ServiceAndPartsLanding />
      <ServiceAndPartsContent />
      <Footer />
    </>
  );
}
