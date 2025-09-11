import { Form, Button, Col, Row } from "react-bootstrap";

export const FormContactComponents = () => {
  return (
    <>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} className="mb-3" controlId="name">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" placeholder="Seu nome..." required />
          </Form.Group>

          <Form.Group as={Col} className="mb-3" controlId="tel">
            <Form.Label>Telefone</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Seu melhor telefone"
              pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}"
              required
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Seu melhor email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="message">
          <Form.Label>Mensagem</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button
          size="sm"
          variant="warning"
          href="https://wa.me/message/ZJURC2JMMG73M1">
          Enviar mensagem
        </Button>
      </Form>
    </>
  );
};
