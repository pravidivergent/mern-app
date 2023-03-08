import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Create from "./Create";
import Delete from "./Delete";
import List from "./List";
import CreateShop from "./CreateShopDetails";

function HomePage() {
  const [page, setPage] = useState("home");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNavClick = (pageName) => {
    setPage(pageName);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      alert(data.message);
    } else {
      alert(data.message);
    }

    setEmail("");
    setPassword("");
  };

  const renderPage = () => {
    switch (page) {
      case "home":
        return (
          <div className="container my-4">
            <h1>Welcome to Rams Enterprises</h1>
            <br></br>
            <h3 className="w-50 mx-auto">Login Here!!!</h3>
            <Form className="w-50 mx-auto" size="sm" onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={handleEmailChange}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
  
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </Form.Group>
  
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <br></br>

              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
          </div>
        );
      case "create":
        return <Create />;
      case "list":
        return <List />;
      case "addShopDetails":
        return <CreateShop />;
      case "delete":
        return <Delete />;
      default:
        return null;
    }
  };
  

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Rams Enterprises</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => handleNavClick("home")}>Home</Nav.Link>
            <Nav.Link onClick={() => handleNavClick("create")}>Create Product</Nav.Link>
            <Nav.Link onClick={() => handleNavClick("list")}>Product Details</Nav.Link>
            <Nav.Link onClick={() => handleNavClick("addShopDetails")}>Add Shops</Nav.Link>
            <Nav.Link onClick={() => handleNavClick("delete")}>Shop Details</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {renderPage()}
    </>
  );
}

export default HomePage;
