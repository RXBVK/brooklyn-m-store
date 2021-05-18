import React from "react";
import Divider from "../../../Utils/Divider";

export default function AboutServices(props) {
  return props.id % 2 === 0 ? (
    <div className="about__services">
      <div className="about__services-photo-container">
        <img src={props.item.image} alt={props.item.header} />
      </div>
      <div className="about__services-text-container">
        <div className="about__services-text-container-limiter">
          <h2>{props.item.header}</h2>
          <Divider width={70} height={1} />
          <p>{props.item.text}</p>
          <button>{props.item.button}</button>
        </div>
      </div>
    </div>
  ) : (
    <div className="about__services">
      <div className="about__services-text-container">
        <div className="about__services-text-container-limiter">
          <h2>{props.item.header}</h2>
          <Divider width={20} height={1} />
          <p>{props.item.text}</p>
          <button>{props.item.button}</button>
        </div>
      </div>
      <div className="about__services-photo-container">
        <img src={props.item.image} alt={props.item.header} />
      </div>
    </div>
  );
}
