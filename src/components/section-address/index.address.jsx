import { TitleSection } from "../title-section/index.title-section";

export const SectionAddress = () => {
  return (
    <>
      <section className="general-session" id="section-address">
        <TitleSection title={"Endereço"} />

        <article className="container-infos">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3116.856379113979!2d-43.34778795717753!3d-21.718727086998527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x989d18feedf9df%3A0xf5347b703d750cbc!2sAv.%20Juiz%20de%20Fora%2C%2074%20-%20Bandeirantes%2C%20Juiz%20de%20Fora%20-%20MG%2C%20Brasil!5e0!3m2!1spt-BR!2sbr!4v1759360617675!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"></iframe>
        </article>
      </section>
    </>
  );
};
