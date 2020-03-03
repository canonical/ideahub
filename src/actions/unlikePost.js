import firebase from "firebase/app";

const unlikePost = userLike => {
  return firebase
    .firestore()
    .collection("postLikes")
    .doc(userLike.id)
    .delete();
};

export default unlikePost;
