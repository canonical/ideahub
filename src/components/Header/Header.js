import React from "react";
import { Link } from "react-router-dom";

import FirebaseAuth from "../../views/misc/FirebaseAuth";
import logIn from "../../actions/logIn";

import "./_header.scss";

export default function Header() {
  return (
    <header className="p-header">
      <span className="p-header__logo">
        <Link to="/">
          <img src="/logo.svg" alt="Ideahub" />
        </Link>
      </span>
      <span className="p-header__action">
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
                <Link to="/account">
                  <i className="p-icon--user">Your account</i>
                </Link>
              );
            } else {
              return (
                <button className="p-button--neutral is-dense" onClick={logIn}>
                  Log in
                </button>
              );
            }
          }}
        </FirebaseAuth>
      </span>
    </header>
  );
}
