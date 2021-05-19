import React from "react";
import { useHistory } from "react-router-dom";

export default function AboutLanding() {
  let history = useHistory();

  return (
    <div className="about__landing">
      <div className="about__landing-sidebox">
        <h2 className="about__sidebox-header">
          With us you and your motorcycle will experience the greatness
        </h2>
        <button
          className="about__sidebox-button"
          onClick={() => history.push("/contact")}
        >
          CONTACT US
        </button>
      </div>
    </div>
  );
}
