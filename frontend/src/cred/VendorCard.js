import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Col, Button } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import img1 from "./hi1.jpg";

import { useDispatch } from "react-redux";
import { addItem } from "./cartSlice"; // import the action creator

function VendorCard({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(product));
  };

  return (
    <>
      <div className="col">
        <Card>
          <Link
            to={{
              pathname: `/vendor/${product._id}`,
              state: { product },
            }}
          >
            <Card.Img variant="top" src={img1} />
            <Card.Body>
              <Card.Title>{product.vendorName}</Card.Title>
              <Card.Text>{product.price}</Card.Text>
            </Card.Body>
          </Link>
          <Button variant="primary" onClick={handleAddToCart}>
            Add to cart
          </Button>
        </Card>
      </div>
    </>
  );
}

export default VendorCard;

////oldcode DONT DELETE-------------------------------------------------------------
// function VendorCard({ product }) {
//   return (
//     <Link
//       to={{
//         pathname: `/vendor/${product._id}`,
//         state: { product },
//       }}
//     >
//       <div className="col">
//         <Card>
//           <Card.Img variant="top" src={img1} />
//           <Card.Body>
//             <Card.Title>{product.vendorName}</Card.Title>
//             <Card.Text>{product.price}</Card.Text>
//             <Button variant="primary">Add to cart</Button>
//           </Card.Body>
//         </Card>
//       </div>
//     </Link>
//   );
// }
// export default VendorCard;
