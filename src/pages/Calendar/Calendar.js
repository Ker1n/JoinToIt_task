import React from "react";
import moment from "moment";

import { useDispatch, useSelector } from "react-redux";
import { setCurrentDay } from "../../store/reducers/appReducer";

import { CalendarGrid } from "../../components/CalendarGrid/CalendarGrid";
import { CalendarHeader } from "../../components/CalendarComponents/CalendarHeader";
import { CalendarView } from "../../components/CalendarComponents/CalendarView";
import { CalendarNavigation } from "../../components/CalendarComponents/CalendarNavigation";

import "./calendar.scss";

//window.moment = moment;

export const Calendar = () => {
  const dispatch = useDispatch();
  const {year, month} = useSelector((state) => state.app);

  React.useEffect(() => {
    dispatch( 
      setCurrentDay({
        year: moment().year(),
        month: moment().month(),
        day: moment().day(),
      })
    );
  }, []);




  moment.updateLocale("eu", { week: { dow: 0 } });

  // const startDay = moment().startOf("month").startOf("week");
  // const endDay = moment().endOf("month").endOf("week");

  const startDay = moment().year(year).month(month).startOf("month").startOf("week");
  const endDay = moment().year(year).month(month).endOf("month").endOf("week");

  let day = startDay.clone();
  let totalDays = 0;

  while (!day.isAfter(endDay)) {
    totalDays += 1;
    day.add(1, "day");
  }

  return (
    <div className="calendar">
      <CalendarView />
      <CalendarNavigation />
      <CalendarHeader />
      <CalendarGrid startDay={startDay} totalDays={totalDays} />
    </div>
  );
};
