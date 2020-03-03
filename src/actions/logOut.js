import firebase from "firebase/app";

const logOut = () => {
  return firebase.auth().signOut();
};

export default logOut;
