// Helper functions for working with firebase Firestore

import firebase from "firebase/app";
import "firebase/auth";

const prepareDocForCreate = doc => {
  // timestamps
  doc.createdBy = firebase.auth().currentUser
    ? firebase.auth().currentUser.uid
    : null;
  doc.createdOn = firebase.firestore.Timestamp.now();

  return doc;
};

const prepareDocForUpdate = doc => {
  // timestamps
  doc.updatedBy = firebase.auth().currentUser
    ? firebase.auth().currentUser.uid
    : null;
  doc.updatedOn = firebase.firestore.Timestamp.now();

  // don't save the id as part of the document
  delete doc.id;

  // don't save values that start with an underscore (these are calculated by the backend)
  Object.keys(doc).forEach(key => {
    if (key.indexOf("_") === 0) {
      delete doc[key];
    }
  });

  return doc;
};

export { prepareDocForCreate, prepareDocForUpdate };
