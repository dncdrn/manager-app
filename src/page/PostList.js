import React, { useEffect, useState } from "react";
import PostItem from "../components/PostItem";
import { getAllPost } from "../service/postAPI";
import LoadingScreen from "../components/LoadingScreen";

export default function PostList() {
  const [listOfPosts, setListOfPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getAllPost();

      setListOfPosts(posts);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div>
          <div className="title">Posts</div>
          <div className="list-container">
            {listOfPosts && listOfPosts.map((post) => <PostItem post={post} />)}
          </div>
        </div>
      )}
    </>
  );
}
