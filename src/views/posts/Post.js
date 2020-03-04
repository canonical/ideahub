import React from "react";
import { FirestoreCollection } from "react-firestore";

import Error from "../misc/Error";
import FirebaseAuth from "../misc/FirebaseAuth";
import LikeButton from "./LikeButton";
import FloatingCta from "../../components/FloatingCta/FloatingCta";
import Loading from "../../components/Loading/Loading";

import "./_post.scss";

const Post = ({ match }) => (
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

      const post = data[0];

      return (
        <div className="post">
          <div className="row">
            <h1 className="post__title">{post.title}</h1>
            <p>{post.content}</p>
            <FirebaseAuth>
              {({ auth }) =>
                auth ? (
                  <a className="p-button" href={`/${post.slug}/edit`}>
                    Edit
                  </a>
                ) : null
              }
            </FirebaseAuth>
            <FloatingCta>
              {post._likeCount || 0}
              <LikeButton post={post} />
            </FloatingCta>
          </div>
        </div>
      );
    }}
  </FirestoreCollection>
);

export default Post;
