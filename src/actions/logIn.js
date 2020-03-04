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
      var user = result.user;
      console.log(user);
      // ...
    })
    .catch(function(error) {
      console.log(error);
    });

  //const token = firebase.auth().signInWithRedirect(provider);

  // console.log(token);

  // return firebase.auth()
  //   .signInWithRedirect(provider)
  //   .then(result => {
  //     console.log(`logged in as ${result.user.displayName}`);
  //   })
  //   .catch(error => {
  //     console.error("could not sign in", error);
  //   });
};

export default logIn;
