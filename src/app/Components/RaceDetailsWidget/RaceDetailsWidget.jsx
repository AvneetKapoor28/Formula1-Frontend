import React from "react";
import "./RaceDetailsWidget.css";

const RaceDetailsWidget = (props) => {
  return (
    <div className="race-details-widget">
      <div className="widget-title">{props.title}</div>
      <div className="widget-content">{props.content}</div>
    </div>
  );
};

export default RaceDetailsWidget;
