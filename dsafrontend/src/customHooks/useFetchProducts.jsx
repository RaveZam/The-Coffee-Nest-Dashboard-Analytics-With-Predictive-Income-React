import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/products");
        if (response && response.data) {
          setProducts(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  return { products };
};

// my Bad Codes Below ======= Better Code Above!

// import axios from "axios";
// import { useEffect, useState } from "react";

// export const useFetchProducts = () => {
//   const [products, setProducts] = useState([]);
//   useEffect(() => {
//     const fetchProducts = async () => {
//       const response = await axios.get("http://localhost:8000/api/products");
//       try {
//         if (response && response.data) setProducts(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     useEffect(() => {
//       fetchProducts();
//     }, []);

//     return { products };
//   }, []);
// };

// export const useFetchProducts = () => {
//     const [products, setProducts] = useState([]);
//     useEffect(() => {
//       axios
//         .get("http://localhost:8000/api/products")
//         .then((response) => {
//           setProducts(response.data);
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     }, []);
//   };
