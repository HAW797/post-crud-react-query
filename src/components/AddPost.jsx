import { CreatePost } from "../api/PostAPI";
import PostForm from "./PostForm";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const AddPost = () => {
  const queryClient = useQueryClient();
  //Mutation function
  const CreatePostMutation = useMutation({
    mutationFn: CreatePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      console.log("Success");
    },
  });

  const handleSubmit = (post) => {
    CreatePostMutation.mutate({
      id: Math.floor(Math.random() * 1000 + 1).toString(),
      ...post,
    });
  };

  return (
    <div>
      <h2>Add new Post</h2>
      <PostForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddPost;
