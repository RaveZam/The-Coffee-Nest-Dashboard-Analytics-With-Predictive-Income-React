import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Sidebar from "./sidebar/sidebar";

function App() {
  // const [products, setProducts] = useState([]);
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

  return (
    <div className="flex">
      <Sidebar />
    </div>
  );
}

export default App;
