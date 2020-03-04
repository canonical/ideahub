// a generic error page to show whenever something goes wrong in other views

import React from "react";

const Error = ({ error }) => (
  <>
    <h1>Whoops</h1>
    <p>{`Sorry, something went wrong. We're looking into it.`}</p>
    <div style={{ fontFamily: "monospace" }}>
      {error ? error.message : null}
    </div>
    <a href="/">Go to the homepage</a>
  </>
);

export default Error;
