import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  getAllPost,
  getSinglePostByID,
  getSinglePostWithComments,
} from "./service/postAPI";

function App() {
  const [listOfPosts, setListOfPosts] = useState([]);

  useEffect(() => {
    (async function get() {
      let posts = await getAllPost();
      console.log("val", posts);
      if (posts.length) {
        setListOfPosts(posts);
      }
    })();
  }, []);
  async function handlePostOnClick(post_id) {
    let post = await getSinglePostByID(post_id);
    console.log("post", post);
  }
  async function handleViewCommentOnClick(post_id) {
    let postWithComments = await getSinglePostWithComments(post_id);
    console.log("post", postWithComments);
  }
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div>
        {listOfPosts &&
          listOfPosts.map((post, index) => {
            return (
              <div onClick={() => handlePostOnClick(post.id)}>
                <span>{post.userId}</span>
                <b>{post.title}</b>
                <span>{post.body}</span>
                <span onClick={() => handleViewCommentOnClick(post.id)}>
                  view comments
                </span>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
