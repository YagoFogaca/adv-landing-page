import "bootstrap/dist/css/bootstrap.min.css";
import "./style/index.global.css";
import { HeaderComponents } from "./components/header/index.header.jsx";
import { BannerComponents } from "./components/banner/index.banner.jsx";
import { SectionCardComponents } from "./components/section-card/index.section-card.jsx";
import { SectionAboutComponents } from "./components/section-about/index.about.jsx";
import { SectionContact } from "./components/section-contact/index.section-contact.jsx";
import { SectionAddress } from "./components/section-address/index.address.jsx";

export const App = () => {
  return (
    <>
      <HeaderComponents />
      <BannerComponents />
      <main>
        <SectionCardComponents />
        <SectionAboutComponents />
        <SectionContact />
        <SectionAddress />
      </main>
    </>
  );
};
