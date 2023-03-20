import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  { id: "e1", title: "Some event" },
  { id: "e2", title: "Another event" },
];

const EventsPage = () => {
  return (
    <>
      <h1>This is the EVENTS PAGE</h1>
      <ul>
        {DUMMY_EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default EventsPage;
