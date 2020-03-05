import React from "react";
import { FirestoreCollection } from "react-firestore";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, Hits, SearchBox } from "react-instantsearch-dom";

import SearchResult from "./../search/SearchResult";

import Error from "../misc/Error";
import PullPanel from "../../components/PullPanel/PullPanel";
import Loading from "../../components/Loading/Loading";
import PostForm from "./PostForm";
import createPost from "../../actions/createPost";

import "./_postList.scss";

const searchClient = algoliasearch(
  process.env.REACT_APP_ALGOLIA_APP_ID,
  process.env.REACT_APP_ALGOLIA_SEARCH_KEY
);

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
        <div className="post-list">
          <PullPanel cta="Add an idea" icon="floating">
            <PostForm
              onSubmit={values =>
                createPost(values).then(post => history.push(`/${post.slug}`))
              }
            />
          </PullPanel>
          <div className="row">
            <InstantSearch searchClient={searchClient} indexName="posts">
              <SearchBox autofocus />
              <Hits hitComponent={SearchResult} />
            </InstantSearch>
          </div>
        </div>
      );
    }}
  </FirestoreCollection>
);

export default PostList;
