import React from "react";

export default function DividerBlock(props) {
  return (
    <div
      style={{
        width: '100%',
        height: `${props.height}px`,
        backgroundColor: "#f7f7f7",
      }}
    ></div>
  );
}
