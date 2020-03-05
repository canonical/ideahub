import React from "react";
import Idea from "../../components/Idea/Idea";

const SearchResult = ({ hit: idea }) => {
  return <Idea idea={idea} key={idea.id} />;
};

export default SearchResult;
