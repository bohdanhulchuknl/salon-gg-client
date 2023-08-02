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
      resourceId: 1
    },
    {
      start: moment().add(2, "hours").toDate(),
      end: moment().add(3, "hours").toDate(),
      title: "Some TITLE2",
      resourceId: 2
    },
  ]);

  const onEventResize = (data: any) => {
    console.log(data,"resize");
    const { start, end } = data;
    setMyEventsList((prev) => {
      const tempState = prev;
      tempState[0].start = start;
      tempState[0].end = end;
      return tempState;
    });
  };

  const onEventDrop = (data: any) => {
    console.log(data,"data drop");
  };

  return (
    <div className="container">
      <DnDCalendar
        localizer={localizer}
        events={myEventsList}
        onEventDrop={onEventDrop}
        onEventResize={onEventResize}
        onDoubleClickEvent={(e:any) => {
          console.log(e, 'double')
        }}
        onDragOver={(e) => {
          console.log(e, 'dragOver')
        }}
        onShowMore={(e:any) => {
          console.log(e, "showMORE")
        }}
        defaultView="week"
        defaultDate={new Date()}
        style={{ height: "100vh" }}
        resizable
        views={['day', "week"]}
      />
    </div>
  );
};

export default MyCalendar;
