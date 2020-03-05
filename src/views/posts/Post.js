import React from "react";
import { FirestoreCollection } from "react-firestore";

import Error from "../misc/Error";
import FirebaseAuth from "../misc/FirebaseAuth";
import LikeButton from "./LikeButton";
import FloatingCta from "../../components/FloatingCta/FloatingCta";
import Loading from "../../components/Loading/Loading";

import "./_post.scss";

const Post = ({ match }) => {
  return (
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
          <div className="post">
            <div className="row">
              <h1 className="post__title">
                <span>{idea.title}</span>
                <FirebaseAuth>
                  {({ auth }) =>
                    auth ? (
                      <a className="post__edit" href={`/${idea.slug}/edit`}>
                        <img src="/edit.svg" alt="Edit idea" />
                      </a>
                    ) : null
                  }
                </FirebaseAuth>
              </h1>
              <p>{idea.content}</p>

              <FloatingCta>
                <LikeButton
                  post={idea}
                  likes={idea._likeCount}
                  dislikes={idea._dislikeCount}
                />
              </FloatingCta>
            </div>
          </div>
        );
      }}
    </FirestoreCollection>
  );
};

export default Post;
