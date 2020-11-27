import React from "react";
export default function SearchBox({
  originalPostComments,
  postComments,
  setPostComments,
}) {
  function handleFilterComments(text) {
    const commentsToBeFiltered = [...postComments];
    const filtered = commentsToBeFiltered.filter(
      (comment, index) =>
        comment.name.includes(text) ||
        comment.email.includes(text) ||
        comment.body.includes(text)
    );
    setPostComments(filtered);

    if (!text) {
      setPostComments(originalPostComments);
    }
  }
  return (
    <input
      onChange={(e) => handleFilterComments(e.target.value)}
      style={{
        width: "40%",
        height: "40px",
        marginBottom: "10px",
      }}
      placeholder="Search name, email or body here"
    />
  );
}
