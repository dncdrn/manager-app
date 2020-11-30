export async function getAllPost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return await response.json();
}
export async function getSinglePostByID(post_id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${post_id}`
  );
  return await response.json();
}
export async function getSinglePostWithComments(post_id) {
  const response = await fetch(
    ` https://jsonplaceholder.typicode.com/comments?postId=${post_id}`
  );
  return await response.json();
}
