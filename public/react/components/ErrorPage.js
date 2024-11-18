import React from "react";
import { useRouteError } from "react-router-dom";
import NavBar from "./NavBar";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page">
      <NavBar />
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}