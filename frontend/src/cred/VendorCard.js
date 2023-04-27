import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Col } from "react-bootstrap";
import img1 from "./hi1.jpg";

function VendorCard({ product }) {
  return (
    <div className="col">
      <Card>
        <Card.Img variant="top" src={img1} />
        <Card.Body>
          <Card.Title>{product.vendorName}</Card.Title>
          <Card.Text>{product.price}</Card.Text>
          {/* <Button variant="primary">Add to cart</Button> */}
        </Card.Body>
      </Card>
    </div>
  );
}
export default VendorCard;
