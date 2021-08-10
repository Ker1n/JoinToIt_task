import React from "react";

export const EventPanelControl = ({setControlPanelHandler}) => {

  const [eventName, setEventName] = React.useState();
  const [eventDate, setEventDate] = React.useState();
  const [eventTime, setEventTime] = React.useState();
  const [eventNotes, setEventNotes] = React.useState();
  

  return (
    <div className="eventPanelControl">
      <div className="eventPanelControl__wrapper">
        <div className="eventPanelControl__exit" onClick={()=>setControlPanelHandler(false)}>
            <i className='icon-exit'></i>
        </div>
        <div className="eventPanelControl__body">
          <div className="eventPanelControl__eventName">
            <input
              type="text"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              placeholder='event name'
            />
          </div>

          <div className="eventPanelControl__eventDate">
            <input
              type="text"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              placeholder='event date'

            />
            <i className='icon-calendar'></i>
          </div>
          <div className="eventPanelControl__eventTime">
            <input
              type="text"
              value={eventTime}
              onChange={(e) => setEventTime(e.target.value)}
              placeholder='event time'
            />
            <i className='icon-clock'></i>
          </div>
          <div className="eventPanelControl__eventNotes">
            <input
              type="text"
              value={eventNotes}
              onChange={(e) => setEventNotes(e.target.value)}
              placeholder='notes'
            />
          </div>
          <div className="eventPanelControl__actions-row">
            <div className="eventPanelControl__action-discard">
                <button>DISCARD</button>
            </div>
            <div className="eventPanelControl__action-edit">
            <button>EDIT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
