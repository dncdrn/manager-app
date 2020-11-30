import React from "react";

export default function PostComments({ postComment }) {
  const avatarInitial = postComment.name.charAt(0).toUpperCase();
  return (
    <div className="container comment">
      <div style={{ display: "flex" }}>
        <div className="avatar-initial">{avatarInitial}</div>
        <div className="comment-identity">
          <b className="comment-name">{postComment.name}</b>
          <small>{postComment.email}</small>
        </div>
      </div>
      <div style={{ marginLeft: "65px" }} className="">
        {postComment.body}
      </div>
    </div>
  );
}
