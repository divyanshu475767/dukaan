import React from "react";
import './Tour.css'
const Tour = (props) => {
  return (
    <div class="tour-item">
      <span class="tour-date">{props.date}</span>
      <span class="tour-place">{props.name}</span>
      <span class="tour-spec-place">{props.place}</span>
      <button class="buy-btn">BUY TICKETS</button>
    </div>
  );
};

export default Tour;
