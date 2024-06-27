import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import { PublicRoute } from "./public";
import Home from "pages/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PublicRoute>
        <Home />
      </PublicRoute>
    ),
  },
]);
