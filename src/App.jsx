import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

//Pages//
import PostList from "./pages/PostList";
import Post from "./pages/Post";
import EditPost from "./pages/EditPost";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<PostList />} />
      <Route path=":id" element={<Post />} />
      <Route path="edit" element={<EditPost />} />
    </Route>
  )
);

const App = () => {
  return (
    <div>
      <h1>My Page</h1>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
