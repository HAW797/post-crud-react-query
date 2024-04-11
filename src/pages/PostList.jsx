import { useQuery } from "@tanstack/react-query";
import AddPost from "../components/AddPost";
import { GetPosts } from "../api/PostAPI";
import { useNavigate } from "react-router-dom";


const PostList = () => {
  const navigate = useNavigate();

  const {
    isError,
    isLoading,
    data: posts,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: GetPosts,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching posts</div>;

  return (
    <div>
      <AddPost />
      <h4>Post List</h4>
      {posts.map((post) => (
        <div style={{background:"#777"}} key={post.id}>
          <p onClick={() => navigate(post.id)} style={{cursor:"pointer"}}>{post.title}</p>
          <button onClick={() => navigate("edit")}>Edit</button>
          <button>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default PostList;
