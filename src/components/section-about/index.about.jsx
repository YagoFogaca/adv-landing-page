import { Button } from "react-bootstrap";
import { ImageComponent } from "../images/index.images";
import { TitleSection } from "../title-section/index.title-section";
import "./index.about.css";

export const SectionAboutComponents = () => {
  return (
    <>
      <section className="general-session" id="section-about">
        <TitleSection title={"Sobre Flavio Silva"} />

        <article className="info-about">
          <div className="infos">
            <h6>
              Formado pelo UFJF, com sólida vivência prática no sistema de
              justiça.
            </h6>
            <p>
              Atuei diretamente na Delegacia, Justiça Federal, Ministério
              Público e Defensoria Pública. Isso me permite construir defesas
              com inteligência, técnica e, acima de tudo, estratégia.
            </p>
            <p>
              Mais do que advogado, sou um defensor da liberdade, da justiça
              social e dos direitos humanos. Trago comigo a experiência dos
              movimentos sociais, onde aprendi que cada pessoa tem uma história,
              e que ninguém deve ser definido por uma acusação.
            </p>
            <p>
              Não estou aqui para julgar — estou aqui para defender. E defendo
              com garra, ética e compromisso.
            </p>
            <Button
              size="lg"
              variant="warning"
              href="https://wa.me/message/ZJURC2JMMG73M1">
              Fale com um especialista
            </Button>
          </div>

          <ImageComponent
            alt={"Flavio Silva Advogado"}
            base={"exibicao-2"}
            widthParameter="100%"
          />
        </article>
      </section>
    </>
  );
};
