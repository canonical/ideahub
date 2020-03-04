// this Layout component wraps every page with the app header on top
// check out App.js to see how it's used

import React from "react";

import Header from "../../components/Header/Header";

import "./_layout.scss";

import { Strip, Row, Col } from "@canonical/react-components";

const Layout = ({ children }) => (
  <div className="container">
    <div className="row">
      <Header />
    </div>
    {children}
  </div>
);

export default Layout;
