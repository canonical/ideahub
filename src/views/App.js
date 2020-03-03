import firebase from "firebase/app";
import { FirestoreProvider } from "react-firestore";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import ErrorBoundary from "./misc/ErrorBoundary";
import Routes from "./Routes";
import Layout from "./layout/Layout";

const App = () => (
  <FirestoreProvider firebase={firebase}>
    <BrowserRouter>
      <ErrorBoundary>
        <Layout>
          <Routes />
        </Layout>
      </ErrorBoundary>
    </BrowserRouter>
  </FirestoreProvider>
);

export default App;
