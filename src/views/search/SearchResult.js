import React from 'react'

const SearchResult = ({hit}) => (
  <a href={`/${hit.slug}`}>
    {hit.title}
  </a>
)

export default SearchResult
