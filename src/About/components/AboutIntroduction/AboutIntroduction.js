import React from "react";
import { aboutIntroductionCards } from "../../../Utils/Utils";
import Divider from "../../../Utils/Divider";
import "./styles/about-introduction.css";

export default function AboutIntroduction() {
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
        {aboutIntroductionCards.map((card, id) => (
          <div className="about__introduction-item" key={id}>
            <img src={card.icon} alt="meaningless icon" />
            <Divider width={100} height={1} />
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
