import firebase from "firebase/app";
import slugify from "slugify";

import { prepareDocForCreate } from "./helpers/firestoreHelpers";

const createPost = values => {
  values.slug = slugify(values.title, { lower: true });
  values._likeCount = 0;

  return firebase
    .firestore()
    .collection("posts")
    .add(prepareDocForCreate(values))
    .then(() => values)
    .catch(error => {
      alert(`Whoops, couldn't create the post: ${error.message}`);
    });
};

export default createPost;
