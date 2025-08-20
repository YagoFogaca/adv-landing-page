import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";

// import logo from "../../assets/imgs/logo-banner.png";
import "./index.header.css";
import { ImageComponent } from "../images/index.images";

export const HeaderComponents = () => {
  return (
    <>
      <>
        <Navbar key={"md"} expand={"md"} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="#">
              <ImageComponent
                base={"logo-banner"}
                alt={"Logo escritorio de advocacia"}
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="end">
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Área de atuação</Nav.Link>
                  <Nav.Link href="#action2">Sobre</Nav.Link>
                  <Nav.Link href="#action2">Contato</Nav.Link>
                  <Nav.Link href="#action2">Endereço</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </>
    </>
  );
};
