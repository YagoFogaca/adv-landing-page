import { Card, Col, Row } from "react-bootstrap";

export const CardComponents = ({ data, children }) => {
  return (
    <>
      <Card>
        <Card.Header className="icon-header">{children}</Card.Header>
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text>{data.description}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
