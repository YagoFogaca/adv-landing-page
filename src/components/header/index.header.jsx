import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { ImageComponent } from "../images/index.images";
import "./index.header.css";

export const HeaderComponents = () => {
  return (
    <>
      <>
        <Navbar key="md" expand="md" bg="secondary" data-bs-theme="dark">
          <Container fluid>
            <Navbar.Brand href="#">
              <ImageComponent
                base={"logo-banner"}
                alt={"Logo escritorio de advocacia"}
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
            <Navbar.Offcanvas
              id="offcanvasNavbar-expand-md"
              aria-labelledby="offcanvasNavbarLabel-expand-md"
              placement="end"
              bg="secondary"
              data-bs-theme="dark">
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#section-activity">Área de atuação</Nav.Link>
                  <Nav.Link href="#section-on">Sobre</Nav.Link>
                  <Nav.Link href="#section-contact">Contato</Nav.Link>
                  <Nav.Link href="#section-address">Endereço</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </>
    </>
  );
};
