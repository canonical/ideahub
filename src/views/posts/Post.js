import React, { useState, useCallback } from "react";
import { FirestoreCollection } from "react-firestore";

import likePost from "../../actions/likePost";
import unlikePost from "../../actions/unlikePost";
import Error from "../misc/Error";
import FirebaseAuth from "../misc/FirebaseAuth";
import LikeButton from "./LikeButton";
import FloatingCta from "../../components/FloatingCta/FloatingCta";
import Loading from "../../components/Loading/Loading";

import "./_post.scss";

const Post = ({ match }) => {
  const [likes, setLikes] = useState(100);

  const toggleLike = (userLike, post) => {
    if (userLike) {
      console.log("like post");
      //setLikes(likes => likes - 1);
      //unlikePost(userLike);
    } else {
      console.log("unlike post");
      //setLikes(likes + 1);
      // likePost(post);
    }
  };

  return (
    <FirestoreCollection
      path={"posts"}
      filter={["slug", "==", match.params.slug]}
      likes={likes}
      setLikes={setLikes}
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

        setLikes(post._likeCount);

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
                <LikeButton post={post} likes={likes} setLikes={setLikes} />
              </FloatingCta>
            </div>
          </div>
        );
      }}
    </FirestoreCollection>
  );
};

export default Post;
