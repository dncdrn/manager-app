import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getSinglePostWithComments } from "../service/postAPI";
import "../css/PostItem.css";

export default function PostItem({ post }) {
  const [postCommentCount, setPostCommentCount] = useState(0);

  useEffect(() => {
    const fetchPostWithComments = async () => {
      const postWithComment = await getSinglePostWithComments(post.id);
      setPostCommentCount(postWithComment.length);
    };
    fetchPostWithComments();
  }, [post]);

  return (
    <div className="PostItem__Container">
      <div>
        <div className="PostItem__Avatar">U{post.userId}</div>
        <em>Author User {post.userId}</em>
        <div className="PostItem__Title">{post.title}</div>
        <div className="PostItem__Text">{post.body}</div>
        <Link className="Link" to={`/post/${post.id}`}>
          <em>{postCommentCount} comments</em>
        </Link>
      </div>
    </div>
  );
}
