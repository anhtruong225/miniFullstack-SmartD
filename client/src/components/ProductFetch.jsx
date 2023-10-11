import React from "react";
import CreateProduct from "./CreateProduct";
import { useEffect, useState } from "react";
import axios from "axios";

function ProductFetch() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://minifullstack-smartd-backend.onrender.com/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  // const fetchProducts = () => {
  // axios
  //   .get("https://minifullstack-smartd-backend.onrender.com/products")
  //   .then((response) => {
  //     setProducts(response.data);
  //     setLoading(false);
  //     console.log(response.data);
  //   })
  //   .catch((error) => {
  //     console.error("Error:", error);
  //   });
  // };
  // useEffect(() => {
  //   fetchProducts;
  // }, []);
  if (loading) {
    return <p>Loading</p>;
  }
  return (
    <div>
      <h1>Create a product</h1>
      <CreateProduct setProducts={setProducts} />

      <h2>See the list of products</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.product_name}</h3>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}
export default ProductFetch;
