// lets users search posts using the Algolia API
// https://community.algolia.com/react-instantsearch/Getting_started.html#install-react-instantsearch

import React from "react";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, Hits, SearchBox } from "react-instantsearch-dom";

import SearchResult from "./SearchResult";

const searchClient = algoliasearch(
  process.env.REACT_APP_ALGOLIA_APP_ID,
  process.env.REACT_APP_ALGOLIA_SEARCH_KEY
);

const Search = () => (
  <InstantSearch searchClient={searchClient} indexName="posts">
    <SearchBox autofocus />
    <Hits hitComponent={SearchResult} />
  </InstantSearch>
);

export default Search;
