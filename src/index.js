// the main file in our front-end app
// create-react-app expects a file in src/index.js and loads everything from here

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import React from "react";
import ReactDOM from "react-dom";

import App from "./views/App";

console.log("create-react-app env:", process.env.NODE_ENV);
console.log("Ideahub project:", process.env.REACT_APP_ENV);

// connect our app to firebase
const dbConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID
};
firebase.initializeApp(dbConfig);

// Sentry
// https://docs.sentry.io/clients/javascript/integrations/react/
window.Raven.config(process.env.REACT_APP_SENTRY_RAVEN_TRACKING_URL).install();

// render the App component to our document root with React
ReactDOM.render(<App />, document.getElementById("root"));
