import { json, redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";
import { getAuthToken } from "../util/auth";

const EventDetailsPage = () => {
  const data = useRouteLoaderData("event-details");

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

export const action = async ({ params, request }) => {
  const id = params.id;

  const token = getAuthToken();
  const response = await fetch("http://localhost:8080/events/" + id, {
    method: request.method,
    headers: { Authorization: "Bearer " + token },
  });

  if (!response.ok) {
    throw json({ message: "Could not delete the event" }, { status: 500 });
  } else {
    return redirect("/events");
  }
};
