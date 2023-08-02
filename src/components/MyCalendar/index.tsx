/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useState } from "react";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

const MyCalendar = () => {
  const [myEventsList, setMyEventsList] = useState([
    {
      start: moment().toDate(),
      end: moment().add(1, "hours").toDate(),
      title: "Some TITLE",
    },
    {
      start: moment().add(2, "hours").toDate(),
      end: moment().add(3, "hours").toDate(),
      title: "Some TITLE",
    },
  ]);

  const onEventResize = (data: any) => {
    console.log(data);
    const { start, end } = data;
    setMyEventsList((prev) => {
      const tempState = prev;
      tempState[0].start = start;
      tempState[0].end = end;
      return tempState;
    });
  };

  const onEventDrop = (data: any) => {
    console.log(data);
  };

  return (
    <div className="container">
      <DnDCalendar
        localizer={localizer}
        events={myEventsList}
        onEventDrop={onEventDrop}
        onEventResize={onEventResize}
        defaultView="month"
        defaultDate={new Date()}
        style={{ height: "100vh" }}
        resizable
      />
    </div>
  );
};

export default MyCalendar;
