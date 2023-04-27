import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Button, Row } from "react-bootstrap";
import img1 from "./hi1.jpg";

function VendorCard({ product }) {
  return (
    <Container className="p-4">
      <Row md="4">
        <Card>
          <Card.Img variant="top" src={img1} />
          <Card.Body>
            <Card.Title>{product.vendorName}</Card.Title>
            <Card.Text>{product.price}</Card.Text>
            {/* <Button variant="primary">Add to cart</Button> */}
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}
export default VendorCard;
