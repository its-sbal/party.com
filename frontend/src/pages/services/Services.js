import React, { useState, useEffect } from "react";
import axios from "axios";
import VendorCard from "../../cred/VendorCard";

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
    <div className="row">
      {products.map((product) => (
        <VendorCard product={product} />
      ))}
    </div>
  );
}

export default Services;
