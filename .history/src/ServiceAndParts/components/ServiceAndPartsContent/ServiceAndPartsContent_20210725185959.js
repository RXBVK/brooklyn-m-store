import React from "react";
import Divider from "../../../Utils/Divider";
import "./styles/ServiceAndPartsContent.css";

export default function ServiceAndPartsContent() {
  return (
    <div className="sap__content-container">
      <div className="sap__content-menu">
        <button className="sap__content-menu-button">Parts</button>
        <button className="sap__content-menu-button">Service</button>
        <button className="sap__content-menu-button">Customization</button>
      </div>
      <div className="sap__content-content">
        <div className="sap__content-content-description">
          <h1>Parts</h1>
          <Divider height={1} width={30} />
          <p>
            Whether you need repairs or maintenance, or you're looking to
            customize your motorcycle or other powersports vehicle, Brooklyn
            Mayd is proud to carry a wide selection of parts and accessories so
            you can maintain your vehicle and make it your own. If we don't have
            it in stock, we're happy to order it for you in the Brooklyn area.
          </p>
        </div>
        <div className="sap__content-content-contact">
          <h1>Parts Request</h1>
          <p>
            To request parts you will need to fill the contact form, and in
            field ,,Comments/Questions” write informations given below:
          </p>
          <Divider height={1} width={30} />
          <div>
            <div>
              <h4>Type of Vehicle:</h4>
              <span>Make</span>
              <span>Model</span>
              <span>Year</span>
              <span>Vin</span>
              <span>Miles</span>
            </div>
            <div>
              <h4>Parts needed:</h4>
              <span>Kind of parts</span>
              <span>Part number if you have it</span>
            </div>
          </div>
          <button className="sap__contact-btn">Contact</button>
        </div>
      </div>
    </div>
  );
}
