import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";
import "dayjs/locale/es";
import getData from "./googleshet.jsx";
import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getData();
        setData(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  dayjs.locale("es");
  const localizer = dayjsLocalizer(dayjs);

  const events = data
    .filter((event) => event.start && event.end && event.title) // Filtrar eventos válidos
    .map((event) => ({
      start: dayjs(event.start).toDate(),
      end: dayjs(event.end).toDate(),
      title: event.title.charAt(0).toUpperCase() + event.title.slice(1), // Capitaliza el título
      url: "https://en.wikipedia.org/wiki/Ayahuasca",
    }));

  console.log(events);

  const events1 = [
    {
      start: dayjs("2024-08-24T12:00:00").toDate(),
      end: dayjs("2024-08-24T13:00:00").toDate(),
      title: "Ayahuasca",
      url: "https://en.wikipedia.org/wiki/Ayahuasca",
    },
    {
      start: dayjs("2024-08-24T12:00:00").toDate(),
      end: dayjs("2024-08-24T13:00:00").toDate(),
      title: "Ceremonia",
      url: "https://en.wikipedia.org/wiki/Ayahuasca",
    },

    {
      start: dayjs("2024-08-31T13:00:00").toDate(),
      end: dayjs("2024-08-31T14:00:00").toDate(),
      title: "Hongos Magicos",
      url: "https://en.wikipedia.org/wiki/Great_Barrier_Reef",
    },
  ];

  const messages = { month: "Mes" };

  const handleSelectEvent = (event) => {
    window.location.href = event.url;
  };

  return (
    <div style={{ height: "95vh", width: "95vw" }}>
      <Calendar
        localizer={localizer}
        events={events}
        messages={messages}
        onSelectEvent={handleSelectEvent}
      />
    </div>
  );
}

export default App;
