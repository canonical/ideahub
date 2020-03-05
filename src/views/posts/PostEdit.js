import React from "react";
import { FirestoreCollection } from "react-firestore";

import Error from "../misc/Error";
import deleteIdea from "../../actions/deletePost";
import updatePost from "../../actions/updatePost";
import PostForm from "./PostForm";
import Loading from "../../components/Loading/Loading";

const PostEdit = ({ match, history }) => (
  <FirestoreCollection
    path={"posts"}
    filter={["slug", "==", match.params.slug]}
  >
    {({ error, isLoading, data }) => {
      if (error) {
        return <Error error={error} />;
      }

      if (isLoading) {
        return <Loading />;
      }

      if (data.length === 0) {
        return <Error />;
      }

      const idea = data[0];

      return (
        <div className="row">
          <h1>Edit idea</h1>
          <PostForm
            post={idea}
            onSubmit={values =>
              updatePost(idea.id, values).then(() =>
                history.push(`/${idea.slug}`)
              )
            }
          />
          <br />
          <button
            onClick={() => deleteIdea(idea).then(() => history.push(`/`))}
          >
            Delete idea
          </button>
        </div>
      );
    }}
  </FirestoreCollection>
);

export default PostEdit;
