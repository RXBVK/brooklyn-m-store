import React from "react";
import { serviceAndPartsCards } from "../../../Utils/Utils";
import Divider from "../../../Utils/Divider";
import "./styles/serviceAndPartsLanding.css";

export default function ServiceAndPartsLanding() {
  return (
    <div className="sap__landing">
      <div className="sap__landing-header">
        <h2>Brooklyn Mayd Parts Department</h2>
        <p>
          We’re proud to carry a wide selection of parts and accessories so you
          can maintain your vehicle and make it your own. We’ll help you with
          repair, maintenance or customization of your favorite vehicle.
        </p>
      </div>
      <div className="sap__landing-items">
        {serviceAndPartsCards.map((card, id) => (
          <div className="sap__landing-item" key={id}>
            <h2>{card.header}</h2>
            <Divider width={100} height={1} />
            <p>{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
