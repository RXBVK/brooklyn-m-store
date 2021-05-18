import React from "react";

export default function Divider(props) {
  return (
    <div
      style={{
        width: `${props.width}%`,
        height: `${props.height}px`,
        backgroundColor: "#de5b05",
      }}
    ></div>
  );
}
