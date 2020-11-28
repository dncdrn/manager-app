import React from "react";
export default function SearchBox({
  originalPostComments,
  postComments,
  setPostComments,
}) {
  function handleFilterComments(text) {
    const textToLowerCase = text.toLowerCase();
    const commentsToBeFiltered = [...postComments];
    const filtered = commentsToBeFiltered.filter(
      (comment) =>
        comment.name.includes(textToLowerCase) ||
        comment.email.includes(textToLowerCase) ||
        comment.body.includes(textToLowerCase)
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
