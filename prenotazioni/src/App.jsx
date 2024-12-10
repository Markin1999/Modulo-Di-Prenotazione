import "./App.css";
import FormPrenotazione from "./Componenti/Form";

import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/it";
import "react-big-calendar/lib/css/react-big-calendar.css";

moment.locale("it");
const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const customMessages = {
    date: "Data",
    time: "Orario",
    event: "Evento",
    allDay: "Tutto il giorno",
    week: "Settimana",
    work_week: "Settimana lavorativa",
    day: "Giorno",
    month: "Mese",
    previous: "Precedente",
    next: "Prossimo",
    today: "Oggi",
    agenda: "Agenda",
    showMore: (count) => `+ Altri ${count} eventi`,
  };

  return (
    <>
      <div>
        <FormPrenotazione setCurrentDate={setCurrentDate} />
      </div>
      <div>
        <Calendar
          localizer={localizer}
          events={[]}
          startAccessor="start"
          endAccessor="end"
          date={currentDate}
          onNavigate={(date) => setCurrentDate(date)}
          messages={customMessages}
          style={{ height: 500, marginTop: "20px" }}
        />
      </div>
    </>
  );
};

export default MyCalendar;
