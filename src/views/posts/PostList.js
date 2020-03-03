import React from "react";
import { FirestoreCollection } from "react-firestore";

import Error from "../misc/Error";

const PostList = () => (
  <div>
    <a href="/new">New idea</a>
    <hr />
    <FirestoreCollection path={"posts"} sort="_likeCount:desc">
      {({ error, isLoading, data }) => {
        if (error) {
          return <Error error={error} />;
        }

        if (isLoading) {
          return <p>loading...</p>;
        }

        if (data.length === 0) {
          return <p>No ideas yet!</p>;
        }

        return (
          <div>
            {data.map(post => (
              <div key={post.id}>
                <a href={`/${post.slug}`}>{post.title}</a>
                <p>
                  {post._likeCount || 0}{" "}
                  {post._likeCount && post._likeCount === 1 ? "like" : "likes"}
                </p>
              </div>
            ))}
          </div>
        );
      }}
    </FirestoreCollection>
  </div>
);

export default PostList;
