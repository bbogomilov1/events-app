// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
import { createBrowserRouter, RouterProvider } from "react-router-dom/dist";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import EventDetailsPage from "./pages/EventDetailsPage";
import NewEventPage from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import RootLayout from "./pages/RootLayout";
import EventRoot from "./pages/EventRoot";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    children: [
      { index: "true", element: <HomePage /> },
      {
        path: "events",
        element: <EventRoot />,
        children: [
          {
            index: "true",
            element: <EventsPage />,
            loader: async () => {
              const response = await fetch("http://localhost:8080/events");

              if (!response.ok) {
              } else {
                const resData = await response.json();
                return resData.events;
              }
            },
          },
          { path: ":id", element: <EventDetailsPage /> },
          { path: "new", element: <NewEventPage /> },
          { path: ":id/edit", element: <EditEventPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
