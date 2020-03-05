import React from "react";
import { Route } from "react-router-dom";

import logOut from "../../actions/logOut";

const Profile = ({ auth }) => (
  <Route
    render={({ history }) => (
      <>
        <div className="p-media-object">
          <img
            src={auth.photoURL}
            alt={auth.displayName}
            className="p-media-object__image is-round"
          />
          <div className="p-media-object__details">
            <h3 className="p-media-object__title">{auth.displayName}</h3>
            <p className="p-media-object__content">{auth.email}</p>
          </div>
        </div>
        <button
          className="p-button--neutral is-dense"
          onClick={() => logOut().then(() => history.push(`/`))}
        >
          Log out
        </button>
      </>
    )}
  />
);

export default Profile;
