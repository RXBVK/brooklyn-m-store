import React from "react";
import Divider from "../../../Utils/Divider";
import { useHistory } from "react-router-dom";
import "./styles/about-services.css";
import storeImage from "../../../assets/images/store-image.jpg";
import serviceImage from "../../../assets/images/service-image.jpg";
import financingImage from "../../../assets/images/financing-image.jpg";
const images = [storeImage, serviceImage, financingImage];

export default function AboutServices(props) {
  let history = useHistory();

  const handleRedirection = (url) => {
    history.push(url);
  };

  return props.id % 2 === 0 ? (
    <div className="about__services">
      <div className="about__services-photo-container">
        <img src={images[props.id]} alt={props.item.header} />
      </div>
      <div className="about__services-text-container">
        <div className="about__services-text-container-limiter">
          <h2>{props.item.header}</h2>
          <Divider width={70} height={1} />
          <p>{props.item.text}</p>
          <button onClick={() => handleRedirection(props.item.buttonLink)}>
            {props.item.button}
          </button>
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
          <button onClick={() => handleRedirection(props.item.buttonLink)}>
            {props.item.button}
          </button>
        </div>
      </div>
      <div className="about__services-photo-container">
        <img src={images[props.id]} alt={props.item.header} />
      </div>
    </div>
  );
}
