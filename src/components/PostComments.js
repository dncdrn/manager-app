import React from "react";
import "../css/PostItem.css";
import "../css/PostComments.css";

export default function PostComments({ postComment }) {
  const avatarInitial = postComment.name.charAt(0).toUpperCase();
  return (
    <div className="PostItem__Container PostComments__List">
      <div className="PostComments__Holder">
        <div className="PostComments__Avatar">{avatarInitial}</div>
        <div className="PostComments__Container">
          <b className="PostComments__Name">{postComment.name}</b>
          <small>{postComment.email}</small>
        </div>
      </div>
      <div className="PostComments__Body">{postComment.body}</div>
    </div>
  );
}
