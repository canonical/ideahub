import React, { useEffect, useState } from "react";
import { FirestoreCollection } from "react-firestore";

import likePost from "../../actions/likePost";
import dislikePost from "../../actions/dislikePost";
import unlikePost from "../../actions/unlikePost";
import undislikePost from "../../actions/unDislikePost";
import FirebaseAuth from "../misc/FirebaseAuth";

import "./_likeButton.scss";

const LikeButton = ({ post, likes, dislikes }) => {
  const [currentLikes, setCurrentLikes] = useState(likes);
  const [currentDislikes, setCurrentDislikes] = useState(dislikes);

  useEffect(() => {
    if (currentLikes !== likes) {
      setCurrentLikes(likes);
    }
  }, [likes]);

  useEffect(() => {
    if (currentDislikes !== dislikes) {
      setCurrentDislikes(dislikes);
    }
  }, [dislikes]);

  return (
    <FirebaseAuth>
      {({ isLoading, error, auth }) => {
        if (!auth || isLoading || error) {
          return (
            <>
              <button disabled>Like</button>
              <button disabled>Dislike</button>
            </>
          );
        }

        return (
          <div className="like-buttons">
            <FirestoreCollection
              path={"postLikes"}
              filter={[
                ["postId", "==", post.id],
                ["createdBy", "==", auth.uid]
              ]}
            >
              {({ error, isLoading, data }) => {
                if (error || isLoading) {
                  return <button disabled>Like</button>;
                }

                const userLike = data[0];

                const toggleLike = () => {
                  if (!userLike) {
                    setCurrentLikes(currentLikes => currentLikes + 1);
                    likePost(post);
                  } else {
                    setCurrentLikes(currentLikes => currentLikes - 1);
                    unlikePost(userLike);
                  }
                };

                return (
                  <>
                    <button onClick={() => toggleLike()}>
                      <img
                        src={process.env.PUBLIC_URL + `/thumb.svg`}
                        alt="Dislike"
                      />
                      <span>{currentLikes || 0}</span>
                    </button>
                  </>
                );
              }}
            </FirestoreCollection>

            <FirestoreCollection
              path={"postDislikes"}
              filter={[
                ["postId", "==", post.id],
                ["createdBy", "==", auth.uid]
              ]}
            >
              {({ error, isLoading, data }) => {
                console.log(error);
                if (error || isLoading) {
                  return <button disabled>Dislike</button>;
                }

                const userDislike = data[0];

                const toggleDislike = () => {
                  if (!userDislike) {
                    setCurrentDislikes(currentDislikes => currentDislikes + 1);
                    dislikePost(post);
                  } else {
                    setCurrentDislikes(currentDislikes => currentDislikes - 1);
                    undislikePost(userDislike);
                  }
                };

                return (
                  <>
                    <button
                      className="inverted"
                      onClick={() => toggleDislike()}
                    >
                      <img
                        src={process.env.PUBLIC_URL + `/thumb.svg`}
                        alt="Dislike"
                      />
                      <span>{currentDislikes}</span>
                    </button>
                  </>
                );
              }}
            </FirestoreCollection>
          </div>
        );
      }}
    </FirebaseAuth>
  );
};

export default LikeButton;
