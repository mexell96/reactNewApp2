import React from "react";

export default function ClickerCounter({ number }) {
  let color;
  let position;

  if (number >= 15) {
    color = { background: "red" };
    position = "мастер";
  } else if (number >= 10) {
    color = { background: "yellow" };
    position = "умелый";
  } else if (number >= 5) {
    color = { background: "green" };
    position = "новичок";
  } else if (number >= 0) {
    color = { background: "grey" };
    position = "старт";
  }
  return (
    <div style={color}>
      Counter {number} {position}
    </div>
  );
}
