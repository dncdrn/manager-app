import React, { useEffect, useState } from "react";
import PostItem from "../components/PostItem";
import { getAllPost } from "../service/postAPI";
import LoadingScreen from "../components/LoadingScreen";
import "../css/PostList.css";
import NoData from "../components/NoData";

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
          <div className="PostList__title">Posts</div>
          {listOfPosts.length ? (
            <div className="PostList__Container">
              {listOfPosts.map((post) => (
                <PostItem post={post} />
              ))}
            </div>
          ) : (
            <NoData label="No Posts Yet" />
          )}
        </div>
      )}
    </>
  );
}
