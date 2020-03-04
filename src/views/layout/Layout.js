// this Layout component wraps every page with the app header on top
// check out App.js to see how it's used

import React from "react";

import logIn from "../../actions/logIn";
import FirebaseAuth from "../misc/FirebaseAuth";

import { Strip, Row, Col } from "@canonical/react-components";

const Layout = ({ children }) => (
  <div>
    <Strip shallow element="section" type="light">
      <Row>
        <Col size="6">
          <a href="/">Ideahub</a>
        </Col>

        <Col size="6" className="u-align--right">
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
        </Col>
      </Row>
    </Strip>

    <Strip element="section">
      <Row>{children}</Row>
    </Strip>

    <Strip shallow element="section" type="dark">
      <Row>
        <div>© {new Date().getFullYear()}</div>
      </Row>
    </Strip>
  </div>
);

export default Layout;
