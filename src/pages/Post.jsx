import { useQuery } from "@tanstack/react-query";
import { GetPostsDetails } from "../api/PostAPI";
import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();

  const {
    isError,
    isLoading,
    data: postDetails,
  } = useQuery({
    queryKey: ["posts", id],
    queryFn: () => GetPostsDetails(id),
  });

  if (isLoading) return <div>...Loading</div>;
  if (isError) return <div>Error fetching posts</div>;

  return <div>
    <h3>{postDetails.title}</h3>
    <h4>{postDetails.body}</h4>
  </div>;
};

export default Post;
