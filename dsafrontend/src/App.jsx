import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const url = "http://localhost:8000/api/products";
  useEffect(() => {
    axios
      .get(url)
      .then((responce) => {
        setProducts(responce.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Mrs. G Menu! From Laravel</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.product_name}: {product.product_price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
