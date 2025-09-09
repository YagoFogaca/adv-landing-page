import "bootstrap/dist/css/bootstrap.min.css";
import "./style/index.global.css";
import { HeaderComponents } from "./components/header/index.header";
import { BannerComponents } from "./components/banner/index.banner";
import { SectionCardComponents } from "./components/section-card/index.section-card";
import { SectionAboutComponents } from "./components/section-about/index.about";

export const App = () => {
  return (
    <>
      <HeaderComponents />
      <BannerComponents />
      <main>
        <SectionCardComponents />
        <SectionAboutComponents />
      </main>
    </>
  );
};
