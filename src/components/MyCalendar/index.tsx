/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { useState } from 'react';
import "react-big-calendar/lib/css/react-big-calendar.css";
const MyCalendar = () => {

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const localizer = momentLocalizer(moment) 

const [myEventsList] = useState([{
  start: moment().toDate(),
  end: moment().add(1,'days').toDate(),
  title: "Some TITLE"
}])
  return (
    <div className='container'>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        defaultView="month"
        defaultDate={new Date()}
        style={{ height: "100vh" }}
      />
    </div>
  );
};

export default MyCalendar;
