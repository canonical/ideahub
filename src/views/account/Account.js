import React from "react";

import logIn from "../../actions/logIn";
import FirebaseAuth from "../misc/FirebaseAuth";
import Error from "../misc/Error";
import Profile from "./Profile";

import "./_profile.scss";

const Account = () => (
  <div className="profile">
    <FirebaseAuth>
      {({ isLoading, error, auth }) => {
        if (isLoading) {
          return <p>loading...</p>;
        }

        if (error) {
          return <Error error={error} />;
        }

        if (!auth) {
          return (
            <div className="row">
              <p>Log in to see your account.</p>
            </div>
          );
        }

        return (
          <div className="row">
            <Profile auth={auth} />
          </div>
        );
      }}
    </FirebaseAuth>
  </div>
);

export default Account;
