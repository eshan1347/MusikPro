import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import SongPage from "./Routes/SongPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PlayListPage from "./Routes/PlayListPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "songs/:trackID",
    element: <SongPage />,
  },
  {
    path: "playlist/:playlistID",
    element: <PlayListPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
