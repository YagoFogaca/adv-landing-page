import { TitleSection } from "../title-section/index.title-section";
import { FormContactComponents } from "../form-contact/index.form-contact";
import "./index.section-contact.css";

export const SectionContact = () => {
  return (
    <>
      <section className="general-session" id="section-contact">
        <TitleSection title={"Fale Conosco Atendimento 24 Horas"} />

        <article className="container-infos container-contact">
          <div className="division-form">
            <h6>Tem alguma dúvida ou precisa de ajuda?</h6>
            <p>Preencha o formulário aqui abaixo</p>
            <FormContactComponents />
          </div>
        </article>
      </section>
    </>
  );
};
