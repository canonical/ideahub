// This is an uncontrolled React form, which is way simpler than
// the normal React controlled form
// https://reactjs.org/docs/uncontrolled-components.html
//
// You can use browser form validation these days, and just
// get the values from the form on submit.

import React from 'react'

class PostForm extends React.Component {

  onSubmit = event => {
    event.preventDefault()
    const {title, content} = event.target.elements
    const values = {
      title: title.value,
      content: content.value,
    }
    this.props.onSubmit(values)
  }

  render() {
    return <form onSubmit={this.onSubmit}>
      <div>
        <label for="title">Title</label>
        <input type="text" name="title" defaultValue={this.props.post ? this.props.post.title : ''} required />
      </div>

      <div>
        <label for="content">Content</label>
        <textarea id="content" name="content"  rows="4" cols="50" required>{this.props.post ? this.props.post.content : ''}</textarea>
      </div>

      <button type="submit">Save post</button>
    </form>
  }
}

export default PostForm
