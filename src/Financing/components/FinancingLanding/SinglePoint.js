import React from "react";

export default function SinglePoint(props) {
  return (
    <div className="financing__landing-point">
      <div className="financing__landing-point-header">
        <div className="financing__landing-header-circle">
          {props.point.header}
        </div>
      </div>
      <div className="financing__landing-point-content">{props.point.text}</div>
    </div>
  );
}
