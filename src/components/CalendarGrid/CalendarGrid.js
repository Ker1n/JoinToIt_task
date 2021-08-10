// import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import { CardDay } from "../CardDay/CardDay";
import "./CalendarGrid.scss";

export const CalendarGrid = ({ startDay, totalDays}) => {

  const day = startDay.clone().subtract(1,'day');
  const daysArray = [...Array(totalDays)].map(() => day.add(1, "day").clone());
  const {calendar} = useSelector(state => state);
 
  return (
    <div className="calendarGrid" style={totalDays===42 ? {gridTemplateRows: 'repeat(6, 135px)'} : {gridTemplateRows: 'repeat(5, 135px)'}}>
      {daysArray.map((day) => {     
        let eventsArray = [];
        for (let i = 0; i < calendar.length; i++) {
          if(day.format("DD MM YYYY") === calendar[i].date) { 
            eventsArray.push(calendar[i].events)
          }
        }
        return <CardDay key={day.format('MMDDYYYY')} dayNumber={day.format("D")} day={day} eventsArray={eventsArray} />
      })}
    </div>
  );
};
