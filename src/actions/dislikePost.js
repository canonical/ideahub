import firebase from "firebase/app";

import { prepareDocForCreate } from "./helpers/firestoreHelpers";

const dislikePost = post => {
  const dislike = prepareDocForCreate({
    postId: post.id
  });

  return firebase
    .firestore()
    .collection("postDislikes")
    .add(dislike);
};

export default dislikePost;
