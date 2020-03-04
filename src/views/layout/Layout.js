// this Layout component wraps every page with the app header on top
// check out App.js to see how it's used

import React from "react";

import Header from "../../components/Header/Header";

import "./_layout.scss";

import { Strip, Row, Col } from "@canonical/react-components";

const Layout = ({ children }) => (
  <>
    <div className="row">
      <Header />
    </div>
    {children}
    <footer>
      <div className="row">
        <p>
          &copy; {new Date().getFullYear()} Canonical Ltd. Ubuntu and Canonical
          are registered trademarks of Canonical Ltd.
        </p>
      </div>
    </footer>
  </>
);

export default Layout;
