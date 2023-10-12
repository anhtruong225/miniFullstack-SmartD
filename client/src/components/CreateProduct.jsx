import React from "react";
import { useState } from "react";
import axios from "axios";

function CreateProduct({ setProducts }) {
  const [newProduct, setNewProduct] = useState({
    product_name: "",
    description: "",
    category: "",
    image_URL: "",
    date_of_expiry: "",
    manufacture: "",
    country_of_origin: "",
    supplier: "",
    date_of_supply: "",
    quantity_in_items: "",
    quantity_remaining: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://minifullstack-smartd-backend.onrender.com/products",
        newProduct
      )
      .then((response) => {
        console.log("Success:", response.data);
        alert("Product created successfully!");
        setProducts((prevProducts) => [...prevProducts, response.data]);
        setNewProduct({
          product_name: "",
          description: "",
          category: "",
          image_URL: "",
          date_of_expiry: "",
          manufacture: "",
          country_of_origin: "",
          supplier: "",
          date_of_supply: "",
          quantity_in_items: "",
          quantity_remaining: "",
        });
      })
      .catch((error) => {
        console.log("Error:", error);
        if (error.response) {
          console.log("Server response:", error.response.data);
        }
      });
  };

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="product_name"
          value={newProduct.product_name}
          onChange={handleChange}
          placeholder="Product Name"
          required
        />
        <input
          type="text"
          name="description"
          value={newProduct.description}
          onChange={handleChange}
          placeholder="Product Description"
        />
        <input
          type="text"
          name="category"
          value={newProduct.category}
          onChange={handleChange}
          placeholder="Product Category"
        />
        <input
          type="text"
          name="image_URL"
          value={newProduct.image_URL}
          onChange={handleChange}
          placeholder="Product Image Link"
        />
        <input
          type="date"
          name="date_of_expiry"
          value={newProduct.date_of_expiry}
          onChange={handleChange}
          placeholder="product date of expiry"
        />
        <input
          type="text"
          name="manufacture"
          value={newProduct.manufacture}
          onChange={handleChange}
          placeholder="Manufacture"
        />
        <input
          type="text"
          name="country_of_origin"
          value={newProduct.country_of_origin}
          onChange={handleChange}
          placeholder="Country of origin"
        />
        <input
          type="text"
          name="supplier"
          value={newProduct.supplier}
          onChange={handleChange}
          placeholder="Name of supplier"
        />
        <input
          type="number"
          name="quantity_in_items"
          value={newProduct.quantity_in_items}
          onChange={handleChange}
          placeholder="Quantity of products (in items)"
        />
        <input
          type="number"
          name="quantity_remaining"
          value={newProduct.quantity_remaining}
          onChange={handleChange}
          placeholder="Remaining quantity of products"
        />
        <input
          type="date"
          name="date_of_supply"
          value={newProduct.date_of_supply}
          onChange={handleChange}
          placeholder="Date of supply"
        />
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
}

export default CreateProduct;
