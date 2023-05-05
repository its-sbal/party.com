import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Col } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, message } from "antd";

import img1 from "./hi1.jpg";

import { useDispatch } from "react-redux";
import { addItem } from "./cartSlice"; // import the action creator

function VendorCard({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(product));
  };

  //for button animation starts here--------------
  const [messageApi, contextHolder] = message.useMessage();
  const key = "updatable";

  const openMessage = () => {
    messageApi.open({
      key,
      type: "loading",
      content: "Adding to Cart...",
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: "success",
        content: "Success : Added to Cart",
        duration: 2,
      });
    }, 1000);
  };
  //--------------for button animation ends here
  const buttonClicked = () => {
    handleAddToCart();
    openMessage();
  };
  return (
    <>
      <div className="Col">
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
          {contextHolder}
          <Button
            type="primary"
            style={{ backgroundColor: "blueviolet", height: "3rem" }}
            onClick={buttonClicked}
          >
            Add to Cart
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
