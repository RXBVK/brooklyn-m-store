import React from "react";
import SinglePoint from "./SinglePoint";
import { financingLandingPoints } from "../../../Utils/Utils";
import "./styles/financing-landing.css";

export default function FinancingLanding() {
  return (
    <div className="financing__landing">
      <h1>Brooklyn Mayd Finance Department</h1>
      <div className="financing__landing-content">
        {financingLandingPoints.map((point, id) => (
          <SinglePoint point={point} key={id} />
        ))}
      </div>
    </div>
  );
}
