/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Calendar, momentLocalizer, DateLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { useState } from 'react';



const MyCalendar = () => {

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const localizer = momentLocalizer(moment) 

const [myEventsList, setMyEventsList] = useState([{
  start: moment().toDate(),
  end: moment().add(1,'days').toDate(),
  title: "Some TITLE"
}])
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default MyCalendar;
