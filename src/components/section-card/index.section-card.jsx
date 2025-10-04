import { Col, Row } from "react-bootstrap";
import { PiPoliceCarFill } from "react-icons/pi";
import { FaCannabis, FaBalanceScale } from "react-icons/fa";
import { IoIosWoman } from "react-icons/io";
import { GiPistolGun } from "react-icons/gi";
import { MdAccountBalance } from "react-icons/md";
import { CardComponents } from "../card/index.card";
import "./index.section-card.css";
import { TitleSection } from "../title-section/index.title-section";

export const SectionCardComponents = () => {
  const dates = [
    {
      title: "Flagrante",
      description:
        "Atuação imediata, precisa e estratégica. Entre em contato agora, cada minuto conta.",
      icon: PiPoliceCarFill,
    },
    {
      title: "Lei de Drogas",
      description:
        "Tráfico, associação, uso pessoal… Estratégias eficazes para garantir a melhor defesa em cada caso.",
      icon: FaCannabis,
    },
    {
      title: "Lei Maria da Penha",
      description: "Defesa ética, humana e eficaz para processos sensíveis.",
      icon: IoIosWoman,
    },
    {
      title: "Crimes Contra a Vida (Tribunal do Júri)",
      description:
        "Domínio técnico e oratória afiada para construir uma defesa estratégica e convincente.",
      icon: FaBalanceScale,
    },
    {
      title: "Porte e Posse Ilegal de Armas",
      description:
        "Erros formais, vícios no flagrante e ilegalidades na abordagem podem anular todo o processo.",
      icon: GiPistolGun,
    },
    {
      title: "Execução da Pena",
      description:
        "Progressão de regime, remição, livramento condicional e direitos básicos muitas vezes são ignorados no cárcere.",
      icon: MdAccountBalance,
    },
  ];
  return (
    <>
      <section className="general-session" id="section-activity">
        <TitleSection title={"Áreas de Atuação"} />
        <Row xs={1} md={3} className="g-4">
          {dates.map((date, index) => {
            return (
              <Col>
                <CardComponents key={index} data={date} index={index}>
                  {date.icon ? <date.icon size={72} /> : null}
                </CardComponents>
              </Col>
            );
          })}
        </Row>
      </section>
    </>
  );
};
