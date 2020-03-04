import React from 'react'
import { FirestoreCollection } from 'react-firestore'

import FirebaseAuth from '../misc/FirebaseAuth'

const LikeButton = ({post, likes}) => (
  <FirebaseAuth>
    { ({isLoading, error, auth}) => {

      if (!auth || isLoading || error) {
        return <button disabled>like</button>
      }

      return <FirestoreCollection
        path={'postLikes'}
        filter={[
          ['postId', '==', post.id],
          ['createdBy', '==', auth.uid],
        ]}
      >
        { ({error, isLoading, data}) => {

          if (error || isLoading) {
            return <button disabled>like</button>
          }

          const userLike = data[0]

          return <button onClick={ onClickHandler(userLike, post) }>
            {userLike ? `unlike ${likes}` : `like ${likes}`}
          </button>
        }}
      </FirestoreCollection>
    }}
  </FirebaseAuth>
)

export default LikeButton
