import "./App.css";
import { useEffect, useState } from "react";
import { axiosInstance, endPoints } from "./endPoint/api";
import Post from "./Components/Post/Post";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axiosInstance.get(endPoints.ALL_POSTS);
        setPosts(response.data.data);
      } catch (error) {
        console.log("Error", error.message);
      }
    }
    getData();
  }, []);

  return (
    <>
      <div className="App-header">
        <h1>Blog Posts</h1>
      </div>
      <div className="App">
        <Post posts={posts} />
      </div>
    </>
  );
}

export default App;
