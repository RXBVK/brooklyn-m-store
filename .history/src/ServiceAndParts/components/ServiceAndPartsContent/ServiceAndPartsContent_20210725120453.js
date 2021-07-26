import React from "react";
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
        <div className="sap__content-content-description"></div>
        <div className="sap__content-content-contact"></div>
      </div>
    </div>
  );
}
