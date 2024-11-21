import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "regenerator-runtime/runtime";

import App, {
  loader as appLoader,
  action as appAction,
} from "./components/App";

import ErrorPage from "./components/ErrorPage";
import SingleItemView, { singleItemLoader } from "./components/SingleItemView";
import AddItem from "./components/AddItem";
import GridItemView from "./components/GridItemView";
import RegisterPage from "./components/Register";
import LoginPage from "./components/LoginPage";
import Home from "./components/Home";

const container = document.getElementById("root");
const root = createRoot(container);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    // action: appAction,
  },
  {
    path: "/inventory",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: appLoader,
    // action: appAction,
  },
  {
    path: "items/:itemId",
    element: <SingleItemView />,
    loader: singleItemLoader,
  },
  {
    path: "/items/add",
    element: <AddItem />,
  },
  {
    path: "/auth/register",
    element: <RegisterPage />,
  },
  {
    path: "/auth/login",
    element: <LoginPage />,
  },
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
