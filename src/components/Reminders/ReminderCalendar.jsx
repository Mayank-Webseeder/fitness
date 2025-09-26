import React, { useState } from "react";
import { CalendarDays, Plus } from "lucide-react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";

const Calendar = () => {
  const [events, setEvents] = useState([
    { id: 1, title: "All-Team Kickoff", start: "2025-09-22T09:00:00", color: "#60a5fa" },
    { id: 2, title: "Financial Update", start: "2025-09-22T10:00:00", color: "#38bdf8" },
    { id: 3, title: "Welcome Lunch", start: "2025-09-22T11:00:00", color: "#c084fc" },
  ]);

  const handleDateClick = (info) => {
    const title = prompt("Enter Event Title:");
    if (title) {
      setEvents([...events, { id: events.length + 1, title, start: info.dateStr, color: "#4ade80" }]);
    }
  };

  const handleEventClick = (info) => {
    if (window.confirm(`Delete event '${info.event.title}'?`)) {
      setEvents(events.filter((e) => e.id !== parseInt(info.event.id)));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 mt-0 px-4 py-3 flex items-center shadow-sm justify-between">
        <h1 className="text-xl font-bold text-gray-800 flex items-center font-sans gap-2">
          <CalendarDays />
          Calendar
        </h1>
        <button
          className="flex items-center gap-1 bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-md shadow-sm"
          onClick={() => {
            const title = prompt("Enter Event Title:");
            const date = prompt("Enter Date (YYYY-MM-DD):");
            if (title && date) {
              setEvents([...events, { id: events.length + 1, title, start: date, color: "#f59e0b" }]);
            }
          }}
        >
          <Plus size={18} /> ADD
        </button>
      </header>

      {/* Calendar Below Header */}
      <div className="p-4">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
          initialView="timeGridWeek"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridDay,timeGridWeek,dayGridMonth,listYear",
          }}
          events={events}
          dateClick={handleDateClick}
          eventClick={handleEventClick}
          editable={true}
          selectable={true}
          nowIndicator={true}
          height="80vh"
        />
      </div>
    </div>
  );
};

export default Calendar;
