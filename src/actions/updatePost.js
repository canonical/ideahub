import firebase from "firebase/app";
import algoliasearch from "algoliasearch/lite";
import { prepareDocForUpdate } from "./helpers/firestoreHelpers";

const updatePost = (postId, values) => {
  const searchClient = algoliasearch(
    process.env.REACT_APP_ALGOLIA_APP_ID,
    process.env.REACT_APP_ALGOLIA_SEARCH_KEY
  );

  const index = searchClient.initIndex("posts");

  console.log(index);

  return firebase
    .firestore()
    .collection("posts")
    .doc(postId)
    .update(prepareDocForUpdate(values))
    .catch(error => {
      alert(`Whoops, couldn't edit the post: ${error.message}`);
    });
};

export default updatePost;
