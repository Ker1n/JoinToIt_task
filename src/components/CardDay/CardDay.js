import React from "react";
import "./CardDay.scss";
import { useSelector } from "react-redux";

export const CardDay = (props) => {
  const { month } = useSelector((state) => state.app);

  return (
    <div className="card">
      <div
        className="card__day"
        style={
          props.day.month() === month
            ? { color: "#43425D" }
            : { color: "#D4D4DA" }
        }
      >
        {props?.test}
      </div>
    </div>
  );
};
