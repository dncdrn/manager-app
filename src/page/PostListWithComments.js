import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostComments from "../components/PostComments";
import PostItem from "../components/PostItem";
import SearchBox from "../components/SearchBox";
import {
  getSinglePostByID,
  getSinglePostWithComments,
} from "../service/postAPI";

export default function PostListWithComments() {
  let { postID } = useParams();

  const [postDetail, setPostDetail] = useState();
  const [postComments, setPostComments] = useState();
  const [originalPostComments, setOriginalPostComments] = useState();

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getSinglePostByID(postID);
      setPostDetail(post);
    };

    const fetchPostWithComment = async () => {
      const postWithComments = await getSinglePostWithComments(postID);
      setPostComments(postWithComments);
      setOriginalPostComments(postWithComments);
    };

    Promise.all([fetchPost(), fetchPostWithComment()]);
  }, []);

  return (
    <div>
      <div className="title">Post</div>
      {postDetail && <PostItem post={postDetail} />}
      <SearchBox
        postComments={postComments}
        setPostComments={setPostComments}
        originalPostComments={originalPostComments}
      />
      {postComments &&
        postComments.map((postComment) => (
          <PostComments postComment={postComment} />
        ))}
    </div>
  );
}
