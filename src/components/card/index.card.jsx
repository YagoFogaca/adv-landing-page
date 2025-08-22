import { Card } from "react-bootstrap";

export const CardComponents = ({ data, index, children }) => {
  return (
    <>
      <Card>
        <Card.Header
          className={`icon-header ${index % 2 === 0 ? "icon-bg" : ""}`}>
          {children}
        </Card.Header>
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text>{data.description}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
