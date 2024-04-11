import { CreatePost } from "../api/PostAPI";
import PostForm from "./PostForm";
import { useMutation } from "@tanstack/react-query";


const AddPost = () => {
  //Mutation function
  const CreatePostMutation = useMutation ({
    mutationFn: CreatePost 
  })

const handleSubmit = (post) => {
  CreatePostMutation.mutate({
    id:Math.floor((Math.random() * 1000) + 1),
    ...post
  })
}


  return (
    <div>
      <h2>Add new Post</h2>
      <PostForm onSubmit={handleSubmit}/>
    </div>
  );
};

export default AddPost;
