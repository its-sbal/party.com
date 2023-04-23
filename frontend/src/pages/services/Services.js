import React, { useState, useEffect } from "react";
import axios from "axios";

function Services() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProduct() {
      const { data } = await axios.get("http://127.0.0.1:8000/service/");
      setProducts(data);
    }
    fetchProduct();
  }, []);
  console.log(products);

  return (
    <div>
      {products.map((product) => (
        <p key={product._id}>{product.address}</p>
      ))}
    </div>
  );
}

export default Services;
