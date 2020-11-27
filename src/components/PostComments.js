import React from "react";

export default function PostComments({ postComment }) {
  return (
    <div className="container comment">
      <div>
        <em>Comment</em>
      </div>
      <div className="" data-initials="DA"></div>
      <b>{postComment.name}</b>
      <div>{postComment.email}</div>
      <div>{postComment.body}</div>
    </div>
  );
}
