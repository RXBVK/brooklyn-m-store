import React from "react";
import { serviceAndPartsCards } from "../../../Utils/Utils";

export default function ServiceAndPartsLanding() {
  return (
    <div className="about__introduction">
      <div className="about__introduction-header">
        <h2>BROOKLYN MAYD</h2>
        <p>
          We are powersports enthusiasts, and we are excited to help you
          experience the fun and adventure that a quality vehicle can bring into
          your life!
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
