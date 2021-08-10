import React from "react";
import moment from "moment";
import { useSelector } from "react-redux";

import { Event } from "../Event/Event";

import "./CardDay.scss";

export const CardDay = (props) => {
  const { month } = useSelector((state) => state.app);

  return (
    <div
      className={moment().isSame(props.day, "day") ? "card currentDay" : "card"}
    >
      <div
        className="card__day"
        style={
          props.day.month() === month
            ? { color: "#43425D" }
            : { color: "#D4D4DA" }
        }
      >
        {" "}
        {props?.dayNumber}
      </div>

      <div className="card__events-wrapper">
        {props?.eventsArray[0]?.map((el, index) => {
          return <Event key={index + Date.now()} element={el} />;
        })}
      </div>
    </div>
  );
};
