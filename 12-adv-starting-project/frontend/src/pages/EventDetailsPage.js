import { json, useLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailsPage = () => {
  const data = useLoaderData();

  return <EventItem event={data.event} />;
};

export default EventDetailsPage;

export const loader = async ({ request, params }) => {
  const id = params.id;

  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch data for selected event" },
      { status: 500 }
    );
  } else {
    return response;
  }
};
