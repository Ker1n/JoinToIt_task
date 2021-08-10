import React from "react";
import "./event.scss";

import {EventPanelControl} from './EventPanelControl';



export const Event = ({ element }) => {
 
    const [controlPanelHandler, setControlPanelHandler] = React.useState(false);

    
  return (
    <div className="event" onClick={()=>setControlPanelHandler(!controlPanelHandler)}>
      <div className="event__wrapper">
        <div className="event__title">{element?.eventName}</div>
       {controlPanelHandler &&   <EventPanelControl setControlPanelHandler={setControlPanelHandler} />}
      </div>
    </div>
  );
};
