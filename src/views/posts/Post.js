import React from 'react'
import { FirestoreCollection } from 'react-firestore'

import Error from '../misc/Error'
import FirebaseAuth from '../misc/FirebaseAuth'
import LikeButton from './LikeButton'

const Post = ({match}) => (
  <div>
    <FirestoreCollection
      path={'posts'}
      filter={['slug', '==', match.params.slug]}
    >
      { ({error, isLoading, data}) => {
        if (error) {
          return <Error error={error} />
        }

        if (isLoading) {
          return <p>loading...</p>
        }

        if (data.length === 0) {
          return <Error />
        }

        const post = data[0]

        return <div>
          <h1>{post.title}</h1>
          <p>
            {post._likeCount || 0}
            {' '}
            {post._likeCount && post._likeCount === 1 ? 'like' : 'likes'}
            {' '}
            <LikeButton post={post} />
          </p>
          <p>{post.content}</p>
          <FirebaseAuth>
            { ({auth}) => (
              auth ? <a href={`/${post.slug}/edit`}>Edit</a> : null
            )}
          </FirebaseAuth>
        </div>
      }}
    </FirestoreCollection>
  </div>
)

export default Post
