import firebase from "firebase/app";

const logIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // var token = result.credential.accessToken;
      // The signed-in user info.
    })
    .catch(function(error) {
      console.log(error);
    });
};

export default logIn;
