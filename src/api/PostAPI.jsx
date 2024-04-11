import axios from "axios";

export const GetPosts = () => {
  return axios
    .get("http://localhost:3000/posts")
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

export const GetPostsDetails = (id) => {
  return axios
    .get(`http://localhost:3000/posts/${id}`)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

export const CreatePost = (post) => {
  console.log("🚀 ~ CreatePost ~ post:", post)
  return axios
    .post("http://localhost:3000/posts", post)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};
