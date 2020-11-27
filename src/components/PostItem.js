import React from "react";
import { Link } from "react-router-dom";
export default function PostItem({ post }) {
  return (
    <div className="container">
      <Link to={`/post/${post.id}`}>
        <b>{post.title}</b>
      </Link>
      <div>{post.body}</div>
    </div>
  );
}
