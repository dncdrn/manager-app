import React from "react";

export default function PostComments({ postComment }) {
  const avatarInitial = postComment.name.charAt(0).toUpperCase();
  return (
    <div className="container comment">
      <div>
        <em>Comment</em>
      </div>
      <div className="avatar-initial">{avatarInitial}</div>
      <b>{postComment.name}</b>
      <div>{postComment.email}</div>
      <div>{postComment.body}</div>
    </div>
  );
}
