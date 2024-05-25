import React from "react";
import {Calendar} from "@nextui-org/react";
import type {DateValue} from "@react-types/calendar";
import {today, getLocalTimeZone} from "@internationalized/date";
import './calendar.css'

export default function CalendarC() {
  let defaultDate = today(getLocalTimeZone());
  let [focusedDate, setFocusedDate] = React.useState<DateValue>(defaultDate);

  return (
    <div className="calendar-container">
    <Calendar
      aria-label="Date (Controlled Focused Value)"
      focusedValue={focusedDate}
      value={defaultDate}
      onFocusChange={setFocusedDate}
    />
    </div>
  );
}