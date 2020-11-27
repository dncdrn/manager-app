import React, { useEffect, useState } from "react";
import PostItem from "../components/PostItem";
import { getAllPost } from "../service/postAPI";

export default function PostList() {
  const [listOfPosts, setListOfPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getAllPost();
      setListOfPosts(posts);
    };
    fetchPosts();
  }, []);
  return (
    <>
      <div className="title">Posts</div>
      <div className="list-container">
        {listOfPosts && listOfPosts.map((post) => <PostItem post={post} />)}
      </div>
    </>
  );
}
