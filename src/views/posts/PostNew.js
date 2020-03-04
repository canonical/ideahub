import React from "react";

import FirebaseAuth from "../misc/FirebaseAuth";
import Error from "../misc/Error";
import logIn from "../../actions/logIn";
import createPost from "../../actions/createPost";
import PostForm from "./PostForm";
import Loading from "../../components/Loading/Loading";

const PostNew = ({ history }) => (
  <FirebaseAuth>
    {({ isLoading, error, auth }) => {
      if (error) {
        return <Error error={error} />;
      }

      if (isLoading) {
        return <Loading />;
      }

      if (!auth) {
        return (
          <>
            <p>You must be logged in to add ideas</p>
            <button onClick={logIn}>log in</button>
          </>
        );
      }

      return (
        <PostForm
          onSubmit={values =>
            createPost(values).then(post => history.push(`/${post.slug}`))
          }
        />
      );
    }}
  </FirebaseAuth>
);

export default PostNew;
