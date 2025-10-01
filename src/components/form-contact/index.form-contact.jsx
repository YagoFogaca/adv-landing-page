import { Form, Button, Col, Row } from "react-bootstrap";
import { FaWhatsapp } from "react-icons/fa";
import "./index.form-contact.css";

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
        <div className="btn-contact">
          <Button
            size="sm"
            variant="warning"
            href="https://wa.me/message/ZJURC2JMMG73M1">
            Enviar mensagem
          </Button>

          <h6>Se preferi ligue ou fale por whatsapp</h6>
          <a href="http://" className="btn-whatsapp">
            <FaWhatsapp />
            (32) 98888-8888
          </a>
        </div>
      </Form>
    </>
  );
};
