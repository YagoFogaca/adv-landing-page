import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

import "./index.footer.css";

export const FooterComponents = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-contact">
          <h4>Contato</h4>
          <p>Telefone: (32)98888-8888</p>
          <p>Email: flaviosilva.nunes@advg.com</p>
          <p>Endereço: Av. Juiz de Fora, 74, Juiz de Fora - MG, Brasil</p>
        </div>
        <div className="footer-media">
          <h4>Redes socias</h4>
          <a href="" className="link-icon">
            <FaFacebookSquare />
          </a>
          <a href="" className="link-icon">
            <FaTwitterSquare />
          </a>
          <a href="" className="link-icon">
            <FaInstagramSquare />
          </a>
          <a href="" className="link-icon">
            <FaLinkedin />
          </a>
        </div>
      </footer>
    </>
  );
};
