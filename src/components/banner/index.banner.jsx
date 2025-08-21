import { Button } from "react-bootstrap";
import "./index.banner.css";

export const BannerComponents = () => {
  return (
    <>
      <section className="banner">
        <div className="banner-content">
          <h1>Advocacia e Consultoria Jurídica</h1>
          <h2>Compromisso com a Liberdade.</h2>
          <h5>Cada defesa é pessoal, cada causa é única!</h5>
          <Button
            size="lg"
            variant="warning"
            href="https://wa.me/message/ZJURC2JMMG73M1">
            Fale com um especialista
          </Button>
        </div>
      </section>
    </>
  );
};
