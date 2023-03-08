import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const initialState = {
  productName: "",
  productType: "",
  quantity: "",
  price: "",
  code: "",
};

function CreateProduct() {
  const [product, setProduct] = useState(initialState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
      if (response.ok) {
        alert("Product created successfully");
        setProduct(initialState);
      } else {
        alert("Error creating product");
      }
    } catch (err) {
      console.log(err);
      alert("Error creating product");
    }
  };

  return (
    <div className="container my-4">
      <h1>Product Adding</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor="productName">Product Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product name"
            id="productName"
            name="productName"
            value={product.productName}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="productType">Product Type</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product type"
            id="productType"
            name="productType"
            value={product.productType}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="quantity">Quantity</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter quantity"
            id="quantity"
            name="quantity"
            value={product.quantity}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="price">Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter price"
            id="price"
            name="price"
            value={product.price}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="code">Code</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter code"
            id="code"
            name="code"
            value={product.code}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Create Product
        </Button>
      </Form>
    </div>
  );
}

export default CreateProduct;
