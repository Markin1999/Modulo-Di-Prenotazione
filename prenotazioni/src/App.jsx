import "./App.css";
import FormPrenotazione from "./Componenti/Form";

import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/it";
import "react-big-calendar/lib/css/react-big-calendar.css";
const localizer = momentLocalizer(moment);
moment.locale("it");

const MyCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState([]);

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

  const handleSlotClick = () => {};

  useEffect(() => {
    console.log(events);
  }, [events]);

  return (
    <div className="container">
      <div className="formPrenotazione">
        <FormPrenotazione
          setCurrentDate={setCurrentDate}
          setEvents={setEvents}
        />
      </div>

      <div className="calendar">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          date={currentDate}
          views={["day"]}
          defaultView="day"
          onNavigate={(date) => setCurrentDate(date)}
          messages={customMessages}
          style={{ height: 500, marginTop: "20px" }}
          selectable={true}
          onSelectSlot={handleSlotClick}
        />
      </div>
    </div>
  );
};

export default MyCalendar;
