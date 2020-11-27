import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostComments from "../components/PostComments";
import PostItem from "../components/PostItem";
import {
  getSinglePostByID,
  getSinglePostWithComments,
} from "../service/postAPI";

export default function PostListWithComments() {
  let { postID } = useParams();

  const [postDetail, setPostDetail] = useState();
  const [postComments, setPostComments] = useState();

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getSinglePostByID(postID);
      setPostDetail(post);
    };

    const fetchPostWithComment = async () => {
      const postWithComments = await getSinglePostWithComments(postID);
      setPostComments(postWithComments);
    };

    Promise.all([fetchPost(), fetchPostWithComment()]);
  }, []);
  return (
    <div>
      <div className="title">Post</div>
      {postDetail && <PostItem post={postDetail} />}
      {postComments &&
        postComments.map((postComment) => (
          <PostComments postComment={postComment} />
        ))}
    </div>
  );
}
