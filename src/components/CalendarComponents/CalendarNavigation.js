import React from "react";
import moment from "moment";

import { useSelector, useDispatch } from "react-redux";
import {
  setCurrentDay,
  decrementMonth,
  incrementMonth,
} from "../../store/reducers/appReducer";

export const CalendarNavigation = () => {
  const dispatch = useDispatch();
  const { year, month } = useSelector((state) => state.app);
  const [today, setToday] = React.useState(true);
  const [prev, setPrev] = React.useState(false);
  const [next, setNext] = React.useState(false);

  const setTodayDate = () => {
    setToday(true);
    setPrev(false);
    setNext(false);
    dispatch(
      setCurrentDay({
        year: moment().year(),
        month: moment().month(),
        day: moment().day(),
      })
    );
  };

  const prevMonth = () => {
    setToday(false);
    setPrev(true);
    setNext(false);
    dispatch(decrementMonth());
  };

  const nextMonth = () => {
    setToday(false);
    setPrev(false);
    setNext(true);
    dispatch(incrementMonth());
  };

  return (
    <div className="calendarNavigation">
      <div className="calendarNavigation__wrapper">
        <div className="calendarNavigation__currentDate">
          {moment().month(month).format("MMMM")}{" "}
          {moment().year(year).format("YYYY")}
        </div>
        <div className="calendarView__buttons calendarNavigation__buttons">
          <div
            className={
              today
                ? "calendarNavigation__btn-today active"
                : "calendarNavigation__btn-today"
            }
          >
            <button onClick={setTodayDate}>Today</button>
          </div>
          <div
            className={
              prev
                ? "calendarNavigation__btn-back active"
                : "calendarNavigation__btn-back"
            }
          >
            <button onClick={prevMonth}>Back</button>
          </div>
          <div
            className={
              next
                ? "calendarNavigation__btn-next active"
                : "calendarNavigation__btn-next"
            }
          >
            <button onClick={nextMonth}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};
