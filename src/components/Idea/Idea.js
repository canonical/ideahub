import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { convertToMilliseconds } from "../../utils";

import "./_idea.scss";

export default function Idea({ idea }) {
  const ideaCreatedOn = idea.createdOn.seconds || idea.createdOn._seconds;
  let voteCount = idea._likeCount - idea._dislikeCount;
  return (
    <div className="idea">
      <div className="idea__date">
        Submitted {moment(convertToMilliseconds(ideaCreatedOn)).fromNow()}
      </div>
      <div className="idea__body">
        <div className="idea__summary">
          <Link to={`/${idea.slug}`} className="idea__title">
            <h2>{idea.title}</h2>
          </Link>
          <p className="idea__desc">{idea.content}</p>
        </div>
        <div className="idea__meta">
          <div className="idea__points">
            <span className="idea__count">{voteCount || 0}</span>
            <span className="idea__count-label">points</span>
          </div>
          <div className="idea__comments">
            {/* <i className="p-icon--comments">Comments</i>
            <span className="idea__comments-count">0</span> */}
          </div>
        </div>
      </div>
    </div>
  );
}
