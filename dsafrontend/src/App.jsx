import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Sidebar from "./sidebar/sidebar";
import Contentarea from "./contentarea/Contentarea";

function App() {
  const [products, setProducts] = useState([]);
  // const url = "http://localhost:8000/api/products";
  // useEffect(() => {
  //   axios
  //     .get(url)
  //     .then((responce) => {
  //       setProducts(responce.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);
  const [navigate, navigateTo] = useState("dashboard");
  return (
    <div className="flex">
      <Sidebar navigateTo={navigateTo} />
      <Contentarea navigate={navigate} />
    </div>
  );
}

export default App;
