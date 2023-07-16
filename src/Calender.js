import React from "react";
import "./Calender.css";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const mevents = [
  {
    title: "asdasd",
    allday: true,
    start: new Date(2021, 6, 10),
    end: new Date(2021, 6, 10),
  },
  {
    title: "Cloud Project last date",
    allday: true,
    start: new Date(2021, 10, 30),
    end: new Date(2021, 10, 30),
  },
];

function Calender() {
  return (
    <div className="cal">
      <h1>Calender </h1>
      <Calendar
        localizer={localizer}
        events={mevents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
}

export default Calender;
