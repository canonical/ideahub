// This is an uncontrolled React form, which is way simpler than
// the normal React controlled form
// https://reactjs.org/docs/uncontrolled-components.html
//
// You can use browser form validation these days, and just
// get the values from the form on submit.

import React from "react";
import FloatingCta from "../../components/FloatingCta/FloatingCta";

import "./_postForm.scss";

class PostForm extends React.Component {
  onSubmit = event => {
    event.preventDefault();
    const { title, content } = event.target.elements;
    const values = {
      title: title.value,
      content: content.value
    };
    this.props.onSubmit(values);
  };

  render() {
    return (
      <div className="post-form">
        <div className="row">
          <form onSubmit={this.onSubmit}>
            <div className="row">
              <label htmlFor="title">What's your idea</label>
              <input
                type="text"
                name="title"
                defaultValue={this.props.post ? this.props.post.title : ""}
                required
                placeholder="What's your big idea?"
              />
            </div>

            <div>
              <label htmlFor="content">Add a short description</label>
              <textarea
                id="content"
                name="content"
                rows="4"
                cols="50"
                placeholder="Add a short description"
                required
              >
                {this.props.post ? this.props.post.content : ""}
              </textarea>
            </div>
            <FloatingCta>
              <button type="reset">Cancel</button>
              <button className="p-button--positive" type="submit">
                Submit your idea
              </button>
            </FloatingCta>
          </form>
        </div>
      </div>
    );
  }
}

export default PostForm;
