import React from "react";
import { CardDay } from "../CardDay/CardDay";
import "./CalendarGrid.scss";

export const CalendarGrid = ({ startDay, totalDays}) => {
  const day = startDay.clone().subtract(1,'day');
  const daysArray = [...Array(totalDays)].map(() => day.add(1, "day").clone());

  return (
    <div className="calendarGrid" style={totalDays===42 ? {gridTemplateRows: 'repeat(6, 135px)'} : {gridTemplateRows: 'repeat(5, 135px)'}}>
      {daysArray.map((day) => {
        return <CardDay key={day.format('MMDDYYYY')} test={day.format("D")} day={day} />;
      })}
    </div>
  );
};
