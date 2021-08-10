import React from 'react';
import './index.scss';



export const CalendarHeader = () => {
    return (
        <div className="calendarHeader">
            <div className="calendarHeader__item">SUN</div>
            <div className="calendarHeader__item">MON</div>
            <div className="calendarHeader__item">TUE</div>
            <div className="calendarHeader__item">WED</div>
            <div className="calendarHeader__item">THU</div>
            <div className="calendarHeader__item">FRI</div>
            <div className="calendarHeader__item">SAT</div>
        </div>
    )
}
