import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getSinglePostWithComments } from "../service/postAPI";

export default function PostItem({ post }) {
  const [postCommentCount, setPostCommentCount] = useState(0);
  useEffect(() => {
    const fetchPostWithComment = async () => {
      const postWithComment = await getSinglePostWithComments(post.id);
      console.log("jj", postWithComment);
      setPostCommentCount(postWithComment.length);
    };
    fetchPostWithComment();
  }, [post]);
  return (
    <div className="container">
      <div>
        <div className="post-avatar">U{post.userId}</div>
        <em>Author User {post.userId}</em>
        <div className="post-title">{post.title}</div>
        <div className="post-text">{post.body}</div>
        <Link
          style={{ textTransform: "capitalize", textDecoration: "none" }}
          to={`/post/${post.id}`}
        >
          <em>{postCommentCount} comments</em>
        </Link>
      </div>
    </div>
  );
}
