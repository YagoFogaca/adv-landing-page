import "bootstrap/dist/css/bootstrap.min.css";
import { HeaderComponents } from "./components/header/index.header";
import { BannerComponents } from "./components/banner/index.banner";
import { SectionCardComponents } from "./components/section-card/index.section-card";

export const App = () => {
  return (
    <>
      <HeaderComponents />
      <main>
        <BannerComponents />
        <SectionCardComponents />
      </main>
    </>
  );
};
