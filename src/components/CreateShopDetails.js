import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const initialState = {
  shopName: "",
  shopAddress: "",
  mobileNumber: "",
};

function CreateShop() {
  const [shop, setShop] = useState(initialState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setShop({ ...shop, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/shops", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(shop),
      });
      if (response.ok) {
        alert("Shop created successfully");
        setShop(initialState);
      } else {
        alert("Error creating shop");
      }
    } catch (err) {
      console.log(err);
      alert("Error creating shop");
    }
  };

  return (
    <div className="container my-4">
      <h1>Add Shop Details</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor="shopName">Shop Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter shop name"
            id="shopName"
            name="shopName"
            value={shop.shopName}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="shopAddress">Shop Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter shop address"
            id="shopAddress"
            name="shopAddress"
            value={shop.shopAddress}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="mobileNumber">Mobile Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter mobile number"
            id="mobileNumber"
            name="mobileNumber"
            value={shop.mobileNumber}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Create Shop
        </Button>
      </Form>
    </div>
  );
}

export default CreateShop;
