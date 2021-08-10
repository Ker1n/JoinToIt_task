import React from 'react'

export const CalendarView = () => {
    return (
        <div className='calendarView'>
            <div className="calendarView__title">
            Calendar View
            </div>
            <div className="calendarView__buttons">
                <div className="calendarView__btn-month active">
                        <button>Mount</button>
                </div>
                <div className="calendarView__btn-week">
                        <button>Week</button>
                </div>
                <div className="calendarView__btn-day">
                        <button>Day</button>
                </div>
                <div className="calendarView__btn-agenda">
                        <button>Agenda</button>
                </div>
            </div>
        </div>
    )
}
