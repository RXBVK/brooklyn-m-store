import React from "react";
import FinancingLanding from "./components/FinancingLanding/FinancingLanding";
import FinancingCalculator from "./components/FinancingCalculator/FinancingCalculator";
import Footer from "../Utils/Footer/Footer";

export default function Financing() {
  return (
    <>
      <FinancingLanding />
      <FinancingCalculator />
      <Footer />
    </>
  );
}
