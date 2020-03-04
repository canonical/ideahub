import React from "react";
import { FirestoreCollection } from "react-firestore";

import Error from "../misc/Error";
import PullPanel from "../../components/PullPanel/PullPanel";
import Idea from "../../components/Idea/Idea";
import Loading from "../../components/Loading/Loading";
import PostForm from "./PostForm";
import createPost from "../../actions/createPost";

const PostList = ({ history }) => (
  <FirestoreCollection path={"posts"} sort="_likeCount:desc">
    {({ error, isLoading, data }) => {
      if (error) {
        return <Error error={error} />;
      }

      if (isLoading) {
        return <Loading />;
      }

      if (data.length === 0) {
        return <p>No ideas yet!</p>;
      }

      return (
        <>
          <PullPanel cta="Add an idea" icon="floating">
            <PostForm
              onSubmit={values =>
                createPost(values).then(post => history.push(`/${post.slug}`))
              }
            />
          </PullPanel>
          {data.map(idea => (
            <Idea idea={idea} key={idea.id} />
          ))}
        </>
      );
    }}
  </FirestoreCollection>
);

export default PostList;
