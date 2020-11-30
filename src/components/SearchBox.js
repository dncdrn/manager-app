import React from "react";
import "../css/SearchBox.css";

export default function SearchBox({
  originalPostComments,
  postComments,
  setPostComments,
}) {
  function handleFilterComments(text) {
    const textToLowerCase = text.toLowerCase();
    const commentsToBeFiltered = [...postComments];
    const filtered = commentsToBeFiltered.filter((comment) => {
      return (
        comment.email.toLowerCase().includes(textToLowerCase) ||
        comment.name.includes(textToLowerCase) ||
        comment.body.includes(textToLowerCase)
      );
    });
    setPostComments(filtered);
    if (!text) {
      setPostComments(originalPostComments);
    }
  }
  return (
    <div>
      <input
        onChange={(e) => handleFilterComments(e.target.value)}
        className="SearchBox__Input"
        placeholder="Search comments by name, email or body here"
      />
    </div>
  );
}
