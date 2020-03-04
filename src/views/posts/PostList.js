import React from "react";
import { FirestoreCollection } from "react-firestore";

import Error from "../misc/Error";
import FloatingCta from "../../components/FloatingCta/FloatingCta";
import Idea from "../../components/Idea/Idea";

const PostList = () => (
  <div>
    <FirestoreCollection path={"posts"} sort="_likeCount:desc">
      {({ error, isLoading, data }) => {
        if (error) {
          return <Error error={error} />;
        }

        if (isLoading) {
          return <p>Loading...</p>;
        }

        if (data.length === 0) {
          return <p>No ideas yet! 😢</p>;
        }

        return (
          <div>
            <FloatingCta>Add an idea</FloatingCta>
            {data.map(idea => (
              <Idea idea={idea} />
            ))}
          </div>
        );
      }}
    </FirestoreCollection>
  </div>
);

export default PostList;
