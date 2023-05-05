import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function BookedCart() {
  const { userId } = useParams();
  const [user, setuser] = useState(null);
  const [products, setproducts] = useState([]);

  useEffect(() => {
    async function fetchCartDetails() {
      const { data } = await axios.get(`http://127.0.0.1:8000/cart/${userId}`);
      setuser(data);
      let prods = [];
      for (const item of data.my_array_field) {
        const { data: prod } = await axios.get(
          `http://127.0.0.1:8000/service/${item}`
        );
        prods.push({ vendorName: prod.vendorName, price: prod.price });
      }
      setproducts(prods);
    }
    fetchCartDetails();
  }, [userId]);

  return (
    <div>
      {user ? (
        <>
          <div>{user.totalPrice}</div>
          <div>
            {products.map((product) => (
              <div key={product.vendorName}>
                {product.vendorName} - {product.price}
              </div>
            ))}
          </div>
        </>
      ) : (
        <p>Fetching Details. Please Wait ...</p>
      )}
    </div>
  );
}

export default BookedCart;
