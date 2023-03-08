import React, { useState, useEffect } from "react";

function List() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Quantity</th>
          <th>Type</th>
          <th>Price</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index}>
            <td>{product.name}</td>
            <td>{product.quantity}</td>
            <td>{product.type}</td>
            <td>{product.price}</td>
            <td>
              <button className="btn btn-primary">Edit</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default List;
