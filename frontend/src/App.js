import "./App.css";
import { useEffect, useState } from "react";
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { axiosInstance, endPoints } from "./endPoint/api";
import Post from "./Components/Post/Post";

function App() {
  const [posts, setPosts] = useState([]);
  const { id } = useParams();

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
	    <Post posts={posts} id={id}/>
        </div>
    </>
  );
}

export default App;
