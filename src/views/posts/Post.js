import React, { useState } from "react";
import { FirestoreCollection } from "react-firestore";

import Error from "../misc/Error";
import FirebaseAuth from "../misc/FirebaseAuth";
import LikeButton from "./LikeButton";
import FloatingCta from "../../components/FloatingCta/FloatingCta";
import PullPanel from "../../components/PullPanel/PullPanel";
import PostForm from "../../views/posts/PostForm";
import Loading from "../../components/Loading/Loading";

import updatePost from "../../actions/updatePost";

import "./_post.scss";

const Post = ({ match }) => {
  const [editPanelActive, setEditPanelActive] = useState(false);

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
                      <img
                        src="/edit.svg"
                        onClick={() => setEditPanelActive(!editPanelActive)}
                        alt="Edit idea"
                      />
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

              <PullPanel
                offScreen={true}
                initPanelUp={editPanelActive}
                cta="Edit idea"
                icon="floating"
              >
                <PostForm
                  post={idea}
                  onSubmit={values =>
                    updatePost(idea.id, values).then(() => {
                      setEditPanelActive(!editPanelActive);
                    })
                  }
                />
              </PullPanel>
            </div>
          </div>
        );
      }}
    </FirestoreCollection>
  );
};

export default Post;
