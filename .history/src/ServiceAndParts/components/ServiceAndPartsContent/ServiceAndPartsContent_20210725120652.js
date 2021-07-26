import React from "react";
import Divider from "../../../Utils/Divider";
import "./styles/ServiceAndPartsContent.css";

export default function ServiceAndPartsContent() {
  return (
    <div className="sap__content-container">
      <div className="sap__content-menu">
        <div className="sap__content-menu-button">Parts</div>
        <div className="sap__content-menu-button">Service</div>
        <div className="sap__content-menu-button">Customization</div>
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
        <div className="sap__content-content-contact"></div>
      </div>
    </div>
  );
}
