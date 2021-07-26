import React from "react";
import { serviceAndPartsCards } from "../../../Utils/Utils";

export default function ServiceAndPartsLanding() {
  return (
    <div className="about__introduction">
      <div className="about__introduction-header">
        <h2>Brooklyn Mayd Parts Department</h2>
        <p>
          We’re proud to carry a wide selection of parts and accessories so you
          can maintain your vehicle and make it your own. We’ll help you with
          repair, maintenance or customization of your favorite vehicle.
        </p>
      </div>
      <div className="about__introduction-items">
        {serviceAndPartsCards.map((card, id) => (
          <div className="about__introduction-item" key={id}>
            <h2>{card.header}</h2>
            <Divider width={100} height={1} />
            <p>{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
