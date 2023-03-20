import { useParams } from "react-router-dom";

const EventDetailsPage = () => {
  const params = useParams();
  return (
    <>
      <h1>This is the EVENT DETAIL PAGE</h1>
      <p>Event ID: {params.id}</p>
    </>
  );
};

export default EventDetailsPage;
