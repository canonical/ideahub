import firebase from "firebase/app";

const undislikePost = userDislike => {
  return firebase
    .firestore()
    .collection("postDislikes")
    .doc(userDislike.id)
    .delete();
};

export default undislikePost;
