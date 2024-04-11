import { useState } from "react";
import FormField from "./FormField";

const PostForm = ({ onSubmit }) => {
  const [post, setPost] = useState({
    title: "",
    body: "",
  });

  const handleChange = (e) =>
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(post)
    setPost({
      title: "",
      body: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>{FormField("Title", handleChange, post)}</div>
      <div>{FormField("Body", handleChange, post)}</div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PostForm;
