// this Layout component wraps every page with the app header on top
// check out App.js to see how it's used

import React from "react";

import logIn from "../../actions/logIn";
import FirebaseAuth from "../misc/FirebaseAuth";

const Layout = ({ children }) => (
  <div>
    <header>
      <a href="/">Ideahub</a>

      <div style={{ float: "right" }}>
        <a href="/search">
          <span role="img" aria-label="search">
            🔎
          </span>
        </a>{" "}
        <FirebaseAuth>
          {({ isLoading, error, auth }) => {
            if (isLoading) {
              return "...";
            }
            if (error) {
              return "⚠️ login error";
            }
            if (auth) {
              return (
                <a href={`/account`}>
                  <span role="img" aria-label="account">
                    👤
                  </span>
                </a>
              );
            } else {
              return <button onClick={logIn}>log in</button>;
            }
          }}
        </FirebaseAuth>
      </div>
    </header>

    {children}

    <div>© {new Date().getFullYear()}</div>
  </div>
);

export default Layout;
